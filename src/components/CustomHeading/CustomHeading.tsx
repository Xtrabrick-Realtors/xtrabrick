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
    <CustomHeadingContainer>
      <div
        style={{
          position: "absolute",
          top: -60,
        }}
        id={id}
      ></div>
      {!removeSeparator && <HeadingSeparator />}
      <Heading>{heading}</Heading>
      {!removeSeparator && <HeadingSeparator />}
    </CustomHeadingContainer>
  );
};

export default CustomHeading;
