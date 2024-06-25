import React from "react";
import Image from "next/image";
import {
  AboutUsContainer,
  LogoContainer,
  RightWrapper,
  AboutUsHeading,
  XtraBrickRealtors,
  BackgroundImage,
  AddressText,
} from "./AboutUs.styles";
import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";

const AboutUs: React.FC = () => {
  const AnimatedContainer = animated(AboutUsContainer);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(150px)",
  });
  return (
    <AnimatedContainer style={animation} ref={ref}>
      <BackgroundImage>
        <Image
          src="/assets/images/aboutUsBg.png"
          alt="About Us"
          layout="responsive"
          width={1920}
          height={1080}
          loading="eager"
          className="backgroundImage"
        />
      </BackgroundImage>
      <LogoContainer>
        <Image
          alt="XTRABRICK"
          src="/assets/images/Logo.png"
          height={98}
          width={174}
          className="logo"
        />
      </LogoContainer>
      <RightWrapper>
        <div>
          <AboutUsHeading>About Us</AboutUsHeading>
          <XtraBrickRealtors>XTRABRICK REALTORS</XtraBrickRealtors>
          {/* <ExperienceText color="#20B2FF" isBold>20 +</ExperienceText>
 <ExperienceText color="#ffffff" isBold>Years of Experience</ExperienceText> */}
        </div>
        <AddressText>
          Office No. 45, Vision One Mall, Bhumkar Chowk, <br />
          Wakad - 411033, Pune, Maharashtra, India
        </AddressText>
      </RightWrapper>
    </AnimatedContainer>
  );
};

export default AboutUs;
