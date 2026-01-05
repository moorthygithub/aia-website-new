import React from "react";

const CamsJourney = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-340 mx-auto">


        <div className="text-center max-w-4xl mx-auto mb-14">
          <h3 className="text-[36px] font-bold mb-4">
            Your Complete Guide to CAMS Mastery –
            <span className="text-[#7a00df]"> Value, Learning, Format</span>
          </h3>
        </div>

    
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">

      
            <div className="relative bg-indigo-100 hover:bg-[#2d245d] text-indigo-900 hover:text-white rounded-xl min-h-65">
              <div className="absolute -top-4 border left-[45%] w-10 h-10 bg-indigo-900 text-white rounded-full flex items-center justify-center text-xl font-bold italic">
                1
              </div>

              <div className="p-8">
                <h4 className="text-lg font-semibold mb-3">
                  MOST VALUED FOR
                </h4>
                <ul className="text-sm leading-relaxed space-y-1 list-disc list-inside">
                  <li>AML Officers</li>
                  <li>Bank Auditors</li>
                  <li>KYC Executives</li>
                  <li>NBFC’s Professionals</li>
                  <li>Banking Professionals</li>
                  <li>Compliance Professionals</li>
                </ul>
              </div>
            </div>

     
            <div className="relative bg-indigo-100 hover:bg-[#2d245d] text-indigo-900 hover:text-white rounded-xl min-h-65">
              <div className="absolute -top-4 border left-[45%] w-10 h-10 bg-indigo-900 text-white rounded-full flex items-center justify-center text-xl font-bold italic">
                2
              </div>

              <div className="p-8">
                <h4 className="text-lg font-semibold mb-3">
                  WHAT YOU WILL LEARN
                </h4>
                <ul className="text-sm leading-relaxed space-y-1 list-disc list-inside">
                  <li>AML / CFT Controls</li>
                  <li>Global Standards</li>
                  <li>Best Due Diligence</li>
                  <li>AML Compliance Programs</li>
                  <li>Financial Crime Investigation</li>
                  <li>Anti Financial Crimes Techniques</li>
                </ul>
              </div>
            </div>

            <div className="relative bg-indigo-100 hover:bg-[#2d245d] text-indigo-900 hover:text-white rounded-xl min-h-65">
              <div className="absolute -top-4 border left-[45%] w-10 h-10 bg-indigo-900 text-white rounded-full flex items-center justify-center text-xl font-bold italic">
                3
              </div>

              <div className="p-8">
                <h4 className="text-lg font-semibold mb-3">
                  CAMS EXAM FORMAT
                </h4>
                <ul className="text-sm leading-relaxed space-y-1 list-disc list-inside">
                  <li>Single Exam</li>
                  <li>No Negative Marking</li>
                  <li>3.5 Hours (Exam Time)</li>
                  <li>Passing Score (75 Marks)</li>
                  <li>Multiple Choice Questions</li>
                  <li>Total 120 Questions (One Mark Each)</li>
                </ul>
              </div>
            </div>

          </div>

          <div className="hidden lg:block absolute top-0 left-0 right-0 z-0 scale-105">
            <img
              src="https://www.matebiz.com/wp-content/themes/matebiz/matebiz-new/assests/images/step-line.png"
              alt="Step Connector"
              className="w-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CamsJourney;
