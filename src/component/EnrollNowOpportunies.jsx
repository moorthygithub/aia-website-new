import React from "react";

const EnrollNowOpportunies = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Secure Your Seat with AIA. Unlock Unlimited Opportunities.
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Content Layout */}
        <div>
          {/* Left – Video Placeholder */}
          <div className="bg-black/90 h-[320px] rounded-2xl flex items-center justify-center">
            <p className="text-white text-lg">Video Will Come Here</p>
          </div>

          {/* Right – Bank Details Box */}
          <div className="bg-white h-[400px] mt-4 rounded-2xl shadow-lg p-8 space-y-4">
            <h2>Bank Details Will come Here</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollNowOpportunies;
