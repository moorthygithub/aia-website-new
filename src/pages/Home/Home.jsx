import HomeAccredited from "@/components/home/home-accredited";
import HomeContact from "@/components/home/home-contact";

import HomeCorporatePartner from "@/components/home/home-corporate-partner";
import HomePassout from "@/components/home/home-passout";

import AllYoutube from "@/components/common/get-all-youtube";
import PopUp from "@/components/common/pop-up";
import HomeAbout from "@/components/home/home-about";
import HomeAlumniWork from "@/components/home/home-alumini-work";
import HomeBlogs from "@/components/home/home-blogs";
import HomeCourses from "@/components/home/home-courses";
import HomeFaq from "@/components/home/home-faq";
import HomeHero from "@/components/home/home-hero";
import HomePrCarousel from "@/components/home/home-pr-carousel";
import HomeResults from "@/components/home/home-results";
import HomeReview from "@/components/home/home-review";
import HomeYoutube from "@/components/home/home-youtube";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <PopUp slug="home" />
      <HomeHero />
      <HomeAbout />
      <HomeContact />
      <HomeCourses />
      <HomePassout />
      <HomeResults title="Verified CFE Exam Results Achieved by AIA Learners" />
      <HomeAccredited />
      <HomeReview />
      <AllYoutube />
      <HomeCorporatePartner />
      <HomePrCarousel />
      <HomeAlumniWork />
      <HomeYoutube />
      <HomeBlogs />
      <HomeFaq />
    </div>
  );
}
