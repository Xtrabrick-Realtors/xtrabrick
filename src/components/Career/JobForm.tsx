import { theme } from "@/constants/basetheme";
import React, { useState } from "react";
import { Button, Form, Input } from "../ContactUs/ContactUs.styles";
import { CloseButton, ModalContent, ModalOverlay } from "./Career.styles";

const JobForm: React.FC<{ closeModal?: () => void; job?: string }> = ({
  closeModal,
  job,
}) => {
  const [formData, setFormData] = useState<{
    fname: string;
    lname: string;
    email: string;
    phone: string;
    address: string;
    position: string;
    resume: File | null;
  }>({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    position: job || "",
    resume: null,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [resumeName, setResumeName] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "resume" && files) {
      console.log(files, "files");
      setFormData({ ...formData, resume: files[0] });
      setResumeName(files?.[0]?.name);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "resume" && formData.resume) {
        console.log(formData.resume, "resume");
        data.append(key, formData.resume);
      } else {
        data.append(key, (formData as any)[key]);
      }
    });
    setLoading(true);
    try {
      const response = await fetch("/api/job-application", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setLoading(false);
        alert("Application submitted successfully!");
        if (closeModal) closeModal();
      } else {
        setLoading(false);
        alert("Failed to submit application.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      alert("Error submitting application.");
    }
  };

  return (
    <ModalOverlay onClick={closeModal}>
      <ModalContent onClick={(e: any) => e.stopPropagation()} width={"767px"}>
        <p
          style={{
            textAlign: "center",
          }}
        >
          Recruitment Application Form
        </p>
        <CloseButton onClick={closeModal}>×</CloseButton>
        <Form onSubmit={handleSubmit}>
          <p style={{ fontSize: 14, marginBottom: -14 }}>Full Name*</p>
          <div style={{ marginTop: 5 }}>
            <Input
              type="text"
              name="fname"
              placeholder="First Name"
              value={formData.fname}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="lname"
              placeholder="Last Name"
              value={formData.lname}
              onChange={handleChange}
              required
            />
          </div>
          <p style={{ fontSize: 14, marginBottom: 0, marginTop: -4 }}>Email*</p>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <p style={{ fontSize: 14, marginBottom: 0 }}>Contact Number*</p>
          <Input
            type="text"
            name="phone"
            placeholder="Contact number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <p style={{ fontSize: 14, marginBottom: 0 }}>Address*</p>
          <Input
            type="text"
            name="address"
            placeholder="Full Address, City, State, Pincode "
            value={formData.address}
            required
            onChange={handleChange}
          />
          <p style={{ fontSize: 14, marginBottom: 0 }}>
            What position are you applying for?*
          </p>
          <Input
            type="text"
            name="position"
            placeholder="Position"
            disabled
            value={formData.position}
            onChange={handleChange}
            required
          />
          <p style={{ fontSize: 14, marginBottom: -12 }}>Upload Resume * </p>
          <p style={{ fontSize: 14, marginBottom: 5 }}>Only PDF format</p>

          <label htmlFor="resume" style={{ width: "100%", marginBottom: 5 }}>
            <div
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "30px",
                border: "1px solid rgba(0, 0, 0, 0.2)",
                margin: "5px 0px",
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  fontFamily: theme.fonts.lato,
                  color: "rgba(0, 0, 0, 0.6)",
                  textAlign: "center",
                }}
              >
                {resumeName ? resumeName : "Upload your files here"}
              </p>
            </div>

            <Input
              type="file"
              name="resume"
              accept="application/pdf"
              className="pdf"
              id="resume"
              onChange={handleChange}
              required
            />
          </label>

          <Button type="submit">{loading ? "Submitting..." : "Submit"}</Button>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default JobForm;
