import ContactHero from "@/components/contact/contact-hero";
import ContactHighlight from "@/components/contact/contact-highlight";
import ContactLocation from "@/components/contact/contact-location";
import ContactMap from "@/components/contact/contact-map";
import ContactReachOut from "@/components/contact/contact-reach-out";
import ContactTestimonial from "@/components/contact/contact-testimonial";
import ContactUnique from "@/components/contact/contact-unique";
import CourseTopStudent from "@/components/courses/common/course-top-student";
import HomeAlumniWork from "@/components/home/home-alumini-work";
import PopUp from "../../components/common/pop-up";

const Contact = () => {
  return (
    <div>
      <PopUp slug="Contact" />
      <ContactHero />
      <ContactReachOut />
      <ContactHighlight />
      {/* <ContactRecentPassout /> */}
      <CourseTopStudent
        courseSlug="all"
        needPrefix="false"
        title="Recent Passout Students"
        subtitle="Our successful graduates making a difference in the industry"
      />
      <HomeAlumniWork />
      <ContactMap />
      <ContactUnique />
      <ContactTestimonial />
      <ContactLocation />
    </div>
  );
};

export default Contact;
