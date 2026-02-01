import CourseCurriculum from "../common/course-curriculam";

const curriculumData = [
  {
    id: 1,
    title: "Internal Audit Fundamentals",
    content: [
      "CIA Part 1 - Internal Audit Fundamentals provides comprehensive coverage on the fundamentals of Internal Auditing, all about ethical norms and professionalism, core concepts of governance, risk management, and control frameworks. Last but not least, give exposure to potential fraud risks, thereby helping professionals stay informed and prepared for the evolving demands of the internal auditing field.",
      "Foundation of Internal Auditing (35%)",
      "Ethics & Professionalism (20%)",
      "Governance, Risk Management and Control (30%)",
      "Fraud Risks (15%)",
    ],
  },
  {
    id: 2,
    title: "Internal Audit Engagement",
    content: [
      "CIA Part 2 - Internal Audit Engagement focuses on applying internal audit processes in real-world scenarios. It covers essential topics like how to plan an audit engagement, steps to gather the information, and ways of analysis & evaluation, and also covers the do’s & don’ts during supervision activities, ensuring auditors are equipped with the practical skills necessary for success in the field.",
      "Engagement Planning (50%)",
      "Information Gathering, Analysis & Evaluation (40%)",
      "Engagement Supervision & Communication (10%)",
    ],
  },
  {
    id: 3,
    title: "Internal Audit Function",
    content: [
      "CIA Part 3 focuses on the Internal Audit Function, highlighting critical internal audit operations and planning the activities of a department. The pointers that need to be adhered to ensure the quality of IA functions and various activities related to engagement reporting and monitoring are covered in this part. This part curriculum has been significantly changed in 2025 as compared to the previous one.",
      "Internal Audit Operations (25%)",
      "Internal Audit Plan (15%)",
      "Quality of Internal Audit Functions (15%)",
      "Engagement Result & Monitoring (45%)",
    ],
  },
];

const CiaCurrCourseCurriculum = () => {
  return (
    <CourseCurriculum
      title="CIA Course Curriculum"
       description={`The Certified Internal Auditor (CIA) is a globally recognized professional certification across 170+ countries, awarded by IIA. This program covers key areas such as internal controls, risk assessment, fraud risks, information technology, and professional ethics, equipping candidates with the skills needed to operate in complex business environments.  <br/> \nWith its global standards-based approach, CIA prepares professionals to add value, strengthen governance, and support organizational integrity. AIA’s CIA preparation program supports candidates across all three parts of the CIA exam, aligned with the latest IIA syllabus updates for 2026, with a strong focus on concept clarity, practical application, and exam readiness.
`}
      curriculumData={curriculumData}
    />
  );
};

export default CiaCurrCourseCurriculum;
