import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React, { useState } from "react";
import Image from "next/image";
import CustomHeading from "@/components/CustomHeading/CustomHeading";
import { CONTACT_US, SOCIAL_ICONS } from "@/constants";
import {
  Container,
  ContentWrapper,
  LeftWrapper,
  InfoText,
  Form,
  Input,
  Select,
  Textarea,
  Button,
  RightWrapper,
  ContactInfoCard,
  ContactItem,
  SocialIconCard,
  IconWrapper,
  IconText,
} from "./ContactUs.styles";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      alert('Enquiry Submitted Successfully')
      setFormData({
        name: "",
        phone: "",
        email: "",
        inquiryType: "",
        message: "",
      });
    } else {
    alert('Enquiry Submission failed, Please try again!')
    }
  };

  return (
    <Container>
      <Header activeTab="Contact Us" />
      <Image
        src={"/assets/images/contactUsBanner.png"}
        alt={"About Us"}
        layout={"responsive"}
        objectFit={"cover"}
        width={1920}
        height={1080}
        loading={"eager"}
      />
      <CustomHeading heading="Enquiry Form" />
      <ContentWrapper>
     
        <LeftWrapper>
          <InfoText>
            Get in touch to schedule a visit to your new house. Kindly fill this
            form with your details about your enquiries and we would respond
            your enquiry shortly.
          </InfoText>
          <InfoText>Working hours: (Mon - Sat) 10am – 7 pm</InfoText>

          <Form onSubmit={handleSubmit}>
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <Select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
            >
              <option value="">Select Inquiry Type</option>
              <option value="1 BHK Flat / Simplex">1 BHK Flat / Simplex</option>
              <option value="2 BHK Flat / Simplex">2 BHK Flat / Simplex</option>
              <option value="3 BHK Flat / Simplex">3 BHK Flat / Simplex</option>
              <option value="Duplex">Duplex</option>
              <option value="Flats / Residential Property">
                Flats / Residential Property
              </option>
              <option value="Shops / Commercial property">
                Shops / Commercial property
              </option>
              <option value="Clinics / Commercial property">
                Clinics / Commercial property
              </option>
              <option value="Showroom / Commercial property">
                Showroom / Commercial property
              </option>
              <option value="Commercial property">Commercial property</option>
              <option value="Developer plots / Non Agricultural Plots">
                Developer plots / Non Agricultural Plots
              </option>
              <option value="Loan Services">Loan Services</option>
              <option value="Vaastu Shastra Consultation">
                Vaastu Shastra Consultation
              </option>
              <option value="Location of Property">Location of Property</option>
            </Select>
            <Textarea
              name="message"
              placeholder="Please write your requirements"
              rows={8}
              value={formData.message}
              onChange={handleChange}
            ></Textarea>
            <Button type="submit">Send</Button>
          </Form>
        </LeftWrapper>
        <RightWrapper>
          <ContactInfoCard>
            {CONTACT_US?.map((item, index) => (
              <ContactItem key={index}>
                <IconWrapper>
                  <item.icon fill="#0173B0" />
                </IconWrapper>
                <IconText>
                  <p>{item.heading}</p>
                  <p>{item.info}</p>
                </IconText>
              </ContactItem>
            ))}
          </ContactInfoCard>
          <SocialIconCard>
            {SOCIAL_ICONS?.map((item, index) => (
              <ContactItem
                key={index}
                onClick={() => {
                  if (window && typeof window !== undefined) {
                    window.open(item.link);
                  }
                }}
              >
                <IconWrapper>
                  <item.icon fill="#0173B0" />
                </IconWrapper>
                <IconText>
                  <p>{item.heading}</p>
                  <p>{item.info}</p>
                </IconText>
              </ContactItem>
            ))}
          </SocialIconCard>
        </RightWrapper>
      </ContentWrapper>
      <Footer />
    </Container>
  );
};

export default ContactUs;