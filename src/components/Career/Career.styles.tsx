import { theme } from "@/constants/basetheme";
import styled from "styled-components";

export const CareerContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const BannerImageWrapper = styled.div`
  width: 100%;
`;

export const FilterContainer = styled.div`
  flex: 0.25;
  background-color: #f4f4f4;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;

  h2 {
    font-family: ${theme.fonts.lato};
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 768px) {
    flex: 1;
    margin-bottom: 20px;
    border-radius: 0;
    padding: 20px;
  }
`;

export const FilterCategory = styled.p`
  font-family: ${theme.fonts.lato};
  font-size: 20px;
  font-weight: 700;
  margin: 15px 0;

  @media screen and (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const FilterItem = styled.p`
  font-family: ${theme.fonts.lato};
  font-size: 18px;
  font-weight: 400;
  margin: 15px 0;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const JobContainer = styled.div`
  flex: 0.75;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 20px;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const JobCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 247px;
  width: 348px;
  border-radius: 20px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  justify-content: space-evenly;
  padding: 10px 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const JobsWrapper = styled.div`
  display: flex;
  // height: 650px;
  width: 100%;
  padding: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const JobsListingWrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 20px;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Job = styled.div`
  display: flex;
  flex-direction: column;
  height: 247px;
  width: 348px;
  border-radius: 20px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  justify-content: space-evenly;
  margin: 0 auto;
  padding: 10px 20px;

  @media screen and (max-width: 768px) {
    width: 315px;
    padding: 10px 10px;
    margin-top: 10px;
  }
`;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999990;

  @media (max-width: 768px) {
    align-items: flex-end;
  }
`;

export const ModalContent = styled.div<{ height?: string; width?: string }>`
  background: #fff;
  padding: 30px;
  max-width: ${({ width = "500px" }) => width};
  width: 100%;
  border-radius: 10px;
  position: relative;
  max-height: ${({ height = "75vh" }) => height};
  overflow: auto;

  h3 {
    font-size: 16px;
    font-family: ${theme.fonts.lato};
    margin: 15px 0px;
    font-weight: 400;
  }

  ol {
    padding-left: 20px;
    font-size: 16px;
    font-family: ${theme.fonts.lato};
    font-weight: 400;
    margin: 15px 0px;
  }
  p {
    font-size: 16px;
    font-family: ${theme.fonts.lato};
    margin: 15px 0px;
    font-weight: 400;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;
