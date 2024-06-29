import { NextApiRequest, NextApiResponse } from "next";
import formidable, { File } from "formidable";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), "uploads");

// Ensure the upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = formidable({
    uploadDir,
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // 5MB
    filename: (name: string, ext: any, part: any) => `${name}-${Date.now()}${ext}`,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Error parsing form data", details: err });
    }

    const { fname, lname, email, phone, address, position } = fields;
    const resumes = Array.isArray(files.resume)
      ? files.resume
      : [files.resume].filter(Boolean);

    const attachments = resumes.map((resume: File | undefined) => ({
      filename: resume?.originalFilename || "resume.pdf",
      path: resume?.filepath,
    }));

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: "Job Application",
      text:
      `First Name: ${fname}
       Last Name: ${lname}
       Email: ${email}
       Phone: ${phone}
       Address: ${address}
       Position: ${position}
            `,
      attachments,
    };

    try {
      await transporter.sendMail(mailOptions);

      // Delete the uploaded files
      for (const resume of resumes) {
        if (resume) {
          fs.unlink(resume.filepath, (unlinkErr) => {
            if (unlinkErr) {
              console.error(
                `Failed to delete file: ${resume.filepath}`,
                unlinkErr
              );
            }
          });
        }
      }

      res.status(200).json({ message: "Application submitted successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error submitting application", details: error });
    }
  });
}
