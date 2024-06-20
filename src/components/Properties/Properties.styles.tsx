import styled from "styled-components";
import { theme } from "@/constants/basetheme";

export const PropertiesWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

export const BannerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0 0 20px 20px;
`;

export const NavigatorWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-between;
  margin: 30px auto;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;

    & p {
      margin: 10px;
    }
  }
`;

export const NavigatorLink = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: ${theme.fonts.lato};
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  width: 88%;
  margin: 0 auto;
`;

export const AmenitiesWrapper = styled.div`
  width: 90%;
  padding: 40px 40px 0;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const AmenityItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const AmenityText = styled.p`
  font-size: 18px;
  font-family: ${theme.fonts.lato};
  font-weight: 400;
  margin-top: 14px;
`;

export const CommercialWrapper = styled.div`
  width: 90%;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  min-height: 300px;
  margin-bottom: 65px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const IconWrapper = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CommercialTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CommercialText = styled.p`
  font-size: 24px;
  font-family: ${theme.fonts.lato};
  font-weight: lighter;
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 25px;
  }
`;

export const LocationWrapper = styled.div`
  width: 90%;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  min-height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    padding: 20px 20px 0px 20px;
  }
`;

export const LocationText = styled.p`
  margin-bottom: 50px;
  font-size: 22px;
  font-family: ${theme.fonts.lato};
  font-weight: 400;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

export const LocationBenefitsWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const BenefitItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`;

export const BenefitName = styled.p`
  font-size: 18px;
  font-family: ${theme.fonts.lato};
  font-weight: 400;
  color: #434343;
  margin-bottom: 25px;
  margin-top: 15px;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const BenefitTime = styled.p`
  font-size: 18px;
  font-family: ${theme.fonts.lato};
  font-weight: 700;
  color: #909090;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
