import React from "react";

const CourseAbout = ({ 
  badgeText, 
  heading, 
  description, 
  aboutStats 
}) => {
  return (
    <section className="py-18">
      <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div>
            {badgeText && (
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                  {badgeText}
                </span>
              </div>
            )}

            {heading && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {heading}
              </h2>
            )}

            {description && (
              <div className="text-gray-600 leading-relaxed space-y-4 mb-8">
                {description.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            )}
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-4">
            {aboutStats?.map((stat, index) => (
              <div
                key={index}
                className="
                  relative
                  border-2
                 hover:border-blue-800
                  hover:bg-linear-to-br
                  from-blue-900/20
                  via-blue-800
                  to-blue-900/50
                  hover:text-blue-50
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
                  border-orange-400
                  cursor-pointer
                "
              >
                <div className="text-xl font-bold mb-1 ">
                  {stat.display}
                </div>
{stat.show == 'true' &&(
 <h4 className="text-base font-normal ">
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
                    from-orange-400
                    via-amber-400
                    to-yellow-300
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
