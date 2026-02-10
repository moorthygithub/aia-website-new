import React from "react";
import CourseWhyAia from "../common/course-why-aia";
import { IMAGE_PATH } from "@/api/base-url";

const CiaWhyAia = () => {
  return (
    <CourseWhyAia
      heading="Why Academy of Internal Audit"
      backgroundImage="https://christuniversity.in/images/bg_2.jpg"
      items={[
        {
          img: `${IMAGE_PATH}/teacher-svgrepo-com.png`,
          title: "CIA Qualified Instructor",
        },
        {
          img: `${IMAGE_PATH}/support-svgrepo-com.png`,
          title: "Training Support",
        },
        {
          img: `${IMAGE_PATH}/video-record-device-svgrepo-com.png`,
          title: "Access to Recorded Sessions",
        },
        {
          img: `${IMAGE_PATH}/Learning.png`,
          title: "IIA India Authorized Learning Partner",
        },
        {
          img: `${IMAGE_PATH}/books-svgrepo-com.png`,
          title: "Expert Study Notes",
        },
      ]}
    />
  );
};

export default CiaWhyAia;
