import AboutHeroSection from "@/components/about/about-hero-section";
import AboutSection from "@/components/about/about-section";

import AboutMissionSection from "@/components/about/about-mission-section";
import AboutTestimonial from "@/components/about/about-testimonial";
import AboutTrainerSection from "@/components/about/about-trainer-section";

import AboutHighlight from "@/components/about/about-highlight";
import AboutJourney from "@/components/about/about-journey";
import PopUp from "@/components/common/pop-up";
import CourseYoutubeLecture from "@/components/courses/common/course-youtube-lecture";
import HomeCorporatePartner from "@/components/home/home-corporate-partner";
import HomeCourses from "@/components/home/home-courses";
import HomePrCarousel from "@/components/home/home-pr-carousel";
import HomeReview from "@/components/home/home-review";
import AboutPartner from "@/components/about/about-partner";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <PopUp slug="About-Us" />
      <AboutHeroSection />
      <AboutSection />
      <AboutTrainerSection />
      <AboutTestimonial />
      <AboutMissionSection />
      <AboutHighlight />
      <HomePrCarousel />
      <AboutJourney />
      <HomeCourses />
       <AboutPartner />
      {/* <HomeCorporatePartner /> */}
      <CourseYoutubeLecture courseSlug="about-us" />
      <HomeReview />
    </div>
  );
};

export default AboutPage;
