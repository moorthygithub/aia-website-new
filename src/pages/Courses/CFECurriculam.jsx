import React from "react";



import AboutTrainerSection from "@/components/about/about-trainer-section";
import HomeAlumniWork from "@/components/home/home-alumini-work";


import CamsConnection from "@/components/courses/cams/cams-connection";
import CourseHero from "@/components/courses/common/course-hero";


import CfeResult from "@/components/courses/cfe-curriculam/cfe-result";

import CfeReview from "@/components/courses/cfe-curriculam/cfe-review";
import CourseYoutube from "@/components/courses/common/course-youtube";
import CourseLms from "@/components/courses/common/course-lms";

import CfeAchivers from "@/components/courses/cfe-curriculam/cfe-achivers";


import CfeCourseCurriculum from "@/components/courses/cfe-curriculam/cfe-cource-curriculam";
import CfeJourney from "@/components/courses/cfe-curriculam/cfe-journey";
import CfeWhyAia from "@/components/courses/cfe-curriculam/cfe-why-aia";
import CfeHighlight from "@/components/courses/cfe-curriculam/cfe-highlight";
import CfeUnique from "@/components/courses/cfe-curriculam/cfe-unique";
import CfeAbout from "@/components/courses/cfe-curriculam/cfe-about";

import CourseMap from "@/components/courses/common/course-map";
import PopUp from "@/components/common/pop-up";
import CfeFaq from "@/components/courses/cfe-curriculam/cfe-faq";


const CFECurriculam = () => {
  return (
    <div>
        <PopUp  slug="CFE-Curriculum"/>
   
      <CourseHero/>
           <CfeAbout />
           {/* <CamsRecentPassout/> */}
           <CfeCourseCurriculum/>
           <CfeResult/>    
           <CfeJourney/>


     <CfeWhyAia/>
     <CfeHighlight/>
     <CourseMap courseCode="CFE"/>
     <CourseYoutube courseSlug="cfe"/>
     <CfeReview/>



 



     <AboutTrainerSection/>
     <CourseLms/>
     <CfeUnique/>
     <CfeAchivers/>
     <CamsConnection/>
     <HomeAlumniWork/>
     <CfeFaq/>
    </div>
  );
};

export default CFECurriculam;
