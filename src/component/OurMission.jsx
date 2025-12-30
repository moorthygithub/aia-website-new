import React from "react";
import { Target, Eye, Award, Globe } from "lucide-react";

const OurMission = () => {
  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <img
              src="crm/public/assets/images/about/mission.png"
              alt="Our Mission - Academy of Internal Audit"
              className="w-full rounded-lg shadow-sm border border-gray-200"
            />
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-blue-600"></div>
              <span className="text-sm font-medium text-blue-600 uppercase">Our Purpose</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our Mission is to provide the best training, study material and complete guidance related to Global Certifications to the aspirants at the lowest possible cost and let the corporate's have a right set of internal auditors and fraud examiners to safeguard their efforts and wealth.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-amber-500"></div>
              <span className="text-sm font-medium text-amber-600 uppercase">Future Focus</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Vision
            </h2>
            <div className="text-gray-700 leading-relaxed text-lg space-y-4">
              <p>
                At AIA, our vision is to empower professionals across the globe to learn the right skills, grow confidently in their careers, and demonstrate true professional excellence.
              </p>
              <p>
                We are committed to helping individuals stay ahead of emerging risks and controls, ensuring they remain relevant, ethical, and impactful in their roles.
              </p>
              <p>
                To explore more about how AIA can support your career journey with certification-driven training programs{" "}
                <a 
                  href="https://aia.in.net/" 
                  className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2 transition-colors inline-flex items-center gap-1"
                >
                  Click here to explore AIA courses
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </p>
            </div>
          </div>
          
          <div className="relative lg:order-1">
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center">
              <Eye className="w-8 h-8 text-amber-600" />
            </div>
            <img
              src="crm/public/assets/images/about/vision.png"
              alt="Our Vision - Academy of Internal Audit"
              className="w-full rounded-lg shadow-sm border border-gray-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;