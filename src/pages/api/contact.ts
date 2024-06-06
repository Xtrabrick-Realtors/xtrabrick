import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
 if (req.method === 'POST') {
 const { name, phone, email, inquiryType, message } = req.body;
 const transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
 user: process.env.EMAIL_USER,
 pass: process.env.EMAIL_PASS,
 },
 });
 const mailOptions = {
 from: process.env.EMAIL_USER,
 to: process.env.RECEIVER_EMAIL,
 subject: 'Contact',
 text: `
 Name: ${name}
 Phone Number: ${phone}
 Email: ${email}
 Inquiry Type: ${inquiryType}
 Message: ${message}
 `,
 };

 try {
 await transporter.sendMail(mailOptions);
 res.status(200).json({ message: 'Enquiry submitted successfully' });
 } catch (error) {
 res.status(500).json({ error: 'Error submitting enquiry', details: error });
 }
 } else {
 res.status(405).json({ error: 'Method not allowed' });
 }
}