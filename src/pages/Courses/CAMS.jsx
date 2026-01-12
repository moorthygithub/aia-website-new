import React from "react";


import CamsResult from "@/components/courses/cams/cams-result";
import CamsWhyAia from "@/components/courses/cams/cams-why-aia";
import CamsHighlight from "@/components/courses/cams/cams-highlight";

import AboutTrainerSection from "@/components/about/about-trainer-section";
import HomeAlumniWork from "@/components/home/home-alumini-work";
import CamsFaq from "@/components/courses/cams/cams-faq";
import CamsReview from "@/components/courses/cams/cams-review";

import CamsUnique from "@/components/courses/cams/cams-unique";
import CamsAchivers from "@/components/courses/cams/cams-achivers";


import CamsConnection from "@/components/courses/cams/cams-connection";
import CourseHero from "@/components/courses/common/course-hero";

import CourseYoutube from "@/components/courses/common/course-youtube";
import CourseLms from "@/components/courses/common/course-lms";

import CamsCourseCurriculum from "@/components/courses/cams/cams-course-curriculum";
import CamsJourney from "@/components/courses/cams/cams-journey";
import CamsAbout from "@/components/courses/cams/cams-about";
import CourseMap from "@/components/courses/common/course-map";
import PopUp from "@/components/common/pop-up";




const CAMS = () => {
  return (
    <div>
      {" "}
          <PopUp  slug="CAMS"/>
      <CourseHero/>
      <CamsAbout />
      {/* <CamsRecentPassout/> */}
      <CamsCourseCurriculum/>
      <CamsResult/> 
      <CamsJourney/>


<CamsWhyAia/>
<CamsHighlight/>



<CourseMap courseCode="CAMS"/>
<CamsReview/>
<CourseYoutube courseSlug="cams"/>
<AboutTrainerSection/>
<CourseLms/>


<CamsUnique/>
<CamsAchivers/>
<CamsConnection/>
<HomeAlumniWork/>
<CamsFaq/>


    </div>
  );
};

export default CAMS;
