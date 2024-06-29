import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React, { useState } from "react";
import Image from "next/image";
import { JOBS_DATA } from "@/constants";
import { theme } from "@/constants/basetheme";
import LocationIcon from "../../../public/assets/svg/LocationIcon";
import JobIcon from "../../../public/assets/svg/JobIcon";
import RupeeIcon from "../../../public/assets/svg/RupeeIcon";
import { Job, JobsListingWrapper, JobsWrapper } from "./Career.styles";
import JobForm from "./JobForm";

const Career = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [job, setJob] = useState<string>("");
  const closeModal = () => {
    setShowForm(false);
  };
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "70px",
      }}
    >
      <Header activeTab="Carrers" />
      <div
        style={{
          width: "100%",
        }}
      >
        <Image
          src={"/assets/images/carrerBanner.png"}
          alt={"About Us"}
          layout={"responsive"}
          objectFit={"cover"}
          width={1920}
          height={1080}
          loading={"eager"}
        />
      </div>

      <JobsWrapper>
        <JobsListingWrapper>
          {JOBS_DATA.map((job, index) => {
            return (
              <Job key={index}>
                <h2
                  style={{
                    fontFamily: theme.fonts.lato,
                    fontWeight: 700,
                    fontSize: "22px",
                  }}
                >
                  {job?.position}
                </h2>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <LocationIcon height={20} width={15} />

                  <p
                    style={{
                      fontFamily: theme.fonts.lato,
                      fontWeight: 400,
                      fontSize: "18px",
                      color: "#434343",
                      marginLeft: "5px",
                    }}
                  >
                    {job?.location}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <JobIcon />
                  <p
                    style={{
                      fontFamily: theme.fonts.lato,
                      fontWeight: 400,
                      fontSize: "18px",
                      color: "#434343",
                    }}
                  >
                    {job?.experience}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <RupeeIcon />
                  <p
                    style={{
                      fontFamily: theme.fonts.lato,
                      fontWeight: 400,
                      fontSize: "18px",
                      color: "#434343",
                    }}
                  >
                    {job?.ctc}
                  </p>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    {/* <p
                      style={{
                        fontFamily: theme.fonts.lato,
                        fontWeight: 400,
                        fontSize: "16px",
                        color: "#434343",
                      }}
                    >
                      Poster: {job?.postTime}
                    </p> */}
                    <p
                      style={{
                        fontFamily: theme.fonts.lato,
                        fontWeight: 400,
                        fontSize: "16px",
                        color: "#434343",
                      }}
                    >
                      Openings: {job?.openings}
                    </p>
                  </div>
                  <div
                    style={{
                      cursor: "pointer",
                      marginTop: 20,
                      height: 28,
                      borderRadius: 20,
                      width: 117,
                      backgroundColor: "#0173B0",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      setShowForm(true);
                      setJob(job?.position);
                    }}
                  >
                    <p
                      style={{
                        fontFamily: theme.fonts.lato,
                        fontWeight: 400,
                        fontSize: 16,
                        color: theme.colors.white,
                      }}
                    >
                      Apply
                    </p>
                  </div>
                </div>
              </Job>
            );
          })}
        </JobsListingWrapper>
      </JobsWrapper>
      <Image
        src={"/assets/images/footerHeader.png"}
        alt={"Application Email"}
        layout={"responsive"}
        objectFit={"cover"}
        width={1920}
        height={1080}
        loading={"eager"}
        style={{ marginBottom: -55 }}
      />
      <Footer />

      {showForm && <JobForm closeModal={closeModal} job={job} />}
    </div>
  );
};

export default Career;
