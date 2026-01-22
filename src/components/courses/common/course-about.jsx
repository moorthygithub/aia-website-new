import React from "react";
import { Link } from "react-router-dom";

const CourseAbout = ({ 
  badgeText, 
  heading, 
  description, 
  aboutStats,
  buttonText,
  buttonLink
}) => {

  return (
    <section className="py-18">
      <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            {badgeText && (
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-medium text-[#F3831C] uppercase tracking-wider">
                  {badgeText}
                </span>
              </div>
            )}

            {heading && (
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F3652] mb-6">
                {heading}
              </h2>
            )}

            {description && (
              <div className="text-[#0F3652] leading-relaxed space-y-4 mb-8">
                {description.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            )}

            {buttonText && (
              <Link to={buttonLink}>
              <span className="text-md font-semibold cursor-pointer  px-4 py-2  text-xs bg-[#F3831C] text-white rounded-none hover:bg-[#0F3652] transition-colors duration-300 mb-1">
                {buttonText}
              </span>
              </Link>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {aboutStats?.map((stat, index) => (
              <div
                key={index}
                className="
                  relative
                  border-2
                  hover:border-[#0F3652]
                  hover:bg-linear-to-br
                  from-[#F3831C]/20
                  via-[#F3831C]/10
                  to-[#F3831C]/30
                  h-26.5
                  py-9
                  px-3
                  rounded-lg
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  transition-all
                  duration-300
                  border-[#0F3652]
                  cursor-pointer
                "
              >
                <div className="text-xl font-bold mb-1 text-[#0F3652]">
                  {stat.display}
                </div>
                {stat.show == 'true' && (
                  <h4 className="text-base font-normal text-[#0F3652]">
                    {stat.title}
                  </h4>
                )}
                
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-1.5
                    bg-linear-to-r
                    from-[#F3831C]
                    via-[#F3831C]/80
                    to-[#F3831C]/60
                    rounded-b-lg
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseAbout;