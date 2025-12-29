import React from "react";

const CAMSGlobalClassroom = () => {
  const cards = ["Card 1", "Card 2", "Card 3", "Card 4"];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          A Global Classroom
        </h2>
        <p className="text-gray-600 mb-12">
          Students from 30+ Countries Prefer AIA CFE Prep Course
        </p>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-200 h-64 rounded-2xl flex items-center justify-center animate-pulse"
            >
              <p className="text-gray-500 text-lg">{card} Image</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CAMSGlobalClassroom;
