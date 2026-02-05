import SectionHeading from "@/components/SectionHeading/SectionHeading";
import React from "react";

const CourseWhyAia = ({ heading, items }) => {
  return (
    <div className="max-w-340 mx-auto">
      <div className="w-full py-10 bg-cover bg-center">
        <SectionHeading title={heading} align="center" />
        {/* Cards */}
        <div className="md:flex justify-center">
          {items.map((item, i) => (
            <DiamondCard key={i} img={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseWhyAia;

const DiamondCard = ({ img, title }) => (
  <div className="group w-60 h-80 flex flex-col items-center justify-center">
    <div className="relative w-48 h-48">
      <div
        className="
          absolute inset-0 rotate-45 rounded-xl
          border-2 border-[#0F3652]/30
          transition-all duration-500
          group-hover:-translate-y-3 group-hover:border-[#0F3652] group-hover:shadow-lg
          group-hover:bg-linear-to-br group-hover:from-[#0F3652]/5 group-hover:via-white group-hover:to-[#0F3652]/5 
        "
      >
        <div className="absolute inset-0 -rotate-45 flex flex-col items-center justify-center p-4">
          <div className="w-20 h-20 bg-[#0F3652]/10 rounded-full shadow flex items-center justify-center mb-3">
            <img
              src={img}
              alt={title}
              className="max-w-14 max-h-14 object-contain"
            />
          </div>
          <h3 className="text-sm font-semibold text-[#0F3652] text-center">
            {title}
          </h3>
        </div>
      </div>
    </div>
  </div>
);
