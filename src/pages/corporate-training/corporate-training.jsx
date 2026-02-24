import AboutPartner from "@/components/about/about-partner";
import CorporateBanner from "@/components/corporate-training/corporate-banner";
import CorporateCarousel from "@/components/corporate-training/corporate-carousel";
// import CorporateCourse from "@/components/corporate-training/corporate-course";
import CorporateCta from "@/components/corporate-training/corporate-cta";
import CorporateDeliver from "@/components/corporate-training/corporate-deliver";
import CorporateFaq from "@/components/corporate-training/corporate-faq";
import CorporateHighlight from "@/components/corporate-training/corporate-highlight";
import CorporateQuote from "@/components/corporate-training/corporate-quote";
import CorporateReview from "@/components/corporate-training/corporate-review";
import CorporateTrainer from "@/components/corporate-training/corporate-trainer";
import CorporateWhy from "@/components/corporate-training/corporate-why";
import CorporateWhyAia from "@/components/corporate-training/corporate-why-aia";
import CamsConnection from "@/components/courses/cams/cams-connection";
import CourseHero from "@/components/courses/common/course-hero";
// import HomeCorporatePartner from "@/components/home/home-corporate-partner";
import HomeCourses from "@/components/home/home-courses";
import { CorporatecertificationCourses } from "@/data/certificationCourses";

const CorporateTraining = () => {
  return (
    <>
      {/* <CorporateBanner /> */}
      <CourseHero path="corporate_training _banner.webp" />

      <CorporateWhy />
      {/* <CorporateCourse /> */}
      <HomeCourses certificationCourses={CorporatecertificationCourses} />
      <CorporateWhyAia />

      <AboutPartner />
      {/* <HomeCorporatePartner /> */}
      <CorporateQuote />
      <CorporateDeliver />
      <CorporateCarousel />
      <CamsConnection
        path="how_it_works_corporate.webp"
        title="Here's Why Top Organizations Partner With Us"
      />
      <CorporateCta />
      <CorporateHighlight />
      <CorporateFaq />

      <CorporateTrainer />
      <CorporateReview />
    </>
  );
};

export default CorporateTraining;
