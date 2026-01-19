import React, { useState } from "react";

const CourseCurriculum = ({ title, curriculumData }) => {
  const [activeTab, setActiveTab] = useState(curriculumData?.[0]?.id || null);

  const activeContent = curriculumData.find(
    (item) => item.id === activeTab
  );

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-340 mx-auto">

       
        <div className="mb-8">
          <div className="bg-[#0F3652] text-white text-center py-3 px-4 rounded-lg">
            <h1 className="text-lg sm:text-xl font-bold">
              {title}
            </h1>
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row gap-4">

      
          <div className="w-full md:w-2/5 space-y-2">
            {curriculumData.map((item) => (
              <button
                key={item.id}
                onMouseEnter={() => setActiveTab(item.id)}
                className={`
                  w-full text-left p-3 rounded-bl-3xl rounded-tr-3xl transition-all duration-200
                  border
                  ${
                    activeTab === item.id
                      ? "bg-[#0F3652] text-white border-[#F3831C]"
                      : "bg-white text-[#0F3652] border-gray-200 hover:bg-[#0F3652]/5"
                  }
                `}
              >
                <div className="flex items-center">
                  <div
                    className={`
                      w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold text-xs
                      ${
                        activeTab === item.id
                          ? "bg-[#F3831C] text-white"
                          : "bg-[#F3831C] text-white"
                      }
                    `}
                  >
                    {item.id}
                  </div>
                  <span className="font-medium text-sm leading-tight">
                    {item.title}
                  </span>
                </div>

                <div
                  className={`
                    mt-1 h-0.5 rounded-full transition-all duration-200
                    ${
                      activeTab === item.id
                        ? "w-full bg-[#F3831C]"
                        : "w-8 bg-[#0F3652]"
                    }
                  `}
                />
              </button>
            ))}
          </div>

       
          <div className="w-full md:w-3/5">
            <div className="bg-white rounded-bl-3xl rounded-tr-3xl p-4 border border-[#F3831C]/20 min-h-[300px] h-full overflow-y-auto">
              {activeContent?.content?.length ? (
                <div className="space-y-1">
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-[#0F3652] mb-1">
                      Module {activeContent.id}: {activeContent.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-[#0F3652] rounded-full" />
                  </div>

                  <div className="max-h-60 overflow-y-auto pr-2">
                    {activeContent.content.map((text, index) => (
                      <div
                        key={index}
                        className="flex items-start mb-1 p-1.5 rounded hover:bg-[#0F3652]/5 transition-colors duration-150"
                      >
                        <div className="w-1.5 h-4 bg-[#F3831C] mr-2 shrink-0 rounded-full mt-0.5" />
                        <p className="text-[#0F3652] text-sm leading-relaxed flex-1">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full py-8">
                  <p className="text-[#0F3652]/60 text-sm text-center">
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