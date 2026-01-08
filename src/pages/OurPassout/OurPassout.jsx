
import CourseYoutube from "@/components/courses/common/course-youtube";
import HomeAlumniWork from "@/components/home/home-alumini-work";
import PassoutBanner from "@/components/passout/passout-banner";
import PassoutResult from "@/components/passout/passout-result";
import PassoutSucess from "@/components/passout/passout-success";
import React from "react";

const OurPassout = () => {
  return (
    <div>
    
  <PassoutBanner/>
   <PassoutResult/>
   <PassoutSucess/>
     <HomeAlumniWork/>

<CourseYoutube courseSlug="home"/>
    

      

      
    </div>
  );
};

export default OurPassout;
