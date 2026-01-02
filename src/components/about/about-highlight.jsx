import React from "react";
import { ShoppingCart, Plane, Heart, Building2, GraduationCap } from "lucide-react";

const AboutHighlight = () => {
  const stats = [
    {
      value: "50,000+ Hours",
      subtitle: "Expert Mentoring Sessions"
    },
    {
      value: "99.6%",
      subtitle: "Success Rate"
    },
    {
      value: "1,000+",
      subtitle: "Success Stories"
    },
    {
      value: "32+ Countries",
      subtitle: "Served"
    }
  ];

  const industries = [
    {
      icon: <ShoppingCart className="w-16 h-16" strokeWidth={1.5} />,
      name: "Ecommerce"
    },
    {
      icon: <Plane className="w-16 h-16" strokeWidth={1.5} />,
      name: "Travel & Hospitality",
      highlighted: true
    },
    {
      icon: <Heart className="w-16 h-16" strokeWidth={1.5} />,
      name: "Healthcare"
    },
    {
      icon: <Building2 className="w-16 h-16" strokeWidth={1.5} />,
      name: "Real Estate & Construction"
    },
    {
      icon: <GraduationCap className="w-16 h-16" strokeWidth={1.5} />,
      name: "Education"
    }
  ];

  return (
    <div className="  py-16">
      <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center text-white bg-linear-to-r from-black via-yellow-900 to-black ">
          <p className="text-orange-500 text-xs font-semibold uppercase tracking-widest mb-4">
            INDUSTRIES WE SERVE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Customized Digital Solutions For Every Industry
          </h2>
          <p className="text-gray-400 max-w-5xl mx-auto text-base leading-relaxed">
            We believe every industry is unique and needs customized solutions to thrive. Our web design and development services in India are for every industry, where we help our clients overcome challenges and achieve their goals.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2  md:grid-cols-4 gap-1   bg-gray-100 mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-6 py-4 border-r border-gray-700 last:border-r-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-800">{stat.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-10 px-2  mx-auto  text-white bg-linear-to-r from-black  to-black">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`
                rounded-xl p-8 text-center transition-all duration-300 cursor-pointer
                ${industry.highlighted 
                  ? 'bg-orange-900/40 hover:bg-orange-900/60' 
                  : 'bg-gray-900/60 hover:bg-gray-800/80'
                }
              `}
            >
              <div className="flex justify-center mb-6 text-gray-300">
                {industry.icon}
              </div>
              <p className="text-sm font-normal text-white">
                {industry.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AboutHighlight;