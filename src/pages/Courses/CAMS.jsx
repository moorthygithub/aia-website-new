import React from "react";
import CAMSCourseOverview from "../../component/courses/CAMSCourseOverview";
import CAMSCourseVersion from "../../component/courses/CAMSCourseVersion";
import CAMSGlobalClassroom from "../../component/courses/CAMSGlobalClassroom";
import CAMSResults from "../../component/courses/CAMSResults";
import CIARecentPassout from "../../component/courses/CIARecentPassout";
import CompleteGuide from "../../component/courses/CompleteGuide";
import GlobalClassroomMap from "../../component/courses/GlobalClassroomMap";
import PrepCourse from "../../component/courses/PrepCourse";
import WhyAcademyofAudit from "../../component/courses/WhyAcademyofAudit";
import GlobalStandards from "../../component/GlobalStandards";
import CAMSCertification from "../../component/courses/CAMSCertification";
import AllRated from "../../component/courses/AllRated";
import KnowYourTrainer from "../../component/KnowYourTrainer";
import AIALMS from "../../component/courses/AIALMS";
import TurningDreams from "../../component/courses/TurningDreams";
import AIAUnique from "../../component/courses/AIAUnique";
import OnePlatform from "../../component/courses/OnePlatform";
import AlumniWorkFor from "../../component/courses/AlumniWorkFor";
import CAMSFAQs from "../../component/courses/CAMSFAQs";
import AMLChampions from "../../component/courses/AMLChampions";

const CAMS = () => {
  return (
    <div>
      {" "}
      <PrepCourse />
      <CIARecentPassout />
      <CAMSCourseOverview />
      <CAMSCourseVersion />
      <CAMSResults />
      <CompleteGuide />
      <WhyAcademyofAudit />
      <CAMSGlobalClassroom />
      <GlobalClassroomMap />
      <GlobalStandards />
      <CAMSCertification />
      <AllRated />
      <KnowYourTrainer />
      <AIALMS />
      <TurningDreams />
      <AIAUnique />
      <AMLChampions />
      <OnePlatform />
      <AlumniWorkFor />
      <CAMSFAQs />
    </div>
  );
};

export default CAMS;
