import { theme } from "@/constants/basetheme";
import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 44px;
  overflow: auto;

  @media (max-width: 767px) {
    padding: 0px 22px;
    margin: 0px 25px;
  }
`;

export const CategoryListWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 767px) {
    justify-content: flex-start;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

export const CategoryItemWrapper = styled.div`
  display: flex;
  width: 406px;
  /* height: 350px; */
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-shrink: 0;
  margin: 0px 12px;

  @media (max-width: 767px) {
    width: 187px;
  }
`;

export const CategoryItemTitle = styled.p`
  font-family: ${theme.fonts.lato};
  font-size: 20px;
  letter-spacing: 0.5%;
  font-weight: 700;
  line-height: 29px;
`;

export const CategoryItemLocation = styled.p`
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5%;
  line-height: 24px;
  margin: 10px 0px;
  font-family: ${theme.fonts.lato};
`;

export const CategoryItemType = styled.p`
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.5%;
  color: #20b2ff;
  font-family: ${theme.fonts.lato};
`;

export const CategoryItemButton = styled.div`
  cursor: pointer;
  margin-top: 20px;
  width: 160px;
  height: 42px;
  border-radius: 20px;
  background-color: #0173b0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: ${theme.fonts.lato};
`;

export const CategoryItemButtonText = styled.p`
  color: ${theme.colors.white};
`;

export const CategoryItemImageWrapper = styled.div`
  width: 100%;

  @media (max-width: 767px) {
    img {
      height: 149px;
      width: 197px;
    }
  }
`;