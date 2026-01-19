import React from "react";

const CourseJourney = ({ heading, highlight, steps, connectorImage }) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-340 mx-auto">
    
        <div className="text-center max-w-6xl mx-auto mb-14">
          <h3 className="text-[36px] font-bold mb-4 text-[#0F3652]">
            {heading}{" "}
            <span className="text-[#F3831C]">{highlight}</span>
          </h3>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-[#E7EBEE]
 hover:bg-[#0F3652] text-[#0F3652] hover:text-white rounded-xl min-h-65"
              >
           
                  <div className="absolute -top-4 border left-[45%] w-10 h-10 bg-[#F3831C] text-white rounded-full flex items-center justify-center text-xl font-bold italic">
                  {step.number}
                </div>

                <div className="p-8">
                  <h4 className="text-lg font-semibold mb-3">
                    {step.title}
                  </h4>

                  <ul className="text-sm leading-relaxed space-y-1 list-disc list-inside">
                    {step.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

         
          {connectorImage && (
            <div className="hidden lg:block absolute top-0 left-0 right-0 z-0 scale-105">
              <img
                src={connectorImage}
                alt="Step Connector"
                className="w-full"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseJourney;