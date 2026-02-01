






import CourseAbout from "../common/course-about";



const CiaAbout=()=> {
 

  return (
    <>
      <CourseAbout
  badgeText="Best Prep Course For CIA Challenge Exam"
  heading="Prepare Confidently for the CIA Challenge Exam with AIA’s Expert-Led Training"
  description={`
The CIA Challenge Exam is a fast-track pathway, offered by The Institute of Internal Auditors (IIA), designed for qualified professionals to earn the Certified Internal Auditor (CIA) designation by passing a single comprehensive exam.
\n AIA is officially recognised by IIA India for a credible CIA Challenge Exam preparation program. With structured prep, we help eligible professionals to prepare confidently through focused learning, exam-oriented practice, aligned with the latest Challenge Exam framework. The training approach emphasises concept integration, application of IIA standards, and strategic exam readiness - helping candidates prepare with clarity and confidence.
`}
  aboutStats={[
    { display: "Recorded Video Classes", title: "Expert Mentoring Sessions" },
    { display: "Practice Questions", title: "Success Rate" },
    { display: "Experts Study Material", title: "Success Stories" },
    { display: "CIA Qualified Trainer", title: "Served" },
  ]}
/>

    </>
  );
}



export default CiaAbout