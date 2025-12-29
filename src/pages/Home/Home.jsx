import About from "../../component/About";
import Blogs from "../../component/RecentBlogs";
import Courses from "../../component/Courses";
import CTA from "../../component/CTA";
import GlobalStandards from "../../component/GlobalStandards";
import Hero from "../../component/Hero";
import RecentBlogs from "../../component/RecentBlogs";
import StandbyResult from "../../component/StandByResults";
import Testimonials from "../../component/Testimonials";
import WhyChoose from "../../component/WhyChoose";
import Youtube from "../../component/Youtube";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <Hero />
      <Courses />
      <WhyChoose />
      <About />
      <GlobalStandards />
      <StandbyResult />
      <Youtube />

      <Blogs />
    </div>
  );
}
