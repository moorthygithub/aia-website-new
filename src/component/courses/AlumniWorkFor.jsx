import React from "react";

const AlumniWorkFor = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          OUR ALUMNI WORK FOR
        </h2>

        <div className="overflow-hidden">
          <div className="flex gap-6 animate-pulse">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="min-w-[160px] h-20 bg-gray-200 rounded-xl flex items-center justify-center"
              >
                <span className="text-gray-500 text-sm">Company Logo</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniWorkFor;
