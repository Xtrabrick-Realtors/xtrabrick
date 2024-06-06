import { OUR_TEAM_DATA } from "@/constants";
import React from "react";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";
import CustomHeading from "../CustomHeading/CustomHeading";
import { OurTeamContainer, TeamMemberWrapper, TeamMembersWrapper, TeamMemberImage, TeamMemberName, TeamMemberPosition, TeamMemberCompany } from "./OurTeam.styles";

const OurTeam = () => {
 const AnimatedContainer = animated(OurTeamContainer);
 const [ref, inView] = useInView({
 triggerOnce: true,
 threshold: 0.3, 
 });
 const animation = useSpring({
 opacity: inView ? 1 : 0,
 transform: inView ? 'translateY(0)' : 'translateY(150px)',
 });
 return (
 <AnimatedContainer id="ourTeam" style={animation} ref={ref}>
 <CustomHeading heading="Our Team" />
 <TeamMembersWrapper>
 {OUR_TEAM_DATA.map((item, index) => (
 <TeamMemberWrapper key={index}>
 <TeamMemberImage
 src={item.image}
 alt={item.name}
 width={280}
 height={310}
 loading="eager"
 />
 <TeamMemberName>{item.name}</TeamMemberName>
 <TeamMemberPosition>{item.position}</TeamMemberPosition>
 <TeamMemberCompany>{item.company}</TeamMemberCompany>
 </TeamMemberWrapper>
 ))}
 </TeamMembersWrapper>
 </AnimatedContainer>
 );
};

export default OurTeam;