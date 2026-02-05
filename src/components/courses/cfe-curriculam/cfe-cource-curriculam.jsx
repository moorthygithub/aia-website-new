import CourseCurriculum from "../common/course-curriculam";

const curriculumData = [
  {
    id: 1,
    title: "FINANCIAL TRANSACTIONS & FRAUD SCHEMES",
    content: [
      "This module focuses on understanding how fraud occurs within financial transactions. Learners study accounting concepts from a fraud perspective and explore major fraud schemes such as financial statement fraud, asset misappropriation, bribery, corruption, identity theft, and technology-driven frauds. The emphasis is on recognising red flags, understanding fraud patterns, and learning how fraudsters exploit weaknesses across industries like banking, insurance, healthcare, and procurement.",
     
    ],
  },
  {
    id: 2,
    title: "LAW",
    content: [
      "The Law module builds a practical understanding of legal principles related to fraud examinations. It covers criminal and civil law, individual rights, rules of evidence, and legal procedures involved in fraud cases. Learners also study areas such as money laundering, tax fraud, securities fraud, and bankruptcy fraud, ensuring investigations are conducted lawfully, ethically, and in a manner that supports legal proceedings.",
     
    ],
  },
  {
    id: 3,
    title: "INVESTIGATION",
    content: [
      "This module develops the core skills required to conduct fraud investigations effectively. Learners gain hands-on understanding of investigation planning, interviewing techniques, document analysis, data analysis, digital forensics, and tracing illicit transactions. Strong focus is placed on evidence handling and report writing, enabling professionals to convert investigation findings into clear, structured, and defensible reports.",
     
    ],
  },
  {
    id: 4,
    title: "FRAUD PREVENTION & DETERRENCE",
    content: [
      "This module focuses on preventing fraud through strong governance and risk frameworks. This module covers criminal behaviour, white-collar crime, corporate governance, management responsibilities, and auditor roles in fraud prevention. In addition, the curriculum also highlights understanding of fraud risk assessment, internal controls, ethics, and fraud risk management, helping professionals design systems that reduce fraud risk and strengthen organisational integrity.",
    
    ],
  },
];

const CfeCourseCurriculum = () => {
  return (
    <CourseCurriculum
      title="CFE Course Curriculum"
      description={` The <strong>Certified Fraud Examiner (CFE) credential is globally recognised </strong> as a benchmark for professionals working in fraud detection, investigation, and prevention. The certification <strong> validates a professional’s ability to understand & identify fraud schemes </strong>, conduct structured investigations, and design effective fraud prevention frameworks across organisations.<br/> \nThe CFE exam is divided into <strong> four core modules </strong>, covering financial fraud schemes, legal aspects, investigation techniques, and fraud prevention and deterrence. Together, these modules build strong technical knowledge and practical judgment required to handle real-world fraud risks.<br/> \n At AIA, we design our <strong> CFE training program </strong> to ensure that aspirants develop a <strong> clear organisational understanding and an investigator mindset. </strong> The course structure helps learners view transactions through a fraud-risk framework, understand how controls fail, and analyse fraud from the perspective of how it occurs.`}
      curriculumData={curriculumData}
    />
  );
};

export default CfeCourseCurriculum;
