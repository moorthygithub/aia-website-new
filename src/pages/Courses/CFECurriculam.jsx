import React from "react";
import PrepCourse from "../../component/courses/PrepCourse";
import CourseOverview from "../../component/courses/CourseOverview";
import GlobalStandards from "../../component/GlobalStandards";
import GlobalClassroom from "../../component/courses/GlobalClassroom";
import WhyAcademyofAudit from "../../component/courses/WhyAcademyofAudit";
import CompleteGuide from "../../component/courses/CompleteGuide";
import LearnersToLegends from "../../component/courses/LearnersToLegends";
import KnowYourTrainer from "../../component/KnowYourTrainer";
import CFEResults from "../../component/courses/CFEResults";
import AIALMS from "../../component/courses/AIALMS";
import TurningDreams from "../../component/courses/TurningDreams";
import AllRated from "../../component/courses/AllRated";
import AIAUnique from "../../component/courses/AIAUnique";
import AlumniWorkFor from "../../component/courses/AlumniWorkFor";
import SuccessStories from "../../component/courses/SucessStories";
import CFEFAQs from "../../component/courses/CFEFAQs";
import GlobalClassroomMap from "../../component/courses/GlobalClassroomMap";

const CFECurriculam = () => {
  return (
    <div>
      <PrepCourse />
      <CourseOverview />
      <GlobalStandards />
      <GlobalClassroom />
      <GlobalClassroomMap />
      <CompleteGuide />
      <WhyAcademyofAudit />
      <LearnersToLegends />
      <KnowYourTrainer />
      <CFEResults />
      <AIALMS />
      <TurningDreams />
      <AllRated />
      <AIAUnique />
      <AlumniWorkFor />
      <SuccessStories />
      <CFEFAQs />
    </div>
  );
};

export default CFECurriculam;
