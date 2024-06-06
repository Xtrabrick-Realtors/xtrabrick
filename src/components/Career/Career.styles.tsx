// Career.styles.ts

import { theme } from "@/constants/basetheme";
import styled from "styled-components";

export const CareerContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 89px;

  @media screen and (max-width: 768px) {
    margin-top: 50px; // Adjust margin for smaller screens
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
    flex: 1; // Change flex to take full width on smaller screens
    margin-bottom: 20px; // Add margin to create space between filters and job cards
    border-radius: 0; // Remove border radius to match job card layout
    padding: 20px; // Adjust padding for smaller screens
  }
`;

export const FilterCategory = styled.p`
  font-family: ${theme.fonts.lato};
  font-size: 20px;
  font-weight: 700;
  margin: 15px 0;

  @media screen and (max-width: 768px) {
    margin: 10px 0; // Adjust margin for smaller screens
  }
`;

export const FilterItem = styled.p`
  font-family: ${theme.fonts.lato};
  font-size: 18px;
  font-weight: 400;
  margin: 15px 0;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin: 10px 0; // Adjust margin for smaller screens
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
    grid-template-columns: 1fr; // Change to single column layout for smaller screens
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
    width: 100%; // Adjust width for smaller screens
    max-width: 400px; // Limit maximum width for smaller screens
    margin: 0 auto; // Center align job cards on smaller screens
  }
`;

export const JobsWrapper = styled.div`
  display: flex;
  height: 567px;
  width: 100%;
  padding: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const JobsListingWrapper = styled.div`
  flex: 0.75;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
