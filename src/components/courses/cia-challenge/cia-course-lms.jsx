import React from "react";
import CourseLms from "../common/course-lms";
import CfeJoinDialog from "../cfe-curriculam/join-prep";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ENROLL_URL } from "@/api/base-url";

const CiaCourseLms = () => {
  const courseFeatures = [
    {
      title: "Customised Study Material",
      description:
        "AIA provides concise, customized study material designed specifically for the CIA Challenge Exam, focusing on key areas and integrated concepts aligned with IIA requirements.",
    },
    {
      title: "Practice Questions",
      description:
        "Access 1,500+ exam-oriented practice questions with detailed answers and explanations to strengthen application-based understanding.",
    },
    {
      title: "Recorded Training Sessions",
      description:
        "Get access to 70+ hours of in-depth recorded video lectures by Puneet Sir, structured for flexible, self-paced learning and clear conceptual coverage of the CIA Challenge syllabus.",
    },
    {
      title: "Live Query Sessions",
      description:
        "Participate in weekly live query sessions with experienced faculty to clarify doubts, discuss practical audit scenarios, and build strong conceptual confidence.",
    },
    {
      title: "Study Timeframe",
      description:
        "The CIA Challenge Exam typically requires 6–8 months of focused preparation depending on professional background and time commitment. Faster completion is possible with disciplined study.",
    },
    {
      title: "Mock Tests",
      description:
        "Full-length CIA Challenge mock tests are conducted after syllabus completion to assess readiness, improve time management, and refine exam strategy.",
    },
    {
      title: "Course Fee",
      description:
        "All components including e-books, practice questions, recorded lectures, live sessions, and mock tests are covered under one consolidated course fee.",
    },
    {
      title: "Regular Content Updates",
      description:
        "All learning resources are regularly reviewed and updated in line with the latest IIA CIA Challenge Exam framework applicable for 2026.",
    },
  ];

  return (
    <>
      <CourseLms
        cardTitle="AIA CIA Challenge Prep Course - What you will get"
        courseFeatures={courseFeatures}
      />

      <div className="flex justify-center gap-2">
        <CfeJoinDialog
          title="Join AiA CIA LMS"
          subtitle="Online Training and Certification Course"
          course="CIA"
          buttonlabel="Talk to Us"
        />
        <Button
          className="
              bg-[#F3831C] text-white
              px-6 py-2.5 rounded-none
              font-semibold
              hover:bg-[#F3831C]/90
              transition-all
          cursor-pointer
            "
        >
          <Link to={`${ENROLL_URL}`} target="_blank" rel="noopener noreferrer">
            Enroll Now
          </Link>
        </Button>
      </div>
    </>
  );
};

export default CiaCourseLms;
