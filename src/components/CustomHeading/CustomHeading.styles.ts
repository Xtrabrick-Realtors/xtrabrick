import { theme } from "@/constants/basetheme";
import styled from "styled-components";

export const CustomHeadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 55px 0px;
`;

export const HeadingSeparator = styled.div`
  height: 2px;
  background-color: #20b2ff;
  width: 57px;
  top: -5px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Heading = styled.p`
  font-size: 28px;
  letter-spacing: 4px;
  color: ${theme.colors.black};
  line-height: 34px;
  text-align: center;
  font-family: ${theme.fonts.lato};
  @media (max-width: 767px) {
    font-size: 20px;
    letter-spacing: 4px;
  }
`;
