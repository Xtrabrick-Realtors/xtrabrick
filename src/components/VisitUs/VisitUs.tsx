import React from "react";
import CustomHeading from "../CustomHeading/CustomHeading";
import {
 VisitUsContainer,
 ContentWrapper,
 MapImage,
 TextContent,
 TextParagraph,
 AddressParagraph,
} from "./VisitUs.styles";
import { theme } from "@/constants/basetheme";
import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";

const VisitUs = () => {
 const AnimatedContainer = animated(VisitUsContainer);
 const [ref, inView] = useInView({
 triggerOnce: true,
 threshold: 0.3, 
 });
 const animation = useSpring({
 opacity: inView ? 1 : 0,
 transform: inView ? 'translateY(0)' : 'translateY(150px)',
 });

 return (
 <AnimatedContainer id="visitUs" style={animation} ref={ref}>
 <CustomHeading heading="Come visit us!" />
 <ContentWrapper>
 <a target={'_blank'} href="http://maps.google.com/?q=Office No. 45, Vision One Mall, Bhumkar Chowk, Wakad - 411033, Pune, Maharashtra, India">
 <MapImage src="/assets/images/companyMap.png" alt="location map" />
 <p style={{
 fontSize: '12px',
 fontFamily: theme.fonts.lato,
 fontWeight: 400,
 color: 'rgba(0, 0, 0, 0.5)'
 }}>*Click on the image to open the location on google maps</p>
 </a>

 <TextContent>
 <TextParagraph font={theme.fonts.lato}>
 Xtrabrick offers supportive guidance and assistance to first-time
 buyers throughout the entire homebuying process, from property
 search and financing to closing and beyond, ensuring a smooth and
 stress-free experience.
 <br />
 <br />
 <br />
 Let&apos;s meet!
 </TextParagraph>

 <AddressParagraph font={theme.fonts.lato}>
 Office No. 45, Vision One Mall, Bhumkar Chowk, <br />
 Wakad - 411033, Pune, Maharashtra, India
 </AddressParagraph>
 </TextContent>
 </ContentWrapper>
 </AnimatedContainer>
 );
};

export default VisitUs;