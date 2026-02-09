import AboutTrainerSection from "@/components/about/about-trainer-section";
import HomeAlumniWork from "@/components/home/home-alumini-work";

import CamsConnection from "@/components/courses/cams/cams-connection";
import CourseHero from "@/components/courses/common/course-hero";

import CourseYoutube from "@/components/courses/common/course-youtube";

import CfeAchivers from "@/components/courses/cfe-curriculam/cfe-achivers";

import CfeAbout from "@/components/courses/cfe-curriculam/cfe-about";
import CfeCourseCurriculum from "@/components/courses/cfe-curriculam/cfe-cource-curriculam";
import CfeHighlight from "@/components/courses/cfe-curriculam/cfe-highlight";
import CfeJourney from "@/components/courses/cfe-curriculam/cfe-journey";
import CfeUnique from "@/components/courses/cfe-curriculam/cfe-unique";
import CfeWhyAia from "@/components/courses/cfe-curriculam/cfe-why-aia";

import CourseReview from "@/components/common/course-review";
import PopUp from "@/components/common/pop-up";
import CfeCourseLms from "@/components/courses/cfe-curriculam/cfe-course-lms";
import CfeFaq from "@/components/courses/cfe-curriculam/cfe-faq";
import CourseMap from "@/components/courses/common/course-map";
import CourseResult from "@/components/courses/common/course-result";
import CourseTopStudent from "@/components/courses/common/course-top-student";
import CourseYoutubeLecture from "@/components/courses/common/course-youtube-lecture";

const CFECurriculam = () => {
  return (
    <div>
      <PopUp slug="CFE-Curriculum" />
      <CourseHero />
      <CfeAbout />
      <CourseTopStudent
        courseSlug="cfe"
        subtitle="Professionals trained by AIA who achieved 90% and above, reflecting strong exam readiness and depth of subject knowledge."
        needPrefix="false"
        title="Professionals Who Excelled in the CFE Exam with Outstanding Scores"
      />
      <CfeCourseCurriculum />
      <CourseResult
        course="CFE"
        queryKey="cfe-certificates"
        title="Verified CFE Exam Results Achieved by AIA Learners"
      />
      <CfeJourney />
      <CfeWhyAia />
      <CfeHighlight />
      <CourseMap courseCode="CFE" />
      {/* <CourseYoutubeLecture courseSlug="cfe" /> */}
      <CourseYoutube courseSlug="cfe" />
      {/* <CfeReview /> */}
      <CourseReview slug="CFE" />
      <AboutTrainerSection path="faculty_cfe.webp" />
      <CfeCourseLms />
      <CfeUnique />
      <CfeAchivers title="Meet the Professionals Who Successfully Cleared the CFE with AIA" />
      <CamsConnection
        path="how_it_works_cfe.webp"
        title="The Right Certification Starts With the Right Choice"
        description="Find the certification that aligns with your background and carrer stage"
      />
      <HomeAlumniWork />
      <CfeFaq />
    </div>
  );
};

export default CFECurriculam;
