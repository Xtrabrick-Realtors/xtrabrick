import styled from "styled-components";

export const WhoAreWeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  margin-bottom: -80px;
`;

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 80px; 
  justify-content: center;
  
  @media (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 50px; 
  }
`;

export const IconTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px; 

  & .iconDescription {
      font-size: 22px;
  }


  @media (max-width: 767px) {
    margin-right: 0;
    margin-bottom: 15px;

    & .iconDescription {
      font-size: 16px;
  }
  }
`;

export const DataContainer = styled.div<{font?: any}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 70%;
  margin-top: 25px;
  margin-left: 35px;
  
  & p {
                  font-family: ${({font}) => font};
                  font-weight: 400;
                  font-size: 18px;
                  color: #434343;
                  margin-bottom: 30px;
                  text-align: left;
                  @media (max-width: 767px) {
margin-bottom: 22px;
  }
  font-size: 16px;
                  
  }

  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0px;
  }
`;
