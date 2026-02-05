
import CourseMap from "@/components/courses/common/course-map";
import CourseTopStudent from "@/components/courses/common/course-top-student";
import EnrollFaq from "@/components/enroll/enroll-faq";
import EnrollHighlight from "@/components/enroll/enroll-highlight";
import EnrollReview from "@/components/enroll/enroll-review";
import HomeAlumniWork from "@/components/home/home-alumini-work";

const Enrool = () => {
  return (
    <div>
      <EnrollHighlight />
      <CourseTopStudent
        courseSlug="Enroll-Now"
        needPrefix="true"
        title="From Enroll Course"
      />
      <HomeAlumniWork />
      <CourseMap courseCode="Enroll-Now" />
      <EnrollReview />
      <EnrollFaq />
    </div>
  );
};

export default Enrool;
