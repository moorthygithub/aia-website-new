import React from "react";

const NumbersSpeakLayout = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Numbers Speak Louder Than Words !!
        </h2>

        {/* Placeholder for counts */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-40 bg-gray-200 rounded-2xl animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersSpeakLayout;
