import React from "react";



import AboutHeroSection from "@/components/about/about-hero-section";
import AboutSection from "@/components/about/about-section";

import AboutTrainerSection from "@/components/about/about-trainer-section";
import AboutMissionSection from "@/components/about/about-mission-section";
import AboutTestimonial from "@/components/about/about-testimonial";
import AboutCarousel from "@/components/about/about-carousel";
import HomeCourses from "@/components/home/home-courses";
import HomeCorporatePartner from "@/components/home/home-corporate-partner";
import HomeReview from "@/components/home/home-review";
import AboutHighlight from "@/components/about/about-highlight";
import AboutJourney from "@/components/about/about-journey";
import PopUp from "@/components/common/pop-up";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
          <PopUp  slug="About-Us"/>
      <AboutHeroSection />
      <AboutSection />
          <AboutTrainerSection />  {/* penidng  */}
          <AboutTestimonial/>        
            <AboutMissionSection />
            <AboutHighlight/>
            <AboutCarousel/> 
      <AboutJourney />

      <HomeCourses/>
      <HomeCorporatePartner/>
      <HomeReview/>
  
    
    </div>
  );
};

export default AboutPage;
