import AboutSection from "@/components/about/about-section";

import AboutMissionSection from "@/components/about/about-mission-section";
import AboutTestimonial from "@/components/about/about-testimonial";
import AboutTrainerSection from "@/components/about/about-trainer-section";

import AboutHighlight from "@/components/about/about-highlight";
import AboutJourney from "@/components/about/about-journey";
import AboutPartner from "@/components/about/about-partner";
import AboutReview from "@/components/about/about-review";
import OfficeCeleberation from "@/components/common/celeberation";
import PopUp from "@/components/common/pop-up";
import CourseYoutubeLecture from "@/components/courses/common/course-youtube-lecture";
import HomeCourses from "@/components/home/home-courses";
import HomeHero from "@/components/home/home-hero";
import HomePrCarousel from "@/components/home/home-pr-carousel";
import certificationCourses from "@/data/certificationCourses";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <PopUp slug="about-aia" />
      {/* <AboutHeroSection /> */}
      <HomeHero slug="about-aia" />
      <AboutSection />
      <AboutTrainerSection />
      <AboutTestimonial />
      <AboutMissionSection />
      <AboutHighlight />
      <HomePrCarousel />
      <AboutJourney />
      <HomeCourses certificationCourses={certificationCourses} />
      <AboutPartner />
      {/* <HomeCorporatePartner /> */}
      <CourseYoutubeLecture courseSlug="about-aia" />
      <AboutReview />
      <OfficeCeleberation
        title="Inside Life at AIA"
        description="Snapshots from AIA’s workplace where teamwork, milestones, and shared wins come together - reflecting the culture behind everything we build."
      />
    </div>
  );
};

export default AboutPage;
