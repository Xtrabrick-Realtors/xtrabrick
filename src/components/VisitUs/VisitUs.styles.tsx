import styled from "styled-components";

export const VisitUsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 125px 50px 125px;

  @media (max-width: 767px) {
    padding: 0 20px; 
    margin-top: 50px; 
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 45px;

  @media (max-width: 767px) {
    flex-direction: column; 
    align-items: flex-start; 
    margin-top: 20px; 
  }
`;

export const MapImage = styled.img`
  width: 674px;
  height: 345px;
  margin-right: 75px;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const TextParagraph = styled.p<{font?: any}>`
  font-family: ${({ font }) => font};
  font-weight: 400;
  font-size: 18px;
  color: #434343;
  margin-bottom: 45px;

  @media (max-width: 767px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const AddressParagraph = styled.p<{font?: any}>`
  font-family: ${({ font }) => font};
  font-weight: 700;
  font-size: 18px;
  color: #000000;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
