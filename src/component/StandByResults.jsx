import React from "react";

const StandbyResult = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Image */}
        <div className="h-80 bg-gray-300 rounded-xl flex items-center justify-center">
          <p className="text-gray-500">Image Placeholder</p>
        </div>

        {/* Right Side Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Standby Result
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Get your exam results instantly. AIA ensures that certified
            achievers can track their progress and access performance insights
            quickly and securely.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            View Results
          </button>
        </div>
      </div>
    </section>
  );
};

export default StandbyResult;
