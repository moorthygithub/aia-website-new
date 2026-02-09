import FreeResourceBanner from "@/components/cfe-free-resource/free-resource-banner";
import FreeResourceFlashCard from "@/components/cfe-free-resource/free-resource-flash-card";
import FreeResourcePracticeQuestion from "@/components/cfe-free-resource/free-resource-practice-question";
import FreeResourceReview from "@/components/cfe-free-resource/free-resource-review";
import FreeResourceYoutube from "@/components/cfe-free-resource/free-resource-youtube";
import CourseAchivers from "@/components/common/course-achivers";
import HomeAlumniWork from "@/components/home/home-alumini-work";

const FreeResources = () => {
  return (
    <>
      <FreeResourceBanner />
      <FreeResourceYoutube />
      <FreeResourceFlashCard />
      <FreeResourcePracticeQuestion />
      {/* <CourseTopStudent
        courseSlug="CFE-Free-Resources"
        needPrefix="false"
        title="Meet AIA’s Latest Achievers Redefining Success"
        subtitle="Professionals who strengthened and advanced their careers through CFE preparation with AIA"
      /> */}
      {/* <CfeAchivers
        title="Meet AIA’s Latest Achievers Redefining Success"
        description="Professionals who strengthened and advanced their careers through CFE preparation with AIA"
      /> */}

      <CourseAchivers
        slug="cia"
        title="From Aspirants to Certified Internal Auditors - Our Recent CIA Achievers"
        description="Professionals who strengthened and advanced their careers through CFE preparation with AIA"
      />
      <HomeAlumniWork />
      <FreeResourceReview />
    </>
  );
};

export default FreeResources;
