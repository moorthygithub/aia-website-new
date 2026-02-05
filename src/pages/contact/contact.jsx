
import ContactHero from "@/components/contact/contact-hero";
import ContactHighlight from "@/components/contact/contact-highlight";
import ContactReachOut from "@/components/contact/contact-reach-out";
import ContactRecentPassout from "@/components/contact/contact-recent-passout";
import HomeAlumniWork from "@/components/home/home-alumini-work";
import PopUp from "../../components/common/pop-up";
import ContactLocation from "@/components/contact/contact-location";
import ContactMap from "@/components/contact/contact-map";
import ContactTestimonial from "@/components/contact/contact-testimonial";
import ContactUnique from "@/components/contact/contact-unique";

const Contact = () => {
  return (
    <div>
      <PopUp slug="Contact" />
      <ContactHero />
      <ContactReachOut />
      <ContactHighlight />
      <ContactRecentPassout />
      <HomeAlumniWork />
      <ContactMap />
      <ContactUnique />
      <ContactTestimonial />
      <ContactLocation />
    </div>
  );
};

export default Contact;
