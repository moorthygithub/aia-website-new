import React from "react";

const FreeFlashCards = () => {
  const modules = [
    "MODULE-I: FINANCIAL TRANSACTIONS AND FRAUD SCHEMES",
    "MODULE-II: LAW",
    "MODULE-III: INVESTIGATION",
    "MODULE-IV: FRAUD PREVENTION & DETERRENCE",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Free Flash Cards
        </h1>

        {/* Modules */}
        <div className="space-y-20">
          {modules.map((title, index) => (
            <div key={index}>
              {/* Module Heading */}
              <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center">
                {title}
              </h2>

              {/* Carousel Placeholder */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-[180px] bg-gray-200 rounded-2xl flex items-center justify-center shadow-sm"
                  >
                    <span className="text-gray-500 text-sm">Flash Card</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeFlashCards;
