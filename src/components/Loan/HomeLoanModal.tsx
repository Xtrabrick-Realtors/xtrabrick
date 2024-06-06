import { READ_MORE_HOME_LOAN } from "@/constants";
import React from "react";
import {
  CloseButton,
  ContentWrapper,
  Grid,
  GridItem,
  ItemHeader,
  ItemHeading,
  ItemSubHeading,
  ModalContent,
  ModalOverlay,
  Subtitle,
  Title,
} from "./Loan.styles";

const HomeLoanModal: React.FC<{ closeModal?: () => void }> = ({
  closeModal,
}) => {
  return (
    <ModalOverlay onClick={closeModal}>
      <ModalContent onClick={(e: any) => e.stopPropagation()} width={"767px"}>
        <CloseButton onClick={closeModal}>×</CloseButton>
        <ContentWrapper>
          <Title>
            <span>Confused</span> on which bank to choose for your Home Loan?
          </Title>
          <Subtitle>Get Free Home Loan disbursed in 3 easy steps</Subtitle>
          <Grid>
            {READ_MORE_HOME_LOAN?.map((item, index) => (
              <GridItem key={index}>
                <ItemHeader>
                  <item.icon />
                  <ItemHeading>{item?.heading}</ItemHeading>
                </ItemHeader>
                <ItemSubHeading>{item?.subHeading}</ItemSubHeading>
              </GridItem>
            ))}
          </Grid>
        </ContentWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};

export default HomeLoanModal;
