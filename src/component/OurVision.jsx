import React from "react";

const OurVision = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nec nulla at sapien facilisis bibendum. Curabitur a felis sed libero
            cursus gravida.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Right Side Image */}
        <div className="h-72 bg-gray-300 rounded-xl flex items-center justify-center">
          <p className="text-gray-500">Image Placeholder</p>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
