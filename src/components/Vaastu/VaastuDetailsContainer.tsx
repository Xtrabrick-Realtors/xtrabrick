import React from "react";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";
import {
  Container,
  ItemContainer,
  ItemHeader,
  ItemTitle,
  ItemDescription,
  InfoList,
  InfoItem,
} from "./Vaastu.styles";

interface VaastuDetailsContainerProps {
  data: {
    icon: React.ComponentType;
    title: string;
    description: string;
    info?: string[];
  }[];
  columns?: number;
}

const VaastuDetailsContainer: React.FC<VaastuDetailsContainerProps> = ({
  data,
  columns = 2,
}) => {
  const AnimatedContainer = animated(Container);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(150px)",
  });
  return (
    <AnimatedContainer columns={columns} ref={ref} style={animation}>
      {data?.map((item, index) => (
        <ItemContainer key={index} columns={columns}>
          <ItemHeader>
            <item.icon />
            <ItemTitle>{item?.title}</ItemTitle>
          </ItemHeader>
          <ItemDescription>{item?.description}</ItemDescription>
          <InfoList>
            {item?.info?.map((info, i) => (
              <InfoItem key={i}>{info}</InfoItem>
            ))}
          </InfoList>
        </ItemContainer>
      ))}
    </AnimatedContainer>
  );
};

export default VaastuDetailsContainer;
