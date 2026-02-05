import React from "react";




import AboutTrainerSection from "@/components/about/about-trainer-section";
import HomeAlumniWork from "@/components/home/home-alumini-work";







import CamsConnection from "@/components/courses/cams/cams-connection";
import CourseHero from "@/components/courses/common/course-hero";


import CourseYoutube from "@/components/courses/common/course-youtube";
import CourseLms from "@/components/courses/common/course-lms";

import CiaCurrResult from "@/components/courses/cia-curriculam/cia-curr-result";
import CiaCurrFaq from "@/components/courses/cia-curriculam/cia-curr-faq";
import CiaCurrReview from "@/components/courses/cia-curriculam/cia-curr-review";
import CiaCurrAchivers from "@/components/courses/cia-curriculam/cia-curr-achivers";
import CiaCurrCourseCurriculum from "@/components/courses/cia-curriculam/cia-curr-cource-curriculam";
import CiaCurrJourney from "@/components/courses/cia-curriculam/cia-curr-journey";
import CiaCurrWhyAia from "@/components/courses/cia-curriculam/cia-curr-why-aia";
import CiaCurrHighlight from "@/components/courses/cia-curriculam/cia-curr-highlight";
import CfeCurrUnique from "@/components/courses/cia-curriculam/cfe-curr-unique";
import CiaCurrAbout from "@/components/courses/cia-curriculam/cia-curr-about";

import CourseMap from "@/components/courses/common/course-map";
import PopUp from "@/components/common/pop-up";
import CourseYoutubeLecture from "@/components/courses/common/course-youtube-lecture";
import CourseTopStudent from "@/components/courses/common/course-top-student";
import CfeCourseLms from "@/components/courses/cfe-curriculam/cfe-course-lms";
import CiaCurrCourseLms from "@/components/courses/cia-curriculam/cia-curr-course-lms";



const CIACurriculam = () => {
  return (
    <div>
      {" "}
      {" "}
           <PopUp  slug="CIA-Curriculum"/>
      <CourseHero/>
      <CiaCurrAbout />
      <CourseTopStudent courseSlug="cia" needPrefix="false" title="We Stand by Results " subtitle="Meet Our Recent Proud Achievers of CIA Part 1 & 2."/>
      <CiaCurrCourseCurriculum/>
      <CiaCurrResult/> 
      <CiaCurrJourney/>


<CiaCurrWhyAia/>
<CiaCurrHighlight/>



<CourseMap courseCode="CIA"/>
<CourseYoutubeLecture courseSlug="cia"/>
<CourseYoutube courseSlug="cia"/>
<CiaCurrReview/>

<AboutTrainerSection/>
<CiaCurrCourseLms/>
<CfeCurrUnique/>
<CiaCurrAchivers/>
<CamsConnection/>
<HomeAlumniWork/>
<CiaCurrFaq/>
    </div>
  );
};

export default CIACurriculam;
