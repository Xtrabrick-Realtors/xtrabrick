import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import Image from "next/image";
import {
  AMENITIES_PROVIDED,
  COMMERCIAL_PROPERTIES,
  COMMERCIAL_PROPERTIES_WIDGET,
  DEVELOPER_PLOTS,
  DEVELOPER_PROPERTIES,
  LOCATION_BENEFITS,
  PROPERTIES_NAVIGATOR,
  RESIDENTIAL_PROPERTIES,
} from "@/constants";
import CustomHeading from "@/components/CustomHeading/CustomHeading";
import VaastuDetailsContainer from "@/components/Vaastu/VaastuDetailsContainer";
import PromotionalBanner from "@/components/PromotionalBanner/PromotionalBanner";
import ResidentialPropertiesCarousel from "@/components/ResidentialPropertiesCarousel/ResidentialPropertiesCarousel";
import Link from "next/link";
import {
  PropertiesWrapper,
  BannerWrapper,
  NavigatorWrapper,
  NavigatorLink,
  ContentWrapper,
  AmenitiesWrapper,
  AmenityItem,
  AmenityText,
  LocationWrapper,
  LocationText,
  LocationBenefitsWrapper,
  BenefitItem,
  BenefitName,
  BenefitTime,
} from "./Properties.styles";
import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";

const Properties = () => {
  const AnimatedBannerWrapper = animated(BannerWrapper);
  const AnimatedContentWrapper = animated(ContentWrapper);
  const AnimatedAmenitiesWrapper = animated(AmenitiesWrapper);
  const AnimatedLocationWrapper = animated(LocationWrapper);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [bannerRef, bannerInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [amenitiesRef, amenitiesInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [locationRef, locationInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(150px)",
  });
  const bannerAnimation = useSpring({
    opacity: bannerInView ? 1 : 0,
    transform: bannerInView ? "translateY(0)" : "translateY(150px)",
  });
  const amenitiesAnimation = useSpring({
    opacity: amenitiesInView ? 1 : 0,
    transform: amenitiesInView ? "translateY(0)" : "translateY(150px)",
  });
  const locationAnimation = useSpring({
    opacity: locationInView ? 1 : 0,
    transform: locationInView ? "translateY(0)" : "translateY(150px)",
  });
  return (
    <PropertiesWrapper>
      <Header activeTab="Properties" />
      <AnimatedBannerWrapper ref={ref} style={animation}>
        <Image
          src={"/assets/images/propertiesBanner.png"}
          alt={"Properties"}
          layout={"responsive"}
          objectFit={"cover"}
          width={1920}
          height={1080}
          loading={"eager"}
        />
        <NavigatorWrapper>
          {PROPERTIES_NAVIGATOR.map((item, index) => {
            return (
              <Link key={index} href={item.link} scroll={false} passHref>
                <NavigatorLink>{item.name}</NavigatorLink>
              </Link>
            );
          })}
        </NavigatorWrapper>
      </AnimatedBannerWrapper>

      <CustomHeading heading="How to book a Property with Xtrabrick" />
      <AnimatedContentWrapper
        id={"howToBuy"}
        style={bannerAnimation}
        ref={bannerRef}
      >
        <Image
          src={"/assets/images/propertiesProcessBanner.png"}
          alt={"Buy Properties Banner"}
          layout={"responsive"}
          objectFit={"cover"}
          width={1920}
          height={1080}
          loading={"eager"}
        />
      </AnimatedContentWrapper>
      <CustomHeading
        heading="Residential Properties"
        id={"residentialProperties"}
      />
      <ResidentialPropertiesCarousel />

      <CustomHeading heading="Amenities Provided" />
      <AnimatedAmenitiesWrapper ref={amenitiesRef} style={amenitiesAnimation}>
        {AMENITIES_PROVIDED.map((item, index) => {
          return (
            <AmenityItem key={index}>
              <item.icon />
              <AmenityText>{item.name}</AmenityText>
            </AmenityItem>
          );
        })}
      </AnimatedAmenitiesWrapper>

      <PromotionalBanner data={RESIDENTIAL_PROPERTIES} />

      <CustomHeading
        heading="Commercial Properties"
        id={"commercialProperties"}
      />

      <VaastuDetailsContainer data={COMMERCIAL_PROPERTIES_WIDGET} />

      <PromotionalBanner data={COMMERCIAL_PROPERTIES} />

      <CustomHeading
        heading="Developer / Non- Agricultural Plots"
        id="developerUnits"
      />
      <VaastuDetailsContainer data={DEVELOPER_PLOTS} />

      <PromotionalBanner data={DEVELOPER_PROPERTIES} />
      <CustomHeading heading="Location Benefits" id={"locationBenfits"} />
      <AnimatedLocationWrapper ref={locationRef} style={locationAnimation}>
        <LocationText>Pune, Maharashtra</LocationText>
        <LocationBenefitsWrapper id={"locationBenefits"}>
          {LOCATION_BENEFITS.map((item, index) => {
            return (
              <BenefitItem key={index}>
                <item.icon />
                <BenefitName>{item.name}</BenefitName>
                <BenefitTime>{item.time}</BenefitTime>
              </BenefitItem>
            );
          })}
        </LocationBenefitsWrapper>
      </AnimatedLocationWrapper>

      <Footer />
    </PropertiesWrapper>
  );
};

export default Properties;
