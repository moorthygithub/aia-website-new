import AboutTrainerSection from "@/components/about/about-trainer-section";
import HomeAlumniWork from "@/components/home/home-alumini-work";
import CamsConnection from "@/components/courses/cams/cams-connection";
import CourseHero from "@/components/courses/common/course-hero";
import CourseYoutube from "@/components/courses/common/course-youtube";
import CfeCurrUnique from "@/components/courses/cia-curriculam/cfe-curr-unique";
import CiaCurrAbout from "@/components/courses/cia-curriculam/cia-curr-about";
import CiaCurrAchivers from "@/components/courses/cia-curriculam/cia-curr-achivers";
import CiaCurrCourseCurriculum from "@/components/courses/cia-curriculam/cia-curr-cource-curriculam";
import CiaCurrFaq from "@/components/courses/cia-curriculam/cia-curr-faq";
import CiaCurrHighlight from "@/components/courses/cia-curriculam/cia-curr-highlight";
import CiaCurrJourney from "@/components/courses/cia-curriculam/cia-curr-journey";
import CiaCurrResult from "@/components/courses/cia-curriculam/cia-curr-result";
import CiaCurrReview from "@/components/courses/cia-curriculam/cia-curr-review";
import CiaCurrWhyAia from "@/components/courses/cia-curriculam/cia-curr-why-aia";
import PopUp from "@/components/common/pop-up";
import CiaCurrCourseLms from "@/components/courses/cia-curriculam/cia-curr-course-lms";
import CourseMap from "@/components/courses/common/course-map";
import CourseTopStudent from "@/components/courses/common/course-top-student";
import CourseYoutubeLecture from "@/components/courses/common/course-youtube-lecture";

const CIACurriculam = () => {
  return (
    <div>
      {" "}
      <PopUp slug="CIA-Curriculum" />
      <CourseHero />
      <CiaCurrAbout />
      <CourseTopStudent
        courseSlug="cia"
        needPrefix="false"
        title="We Stand by Results "
        subtitle="Meet Our Recent Proud Achievers of CIA Part 1 & 2."
      />
      <CiaCurrCourseCurriculum />
      <CiaCurrResult />
      <CiaCurrJourney />
      <CiaCurrWhyAia />
      <CiaCurrHighlight />
      <CourseMap courseCode="CIA" />
      <CourseYoutubeLecture courseSlug="cia" />
      <CourseYoutube courseSlug="cia" />
      <CiaCurrReview />
      <AboutTrainerSection path="faculty_cia.webp" />
      <CiaCurrCourseLms />
      <CfeCurrUnique />
      <CiaCurrAchivers />
      <CamsConnection path="how_it_works_cia.webp" />
      <HomeAlumniWork />
      <CiaCurrFaq />
    </div>
  );
};

export default CIACurriculam;
