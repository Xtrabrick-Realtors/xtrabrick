import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import Image from "next/image";
import { KEY_PRINCIPLES, WHY_IS_VAASTU_IMPORTANT } from "@/constants";
import CustomHeading from "@/components/CustomHeading/CustomHeading";
import WhatIsVaastuShastra from "@/components/Vaastu/WhatIsVaastuShastra";
import VaastuDetailsContainer from "@/components/Vaastu/VaastuDetailsContainer";

const Vastu = () => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: '89px'
      }}
    >
      <Header activeTab="Vaastu"/>
      <div
        style={{
          width: "100%",
        }}
      >
        <Image
          src={"/assets/images/vaastu.png"}
          alt={"Vaastu"}
          layout={"responsive"}
          objectFit={"cover"}
          width={1920}
          height={1080}
          loading={"eager"}
        />
      </div>

      <WhatIsVaastuShastra />
      <CustomHeading heading="Why is Vaastu Important?" id="whyIsVaastuImp"/> 
      <VaastuDetailsContainer data={WHY_IS_VAASTU_IMPORTANT} />
      
      <CustomHeading heading="Key Principles" id="keyPrinciples"/> 
      <VaastuDetailsContainer data={KEY_PRINCIPLES} />
      <Footer />
    </div>
  );
};

export default Vastu;
