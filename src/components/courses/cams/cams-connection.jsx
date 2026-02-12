import { IMAGE_PATH } from "@/api/base-url";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import React from "react";
import { useNavigate } from "react-router-dom";

const CamsConnection = ({
  title,
  highlight1,
  images = [],
  description,
  description1,
}) => {
  const navigate = useNavigate();

  return (
    <div className="py-8">
      {images.length > 0 && (
        <>
          <SectionHeading
            title={title || ""}
            highlight1={highlight1 || ""}
            align="center"
            description={description || ""}
            description1={description1 || ""}
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-16">
            {images.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(item.link)}
                className="cursor-pointer overflow-hidden rounded-lg"
              >
                <img
                  src={`${IMAGE_PATH}/${item.image}`}
                  alt={`Cams Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CamsConnection;
