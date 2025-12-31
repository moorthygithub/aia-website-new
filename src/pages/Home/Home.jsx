import About from "../../component/About";

import Hero from "../../component/Hero";

import HomeAccredited from "@/component/home/home-accredited";
import HomeContact from "@/component/home/home-contact";

import HomeCorporatePartner from "@/component/home/home-corporate-partner";
import HomePassout from "@/component/home/home-passout";

import HomeReview from "@/component/home/home-review";
import HomeAlumniWork from "@/component/home/home-alumini-work";


export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <Hero />
      <About />
      <HomeContact/>
      <HomeAccredited/>
      <HomeCorporatePartner/>
      <HomePassout/>
      <HomeReview/>
      <HomeAlumniWork/>


      {/* <Courses />
      <WhyChoose />
 
      <GlobalStandards />
      <StandbyResult />
      <Youtube />

      <Blogs /> */}
    </div>
  );
}
