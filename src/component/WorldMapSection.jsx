import React from "react";

const WorldMapSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Global Presence
        </h2>

        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Learners from across the world trust AIA for professional excellence.
        </p>

        {/* World Map Placeholder */}
        <div className="w-full h-[450px] bg-gray-100 rounded-2xl shadow-sm flex items-center justify-center border">
          <p className="text-gray-500 text-lg">World Map Will Come Here</p>
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;
