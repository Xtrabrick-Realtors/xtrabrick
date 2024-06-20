import React, { useState } from "react";
import Link from "next/link";
import {
  FooterContainer,
  ContentWrapper,
  LinksWrapper,
  FooterLink,
  ContactInfoWrapper,
  LogoImage,
  ContactItemWrapper,
  SocialIconsWrapper,
  CopyrightWrapper,
  CopyrightText,
  FixedFooterContainer,
  FixedFooterText,
  FixedFooterForm,
  FixedFooterInput,
  FixedFooterButton,
  EnquireButton,
  EnquireButtonText,
  CrossIconWrapper,
} from "./Footer.styles";
import { CONTACT_INFO, FOOTER_LINKS, SOCIAL_LINKS } from "@/constants";
import { theme } from "@/constants/basetheme";
import CrossIcon from "../../../public/assets/svg/CrossIcon";
import useIsMobile from "@/hooks/useIsMobile";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [open, setOpen] = useState<boolean>(false);
  const isMobile = useIsMobile();
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Enquiry Submitted Successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
        });
      } else {
        alert("Error Submitting Enquiry, Please try again!");
      }
    } catch (error) {
      alert("Error Submitting Enquiry, Please try again!");
    }
  };

  return (
    <FooterContainer isOpen={open && !isMobile}>
      <ContentWrapper>
        <LinksWrapper>
          {FOOTER_LINKS.map((item, index) => (
            <FooterLink key={index}>
              <p className="heading">{item.heading}</p>
              {item.links.map((link, i) => (
                <Link href={link?.link} key={i + index}>
                  <p style={{ fontWeight: 400 }} className={"link"}>
                    {link.name}
                  </p>
                </Link>
              ))}
            </FooterLink>
          ))}
        </LinksWrapper>

        <ContactInfoWrapper>
          <LogoImage
            src="/assets/images/Logo.png"
            alt="XTRABRICK"
            width={207}
            height={116}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            {CONTACT_INFO.map((item, index) => (
              <ContactItemWrapper key={index}>
                <p>{item.heading}</p>
                <div>
                  {item.data.map((info, i) => (
                    <p key={index + i} style={{ color: "#DBE9FF" }}>
                      {info}
                    </p>
                  ))}
                </div>
              </ContactItemWrapper>
            ))}
          </div>
          <SocialIconsWrapper>
            {SOCIAL_LINKS.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  if (typeof window !== "undefined") window.open(item.link);
                }}
              >
                <item.icon height={20} width={20} />
              </div>
            ))}
          </SocialIconsWrapper>
        </ContactInfoWrapper>
      </ContentWrapper>

      <CopyrightWrapper>
        <CopyrightText fontFamily={theme.fonts.lato}>
          2022 © xtrabrick. All rights reserved by VIGHNAHATRA AND COMPANY
        </CopyrightText>
      </CopyrightWrapper>
      {/* fixed bottom bar */}
      {!open && !isMobile ? (
        <EnquireButton
          onClick={() => {
            setOpen(true);
          }}
        >
          <EnquireButtonText>Enquire Now</EnquireButtonText>
        </EnquireButton>
      ) : (
        <FixedFooterContainer isOpen={open}>
          {!isMobile && (
            <CrossIconWrapper
              onClick={() => {
                setOpen(false);
              }}
            >
              <CrossIcon />
            </CrossIconWrapper>
          )}

          <FixedFooterText>
            Do we have everything you&apos;re looking for?
          </FixedFooterText>
          <FixedFooterForm onSubmit={handleSubmit}>
            <FixedFooterInput
              type="text"
              placeholder="Enter Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <FixedFooterInput
              type="email"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <FixedFooterInput
              type="tel"
              placeholder="Enter Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <FixedFooterButton type="submit">Get a Call Back</FixedFooterButton>
          </FixedFooterForm>
        </FixedFooterContainer>
      )}
    </FooterContainer>
  );
};

export default Footer;
