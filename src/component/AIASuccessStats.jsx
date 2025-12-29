import React from "react";

const AIASuccessStats = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-14">
          AIA: Student's First Choice – Because We Deliver What We Promise.
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Stat Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">99%</h3>
            <p className="text-gray-600 text-sm">Success Rate</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-4xl font-bold text-orange-500 mb-2">30+</h3>
            <p className="text-gray-600 text-sm">Countries</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-4xl font-bold text-green-600 mb-2">10K+</h3>
            <p className="text-gray-600 text-sm">Students Trained</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-4xl font-bold text-purple-600 mb-2">15+</h3>
            <p className="text-gray-600 text-sm">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIASuccessStats;
