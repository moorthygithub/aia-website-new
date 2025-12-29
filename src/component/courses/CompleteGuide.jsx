import React from "react";

const CompleteGuide = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Your Complete Guide to CFE Mastery –Value, Learning, Format
        </h2>

        {/* Placeholder for content/cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 h-64 rounded-2xl flex items-center justify-center animate-pulse"
            >
              <p className="text-gray-500 text-lg">Guide Card Placeholder</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompleteGuide;
