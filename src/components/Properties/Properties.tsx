import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import Image from "next/image";
import {
  COMMERCIAL_PROPERTIES,
  COMMERCIAL_PROPERTIES_WIDGET,
  DEVELOPER_PLOTS,
  DEVELOPER_PROPERTIES,
  // LOCATION_BENEFITS,
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
  // AmenitiesWrapper,
  // AmenityItem,
  // AmenityText,
  // LocationWrapper,
  // LocationText,
  // LocationBenefitsWrapper,
  // BenefitItem,
  // BenefitName,
  // BenefitTime,
} from "./Properties.styles";
import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";

const Properties = () => {
  const AnimatedBannerWrapper = animated(BannerWrapper);
  const AnimatedContentWrapper = animated(ContentWrapper);
  // const AnimatedAmenitiesWrapper = animated(AmenitiesWrapper);
  // const AnimatedLocationWrapper = animated(LocationWrapper);
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
  // const [locationRef, locationInView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.3,
  // });
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
  // const locationAnimation = useSpring({
  //   opacity: locationInView ? 1 : 0,
  //   transform: locationInView ? "translateY(0)" : "translateY(150px)",
  // });
  return (
    <PropertiesWrapper>
      <Header activeTab="Properties" />
      <AnimatedBannerWrapper ref={ref} style={animation}>
        <Image
          src={"/assets/images/propertiesBanner.jpg"}
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

      <CustomHeading
        heading="How to book a Property with Xtrabrick"
        removeSeparator
        id={"howToBuy"}
      />
      <AnimatedContentWrapper style={bannerAnimation} ref={bannerRef}>
        <Image
          src={"/assets/images/propertiesProcessBanner-v2.png"}
          alt={"Buy Properties Banner"}
          layout={"responsive"}
          objectFit={"cover"}
          width={1920}
          height={1080}
          loading={"eager"}
        />
      </AnimatedContentWrapper>
      {/* <CustomHeading
        heading="Residential Properties"
        id={"residentialProperties"}
      /> */}

      {/* <CustomHeading heading="Amenities Provided" /> */}
      {/* <AnimatedAmenitiesWrapper ref={amenitiesRef} style={amenitiesAnimation}>
        {AMENITIES_PROVIDED.map((item, index) => {
          return (
            <AmenityItem key={index}>
              <item.icon />
              <AmenityText>{item.name}</AmenityText>
            </AmenityItem>
          );
        })}
      </AnimatedAmenitiesWrapper> */}
      <div
        style={{
          marginTop: 30,
          height: 1,
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          marginBottom: 70,
        }}
        id="residentialProperties"
      />
      <PromotionalBanner data={RESIDENTIAL_PROPERTIES} showDots />
      <div style={{ marginTop: 35 }} />
      <ResidentialPropertiesCarousel />
      {/* <CustomHeading
        heading="Commercial Properties"
        id={"commercialProperties"}
      /> */}

      <div
        style={{
          marginTop: 30,
          height: 1,
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          marginBottom: 70,
        }}
        id="commercialProperties"
      />
      <PromotionalBanner data={COMMERCIAL_PROPERTIES} showDots />
      <div style={{ marginTop: 30 }} />
      <VaastuDetailsContainer data={COMMERCIAL_PROPERTIES_WIDGET} />
      {/* <CustomHeading
        heading="Developer / Non- Agricultural Plots"
        id="developerUnits"
      /> */}
      <div
        style={{
          marginTop: 30,
          height: 1,
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          marginBottom: 70,
        }}
        id="developerUnits"
      />
      <PromotionalBanner data={DEVELOPER_PROPERTIES} showDots />
      <div style={{ marginTop: 30 }} />
      <VaastuDetailsContainer data={DEVELOPER_PLOTS} />
      {/* <CustomHeading heading="Location Benefits" id={"locationBenfits"} />
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
      </AnimatedLocationWrapper> */}

      <Footer />
    </PropertiesWrapper>
  );
};

export default Properties;
