import { WHO_ARE_WE_DATA } from "@/constants";
import React from "react";
import CustomHeading from "../CustomHeading/CustomHeading";
import {
  IconTextContainer,
  DataContainer,
  ItemContainer,
  WhoAreWeContainer,
} from "./WhoAreWe.styles";
import { theme } from "@/constants/basetheme";
import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";

const WhoAreWe = () => {
  const AnimatedContainer = animated(WhoAreWeContainer);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(150px)",
  });
  return (
    <AnimatedContainer id="aboutUs" style={animation} ref={ref}>
      <CustomHeading heading="Who are we?" />

      {WHO_ARE_WE_DATA.map((item, index) => (
        <ItemContainer key={index}>
          <IconTextContainer>
            {<item.icon />}
            <p
              style={{
                marginTop: 5,
                fontFamily: theme.fonts.lato,
                fontWeight: 400,
                textAlign: "center",
                color: "#454545",
              }}
              className={"iconDescription"}
            >
              {item.name}
            </p>
          </IconTextContainer>
          <DataContainer font={theme.fonts.lato}>
            {item?.data?.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </DataContainer>
        </ItemContainer>
      ))}
    </AnimatedContainer>
  );
};

export default WhoAreWe;
