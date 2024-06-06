// Header.styles.tsx
import { theme } from "@/constants/basetheme";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 89px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  overflow: visible;
  position: fixed;
  top: 0;
  background-color: #ffffff;
  z-index: 9999;

  @media (max-width: 767px) {
    padding: 0 10px;
  }
`;

export const HeaderItemsContainer = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: row;
  gap: ${({ gap }) => (gap ? gap : "20px")};
  flex-wrap: wrap;
  position: relative;
  @media (max-width: 767px) {
    gap: 10px;
  }
`;

export const HeaderItemWrapper = styled.div`
  position: relative;

  &:hover > div {
    display: flex;
  }
`;

export const HeaderItem = styled.p<{ active?: boolean }>`
  color: ${({ active }) => (active ? "#0173B0" : theme.colors.black)};
  font-size: 16px;
  letter-spacing: 0.05rem;
  font-weight: 400;
  cursor: pointer;
  font-family: ${theme.fonts.lato};

  &:hover {
    color: #0173b0;
  }
  @media (max-width: 1062px) {
    display: none;
  }
`;

export const SearchIconWrapper = styled.div`
  height: 42px;
  width: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 4px;
`;

export const SearchInputWrapper = styled.div<{ isSearchVisible: boolean }>`
  display: flex;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding-right: 3px;
  width: ${({ isSearchVisible }) => (isSearchVisible ? "250px" : "42px")};
  transition: width 0.3s ease-in-out;
  overflow: hidden;
  position: relative;

  @media (max-width: 767px) {
    width: ${({ isSearchVisible }) => (isSearchVisible ? "80px" : "42px")};
  }
`;

export const SearchInput = styled.input`
  height: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  flex-grow: 1;
  font-family: ${theme.fonts.lato};
  padding-left: 15px;
`;

export const PhoneNumberWrapper = styled.div`
  width: 186px;
  height: 42px;
  border-radius: 15px;
  background-color: #0173b0;
  border: 1px solid #0173b0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
  cursor: pointer;
  gap: 10px;
  &:hover {
    background-color: #D9D9D9;
    border: 1px solid #9FDEFF;
    .phoneIcon {
      fill: #0173B0 !important;
    }
    .phoneText {
      color: #0173B0 !important;
    }
  }

  @media (max-width: 767px) {
    width: 60px;
    height: 42px;
    margin: 0px 5px;
  }
`;

export const MenuIconWrapper = styled.div`
  height: 42px;
  width: 60px;
  border-radius: 15px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0px 5px;

  @media (max-width: 767px) {
    height: 42px;
    width: 42px;
  }
`;

export const PhoneNumberText = styled.p`
  color: ${theme.colors.white};
  font-size: 18px;
  letter-spacing: 0.05rem;
  font-weight: 400;
  font-family: ${theme.fonts.lato};
  @media (max-width: 767px) {
    display: none;
  }
`;

export const DropdownContainer = styled.div`
  position: absolute;
  padding: 25px 25px 10px 25px;
  top: 100%;
  left: -10px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: none;
  flex-direction: column;
  width: max-content;
  border-radius: 8px;
`;

export const MenuDropdownContainer = styled.div`
  position: absolute;
  padding: 25px;
  top: 0;
  right: 10px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: none;
  flex-direction: column;
  width: max-content;
  border-radius: 8px;
`;
export const DropdownItem = styled.p<{subLink?: boolean}>`
  cursor: pointer;
  color: ${theme.colors.black};
  font-family: ${theme.fonts.lato};
  text-decoration: none;
  font-size: 16px;
  margin-bottom: 10px;
  &:hover {
    color: #0173b0;
  }
`;

export const MenuDropdownItem = styled.p<{subLink?: boolean}>`
  cursor: pointer;
  color: ${theme.colors.black};
  font-family: ${theme.fonts.lato};
  font-weight:  ${({subLink = false}) => subLink ? 400 : 700};
  text-decoration: none;
  font-size: ${({subLink = false}) => subLink ? '14px' : '16px'};
  margin-top: ${({subLink = false}) => subLink ? '0px' : '20px'};
  margin-bottom:  ${({subLink = false}) => subLink ? '10px' : '15px'};
  &:hover {
    color: #0173b0;
  }
`;

export const SearchDropdownContainer = styled.div<{ isSearchVisible: boolean }>`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: ${({ isSearchVisible }) => (isSearchVisible ? "block" : "none")};
  flex-direction: column;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  border-radius: 8px;
  padding: 20px;
  max-width: 252px;

`;

export const MenuhDropdownContainer = styled.div<{ isSearchVisible: boolean }>`
  position: absolute;
  top: calc(100% + 10px);
  right: 0px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: ${({ isSearchVisible }) => (isSearchVisible ? "block" : "none")};
  flex-direction: column;
  width: 100%;
  max-height: 450px;
  overflow-y: auto;
  border-radius: 8px;
  padding: 0px 20px;
  max-width: 252px;

`;

export const SearchContainer = styled.div`
  position: relative;
`;
