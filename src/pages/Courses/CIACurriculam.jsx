import AboutTrainerSection from "@/components/about/about-trainer-section";
import CourseAchivers from "@/components/common/course-achivers";
import CourseReview from "@/components/common/course-review";
import PopUp from "@/components/common/pop-up";
import CamsConnection from "@/components/courses/cams/cams-connection";
import CfeCurrUnique from "@/components/courses/cia-curriculam/cfe-curr-unique";
import CiaCurrAbout from "@/components/courses/cia-curriculam/cia-curr-about";
import CiaCurrCourseCurriculum from "@/components/courses/cia-curriculam/cia-curr-cource-curriculam";
import CiaCurrCourseLms from "@/components/courses/cia-curriculam/cia-curr-course-lms";
import CiaCurrFaq from "@/components/courses/cia-curriculam/cia-curr-faq";
import CiaCurrHighlight from "@/components/courses/cia-curriculam/cia-curr-highlight";
import CiaCurrJourney from "@/components/courses/cia-curriculam/cia-curr-journey";
import CiaCurrWhyAia from "@/components/courses/cia-curriculam/cia-curr-why-aia";
import CourseBlog from "@/components/courses/common/course-blog";
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
      <CourseReview slug="CIA" />
      <CourseYoutube courseSlug="CIA" />
      <AboutTrainerSection path="faculty_cia.webp" />
      <CourseYoutubeLecture courseSlug="cia-curriculum" />
      <CiaCurrCourseLms />
      <CfeCurrUnique />
      <CourseAchivers
        slug="CIA"
        title="From Aspirants to Certified Internal Auditors - Our Recent CIA Achievers"
      />
      <CourseBlog course="CIA" />
      <CamsConnection
        title="The Right Certification Starts With the Right Choice"
        description="Find the certification that aligns with your background and carrer stage"
        buttonColors={["#a8e6f3", "#e2ffdc", "#ffe38f"]}
        images={[
          { image: "hiw_cfe.webp", link: "/cfe-curriculum" },
          { image: "hiw_ciac.webp", link: "/cia-challenge-curriculum" },
          { image: "hiw_cams.webp", link: "/cams" },
        ]}
      />
      <HomeAlumniWork />
      <CiaCurrFaq />
    </div>
  );
};

export default CIACurriculam;
