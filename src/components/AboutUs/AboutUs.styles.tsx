import { theme } from "@/constants/basetheme";
import styled from "styled-components";

export const AboutUsContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 590px; 
  padding-top: 75px; 
  margin-top: 75px;
  margin-bottom: -30px;

  @media (max-width: 767px) {
    height: auto;
    padding-top: 27px;
    margin-top: 50px;
    margin-bottom: -100px; 
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  & img {
    border-radius: inherit;
    object-fit: cover;
  }
`;

export const LogoContainer = styled.div`
  height: 326px;
  width: 326px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;

  @media (max-width: 767px) {
    height: 94px;
    width: 90px;
    border-radius: 20px;
    margin-bottom: 10px; 
    margin-left: 10px;
  }

  & .logo {
    @media (max-width: 767px) {
      width: 60px;
      height: 28px;
    }
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 140px;

  @media (max-width: 767px) {
    margin-left: 12px;
  }
`;

export const AboutUsHeading = styled.h2`
  font-weight: 700;
  font-size: 32px;
  color: #20b2ff;
  margin-bottom: 15px;
  font-family: ${theme.fonts.lato};

  @media (max-width: 767px) {
    font-size: 16px;
    margin-bottom: 6px; 
  }
`;

export const XtraBrickRealtors = styled.p`
  font-weight: 400;
  font-size: 22px;
  color: #ffffff;
  margin-bottom: 20px;
  font-family: ${theme.fonts.lato};

  @media (max-width: 767px) {
    font-size: 10px;
    margin-bottom: 6px;
    font-family: ${theme.fonts.lato};
  }
`;

export const ExperienceText = styled.p<{ color: string; isBold?: boolean }>`
  font-weight: ${({ isBold }) => (isBold ? 700 : 400)};
  font-size: 22px;
  color: ${({ color }) => color};
  margin-top: ${({ isBold }) => (isBold ? "5px" : "0")};
  font-family: ${theme.fonts.lato};

  @media (max-width: 767px) {
    font-size: 10px;
    margin-top: ${({ isBold }) => (isBold ? "3px" : "0")};
  }
`;

export const AddressText = styled.p`
  margin-top: 10px;
  font-weight: 700;
  font-size: 22px;
  color: #ffffff;
  font-family: ${theme.fonts.lato};
  margin-top: 125px;

  @media (max-width: 767px) {
    margin-top: 10px;
    font-size: 10px;
  }
`;