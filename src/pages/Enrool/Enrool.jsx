import React from "react";
import EnrollNowOpportunies from "../../component/EnrollNowOpportunies";
import GlobalStandards from "../../component/GlobalStandards";
import VoicesOfLearners from "../../component/VoicesOfLearners";
import TurningDreams from "../../component/courses/TurningDreams";
import AlumniWorkFor from "../../component/courses/AlumniWorkFor";
import PaymentFAQ from "../../component/PaymentFAQ";
import WorldMapSection from "../../component/WorldMapSection";

const Enrool = () => {
  return (
    <div>
      <EnrollNowOpportunies />
      <GlobalStandards />
      <VoicesOfLearners />
      <WorldMapSection />
      <TurningDreams />
      <AlumniWorkFor />
      <PaymentFAQ />
    </div>
  );
};

export default Enrool;
