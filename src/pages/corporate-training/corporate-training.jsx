import AboutPartner from "@/components/about/about-partner";
import CorporateCarousel from "@/components/corporate-training/corporate-carousel";
// import CorporateCourse from "@/components/corporate-training/corporate-course";
import CorporateDeliver from "@/components/corporate-training/corporate-deliver";
import CorporateFaq from "@/components/corporate-training/corporate-faq";
import CorporateHighlight from "@/components/corporate-training/corporate-highlight";
import CorporateQuoteDialog from "@/components/corporate-training/corporate-quote";
import CorporateReview from "@/components/corporate-training/corporate-review";
import CorporateTrainer from "@/components/corporate-training/corporate-trainer";
import CorporateWhy from "@/components/corporate-training/corporate-why";
import CorporateWhyAia from "@/components/corporate-training/corporate-why-aia";
import CamsConnection from "@/components/courses/cams/cams-connection";
// import HomeCorporatePartner from "@/components/home/home-corporate-partner";
import HomeCourses from "@/components/home/home-courses";
import HomeHero from "@/components/home/home-hero";
import { CorporatecertificationCourses } from "@/data/certificationCourses";

const CorporateTraining = () => {
  return (
    <>
      {/* <CorporateBanner /> */}
      {/* <CourseHero path="corporate_training _banner.webp" /> */}
      <HomeHero slug="corporate-training" />

      <CorporateWhy />
      {/* <CorporateCourse /> */}
      <HomeCourses certificationCourses={CorporatecertificationCourses} />
      <CorporateWhyAia />

      <AboutPartner />
      {/* <HomeCorporatePartner /> */}
      {/* <CorporateQuote /> */}
      <CorporateQuoteDialog
        triggerText="Level Up Your Team"
        title="Level Up Your Team"
        description="Fill in your details and our experts will contact you shortly"
        userType="Corporate-Quote"
        quote="Invest in people because untrained teams can't execute great strategies."
        bottomcontent="Leadership Insight"
      />
      <CorporateDeliver />
      <CorporateCarousel />
      <CamsConnection
        path="how_it_works_corporate.webp"
        title="Here's Why Top Organizations Partner With Us"
      />
      {/* <CorporateCta /> */}
      <CorporateQuoteDialog
        triggerText="Talk to our Training Expert"
        title="Talk to our Training Expert"
        description="Fill in your details and our training experts will design a custom plan for your team"
        userType="Corporate-Training"
        quote="Let's Design Your Custom Training Plan Today!"
        topcontent="CUSTOM TRAINING"
      />

      <CorporateHighlight />
      <CorporateFaq />

      <CorporateTrainer />
      <CorporateReview />
    </>
  );
};

export default CorporateTraining;
