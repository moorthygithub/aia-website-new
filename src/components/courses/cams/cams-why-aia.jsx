import React from "react";
import CourseWhyAia from "../common/course-why-aia";
import { IMAGE_PATH } from "@/api/base-url";
import CfeJoinDialog from "../cfe-curriculam/join-prep";

const CamsWhyAia = () => {
  return (
    <>
      <CourseWhyAia
        heading="What sets AIA Apart"
        items={[
          {
            img: `${IMAGE_PATH}/teacher-svgrepo-com.png`,
            title: "CAMS Expert Faculty",
          },
          {
            img: `${IMAGE_PATH}/support-svgrepo-com.png`,
            title: "Exam Enrolment Support",
          },
          {
            img: `${IMAGE_PATH}/video-record-device-svgrepo-com.png`,
            title: "Detailed Video Lectures",
          },
          {
            img: `${IMAGE_PATH}/calender-svgrepo-com.png`,
            title: "Flexible Learning schedule",
          },
          {
            img: `${IMAGE_PATH}/books-svgrepo-com.png`,
            title: "CAMS V7 Study Material",
          },
        ]}
      />
      <CfeJoinDialog
        title="Join AiA CAMS LMS"
        subtitle="Online Training and Certification Course"
        course="CAMS"
        buttonlabel="Begin Your Journey"
      />
    </>
  );
};

export default CamsWhyAia;
