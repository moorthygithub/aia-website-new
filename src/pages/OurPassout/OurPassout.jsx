import AllYoutube from "@/components/common/get-all-youtube";
import PopUp from "@/components/common/pop-up";
import CourseYoutube from "@/components/courses/common/course-youtube";
import HomeAlumniWork from "@/components/home/home-alumini-work";
import HomeReview from "@/components/home/home-review";
import PassoutBanner from "@/components/passout/passout-banner";
import PassoutResult from "@/components/passout/passout-result";
import PassoutSucess from "@/components/passout/passout-success";

const OurPassout = () => {
  return (
    <div>
      <PopUp slug="Passed-Out" />
      <PassoutBanner />
      <PassoutResult />
      <PassoutSucess />
      <AllYoutube
        title="Hear from Our Recently Qualified Professionals on YouTube"
        description="Watch AIA-trained professionals share their success stories, exam strategies, and career insights in exclusive interviews with Puneet Sir on YouTube."
      />
      <HomeReview />
      <HomeAlumniWork />
    </div>
  );
};

export default OurPassout;
