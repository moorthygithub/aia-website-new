import React from "react";

import EnrollHighlight from "@/components/enroll/enroll-highlight";
import CourseTopStudent from "@/components/courses/common/course-top-student";
import HomeAlumniWork from "@/components/home/home-alumini-work";
import CourseMap from "@/components/courses/common/course-map";
import EnrollReview from "@/components/enroll/enroll-review";
import EnrollFaq from "@/components/enroll/enroll-faq";

const Enrool = () => {
  return (
    <div>

<EnrollHighlight/>

      <CourseTopStudent courseSlug="Enroll-Now" title="From Enroll Course"/>

<HomeAlumniWork/>
<CourseMap courseCode="Enroll-Now"/>
<EnrollReview/>
<EnrollFaq/>

    </div>
  );
};

export default Enrool;
