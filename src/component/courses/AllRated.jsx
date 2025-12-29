import React from "react";

const AllRated = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          278 Voices – All Rated ★★★★★
        </h2>

        {/* Content Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side – Vertical Carousel Placeholder */}
          <div className="h-[400px] bg-gray-200 rounded-2xl flex items-center justify-center">
            <p className="text-gray-500 text-lg">Vertical Carousel</p>
          </div>

          {/* Right Side – Image Placeholder */}
          <div className="h-[400px] bg-gray-300 rounded-2xl flex items-center justify-center">
            <p className="text-gray-600 text-lg">Image</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllRated;
