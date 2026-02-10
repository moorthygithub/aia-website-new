import CourseAbout from "../common/course-about";

const CamsAbout = () => {
  return (
    <>
      <CourseAbout
        badgeText="BEST PREP COURSE FOR CAMS CERTIFICATION "
        heading="Join AIA’s CAMS Prep Course and Crack Your Certification in 1st Attempt."
        description={`The Certified Anti-Money Laundering Specialist (CAMS) certification by ACAMS is widely recognised as the leading global credential in Anti-Money Laundering and Financial Crime Compliance. With 50,000+ CAMS-certified professionals worldwide, it is the preferred qualification for AML, compliance, risk, and audit professionals across banks, fintechs, consulting firms, and regulators.\nAt the Academy of Internal Audit (AIA), we design our CAMS prep program in the best manner to provide comprehensive, end-to-end training to master all exam concepts. We created a structured approach that combines practical insights with exam-focused guidance and real-world AML application, ensuring you’re fully prepared for success. Whether you are preparing alongside a full-time job or returning to AML after a break, AIA’s CAMS prep course offers the structure, guidance, and flexibility required to clear the exam on your first serious attempt.`}
        aboutStats={[
          {
            display: "Detail-Oriented Recorded Video Classes",
            title: "Expert Mentoring Sessions",
          },
          {
            display:
              "Exam-Focused Practice Question / Concise Expert Curated Notes",
            title: "Success Rate",
          },
          {
            display: "CAMS V7 Update Study Material",
            title: "Success Stories",
          },
          { display: "CAMS Qualified Trainer", title: "Served" },
        ]}
      />
    </>
  );
};

export default CamsAbout;
