import React from "react";
import Carousel from "../Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import { RESIDENTIAL_PROPERTIES_CAROUSEL } from "@/constants";

const ResidentialPropertiesCarousel: React.FC = () => {
  const OPTIONS: EmblaOptionsType = {}
  return (
    <Carousel options={OPTIONS} showControls slidesToShow={2} showBottomDots >
      {RESIDENTIAL_PROPERTIES_CAROUSEL?.map((item, index) => (
        <div
          style={{
            width: "80vw",
            minHeight: "414px",
            
          }}
          key={index}
        >
        <Image
          alt={item.name}
          src={item.image}
          layout="responsive"
          width={1920}
          height={1080}
          loading={'eager'}
        />
        </div>
      ))}
    </Carousel>
  );
};

export default ResidentialPropertiesCarousel;
