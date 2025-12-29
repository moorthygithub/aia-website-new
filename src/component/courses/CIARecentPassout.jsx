import React from "react";

const CIARecentPassout = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet our Recent Passouts
          </h2>
        </div>

        {/* Achievers Carousel Placeholder */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-[260px] bg-gray-200 rounded-2xl flex flex-col items-center justify-center shadow-sm"
            >
              {/* Image Placeholder */}
              <div className="h-32 w-32 bg-gray-300 rounded-full mb-4" />

              {/* Name */}
              <p className="font-semibold text-gray-800">Achiever Name</p>

              {/* Title */}
              <p className="text-sm text-gray-600">CIA Challenge</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CIARecentPassout;
