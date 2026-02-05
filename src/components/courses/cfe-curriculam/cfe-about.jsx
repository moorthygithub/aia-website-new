import CourseAbout from "../common/course-about";

const CfeAbout = () => {
  return (
    <>
      <CourseAbout
        badgeText="Prepare for the CFE Exam with Confidence - Guided by AIA"
        heading="CFE Preparation That Builds Real Fraud Expertise in You"
        description={`
Certified Fraud Examiner (CFE) is a globally respected credential awarded by the ACFE, USA.\n At AIA, we help you understand fraud by learning how fraud schemes are planned, executed, detected, and investigated in real organisational settings. Our CFE preparation program combines structured learning, exam-focused practice, and expert guidance to help you build a practical fraud examiner’s mindset. \n This course is ideal for professionals from audit, finance, compliance, risk, or consulting who aim to clear the CFE exam and strengthen their credibility in fraud examination.`}
        aboutStats={[
          {
            display: "Recorded Video Sessions",
            title: "(60+ hours of structured learning)",
            show: "true",
          },
          {
            display: "CFE-Qualified Faculty",
            title: "(22+ years of industry experience)",
            show: "true",
          },
          {
            display: "Expert Curated Practice Questions",
            title: "(1,500+ exam-aligned questions)",
            show: "true",
          },
          {
            display: "Simplified Quick Study Notes",
            title: "(250 pages of concise notes)",
            show: "true",
          },
        ]}
      />
    </>
  );
};

export default CfeAbout;
