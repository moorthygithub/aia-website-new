import React from "react";

const CFEFreeResources = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            CFE Free Resources
          </h1>

          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            CFE (Certified Fraud Examiner) Free Resources are designed to help
            aspiring professionals understand the fundamentals of fraud
            examination and prepare confidently for certification. These
            resources include expert-led sessions, conceptual walkthroughs, and
            practical insights covering key exam areas. Whether you are
            beginning your CFE journey or strengthening your preparation, these
            free materials provide valuable exposure to real-world scenarios,
            exam-focused strategies, and industry best practices curated by
            experienced faculty.
          </p>
        </div>
      </section>

      {/* YouTube Carousel – CFE Free Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            CFE (Certified Fraud Examiner) Free Resources
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-[220px] bg-gray-200 rounded-2xl flex items-center justify-center shadow-sm"
              >
                <span className="text-gray-500 text-sm">YouTube Video</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Lecture Videos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Free Lecture Videos (English + Hindi)
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-[220px] bg-gray-200 rounded-2xl flex items-center justify-center shadow-sm"
              >
                <span className="text-gray-500 text-sm">YouTube Video</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CFEFreeResources;
