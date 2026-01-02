


import React from "react";
import { Users, Trophy, Award } from "lucide-react";

const stats = [
  { number: "1000+", label: "Students Trained", icon: <Users /> },
  { number: "99%", label: "Positive Results", icon: <Trophy /> },
  { number: "22+", label: "Faculty Experience", icon: <Award />, suffix: "Years" },
];

const AboutStatsSection = () => {
  return (
    <div className="py-16 bg-linear-to-b from-amber-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Numbers Speak Louder Than Words !!
            </h2>
            <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>

                <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center gap-1">
                  <span>{stat.number}</span>
                  {stat.suffix && (
                    <span className="text-2xl text-white/80">{stat.suffix}</span>
                  )}
                </div>

                <p className="text-lg text-white/90 font-medium">
                  {stat.label}
                </p>
                
                <div className="w-16 h-1 bg-white/40 mx-auto mt-4 group-hover:w-24 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default AboutStatsSection;
