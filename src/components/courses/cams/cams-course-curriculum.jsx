import React, { useState } from "react";

const CamsCourseCurriculum = () => {
  const [activeTab, setActiveTab] = useState(1);

  const curriculumData = [
    {
      id: 1,
      title: "Understanding the Risks and Methods of Financial Crime",
      content: [
        "Money Laundering and Financial Crime",
        "Money Laundering Risks in Financial Services",
        "Money Laundering Risks in Nonbank Financial Institutions",
        "Money Laundering Risks in DNFBPs and Other High-Risk Sectors",
      ],
    },
    {
      id: 2,
      title: "Global AFC Frameworks, Governance, and Regulations",
      content: [
        "Global AFC Standards and Guidance",
        "AFC Regulations and Regimes",
        "Use of Guidance and AFC Cooperation",
      ],
    },
    {
      id: 3,
      title: "Building an AFC Compliance Program",
      content: [
        "Components of an AFC Program",
        "Risk Assessment",
        "Design your AFC Program and Controls",
        "Transaction Monitoring and Investigation",
        "Concluding Investigations and Coordinating with Law Enforcement",
      ],
    },
    {
      id: 4,
      title: "Tools and Technologies to Fight Financial Crimes",
      content: [
        "Technology for AFC Compliance",
        "Technology for Customer Onboarding",
        "Technology for Ongoing Monitoring and Investigations",
        "Data Collection and Preparation",
      ],
    },
  ];

  const activeContent = curriculumData.find(
    (item) => item.id === activeTab
  );

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <div className="bg-[#0A2463] text-white text-center py-5 px-4 rounded-lg mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold">
              CAMS Version 7 Curriculum
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8">
        
          {/* Left Tabs */}
          <div className="w-full md:w-2/5 space-y-4">
            {curriculumData.map((item) => (
              <button
                key={item.id}
                onMouseEnter={() => setActiveTab(item.id)}
                className={`
                  w-full text-left p-5   rounded-bl-4xl rounded-tr-4xl transition-all duration-300
                  border 
                  ${activeTab === item.id
                    ? "bg-[#0A2463]  text-white border-[#FF6B35]"
                    : "bg-white text-gray-800 border-gray-200 hover:bg-[#EFF6FF]"
                  }
                `}
              >
                <div className="flex items-center">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center mr-4 font-bold text-lg
                    ${activeTab === item.id
                      ? "bg-[#0A2463] text-white"
                      : "bg-[#FF6B35] text-white"
                    }
                  `}>
                    {item.id}
                  </div>
                  <span className="font-semibold text-base leading-tight">
                    {item.title}
                  </span>
                </div>
                <div className={`
                  mt-3 h-1 rounded-full transition-all duration-300
                  ${activeTab === item.id
                    ? "w-full bg-[#FF6B35]"
                    : "w-12 bg-[#0A2463]"
                  }
                `}></div>
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div className="w-full md:w-3/5">
            <div className="bg-white rounded-bl-4xl rounded-tr-4xl p-8 border border-gray-900 min-h-[400px] h-full">
              {activeContent?.content?.length ? (
                <div className="space-y-5">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Module {activeContent.id}: {activeContent.title}
                    </h3>
                    <div className="w-16 h-1 bg-[#0A2463] rounded-full"></div>
                  </div>
                  
                  {activeContent.content.map((text, index) => (
                    <div 
                      key={index} 
                      className="flex items-start hover:bg-[#EFF6FF] p-3 rounded-lg transition-colors duration-200"
                    >
                      <div className="w-2 h-6 bg-[#FF6B35] mr-3 flex-shrink-0 rounded-full mt-1" />
                      <p className="text-gray-700 text-base leading-relaxed flex-1">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full py-12">
                  <div className="text-gray-400 text-lg text-center py-8">
                    Hover over a module to view content
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamsCourseCurriculum;