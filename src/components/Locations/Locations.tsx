import { LOCATIONS } from "@/constants";
import React from "react";
import Marquee from "react-fast-marquee";
import CustomHeading from "../CustomHeading/CustomHeading";
import Image from "next/image";
import { LocationImageContainer } from "./Locations.styles";
import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";

const Locations = () => {
 const AnimatedContainer = animated(LocationImageContainer);
 const [ref, inView] = useInView({
 triggerOnce: true,
 threshold: 0.3, 
 });
 const animation = useSpring({
 opacity: inView ? 1 : 0,
 transform: inView ? 'translateY(0)' : 'translateY(150px)',
 });
 return (
 <AnimatedContainer
 id={"locations"}
 style={{
 width: "100%",
 display: "flex",
 flexDirection: "column",
 justifyContent: "center",
 marginTop: '-10px',
 ...animation,
 }}
 ref={ref}
 >
 <CustomHeading heading="Our Locations" id="locations"/>
 <Marquee speed={75}> 
 {LOCATIONS?.map((item, index) => {
 return (
 <Image
 src={item}
 alt={"Locations"}
 key={index}
 height={323}
 width={427}
 style={{ margin: "0px 15px" }}
 loading={"eager"}
 className={'locationImage'}
 />
 );
 })}
 </Marquee>
 </AnimatedContainer>
 );
};

export default Locations;
