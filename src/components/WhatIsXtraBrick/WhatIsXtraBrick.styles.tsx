import styled from "styled-components";

export const WhatIsXtraBricWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 135px;

  & .iconDescription {
    font-size: 22px;
  }

  & .dataContainer {
    display: flex;
    flex-direction: row;
    align-items: center; /* Center-align items vertically */
    justify-content: space-between;
    width: 100%;
    margin-top: 0px;
  }

  & .description {
    font-size: 18px;
    
  }

  & .textWrapper {
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center-align text horizontally */
    margin-right: 20px;

  }

  & .iconWrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    width: 50%;
    justify-content: center;
    align-items: center; /* Center-align icons vertically */
    text-align: center;
    margin-top: -20px;
  }

  @media (max-width: 767px) {
    width: 100%;

    & .dataContainer {
      flex-direction: column;
      align-items: center;
      margin-top: 0px;
    }

    & .iconDescription {
      font-size: 16px;
    }

    & .textWrapper {
      width: 100%;
      margin-right: 0;
      
    }

    & .description {
    font-size: 16px;
    
  }

    & .iconWrapper {
      width: 100%;
      justify-content: center;
      margin-top: 10px;
    }
  }

  @media (min-width: 768px) {
    & .textWrapper {
      margin-right: 40px;
    }

    & .iconWrapper {
      justify-content: flex-end;
    }
  }
`;
