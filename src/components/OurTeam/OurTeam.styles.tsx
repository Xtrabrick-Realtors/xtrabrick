import { theme } from "@/constants/basetheme";
import styled from "styled-components";

export const OurTeamContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 align-items: center;
 justify-content: center;
 @media (max-width: 767px) {
 padding: 0px 10px;
 margin-bottom: -40px;
 }

`;

export const TeamMembersWrapper = styled.div`
 width: 85%;
 display: flex;
 flex-wrap: wrap;
 justify-content: space-between;
 gap: 40px;

 @media (max-width: 767px) {
 justify-content: center;
 width: 100%;
 gap: 0px;
 }
`;

export const TeamMemberWrapper = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 @media (max-width: 767px) {
 max-width: 165px;
 margin-top: 15px;
 }
 
`;

export const TeamMemberImage = styled.img`
 width: 352px;
 height: 390px;
 margin: 0 auto;

 @media (max-width: 767px) {
 width: 145px; 
 height: 145px;
 }
`;

export const TeamMemberName = styled.p`
 font-size: 20px;
 font-weight: 700;
 margin-top: 10px;
 font-family: ${theme.fonts.lato};


 @media (max-width: 767px) {
 text-align: center;
 font-size: 20px;
 }
`;

export const TeamMemberPosition = styled.p`
 font-size: 18px;
 font-weight: 400;
 margin-top: 8px;
 margin-bottom: 6px;
 font-family: ${theme.fonts.lato};


 @media (max-width: 767px) {
 text-align: center;
 font-size: 15px;
 margin: 8px auto;
 }
`;

export const TeamMemberCompany = styled.p`
 font-size: 16px;
 font-weight: 500;
 margin-top: 5px;
 font-family: ${theme.fonts.lato};
 
 color: #20b2ff;

 @media (max-width: 767px) {
 text-align: center;
 font-size: 15px; 
 }
`;