import React from "react";

const OurPassout = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Passout</h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our passouts reflect AIA’s commitment to excellence and professional
            growth. They are placed across leading organizations worldwide,
            demonstrating expertise, integrity, and real-world impact in audit,
            fraud examination, and compliance roles.
          </p>
        </div>
      </section>

      {/* LinkedIn Certificates Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Meet Our Passouts on LinkedIn
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-[260px] bg-gray-200 rounded-2xl flex items-center justify-center shadow-sm"
              >
                <span className="text-gray-500 text-sm">
                  Certificate / LinkedIn Card
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Qualified – YouTube */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Meet Recently Qualified on YouTube
          </h2>

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

      {/* CFE Students Speak */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Uncovering Success: CFE Students Speak
          </h2>

          <div className="h-[300px] bg-gray-200 rounded-2xl flex items-center justify-center">
            <span className="text-gray-500 text-lg">
              Content Will Appear Here
            </span>
          </div>
        </div>
      </section>

      {/* CAMS Alumni Speak */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Fighting Money Laundering Crime: CAMS Alumni Speak
          </h2>

          <div className="h-[300px] bg-gray-200 rounded-2xl flex items-center justify-center">
            <span className="text-gray-500 text-lg">
              Content Will Appear Here
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPassout;
