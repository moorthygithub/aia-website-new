import AboutPartner from "@/components/about/about-partner";
import CorporateBanner from "@/components/corporate-training/corporate-banner";
import CorporateCarousel from "@/components/corporate-training/corporate-carousel";
import CorporateCourse from "@/components/corporate-training/corporate-course";
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
import HomeCorporatePartner from "@/components/home/home-corporate-partner";

const CorporateTraining = () => {
  return (
    <>
      <CorporateBanner />
      <CorporateWhy />
      <CorporateCourse />
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
      <CorporateTrainer />
      <CorporateFaq />
      <CorporateReview />
      <CorporateWhyAia/>
    </>
  );
};

export default CorporateTraining;
