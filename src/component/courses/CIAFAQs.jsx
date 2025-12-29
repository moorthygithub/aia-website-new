import React from "react";

const CIAFAQs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          CIAFAQs
        </h2>

        {/* FAQ Layout */}
        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-gray-800">
                  Frequently Asked Question Title
                </h3>
                <span className="text-gray-400 text-xl">+</span>
              </div>

              {/* Answer Placeholder */}
              <div className="mt-3 text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. This
                answer content will expand here.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CIAFAQs;
