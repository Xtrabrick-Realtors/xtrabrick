import React from "react";
import Carousel from "../Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import { RESIDENTIAL_PROPERTIES_CAROUSEL } from "@/constants";
import useIsMobile from "@/hooks/useIsMobile";

const ResidentialPropertiesCarousel: React.FC = () => {
  const OPTIONS: EmblaOptionsType = {};
  const isMobile = useIsMobile();
  return (
    <Carousel options={OPTIONS} showControls showBottomDots>
      {RESIDENTIAL_PROPERTIES_CAROUSEL?.map((item, index) => (
        <div
          style={{
            width: "100vw",
            minHeight: isMobile ? "150px" : "414px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          key={index}
        >
          <div style={{ width: isMobile ? "90%" : "75%" }}>
            <Image
              alt={item.name}
              src={item.image}
              layout="responsive"
              width={1920}
              height={1080}
              loading={"eager"}
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ResidentialPropertiesCarousel;
