






import React from 'react'
import CourseLms from '../common/course-lms'

const CiaCurrCourseLms = () => {
   const courseFeatures = [
  {
    title: "Customized Study Material",
    description:
      "AIA provides updated Gleim CIA study material (2026), aligned with the latest IIA syllabus to support structured and exam-focused preparation across all three CIA parts."
  },
  {
    title: "Practice Questions",
    description:
      "Candidates receive access to Gleim’s CIA practice software, featuring exam-style questions that strengthen conceptual understanding and application-based thinking."
  },
  {
    title: "Training Sessions",
    description:
      "Get 60+ hours of detailed recorded video lectures by Puneet Sir, enabling flexible, self-paced learning while simplifying complex concepts through clear, structured explanations."
  },
  {
    title: "Live Query Session",
    description:
      "Attend weekly live query sessions with experienced industry faculty to clarify doubts, interact with peers, and gain practical insights that strengthen conceptual clarity and real-world understanding."
  },
  {
    title: "Time Frame",
    description:
      "Each CIA part typically requires 2–3 months of focused preparation depending on prior knowledge and time commitment. Faster progress is possible with consistent study."
  },
  {
    title: "Mock Test",
    description:
      "Comprehensive CIA mock tests are conducted after syllabus completion to assess readiness and improve exam confidence."
  },
  {
    title: "Course Fee",
    description:
      "All components including study material, practice software, video lectures, live sessions, and mock tests are offered under a single consolidated course fee."
  },
  {
    title: "Regular Updates",
    description:
      "All study resources are regularly reviewed and updated in line with the latest IIA CIA syllabus and exam expectations to ensure relevant preparation."
  }
];

  return (
    <CourseLms
    cardTitle="AIA CIA Prep Course - What you will get"
    courseFeatures={courseFeatures}
    
    
    />
  )
}

export default CiaCurrCourseLms