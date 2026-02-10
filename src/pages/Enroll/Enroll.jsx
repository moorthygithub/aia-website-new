import CourseYoutubeLecture from "@/components/courses/common/course-youtube-lecture";
import EnrollFaq from "@/components/enroll/enroll-faq";
import EnrollHighlight from "@/components/enroll/enroll-highlight";
import EnroolMap from "@/components/enroll/enrool-map";
import EnroolTopStudent from "@/components/enroll/enrool-top-student";
import HomeAlumniWork from "@/components/home/home-alumini-work";
import HomeReview from "@/components/home/home-review";

const Enrool = () => {
  return (
    <div>
      <EnrollHighlight />
      {/* <CourseTopStudent
        courseSlug="Enroll-Now"
        needPrefix="true"
        title="From Enroll Course"
      /> */}
      <EnroolTopStudent />
      {/* getAllPassoutStudents */}
      <HomeAlumniWork />
      <EnroolMap />
      {/* <EnrollReview /> */}
      <CourseYoutubeLecture courseSlug="enroll-now" />
      <HomeReview />
      <EnrollFaq />
    </div>
  );
};

export default Enrool;
