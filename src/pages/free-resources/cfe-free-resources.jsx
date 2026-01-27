import FreeResourceBanner from "@/components/cfe-free-resource/free-resource-banner";
import FreeResourceFlashCard from "@/components/cfe-free-resource/free-resource-flash-card";
import FreeResourcePracticeQuestion from "@/components/cfe-free-resource/free-resource-practice-question";
// import FreeResourceTopStudent from "@/components/cfe-free-resource/free-resource-top-student";
import FreeResourceYoutube from "@/components/cfe-free-resource/free-resource-youtube";
import CourseTopStudent from "@/components/courses/common/course-top-student";
import HomeAlumniWork from "@/components/home/home-alumini-work";
import HomeReview from "@/components/home/home-review";
import React from "react";


const FreeResources = () => {
  return (
    <>
     <FreeResourceBanner/>
     <FreeResourceYoutube/>
     <FreeResourceFlashCard/>
     <FreeResourcePracticeQuestion/>

      <CourseTopStudent courseSlug="CFE-Free-Resources" title="From CFE FREE Course"/>
       <HomeAlumniWork/>
        <HomeReview/>
    </>
  );
};

export default FreeResources;
