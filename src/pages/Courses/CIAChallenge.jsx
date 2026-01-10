import React from "react";



import AboutTrainerSection from "@/components/about/about-trainer-section";
import HomeAlumniWork from "@/components/home/home-alumini-work";



import CamsAchivers from "@/components/courses/cams/cams-achivers";


import CamsConnection from "@/components/courses/cams/cams-connection";
import CourseHero from "@/components/courses/common/course-hero";

import CiaResult from "@/components/courses/cia-challenge/cia-result";

import CiaRevew from "@/components/courses/cia-challenge/cia-review";
import CourseYoutube from "@/components/courses/common/course-youtube";
import CourseLms from "@/components/courses/common/course-lms";

import CiaCourseCurriculum from "@/components/courses/cia-challenge/cia-cource-curriculam";
import CiaJourney from "@/components/courses/cia-challenge/cia-journey";
import CiaWhyAia from "@/components/courses/cia-challenge/cia-why-aia";
import CiaHighlight from "@/components/courses/cia-challenge/cia-highlight";
import CiaUnique from "@/components/courses/cia-challenge/cia-unique";
import CiaFaq from "@/components/courses/cia-challenge/cia-faq";
import CiaAbout from "@/components/courses/cia-challenge/cia-about";

import CourseMap from "@/components/courses/common/course-map";
import PopUp from "@/components/common/pop-up";

const CIAChallenge = () => {
  return (
    <div>
       <PopUp  slug="CIA-Challenge-Curriculum"/>
   <CourseHero/>
           <CiaAbout />
           {/* <CamsRecentPassout/> */}
           <CiaCourseCurriculum/>
           <CiaResult/>    
           <CiaJourney/>


     <CiaWhyAia/>



     <CiaHighlight/>
     <CourseMap courseCode="CIAC"/>
     <CourseYoutube courseSlug="ciac"/>
     <CiaRevew/>




     <AboutTrainerSection/>
     <CourseLms/>
     <CiaUnique/>



     <CamsAchivers/>


     
     <CamsConnection/>
     <HomeAlumniWork/>
     <CiaFaq/>
    </div>
  );
};

export default CIAChallenge;
