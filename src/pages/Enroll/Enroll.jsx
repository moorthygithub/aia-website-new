import React from "react";
import EnrollNowOpportunies from "../../component/EnrollNowOpportunies";
import GlobalStandards from "../../component/GlobalStandards";
import VoicesOfLearners from "../../component/VoicesOfLearners";
import TurningDreams from "../../component/courses/TurningDreams";
import AlumniWorkFor from "../../component/courses/AlumniWorkFor";
import PaymentFAQ from "../../component/PaymentFAQ";
import WorldMapSection from "../../component/WorldMapSection";
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
{/*       
      <EnrollNowOpportunies />
      <GlobalStandards />
      <VoicesOfLearners />
      <WorldMapSection />
      <TurningDreams />
      <AlumniWorkFor />
      <PaymentFAQ /> */}
    </div>
  );
};

export default Enrool;
