import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { TESTIMONIALS } from "@/constants";
import CustomHeading from "../CustomHeading/CustomHeading";
import VerticalCarousel from "../VerticalCarousel/VerticalCarousel";
import { TestimonialWrapper } from "./Testimonials.styles";
import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";
import ParallaxCarousel from "../ParallaxCarousel/ParallaxCarousel";

const Testimonials: React.FC = () => {
  const OPTIONS: EmblaOptionsType = { loop: true, align: "center" };
  const AnimatedContainer = animated(TestimonialWrapper);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(150px)",
  });

  return (
    <AnimatedContainer id={"testimonials"} style={animation} ref={ref}>
      <CustomHeading heading="Client Testimony" />
      {/* <VerticalCarousel options={OPTIONS} slides={TESTIMONIALS} /> */}
      <ParallaxCarousel options={OPTIONS} slides={TESTIMONIALS} />
    </AnimatedContainer>
  );
};

export default Testimonials;
