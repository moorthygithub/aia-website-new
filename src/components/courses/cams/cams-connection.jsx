import { IMAGE_PATH } from "@/api/base-url";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import React from "react";

const CamsConnection = ({
  title,
  highlight1,
  path = "how_it_works_cfe.webp",
  description,
  description1,
}) => {
  return (
    <div className="relative py-8 text-center">
      <SectionHeading
        title={title || ""}
        highlight1={highlight1 || ""}
        align="center"
        description={description || ""}
        description1={description1 || ""}
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
