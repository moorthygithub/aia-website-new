import React from "react";

const CourseHighLight = ({
  badgeText,
  title,
  description,
  stats,
  logos,
}) => {
  return (
    <div className="py-2">
      <div className="max-w-340 mx-auto">
   
        <div className="text-center pb-2 border border-[#0F3652] ">
          {badgeText && (
            <p className="text-[#F3831C] text-xs mt-2 font-semibold uppercase tracking-widest mb-4">
              {badgeText}
            </p>
          )}

          <h2 className="text-4xl md:text-5xl font-bold mb-2 leading-tight text-[#0F3652]">
            {title}
          </h2>

          <p className="text-[#0F3652] max-w-5xl mx-auto text-base leading-relaxed">
            {description}
          </p>
        </div>

  
        <div className="grid grid-cols-2 md:grid-cols-4 border-l border-r border-[#0F3652] gap-1 bg-[#0F3652]/10 mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center px-6 py-4 border-r border-[#0F3652] last:border-r-0"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-1 text-[#0F3652]">
                {stat.value}
              </h3>
              <p className="text-sm text-[#0F3652]">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>

     
        {logos.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10 px-2 mx-auto text-white bg-[#0F3652]/5 border border-[#0F3652]">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="rounded-xl p-8 text-center transition-all duration-300 cursor-pointer bg-white flex items-center justify-center border border-[#F3831C]/20 hover:border-[#F3831C]"
            >
              <img
                src={logo.img}
                alt="Brand logo"
                className="max-w-full max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default CourseHighLight;