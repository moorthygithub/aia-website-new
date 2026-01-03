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
import CamsAbout from "../../components/courses/cams/cams-about";
import CamsRecentPassout from "@/components/courses/cams/cams-recent-passout";
import CamsHero from "@/components/courses/cams/cams-hero";
import CamsResult from "@/components/courses/cams/cams-result";
import CamsWhyAia from "@/components/courses/cams/cams-why-aia";
import CamsHighlight from "@/components/courses/cams/cams-highlight";
import CamsMap from "@/components/courses/cams/cams-map";
import AboutTrainerSection from "@/components/about/about-trainer-section";
import HomeAlumniWork from "@/components/home/home-alumini-work";
import CamsFaq from "@/components/courses/cams/cams-faq";

const CAMS = () => {
  return (
    <div>
      {" "}
      <CamsHero/>
      <CamsAbout />
      <CamsRecentPassout/>
      <CamsResult/>
<CamsWhyAia/>
<CamsHighlight/>
<CamsMap/>
<AboutTrainerSection/>
<HomeAlumniWork/>
<CamsFaq/>


{/* 





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
      <CAMSFAQs /> */}
    </div>
  );
};

export default CAMS;
