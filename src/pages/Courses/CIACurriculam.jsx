import React from "react";
import AIALMS from "../../component/courses/AIALMS";
import AIAUnique from "../../component/courses/AIAUnique";
import AllRated from "../../component/courses/AllRated";
import AlumniWorkFor from "../../component/courses/AlumniWorkFor";
import CIAFAQs from "../../component/courses/CIAFAQs";
import CIAResults from "../../component/courses/CIAResults";
import CIASuccessStories from "../../component/courses/CIASuccessStories";
import CompleteGuide from "../../component/courses/CompleteGuide";
import CourseOverview from "../../component/courses/CourseOverview";
import GlobalClassroomMap from "../../component/courses/GlobalClassroomMap";
import LearnersToLegends from "../../component/courses/LearnersToLegends";
import PrepCourse from "../../component/courses/PrepCourse";
import TurningDreams from "../../component/courses/TurningDreams";
import WhyAcademyofAudit from "../../component/courses/WhyAcademyofAudit";
import KnowYourTrainer from "../../component/KnowYourTrainer";

const CIACurriculam = () => {
  return (
    <div>
      {" "}
      <PrepCourse />
      <CourseOverview />
      <GlobalClassroomMap />
      <CompleteGuide />
      <WhyAcademyofAudit />
      <LearnersToLegends />
      <KnowYourTrainer />
      <CIAResults />
      <AIALMS />
      <TurningDreams />
      <AllRated />
      <AIAUnique />
      <AlumniWorkFor />
      <CIASuccessStories />
      <CIAFAQs />
    </div>
  );
};

export default CIACurriculam;
