import React from "react";



import AboutHeroSection from "@/components/about/about-hero-section";
import AboutSection from "@/components/about/about-section";

import AboutTrainerSection from "@/components/about/about-trainer-section";
import AboutMissionSection from "@/components/about/about-mission-section";
import AboutTestimonial from "@/components/about/about-testimonial";

import HomeCourses from "@/components/home/home-courses";
import HomeReview from "@/components/home/home-review";
import AboutHighlight from "@/components/about/about-highlight";
import AboutJourney from "@/components/about/about-journey";
import PopUp from "@/components/common/pop-up";
import AboutPartner from "@/components/about/about-partner";
import HomePrCarousel from "@/components/home/home-pr-carousel";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
          <PopUp  slug="About-Us"/>
      <AboutHeroSection />
      <AboutSection />
          <AboutTrainerSection /> 
          <AboutTestimonial/>        
            <AboutMissionSection />
            <AboutHighlight/>
            <HomePrCarousel/> 
      <AboutJourney />

      <HomeCourses/>
      <AboutPartner/>
      <HomeReview/>
  
    
    </div>
  );
};

export default AboutPage;
