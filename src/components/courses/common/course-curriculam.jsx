import React, { useState } from "react";

const CourseCurriculum = ({ title, curriculumData, description }) => {
  const [activeTab, setActiveTab] = useState(curriculumData?.[0]?.id || null);

  const activeContent = curriculumData.find((item) => item.id === activeTab);

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-340 mx-auto">
        <div className="mb-8">
          <div className="bg-[#0F3652] text-white text-center py-3 px-4 rounded-lg">
            <h1 className="text-lg sm:text-xl font-bold">{title}</h1>
          </div>
        </div>
        {description && (
          <div
            className="text-[#0F3652] leading-relaxed  mx-20 mb-8 text-justify"
            dangerouslySetInnerHTML={{
              __html: description.replace(/\n/g, "<br />"),
            }}
          />
        )}
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto justify-center gap-4 items-stretch">
          {/* <div className="flex flex-col md:flex-row  max-w-5xl mx-auto justify-center gap-4"> */}
          <div className="w-full md:w-[30%] space-y-2">
            {curriculumData.map((item) => (
              <button
                key={item.id}
                onMouseEnter={() => setActiveTab(item.id)}
                className={`
                  w-full text-left p-6 shadow-lg shadow-black/20  rounded-br-3xl rounded-tl-3xl transition-all duration-200 cursor-pointer
                  border
                  ${
                    activeTab === item.id
                      ? "bg-[#F3831C] text-white"
                      : "bg-white text-[#0F3652] border-gray-200 hover:bg-[#0F3652]/5"
                  }
                `}
              >
                <div className="flex items-center">
                  <div
                    className={`
                      w-8 h-8 rounded-md flex items-center justify-center mr-3 font-bold text-lg
                      
                    `}
                  >
                    {item.id}
                  </div>
                  <span className="font-medium text-sm leading-tight">
                    {item.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="w-full md:w-[70%]">
            <div className="bg-white rounded-br-3xl rounded-tl-3xl p-4 shadow-lg shadow-black/20 border border-[#F3831C]/20 h-full">
              {activeContent?.content?.length ? (
                <div className="space-y-1">
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-[#0F3652] mb-1">
                      Module {activeContent.id}: {activeContent.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-[#0F3652] rounded-full" />
                  </div>

                  <div className=" pr-2">
                   
                    {activeContent.content.map((text, index) =>
                      text
                        .split(/\n+/)
                        .filter(Boolean)
                        .map((paragraph, pIndex) => (
                          <div
                            key={`${index}-${pIndex}`}
                            className="flex items-start mb-1 p-0.5 rounded hover:bg-[#0F3652]/5 transition-colors duration-150"
                          >
                            {/* <span className="w-0.5 h-5 bg-[#F3831C] mr-2 shrink-0 rounded-full mt-1" /> */}

                            <div
                              className="text-[#0F3652] leading-relaxed text-justify"
                              dangerouslySetInnerHTML={{ __html: paragraph }}
                            />
                          </div>
                        )),
                    )}
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
