import AboutTrainerSection from "@/components/about/about-trainer-section";
import CourseAchivers from "@/components/common/course-achivers";
import CourseReview from "@/components/common/course-review";
import PopUp from "@/components/common/pop-up";
import CamsConnection from "@/components/courses/cams/cams-connection";
import CiaAbout from "@/components/courses/cia-challenge/cia-about";
import CiaCourseCurriculum from "@/components/courses/cia-challenge/cia-cource-curriculam";
import CiaCourseLms from "@/components/courses/cia-challenge/cia-course-lms";
import CiaFaq from "@/components/courses/cia-challenge/cia-faq";
import CiaHighlight from "@/components/courses/cia-challenge/cia-highlight";
import CiaJourney from "@/components/courses/cia-challenge/cia-journey";
import CiaUnique from "@/components/courses/cia-challenge/cia-unique";
import CiaWhyAia from "@/components/courses/cia-challenge/cia-why-aia";
import CourseBlog from "@/components/courses/common/course-blog";
import CourseHero from "@/components/courses/common/course-hero";
import CourseMap from "@/components/courses/common/course-map";
import CourseResult from "@/components/courses/common/course-result";
import CourseTopStudent from "@/components/courses/common/course-top-student";
import CourseYoutube from "@/components/courses/common/course-youtube";
import CourseYoutubeLecture from "@/components/courses/common/course-youtube-lecture";
import HomeAlumniWork from "@/components/home/home-alumini-work";

const CIAChallenge = () => {
  return (
    <div>
      <PopUp slug="CIA-Challenge-Curriculum" />

      <CourseHero />
      <CiaAbout />
      <CourseTopStudent
        courseSlug="ciac"
        needPrefix="false"
        title="We Stand by Results"
        subtitle="Meet our Latest CIA Challenge Achievers of November 2025!"
      />
      <CiaCourseCurriculum />
      <CourseResult
        course="CIAC"
        queryKey="cia-challenge-certificates"
        title="Proof of Excellence: CIA Challenge Exam Success Stories of AIA Achievers"
      />
      <CiaJourney />
      <CiaWhyAia />
      <CiaHighlight />
      <CourseMap courseCode="CIAC" />
      <CourseReview slug="CIAC" />
      <CourseYoutube courseSlug="ciac" />
      <AboutTrainerSection path="faculty_cia_challenge.webp" />
      <CourseYoutubeLecture courseSlug="cia-challenge-curriculum" />
      <CiaCourseLms />
      <CiaUnique />
      <CourseAchivers
        slug="ciac"
        title="Meet the Professionals Who Earned Their CIA Credential"
      />
      <CourseBlog course="CIAC" />

      <CamsConnection
        title="The Right Certification Starts With the Right Choice"
        description="Find the certification that aligns with your background and carrer stage"
        buttonColors={["#a8e6f3", "#fee1c6", "#ffe38f"]}
        images={[
          { image: "hiw_cfe.webp", link: "/cfe-curriculum" },
          { image: "hiw_cia.webp", link: "/cia-curriculum" },
          { image: "hiw_cams.webp", link: "/cams" },
        ]}
      />
      <HomeAlumniWork />
      <CiaFaq />
    </div>
  );
};

export default CIAChallenge;
