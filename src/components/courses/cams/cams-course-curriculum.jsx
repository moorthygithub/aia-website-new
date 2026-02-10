import CourseCurriculum from "../common/course-curriculam";

const curriculumData = [
  {
    id: 1,
    title: "Understanding the Risks and Methods of Financial Crime",
    content: [
      "Money Laundering and Financial Crime",
      "Money Laundering Risks in Financial Services",
      "Money Laundering Risks in Nonbank Financial Institutions",
      "Money Laundering Risks in DNFBPs and Other High-Risk Sectors",
    ],
  },
  {
    id: 2,
    title: "Global AFC Frameworks, Governance, and Regulations",
    content: [
      "Global AFC Standards and Guidance",
      "AFC Regulations and Regimes",
      "Use of Guidance and AFC Cooperation",
    ],
  },
  {
    id: 3,
    title: "Building an AFC Compliance Program",
    content: [
      "Components of an AFC Program",
      "Risk Assessment",
      "Design your AFC Program and Controls",
      "Transaction Monitoring and Investigation",
      "Concluding Investigations and Coordinating with Law Enforcement",
    ],
  },
  {
    id: 4,
    title: "Tools and Technologies to Fight Financial Crimes",
    content: [
      "Technology for AFC Compliance",
      "Technology for Customer Onboarding",
      "Technology for Ongoing Monitoring and Investigations",
      "Data Collection and Preparation",
    ],
  },
];

const CamsCourseCurriculum = () => {
  return (
    <>
      <CourseCurriculum
        title="CAMS Course Overview"
        description={` The Certified Anti-Money Laundering Specialist (CAMS) certification is the globally recognised benchmark for professionals working in Anti-Money Laundering (AML), Counter-Terrorist Financing (CTF), and financial crime compliance. It is widely recognised across banks, financial institutions, fintechs, consulting firms, and regulatory environments.<br/> \nThe CAMS program focuses on real-world AML applications, regulatory expectations, and effective financial crime risk management. Its curriculum is designed to equip professionals with a practical, risk-based understanding of AML frameworks, which helps them to evaluate control effectiveness, identify financial crime risks, and respond appropriately to suspicious activity within complex institutional environments.<br/> \n <strong> At AIA, we design a CAMS prep program aligning with the latest CAMS Version 7 exam framework, </strong> ensuring coverage of all key knowledge areas tested in the examination, while maintaining a strong focus on practical understanding relevant to today's evolving financial crime landscape.`}
        curriculumData={curriculumData}
      />
    </>
  );
};

export default CamsCourseCurriculum;
