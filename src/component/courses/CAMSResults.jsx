import React from "react";

const CAMSResults = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Proof of Excellence
          </h2>
          <p className="text-gray-600 text-lg">
            Real ACAMS Results from Our Students!
          </p>
        </div>

        {/* Certificate Carousel Placeholder */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-[260px] bg-gray-200 rounded-2xl flex items-center justify-center shadow-sm"
            >
              <span className="text-gray-500 text-sm">Certificate Image</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CAMSResults;
