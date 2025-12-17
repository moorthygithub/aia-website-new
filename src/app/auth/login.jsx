import { HeroSlider } from "@/components/HeroSlider";
import { ImageCarousel } from "@/components/ImageCarousel";
import { DialogDrawerSection } from "@/components/DialogDrawerSection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CompanyMarquee } from "@/components/CompanyMarquee";
import { Testimonial } from "@/components/Testimonial";
import FAQs from "@/components/ui/text-reveal-faqs";
import Component from "@/components/ui/slideshow";
import HeroSection from "@/components/HeroSection";
import { TextRewind } from "@/components/ui/text-rewind";
import { TextGlitch } from "@/components/ui/text-glitch-effect";
import { MorphingText } from "@/components/ui/morphing-text";
import Text_03 from "@/components/irisui/text-03";
import Text_02 from "@/components/irisui/text-02";
import Text_06 from "@/components/irisui/text-06";
import Text_05 from "@/components/irisui/text-05";
import CustomerJourney from "../customer-journey/CustomerJourney";
import ChainLoop from "../chain-loop/ChainLoop";
import Navabar from "@/components/navbar/Navabar";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Login = () => {
  const texts = [
    "Hello",
    "Morphing",
    "Text",
    "Animation",
    "React",
    "Component",
    "Smooth",
    "Transition",
    "Engaging",
  ];
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Hero Slider */}
      <section className="mb-16">
        <Button onClick={() => navigate("/navbar")}>Header Section</Button>{" "}
      </section>
      <section className="mb-16">
        <HeroSlider />
      </section>
      <section className="mb-16">
        <HeroSection />
      </section>
      <section className="mb-16">
        <Component />
      </section>

      {/* Image Carousel */}
      <section className="mb-16">
        <ImageCarousel />
      </section>

      {/* Dialog & Drawer */}
      <section className="mb-16">
        <DialogDrawerSection />
      </section>
      <section className="mb-28 ">
        <TextRewind text="Rewind" />
      </section>
      <section className="mb-16 ">
        <MorphingText texts={texts} />;
      </section>

      <section className="mb-16 ">
        <Text_03 text="Rewind" />;
      </section>
      <section className="mb-16 ">
        <Text_02 text="Rewind" />;
      </section>
      <section className="mb-16 ">
        <Text_06 text="Rewind" />;
      </section>
      <section className="mb-16 ">
        <Text_05 text="Rewind" />;
      </section>

      {/* FAQ Accordion */}
      <section className="mb-16">
        <FAQAccordion />
      </section>
      <FAQs />
      {/* Company Marquee */}
      <section>
        <CompanyMarquee />
      </section>
      <section>
        <Testimonial />
      </section>
      <section>
        <CustomerJourney />
      </section>
      <section>
        <ChainLoop />
      </section>
    </div>
  );
};

export default Login;
