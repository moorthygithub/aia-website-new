import CountUp from "@/components/common/count-up";
import React from "react";

const CourseHighLight = ({ badgeText, title, description, stats, logos }) => {
  return (
    <div className="  py-2">
      <div className="relative">
        <div className=" text-center mb-16 max-w-full ">
        
          <div className="max-w-5xl mx-auto">
            {badgeText && (
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#F3831C]"></div>
                <span className="text-[#F3831C] text-sm font-semibold uppercase tracking-[0.2em] px-4 py-2 bg-gradient-to-r from-orange-50 to-transparent rounded-full">
                  {badgeText}
                </span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#F3831C]"></div>
              </div>
            )}

            <h2 className="text-3xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#0F3652] via-[#1E5A8A] to-[#0F3652] bg-clip-text text-transparent">
                {title}
              </span>
            </h2>

            <p className="text-lg text-[#0F3652]/80 leading-relaxed max-w-5xl mx-auto px-4">
              {description}
            </p>
          </div>
        </div>

        <div className="absolute inset-0  pointer-events-none ">
            <svg
              className="w-full h-full"
              viewBox="0 0 1440 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,150 C300,50 500,250 800,150 C1100,50 1200,250 1440,150 L1440,300 L0,300 Z"
                fill="url(#waveGradient)"
                fillOpacity="0.1"
              />

              <path
                d="M0,150 C300,50 500,250 800,150 C1100,50 1200,250 1440,150"
                stroke="#0F3652"
                strokeWidth="2"
                strokeOpacity="0.3"
                fill="none"
              />

              <path
                d="M0,160 C200,100 400,200 600,160 C800,120 1000,200 1200,160 L1440,160"
                stroke="#F3831C"
                strokeWidth="2"
                strokeOpacity="0.4"
                fill="none"
              />

              <path
                d="M0,140 C250,60 450,240 700,140 C950,40 1150,240 1440,140"
                stroke="#0F3652"
                strokeWidth="3"
                strokeOpacity="0.2"
                fill="none"
                strokeDasharray="5,5"
              />

              <circle cx="0" cy="150" r="4" fill="#F3831C">
                <animateMotion
                  dur="20s"
                  repeatCount="indefinite"
                  path="M0,150 C300,50 500,250 800,150 C1100,50 1200,250 1440,150"
                />
              </circle>

              <circle cx="0" cy="160" r="3" fill="#0F3652" opacity="0.6">
                <animateMotion
                  dur="15s"
                  repeatCount="indefinite"
                  begin="2s"
                  path="M0,160 C200,100 400,200 600,160 C800,120 1000,200 1200,160 L1440,160"
                />
              </circle>

              <circle cx="0" cy="140" r="2" fill="#F3831C" opacity="0.4">
                <animateMotion
                  dur="25s"
                  repeatCount="indefinite"
                  begin="5s"
                  path="M0,140 C250,60 450,240 700,140 C950,40 1150,240 1440,140"
                />
              </circle>

              <defs>
                <linearGradient
                  id="waveGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#F3831C" />
                  <stop offset="50%" stopColor="#0F3652" />
                  <stop offset="100%" stopColor="#F3831C" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        {/* <div className="text-center pb-2  max-w-340 mx-auto">
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
        </div> */}

        <div className="grid grid-cols-2 md:grid-cols-4  gap-1 max-w-340 mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-6 py-4  last:border-r-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-1 text-[#0F3652]">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-sm text-[#0F3652]">{stat.subtitle}</p>
            </div>
          ))}
        </div>

        {logos.length > 0 && (
          <div className="">
            <div className=" max-w-340 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 py-10 px-2 mx-auto  ">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="rounded-xl p-8 text-center transition-all duration-300 cursor-pointer bg-white flex items-center justify-center hover:scale-150"
                >
                  <img
                    src={logo.img}
                    alt="Brand logo"
                    className="max-w-full max-h-20 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseHighLight;
