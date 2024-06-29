import styled from "styled-components";
import { theme } from "@/constants/basetheme";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

export const ContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const LeftWrapper = styled.div`
  flex: 0.7;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 100%;
  padding: 30px;

  @media (max-width: 767px) {
    padding: 15px;
  }
`;

export const InfoText = styled.p`
  font-size: 18px;
  font-family: ${theme.fonts.lato};
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 30px;

  @media (max-width: 767px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  & > div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px) {
      flex-direction: column;
    }
  }

  & > div > input {
    flex: 0.48;
    padding: 15px;
    border-radius: 40px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 20px 0;

    @media (max-width: 767px) {
      width: 100%;
      margin: 10px 0;
    }
  }
  & .pdf {
    display: none;
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 5px 0px;

  @media (max-width: 767px) {
    margin: 10px 0;
  }
  &:disabled {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const Select = styled.select`
  width: 100%;
  border-radius: 30px;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 20px 0;

  @media (max-width: 767px) {
    margin: 10px 0;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 10px 0;
  padding: 20px;

  @media (max-width: 767px) {
    margin: 10px 0;
  }
`;

export const Button = styled.button`
  border-radius: 20px;
  background-color: #0173b0;
  border: none;
  outline: none;
  padding: 12px 30px;
  color: ${theme.colors.white};
  cursor: pointer;
  margin-top: 5px;
`;

export const RightWrapper = styled.div`
  flex: 0.3;
  border-radius: 20px;
  height: 100%;
  margin-left: 100px;

  @media (max-width: 767px) {
    margin-left: 0;
    margin-top: 30px;
  }
`;

export const ContactInfoCard = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 10px 20px;
  margin-bottom: 25px;

  @media (max-width: 767px) {
    margin-bottom: 25px;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 25px 0;

  @media (max-width: 767px) {
    margin: 15px 0;
  }
`;

export const SocialIconCard = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 10px 20px;
`;

export const IconWrapper = styled.div`
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  margin-right: 35px;
`;

export const IconText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  p:first-child {
    font-family: ${theme.fonts.lato};
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 4px;
  }

  p:last-child {
    font-family: ${theme.fonts.lato};
    font-weight: 700;
    font-size: 18px;
  }
`;
