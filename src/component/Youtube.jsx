import React from "react";

const Youtube = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* 1. YouTube Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            VISIT OUR YOUTUBE CHANNEL
          </h2>

          {/* Carousel Placeholder */}
          <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center">
            <p className="text-gray-500 text-lg">
              YouTube Carousel Placeholder
            </p>
          </div>
        </div>
      </section>

      {/* 2. Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            What Our Students Say About Us
          </h2>

          {/* Carousel Placeholder */}
          <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center">
            <p className="text-gray-500 text-lg">
              Testimonials Carousel Placeholder
            </p>
          </div>
        </div>
      </section>

      {/* 3. Alumni Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            OUR ALUMNI WORK FOR
          </h2>

          {/* Marquee Carousel Placeholder */}
          <div className="h-32 bg-gray-200 rounded-xl flex items-center justify-center mb-12">
            <p className="text-gray-500 text-lg">
              Alumni Marquee Carousel Placeholder
            </p>
          </div>
        </div>
      </section>

      {/* Optional space at the bottom */}
      <div className="h-20"></div>
    </div>
  );
};

export default Youtube;
