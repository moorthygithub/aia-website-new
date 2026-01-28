


import HomeAccredited from "@/components/home/home-accredited";
import HomeContact from "@/components/home/home-contact";

import HomeCorporatePartner from "@/components/home/home-corporate-partner";
import HomePassout from "@/components/home/home-passout";

import HomeReview from "@/components/home/home-review";
import HomeAlumniWork from "@/components/home/home-alumini-work";
import HomeCourses from "@/components/home/home-courses";
import HomeBlogs from "@/components/home/home-blogs";
import HomeFaq from "@/components/home/home-faq";
import HomeYoutube from "@/components/home/home-youtube";
import HomeAbout from "@/components/home/home-about";
import PopUp from "@/components/common/pop-up";
import HomePrCarousel from "@/components/home/home-pr-carousel";
import HomeHero from "@/components/home/home-hero";







export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <PopUp  slug="home"/>
      <HomeHero />
      <HomeAbout />
      <HomeContact/>
      <HomeAccredited/>
      <HomeCourses/>
      <HomeCorporatePartner/>
      <HomePassout/>
      <HomeReview/>
      <HomeAlumniWork/>
      <HomeYoutube/>
      <HomeBlogs/>
      <HomePrCarousel/>
   
      <HomeFaq/>


    </div>
  );
}
