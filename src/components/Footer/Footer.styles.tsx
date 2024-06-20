import { theme } from "@/constants/basetheme";
import styled from "styled-components";

interface FontProps {
  fontFamily?: string;
}

export const FooterContainer = styled.div<{ isOpen?: boolean }>`
  width: 100%;
  background-color: #1c1c1c;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  margin-top: 55px;
  margin-bottom: ${({ isOpen = false }) => (isOpen ? "127px" : "0px")};

  @media (max-width: 767px) {
    padding-top: 30px;
    margin-top: 30px;
    margin-bottom: 0px;
  }
`;

export const ContentWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LinksWrapper = styled.div`
  width: 55%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 10px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const FooterLink = styled.div<FontProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  & .heading {
    font-size: 16px;
    font-weight: 700;
    color: ${theme.colors.white};
    margin-bottom: 15px;
    @media (max-width: 767px) {
      font-size: 14px;
      font-family: ${theme.fonts.lato};
    }
  }

  & .link {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 15px;
    color: #dbe9ff;
    @media (max-width: 767px) {
      font-size: 12px;
    }
  }

  p {
    font-family: ${theme.fonts.lato};
  }
`;

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const LogoImage = styled.img`
  margin-top: 10px;
`;

export const ContactItemWrapper = styled.div<FontProps>`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-right: 25px;

  p {
    color: ${theme.colors.white};
    font-family: ${theme.fonts.lato};
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 12px;
    cursor: pointer;

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
`;

export const SocialIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  div {
    margin-right: 35px;
    margin-top: 0px;
    margin-bottom: 20px;
    cursor: pointer;
  }
`;

export const CopyrightWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  border-top: 1px solid #ffffff;
  justify-content: center;
  @media (max-width: 767px) {
    height: 90px;
  }
`;

export const CopyrightText = styled.p<FontProps>`
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.5%;
  line-height: 17px;
  color: ${theme.colors.white};
  width: 80%;

  @media (max-width: 767px) {
    font-size: 12px;
    text-align: center;
  }
`;

export const FixedFooterContainer = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  bottom: ${({ isOpen = false }) => (isOpen ? 0 : "-127px")};
  left: 0;
  width: 100%;
  height: ${({ isOpen = false }) => (isOpen ? "127px" : "0px")};
  transition: all 1s ease-in-out 1s;
  background-color: black;
  z-index: 999999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    height: auto;
    position: relative;
    padding: 10px;
  }
`;

export const FixedFooterText = styled.p`
  font-family: ${theme.fonts.lato};
  font-size: 22px;
  font-weight: 400;
  color: ${theme.colors.white};

  @media (max-width: 767px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const FixedFooterForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const FixedFooterInput = styled.input`
  padding: 10px 20px;
  font-family: ${theme.fonts.lato};
  font-weight: 400;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 15px;
  width: 250px;
  margin: 0 20px;
  height: 40px;

  @media (max-width: 767px) {
    margin: 10px 0;
    width: 80%;
  }
`;

export const FixedFooterButton = styled.button`
  background-color: #0173b0;
  color: ${theme.colors.white};
  width: 174px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fonts.lato};
  font-weight: 400;
  height: 47px;
  margin: 0 20px;
  cursor: pointer;

  @media (max-width: 767px) {
    margin-top: 10px;
  }
`;

export const EnquireButton = styled.div`
  position: fixed;
  left: 10px;
  bottom: 10px;
  padding: 15px 20px;
  background-color: #0173b0;
  cursor: pointer;
  border-radius: 15px;
`;

export const EnquireButtonText = styled.div`
  color: ${theme.colors.white};
  font-size: 18px;
  font-family: ${theme.fonts.lato};
`;

export const CrossIconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: -45px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 55px;
  padding-top: 10px;
  padding-left: 10px;
  background-color: black;
  border-radius: 10px 10px 0px 0px;
  cursor: pointer;
`;
