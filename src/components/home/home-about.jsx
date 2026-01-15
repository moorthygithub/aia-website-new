import CourseAbout from "../courses/common/course-about";


















const HomeAbout=()=> {
 

  return (
    <>
      <CourseAbout
  badgeText="Empowering Professionals Through Global Certifications & Structured Approach"
  heading="Excellence in Professional Education"
  description={`
The Academy of Internal Audit (AIA) is a leading professional training institute dedicated to helping aspirants succeed in international certification programs. Beyond clearing exams, AIA focuses on building real-world competence in learners for audit, risk, and compliance roles.
\n
Guided by industry experts with hands-on experience, our practical training ensures learners not only understand concepts but can also apply them effectively in professional scenarios. Today, AIA has expanded its reach across 32+ countries within 5 years of its journey, along with a 99.6% success rate and high learner satisfaction, guiding professionals toward respected international certifications with confidence and clarity.



`}
buttonText="Know more about AIA"
  aboutStats={[
    { display: "50,000+ Hours", title: "Expert Mentoring Sessions" ,show:'true' },
    { display: "99.6% Success", title: "Success Rate" ,show:'true'},
    { display: "1,500+", title: "Success Stories",show:'true' },
    { display: "32+ Countries", title: "Served",show:'true' },
  ]}
/>

    </>
  );
}



export default HomeAbout