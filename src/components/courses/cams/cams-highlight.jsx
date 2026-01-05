import React from "react";

const CamsHighlight = () => {
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

  const logos = [
    { img: "https://aia.in.net/crm/public/assets/images/brand/IAO.jpeg" },
    { img: "https://aia.in.net/crm/public/assets/images/brand/IIA.png" },
    { img: "https://aia.in.net/crm/public/assets/images/brand/ISO.jpeg" },
    { img: "https://aia.in.net/crm/public/assets/images/brand/Gleim.jpeg" },
  ];

  return (
    <div className="py-2">
      <div className="max-w-340 mx-auto">
        
     
        <div className="text-center text-white bg-linear-to-r from-black via-yellow-900 to-black">
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

    
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 bg-gray-100 mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-6 py-4 border-r border-gray-700 last:border-r-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-800">{stat.subtitle}</p>
            </div>
          ))}
        </div>

    
        <div className="grid grid-cols-2 md:grid-cols-2 border  border-black lg:grid-cols-4 gap-6 py-10 px-2 mx-auto text-white bg-linear-to-r from-black/5 to-black/5">
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

      </div>
    </div>
  );
};

export default CamsHighlight;