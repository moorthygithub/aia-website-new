import { IMAGE_PATH } from "@/api/base-url";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import React from "react";

const CamsConnection = ({ path = "how_it_works_cfe.webp" }) => {
  return (
    <div className="relative py-8 text-center">
      <SectionHeading
        title="How It"
        highlight1="Works?"
        align="center"
        description="Your Success Path, Simplified"
        description1="Your Certification Journey From Learning to Leadership"
      />
      <img
        src={`${IMAGE_PATH}/${path}`}
        alt="CAMS Hero Banner"
        className="inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default CamsConnection;
