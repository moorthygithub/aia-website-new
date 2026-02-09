import AboutTrainerSection from "@/components/about/about-trainer-section";
import CourseReview from "@/components/common/course-review";
import PopUp from "@/components/common/pop-up";
import CamsConnection from "@/components/courses/cams/cams-connection";
import CfeCurrUnique from "@/components/courses/cia-curriculam/cfe-curr-unique";
import CiaCurrAbout from "@/components/courses/cia-curriculam/cia-curr-about";
import CiaCurrAchivers from "@/components/courses/cia-curriculam/cia-curr-achivers";
import CiaCurrCourseCurriculum from "@/components/courses/cia-curriculam/cia-curr-cource-curriculam";
import CiaCurrCourseLms from "@/components/courses/cia-curriculam/cia-curr-course-lms";
import CiaCurrFaq from "@/components/courses/cia-curriculam/cia-curr-faq";
import CiaCurrHighlight from "@/components/courses/cia-curriculam/cia-curr-highlight";
import CiaCurrJourney from "@/components/courses/cia-curriculam/cia-curr-journey";
import CiaCurrWhyAia from "@/components/courses/cia-curriculam/cia-curr-why-aia";
import CourseHero from "@/components/courses/common/course-hero";
import CourseMap from "@/components/courses/common/course-map";
import CourseResult from "@/components/courses/common/course-result";
import CourseTopStudent from "@/components/courses/common/course-top-student";
import CourseYoutube from "@/components/courses/common/course-youtube";
import CourseYoutubeLecture from "@/components/courses/common/course-youtube-lecture";
import HomeAlumniWork from "@/components/home/home-alumini-work";

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
      {/* <CiaCurrResult /> */}
      <CourseResult
        course="cia"
        queryKey="cia-certificates"
        title="Proof of Excellence: Real CIA Results of AIA Students!"
      />
      <CiaCurrJourney />
      <CiaCurrWhyAia />
      <CiaCurrHighlight />
      <CourseMap courseCode="CIA" />
      <CourseYoutubeLecture courseSlug="cia" />
      <CourseYoutube courseSlug="cia" />
      {/* <CiaCurrReview /> */}
      <CourseReview slug="CIA" />
      <AboutTrainerSection path="faculty_cia.webp" />
      <CiaCurrCourseLms />
      <CfeCurrUnique />
      <CiaCurrAchivers />
      <CamsConnection
        path="how_it_works_cia.webp"
        title="The Right Certification Starts With the Right Choice"
        description="Find the certification that aligns with your background and carrer stage"
      />
      <HomeAlumniWork />
      <CiaCurrFaq />
    </div>
  );
};

export default CIACurriculam;
