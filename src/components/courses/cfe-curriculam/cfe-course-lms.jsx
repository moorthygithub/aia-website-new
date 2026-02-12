import React from "react";
import CourseLms from "../common/course-lms";

const CfeCourseLms = ({image}) => {
  const courseFeatures = [
    {
      title: "CFE Personalised Study Material",
      description:
        "AIA provides concise, exam-focused study notes distilled from the extensive 2000 pages manual into 250 pages. This will help you cover key concepts efficiently & 10x advance your prep from others.",
    },
    {
      title: "Practice Questions",
      description:
        "Access 1,500+ CFE practice questions on AIA LMS with answers and detailed explanations. This will test your understanding and build confidence by closely matching the actual exam format.",
    },
    {
      title: "Recorded Video Lectures",
      description:
        "Get 60+ hours of detailed recorded video lectures by Puneet Sir, enabling flexible, self-paced learning while simplifying complex concepts through clear, structured explanations.",
    },
    {
      title: "Live Query Sessions",
      description:
        "Attend weekly live query sessions with experienced industry faculty to clarify doubts, interact with peers, and gain practical insights that strengthen conceptual clarity and real-world fraud understanding.",
    },
    {
      title: "Time Frame",
      description:
        "With a structured study plan and focused preparation, you can complete all four CFE modules in approximately 30 days by dedicating one week per module, subject to study time availability.",
    },
    {
      title: "8 Full-Length Mock Tests",
      description:
        "Attempt eight full-length mock tests, two per module, designed to replicate the real CFE exam pattern and help assess readiness, improve time management, and refine exam strategy.",
    },
    {
      title: "End-to-End CFE Exam Registration Support",
      description:
        "We offer complete support throughout the CFE exam registration process, guiding you step by step from application review to final exam scheduling, ensuring a smooth and stress-free experience.",
    },
    {
      title: "Updated Study Material",
      description:
        "All study content is regularly reviewed and updated to reflect the latest CFE syllabus and regulatory changes, ensuring your preparation remains relevant and aligned with exam expectations.",
    },
  ];
  return (
    <CourseLms
      cardTitle="What's Included in the AIA CFE Prep Course"
      courseFeatures={courseFeatures}
      image={image}
    />
  );
};

export default CfeCourseLms;
