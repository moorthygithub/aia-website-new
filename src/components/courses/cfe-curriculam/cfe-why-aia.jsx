import React from "react";
import CourseWhyAia from "../common/course-why-aia";
import { IMAGE_PATH } from "@/api/base-url";

const CfeWhyAia = () => {
  return (
    <CourseWhyAia
      heading="Why AIA"
      items={[
        {
          img: `${IMAGE_PATH}/teacher-svgrepo-com.png`,
          title: "CFE Expert Faculty",
        },
        {
          img: `${IMAGE_PATH}/support-svgrepo-com.png`,
          title: "Complete Prep Support",
        },
        {
          img: `${IMAGE_PATH}/video-record-device-svgrepo-com.png`,
          title: "Recorded Detailed Video Sessions",
        },
        {
          img: `${IMAGE_PATH}/calender-svgrepo-com.png`,
          title: "Flexible Learning Schedule",
        },
        {
          img: `${IMAGE_PATH}/books-svgrepo-com.png`,
          title: "Updated CFE Material",
        },
      ]}
    />
  );
};

export default CfeWhyAia;
