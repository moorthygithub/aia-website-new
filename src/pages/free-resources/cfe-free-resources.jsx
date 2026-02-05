import FreeResourceBanner from "@/components/cfe-free-resource/free-resource-banner";
import FreeResourceFlashCard from "@/components/cfe-free-resource/free-resource-flash-card";
import FreeResourcePracticeQuestion from "@/components/cfe-free-resource/free-resource-practice-question";
import FreeResourceYoutube from "@/components/cfe-free-resource/free-resource-youtube";
import CourseTopStudent from "@/components/courses/common/course-top-student";
import HomeAlumniWork from "@/components/home/home-alumini-work";
import HomeReview from "@/components/home/home-review";

const FreeResources = () => {
  return (
    <>
      <FreeResourceBanner />
      <FreeResourceYoutube />
      <FreeResourceFlashCard />
      <FreeResourcePracticeQuestion />

      <CourseTopStudent
        courseSlug="CFE-Free-Resources"
        needPrefix="false"
        title="Meet AIA’s Latest Achievers Redefining Success"
        subtitle="Professionals who strengthened and advanced their careers through CFE preparation with AIA"
      />
      <HomeAlumniWork />
      <HomeReview />
    </>
  );
};

export default FreeResources;
