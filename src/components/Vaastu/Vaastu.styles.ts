import styled from 'styled-components';
import { theme } from '@/constants/basetheme';

interface ContainerProps {
 columns: number;
 removeOutline?: boolean
}

export const Container = styled.div<ContainerProps>`
 padding: ${({ columns }) => (columns === 3 ? '30px 45px 0px 45px' : '30px 45px')};
 display: grid;
 grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
 grid-template-rows: repeat(2, auto);
 gap: 50px;
 border-radius: 20px;
 border: ${({removeOutline = false}) => removeOutline ? '0px': '1px'} solid black;
 width: 92%;
 margin: 25px auto;

 @media (max-width: 768px) {
 grid-template-columns: 1fr;
 padding: 20px;
 gap: 30px;
 }
`;

export const ItemContainer = styled.div<ContainerProps>`
 display: flex;
 flex-direction: column;
 margin-bottom: ${({ columns }) => (columns === 3 ? 0 : 20)}px;

 @media (max-width: 768px) {
 margin-bottom: 20px; 
 }
`;

export const ItemHeader = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
`;

export const ItemTitle = styled.p`
 margin-left: 45px;
 font-family: ${theme.fonts.lato};
 font-weight: 700;
 font-size: 20px;

 @media (max-width: 768px) {
 margin-left: 20px;
 font-size: 18px; 
 }
`;

export const ItemDescription = styled.p`
 font-family: ${theme.fonts.lato};
 font-weight: 400;
 font-size: 18px;
 width: 75%;
 margin-top: 10px;

 @media (max-width: 768px) {
 font-size: 16px; 
 width: 100%; 
 }
`;

export const InfoList = styled.ul`
 margin-top: 4px;
`;

export const InfoItem = styled.li`
 font-family: ${theme.fonts.lato};
 font-weight: 400;
 font-size: 18px;
 margin-left: 17px;
 margin-top: 2px;

 @media (max-width: 768px) {
 font-size: 16px;
 margin-left: 10px;
 }
`;


export const VaastuContainer = styled.div`
 width: 100%;
 padding: 40px;
 display: flex;
 justify-content: center;

 @media (max-width: 768px) {
 flex-direction: column;
 align-items: center;
 padding: 20px;
 }
`;

export const ImageWrapper = styled.div`
 display: flex;
 justify-content: center;

 img {
 width: 586px;
 height: 439px;

 @media (max-width: 768px) {
 width: 100%;
 height: 100%;
 max-height: auto;
 }
 }
`;

export const DescriptionContainer = styled.div`
 display: flex;
 flex-direction: column;
 height: 439px;
 justify-content: space-between;
 width: 50%;
 margin-left: 75px;

 @media (max-width: 768px) {
 width: 100%;
 margin-left: 0;
 margin-top: 20px;
 height: auto;
 margin-bottom: 10px;
 }
`;

export const Text = styled.p`
 font-size: 20px;
 font-family: ${theme.fonts.lato};

 @media (max-width: 768px) {
 font-size: 18px;
 margin-bottom: 18px;
 }
`;

export const Button = styled.div`
 cursor: pointer;
 height: 47px;
 border-radius: 20px;
 width: 193px;
 background-color: #0173b0;
 display: flex;
 justify-content: center;
 align-items: center;

 @media (max-width: 768px) {
 width: 100%;
 height: 50px;
 }
`;

export const ButtonText = styled.p`
 font-family: ${theme.fonts.lato};
 font-weight: 400;
 font-size: 16px;
 color: ${theme.colors.white};

 @media (max-width: 768px) {
 font-size: 14px;
 }
`;