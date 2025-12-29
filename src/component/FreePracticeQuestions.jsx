import React from "react";

const FreePracticeQuestions = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Free Practice Questions
        </h2>

        {/* Accordion Placeholder */}
        <div className="max-w-4xl mx-auto space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            >
              {/* Accordion Header */}
              <button className="w-full text-left px-6 py-4 flex justify-between items-center text-gray-800 font-medium">
                Question {index + 1}: Lorem ipsum dolor sit amet?
                <span className="text-gray-500">+</span>
              </button>

              {/* Accordion Content Placeholder */}
              <div className="h-[120px] bg-gray-100 px-6 py-4">
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Content of the answer will appear here.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreePracticeQuestions;
