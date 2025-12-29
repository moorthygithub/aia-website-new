import React from "react";

const GlobalStandards = () => {
  const stats = [
    { number: "500+", label: "Certified Professionals" },
    { number: "1200+", label: "Courses Completed" },
    { number: "50+", label: "Expert Faculty" },
    { number: "25+", label: "Global Partners" },
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Advancing Global Standards in Audit Education
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="h-48 mt-3 bg-white rounded-xl flex justify-center items-center">
          <h1>Accredited by Leading Bodies Will Come Here</h1>
        </div>
      </div>
    </section>
  );
};

export default GlobalStandards;
