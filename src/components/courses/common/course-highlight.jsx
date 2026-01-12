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
   
        <div className="text-center pb-2 border border-black ">
          {badgeText && (
            <p className="text-orange-500 text-xs mt-2 font-semibold uppercase tracking-widest mb-4">
              {badgeText}
            </p>
          )}

          <h2 className="text-4xl md:text-5xl font-bold mb-2 leading-tight text-orange-800">
            {title}
          </h2>

          <p className="text-gray-800 max-w-5xl mx-auto text-base leading-relaxed">
            {description}
          </p>
        </div>

  
        <div className="grid grid-cols-2 md:grid-cols-4 border-l border-r border-black gap-1 bg-gray-100 mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center px-6 py-4 border-r border-gray-700 last:border-r-0"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-1">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-800">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>

     
        {logos.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10 px-2 mx-auto text-white bg-linear-to-r from-black/5 to-black/5 border border-black">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="rounded-xl p-8 text-center transition-all duration-300 cursor-pointer bg-gray-50/5 flex items-center justify-center"
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
