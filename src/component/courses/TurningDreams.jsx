import React from "react";

const TurningDreams = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Turning Dreams into Certifications – AIA’s Impact in Their Own Words
        </h2>

        {/* Video Placeholder Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 h-56 rounded-2xl flex items-center justify-center"
            >
              <p className="text-gray-500 text-lg">YouTube Video </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TurningDreams;
