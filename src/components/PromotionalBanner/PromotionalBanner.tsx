import React, { useRef } from "react";
import Carousel from "../Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import { BannerItem } from "./PromotionalBanner.styles";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const PromotionalBanner: React.FC<{ data: any; id?: string }> = ({
  data,
  id,
}) => {
  const OPTIONS: EmblaOptionsType = {};
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(100px)",
  });

  return (
    <animated.div style={animation} ref={ref} id={id}>
      <Carousel options={OPTIONS}>
        {data?.map((item: any, index: number) => (
          <BannerItem
            key={index}
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <Image
              alt={item.name}
              src={item.image}
              layout="responsive"
              width={1920}
              height={1080}
              loading={"eager"}
            />
          </BannerItem>
        ))}
      </Carousel>
    </animated.div>
  );
};

export default PromotionalBanner;
