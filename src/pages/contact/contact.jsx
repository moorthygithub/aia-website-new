import React from "react";



import PopUp from "../../components/common/pop-up";
import ContactHero from "@/components/contact/contact-hero";
import ContactReachOut from "@/components/contact/contact-reach-out";
import ContactHighlight from "@/components/contact/contact-highlight";
import ContactRecentPassout from "@/components/contact/contact-recent-passout";
import HomeAlumniWork from "@/components/home/home-alumini-work";

import ContactMap from "@/components/contact/contact-map";
import ContactUnique from "@/components/contact/contact-unique";
import ContactTestimonial from "@/components/contact/contact-testimonial";
import ContactLocation from "@/components/contact/contact-location";

const Contact = () => {
  return (
    <div>
       <PopUp  slug="Contact"/>
      <ContactHero />
      <ContactReachOut />

      <ContactHighlight />
      <ContactRecentPassout/>

    <HomeAlumniWork/>
    <ContactMap/>

<ContactUnique/>

<ContactTestimonial/>

<ContactLocation/>


    </div>
  );
};

export default Contact;
