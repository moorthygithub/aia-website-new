import React from 'react'
import CourseLms from '../common/course-lms'

const CiaCourseLms = () => {
    const courseFeatures = [
  {
    title: "Customised Study Material",
    description:
      "AIA provides concise, customized study material designed specifically for the CIA Challenge Exam, focusing on key areas and integrated concepts aligned with IIA requirements."
  },
  {
    title: "Practice Questions",
    description:
      "Access 1,500+ exam-oriented practice questions with detailed answers and explanations to strengthen application-based understanding."
  },
  {
    title: "Recorded Training Sessions",
    description:
      "Get access to 70+ hours of in-depth recorded video lectures by Puneet Sir, structured for flexible, self-paced learning and clear conceptual coverage of the CIA Challenge syllabus."
  },
  {
    title: "Live Query Sessions",
    description:
      "Participate in weekly live query sessions with experienced faculty to clarify doubts, discuss practical audit scenarios, and build strong conceptual confidence."
  },
  {
    title: "Study Timeframe",
    description:
      "The CIA Challenge Exam typically requires 6–8 months of focused preparation depending on professional background and time commitment. Faster completion is possible with disciplined study."
  },
  {
    title: "Mock Tests",
    description:
      "Full-length CIA Challenge mock tests are conducted after syllabus completion to assess readiness, improve time management, and refine exam strategy."
  },
  {
    title: "Course Fee",
    description:
      "All components including e-books, practice questions, recorded lectures, live sessions, and mock tests are covered under one consolidated course fee."
  },
  {
    title: "Regular Content Updates",
    description:
      "All learning resources are regularly reviewed and updated in line with the latest IIA CIA Challenge Exam framework applicable for 2026."
  }
];

  return (
    <CourseLms
    cardTitle="AIA CIA Challenge Prep Course - What you will get"
    courseFeatures={courseFeatures}
    
    
    />
  )
}

export default CiaCourseLms