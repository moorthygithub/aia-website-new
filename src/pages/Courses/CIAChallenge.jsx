import React from "react";
import PrepCourse from "../../component/courses/PrepCourse";
import CIAAchievers from "../../component/courses/CIAAchievers";
import CIAChallengeOverview from "../../component/courses/CIAChallengeOverview";
import CIAChallengeCurriculum from "../../component/courses/CIAChallengeCurriculum";
import GlobalClassroom from "../../component/courses/GlobalClassroom";
import GlobalClassroomMap from "../../component/courses/GlobalClassroomMap";
import GlobalStandards from "../../component/GlobalStandards";
import LearnersToLegends from "../../component/courses/LearnersToLegends";
import CompleteGuide from "../../component/courses/CompleteGuide";
import WhyAcademyofAudit from "../../component/courses/WhyAcademyofAudit";
import KnowYourTrainer from "../../component/KnowYourTrainer";
import AllRated from "../../component/courses/AllRated";
import AIALMS from "../../component/courses/AIALMS";
import CIAChallengeResults from "../../component/courses/CIAChallengeResults";
import TurningDreams from "../../component/courses/TurningDreams";
import AlumniWorkFor from "../../component/courses/AlumniWorkFor";
import SuccessStories from "../../component/courses/SucessStories";
import OnePlatform from "../../component/courses/OnePlatform";
import CIAFAQs from "../../component/courses/CIAFAQs";

const CIAChallenge = () => {
  return (
    <div>
      {" "}
      <PrepCourse />
      <CIAAchievers />
      <CIAChallengeOverview />
      <CIAChallengeCurriculum />
      <GlobalStandards />
      <GlobalClassroomMap />
      <CompleteGuide />
      <WhyAcademyofAudit />
      <LearnersToLegends />
      <AllRated />
      <KnowYourTrainer />
      <CIAChallengeResults />
      <AIALMS />
      <TurningDreams />
      <AlumniWorkFor />
      <OnePlatform />
      <SuccessStories />
      <CIAFAQs />
    </div>
  );
};

export default CIAChallenge;
