import React from "react";

const CIAChallengeOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          CIA Challenge Exam Overview
        </h2>

        {/* Content Layout */}
        <div className=" gap-10 items-center">
          {/* Left – Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              What is the CIA Challenge Exam?
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. This
              section explains the CIA Challenge Exam, eligibility, structure,
              and benefits for professionals.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Designed for qualified professionals, the CIA Challenge Exam
              offers a fast-track pathway to earn the CIA certification.
            </p>
          </div>

          {/* Right – Image / Graphic Placeholder */}
          <div className="h-[320px] mt-10 bg-gray-200 rounded-2xl flex items-center justify-center">
            <span className="text-gray-500 text-lg">Overview Image</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CIAChallengeOverview;
