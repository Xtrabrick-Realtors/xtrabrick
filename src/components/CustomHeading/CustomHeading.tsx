import React from "react";
import {
  CustomHeadingContainer,
  Heading,
  HeadingSeparator,
} from "./CustomHeading.styles";

const CustomHeading: React.FC<{
  heading: string;
  id?: string;
  removeSeparator?: boolean;
}> = ({ heading, id, removeSeparator = false }) => {
  return (
    <CustomHeadingContainer id={id}>
      {!removeSeparator && <HeadingSeparator />}
      <Heading>{heading}</Heading>
      {!removeSeparator && <HeadingSeparator />}
    </CustomHeadingContainer>
  );
};

export default CustomHeading;
