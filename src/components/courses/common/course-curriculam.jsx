import React, { useState } from "react";

const CourseCurriculum = ({ title, curriculumData }) => {
  const [activeTab, setActiveTab] = useState(curriculumData?.[0]?.id || null);

  const activeContent = curriculumData.find(
    (item) => item.id === activeTab
  );

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

       
        <div className="mb-8">
          <div className="bg-[#0A2463] text-white text-center py-4 px-4 rounded-lg">
            <h1 className="text-xl sm:text-2xl font-bold">
              {title}
            </h1>
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row gap-6">

          
          <div className="w-full md:w-2/5 space-y-3">
            {curriculumData.map((item) => (
              <button
                key={item.id}
                onMouseEnter={() => setActiveTab(item.id)}
                className={`
                  w-full text-left p-4 rounded-bl-4xl rounded-tr-4xl transition-all duration-300
                  border
                  ${
                    activeTab === item.id
                      ? "bg-[#0A2463] text-white border-[#FF6B35]"
                      : "bg-white text-gray-800 border-gray-200 hover:bg-[#EFF6FF]"
                  }
                `}
              >
                <div className="flex items-center">
                  <div
                    className={`
                      w-9 h-9 rounded-full flex items-center justify-center mr-3 font-bold text-sm
                      ${
                        activeTab === item.id
                          ? "bg-[#0A2463] text-white"
                          : "bg-[#FF6B35] text-white"
                      }
                    `}
                  >
                    {item.id}
                  </div>
                  <span className="font-semibold text-sm leading-snug">
                    {item.title}
                  </span>
                </div>

                <div
                  className={`
                    mt-2 h-1 rounded-full transition-all duration-300
                    ${
                      activeTab === item.id
                        ? "w-full bg-[#FF6B35]"
                        : "w-10 bg-[#0A2463]"
                    }
                  `}
                />
              </button>
            ))}
          </div>

      
          <div className="w-full md:w-3/5">
            <div className="bg-white rounded-bl-4xl rounded-tr-4xl p-6 border border-gray-900 min-h-[320px] h-full">
              {activeContent?.content?.length ? (
                <div className="space-y-2">

                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Module {activeContent.id}: {activeContent.title}
                    </h3>
                    <div className="w-14 h-1 bg-[#0A2463] rounded-full" />
                  </div>

                  {activeContent.content.map((text, index) => (
                    <div
                      key={index}
                      className="flex items-start hover:bg-[#EFF6FF] p-2.5 rounded-md transition-colors duration-200"
                    >
                      <div className="w-1.5 h-5 bg-[#FF6B35] mr-3 shrink-0 rounded-full mt-1" />
                      <p className="text-gray-700 text-sm leading-relaxed flex-1">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full py-10">
                  <p className="text-gray-400 text-base text-center">
                    Hover over a module to view content
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseCurriculum;
