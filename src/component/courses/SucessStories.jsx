import React from "react";

const SuccessStories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don’t Miss To Watch CFE Success Stories
          </h2>
          <p className="text-gray-600 text-lg">on AIA’s YouTube Channel</p>
        </div>

        {/* YouTube Carousel Placeholder */}
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
  );
};

export default SuccessStories;
