import AboutTrainerSection from "@/components/about/about-trainer-section";
import CourseAchivers from "@/components/common/course-achivers";
import CourseReview from "@/components/common/course-review";
import PopUp from "@/components/common/pop-up";
import CamsAbout from "@/components/courses/cams/cams-about";
import CamsConnection from "@/components/courses/cams/cams-connection";
import CamsCourseCurriculum from "@/components/courses/cams/cams-course-curriculum";
import CamsFaq from "@/components/courses/cams/cams-faq";
import CamsHighlight from "@/components/courses/cams/cams-highlight";
import CamsJourney from "@/components/courses/cams/cams-journey";
import CamsUnique from "@/components/courses/cams/cams-unique";
import CamsWhyAia from "@/components/courses/cams/cams-why-aia";
import CfeCourseLms from "@/components/courses/cfe-curriculam/cfe-course-lms";
import CourseBlog from "@/components/courses/common/course-blog";
import CourseHero from "@/components/courses/common/course-hero";
import CourseMap from "@/components/courses/common/course-map";
import CourseResult from "@/components/courses/common/course-result";
import CourseTopStudent from "@/components/courses/common/course-top-student";
import CourseYoutube from "@/components/courses/common/course-youtube";
import CourseYoutubeLecture from "@/components/courses/common/course-youtube-lecture";
import HomeAlumniWork from "@/components/home/home-alumini-work";

const CAMS = () => {
  return (
    <div>
      <PopUp slug="CAMS" />
      <CourseHero />
      <CamsAbout />
      <CourseTopStudent
        courseSlug="cams"
        needPrefix="true"
        title="From CAMS Course"
      />
      <CamsCourseCurriculum />
      <CourseResult
        course="CAMS"
        queryKey="cams-certificates"
        title="Proof of Excellence: Real ACAMS Results from Our Students!"
      />
      <CamsJourney />
      <CamsWhyAia />
      <CamsHighlight />
      <CourseMap courseCode="CAMS" />
      <CourseReview slug="CAMS" />
      <CourseYoutube courseSlug="cams" />
      <AboutTrainerSection path="faculty_cams.webp" />
      <CourseYoutubeLecture courseSlug="cams" />
      <CfeCourseLms
        title="Join AiA CAMS LMS"
        subtitle="Online Training and Certification Course"
        course="CAMS"
        buttonlabel="Begin Your Journey"
      />

      <CamsUnique />
      <CourseAchivers
        slug="CAMS"
        title="Meet the Professionals Who Successfully Cleared the CAMS with AIA"
      />
      <CourseBlog course="CAMS" />

      <CamsConnection
        title="The Right Certification Starts With the Right Choice"
        description="Find the certification that aligns with your background and carrer stage"
        images={[
          { image: "hiw_cfe.webp", link: "/cfe-curriculum" },
          { image: "hiw_cia.webp", link: "/cia-curriculum" },
          { image: "hiw_ciac.webp", link: "/cia-challenge-curriculum" },
        ]}
        buttonColors={["#a8e6f3", "#fee1c6", "#e2ffdc"]}
      />
      <HomeAlumniWork />
      <CamsFaq />
    </div>
  );
};

export default CAMS;
