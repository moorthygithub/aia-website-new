import React from "react";

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
import CamsReview from "@/components/courses/cams/cams-review";
import CamsJourney from "@/components/courses/cams/cams-journey";
import CamsUnique from "@/components/courses/cams/CamsUnique";
import CamsAchivers from "@/components/courses/cams/cams-achivers";
import CamsYoutube from "@/components/courses/cams/cams-youtube";
import CamsLms from "@/components/courses/cams/cams-lms";
import CamsCourseCurriculum from "@/components/courses/cams/cams-course-curriculum";




const CAMS = () => {
  return (
    <div>
      {" "}
      <CamsHero/>
      <CamsAbout />
      <CamsRecentPassout/>
      <CamsCourseCurriculum/>
      <CamsResult/>    
      <CamsJourney/>
<CamsWhyAia/>
<CamsHighlight/>
<CamsMap/>
<CamsReview/>
<CamsYoutube/>
<AboutTrainerSection/>
<CamsLms/>
<CamsUnique/>
<CamsAchivers/>

<HomeAlumniWork/>
<CamsFaq/>


    </div>
  );
};

export default CAMS;
