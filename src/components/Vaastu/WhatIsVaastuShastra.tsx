import { WHAT_IS_VAASTU_SHASTRA } from "@/constants";
import Image from "next/image";
import React from "react";
import CustomHeading from "../CustomHeading/CustomHeading";
import {
  ImageWrapper,
  DescriptionContainer,
  Text,
  Button,
  ButtonText,
  VaastuContainer,
} from "./Vaastu.styles";

const WhatIsVaastuShastra = () => {
  return (
    <>
      <CustomHeading heading="What is Vaastu Shastra" />
      <VaastuContainer>
        <ImageWrapper>
          <Image
            src={"/assets/images/vaastuDescription.png"}
            alt={"Vaastu Details"}
            height={439}
            width={586}
            loading={"eager"}
          />
        </ImageWrapper>
        <DescriptionContainer>
          {WHAT_IS_VAASTU_SHASTRA?.map((item, index) => (
            <Text key={index}>{item}</Text>
          ))}
          <Button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.open("https://wa.me/9850004775");
              }
            }}
          >
            <ButtonText>Book a Consultation</ButtonText>
          </Button>
        </DescriptionContainer>
      </VaastuContainer>
    </>
  );
};

export default WhatIsVaastuShastra;
