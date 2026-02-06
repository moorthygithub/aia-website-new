import AboutTrainerSection from "@/components/about/about-trainer-section";
import CourseReview from "@/components/common/course-review";
import PopUp from "@/components/common/pop-up";
import CamsConnection from "@/components/courses/cams/cams-connection";
import CiaAbout from "@/components/courses/cia-challenge/cia-about";
import CiaAchivers from "@/components/courses/cia-challenge/cia-achivers";
import CiaCourseCurriculum from "@/components/courses/cia-challenge/cia-cource-curriculam";
import CiaCourseLms from "@/components/courses/cia-challenge/cia-course-lms";
import CiaFaq from "@/components/courses/cia-challenge/cia-faq";
import CiaHighlight from "@/components/courses/cia-challenge/cia-highlight";
import CiaJourney from "@/components/courses/cia-challenge/cia-journey";
import CiaUnique from "@/components/courses/cia-challenge/cia-unique";
import CiaWhyAia from "@/components/courses/cia-challenge/cia-why-aia";
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
      {/* <CiaResult /> */}
      <CourseResult
        course="CIAC"
        queryKey="cia-challenge-certificates"
        title="Proof of Excellence: CIA Challenge Exam Success Stories of AIA Achievers"
      />
      <CiaJourney />
      <CiaWhyAia />
      <CiaHighlight />
      <CourseMap courseCode="CIAC" />
      <CourseYoutubeLecture courseSlug="ciac" />
      <CourseYoutube courseSlug="ciac" />
      {/* <CiaRevew /> */}
      <CourseReview slug="CIAC" />
      <AboutTrainerSection path="faculty_cia_challenge.webp" />
      <CiaCourseLms />
      <CiaUnique />
      <CiaAchivers />
      <CamsConnection path="how_it_works_cia_challenge.webp" />
      <HomeAlumniWork />
      <CiaFaq />
    </div>
  );
};

export default CIAChallenge;
