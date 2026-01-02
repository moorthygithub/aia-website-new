import React from "react";
import { Target, Eye } from "lucide-react";

const AboutMissionSection = () => {
  return (
    <div className="py-16 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg mb-2">Our Mission & Vision</p>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900  italic">
            Driving <span className="text-orange-900">Digital Transformation</span>  Forward
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Mission Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-600 relative">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 pt-3">Our Mission</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              Our Mission is to provide the best training, study material and complete guidance related to Global Certifications to the aspirants at the lowest possible cost and let the corporate's have a right set of internal auditors and fraud examiners to safeguard their efforts and wealth.
            </p>

           
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-600 relative">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 pt-3">Our Vision</h2>
            </div>
            
            <div className="text-gray-700 leading-relaxed space-y-4">
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
                  className="text-purple-700 hover:text-purple-900 font-medium underline"
                >
                  Click here to explore AIA courses
                </a>
              </p>
            </div>

          
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutMissionSection;