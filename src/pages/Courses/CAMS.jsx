import CamsHighlight from "@/components/courses/cams/cams-highlight";
import CamsResult from "@/components/courses/cams/cams-result";
import CamsWhyAia from "@/components/courses/cams/cams-why-aia";

import AboutTrainerSection from "@/components/about/about-trainer-section";
import HomeAlumniWork from "@/components/home/home-alumini-work";

import CamsFaq from "@/components/courses/cams/cams-faq";

import CamsReview from "@/components/courses/cams/cams-review";

import CamsAchivers from "@/components/courses/cams/cams-achivers";
import CamsUnique from "@/components/courses/cams/cams-unique";

import CamsConnection from "@/components/courses/cams/cams-connection";
import CourseHero from "@/components/courses/common/course-hero";

import CourseYoutube from "@/components/courses/common/course-youtube";

import PopUp from "@/components/common/pop-up";
import CamsAbout from "@/components/courses/cams/cams-about";
import CamsCourseCurriculum from "@/components/courses/cams/cams-course-curriculum";
import CamsJourney from "@/components/courses/cams/cams-journey";
import CfeCourseLms from "@/components/courses/cfe-curriculam/cfe-course-lms";
import CourseMap from "@/components/courses/common/course-map";
import CourseTopStudent from "@/components/courses/common/course-top-student";
import CourseYoutubeLecture from "@/components/courses/common/course-youtube-lecture";

const CAMS = () => {
  return (
    <div>
      {" "}
      <PopUp slug="CAMS" />
      <CourseHero />
      <CamsAbout />
      <CourseTopStudent
        courseSlug="cams"
        needPrefix="true"
        title="From CAMS Course"
      />
      <CamsCourseCurriculum />
      <CamsResult />
      <CamsJourney />
      <CamsWhyAia />
      <CamsHighlight />
      <CourseMap courseCode="CAMS" />
      <CamsReview />
      <CourseYoutubeLecture courseSlug="cams" />
      <CourseYoutube courseSlug="cams" />
      <AboutTrainerSection path="faculty_cams.webp" />
      <CfeCourseLms />
      <CamsUnique />
      <CamsAchivers />
      <CamsConnection path="how_it_works_cams.webp" />
      <HomeAlumniWork />
      <CamsFaq />
    </div>
  );
};

export default CAMS;
