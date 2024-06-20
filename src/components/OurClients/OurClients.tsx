import React from "react";
import CustomHeading from "../CustomHeading/CustomHeading";
import {
  ClientsWrapper,
  ClientsContainer,
  ClientImageWrapper,
} from "./OurClients.styles";
import { CLIENTS_INFO } from "@/constants";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";
const AnimatedClientsContainer = animated(ClientsContainer);
const OurClients: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(150px)",
  });

  return (
    <AnimatedClientsContainer id="ourClients" style={animation} ref={ref}>
      <CustomHeading heading="Top-tier Real Estate Developers" />
      <ClientsWrapper>
        {CLIENTS_INFO?.map((item, index) => (
          <ClientImageWrapper key={index}>
            <Image
              alt={item.name}
              src={item.image}
              width={100}
              height={100}
              style={{ objectFit: "contain" }}
            />
          </ClientImageWrapper>
        ))}
      </ClientsWrapper>
    </AnimatedClientsContainer>
  );
};

export default OurClients;
