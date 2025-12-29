import React from "react";
import About from "../../component/About";
import AboutBannerPhoto from "../../component/AboutBannerPhoto";
import NumbersSpeak from "../../component/NumbersSpeak";
import KnowYourTrainer from "../../component/KnowYourTrainer";
import OurMission from "../../component/OurMission";
import OurVision from "../../component/OurVision";

const AboutPage = () => {
  return (
    <div>
      {" "}
      <AboutBannerPhoto />
      <About />
      <NumbersSpeak />
      <KnowYourTrainer />
      <OurMission />
      <OurVision />
    </div>
  );
};

export default AboutPage;
