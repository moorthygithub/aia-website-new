import { useState } from "react";

const questionsData = [
  {
    id: 1,
    moduleTitle: "MODULE-I: FINANCIAL TRANSACTIONS AND FRAUD SCHEMES",
    question: "The concept that a business will continue indefinitely is known as",
    options: [
      { id: "A1", text: "Going Concern" },
      { id: "B1", text: "Comparability" },
      { id: "C1", text: "Materiality" },
      { id: "D1", text: "Dual Accounting" }
    ],
    explanation: "There is an assumption that an entity will continue as a going concern; that is, the life of the entity will be long enough to fulfill its financial and legal obligations.",
    correctAnswer: "A",
    showAnswer: false,
    moreQuestionsLink: "https://aia.in.net/cfe-free-practice-questions-one"
  },
  {
    id: 2,
    moduleTitle: "MODULE-II: LAW",
    question: "Judge-made law is also called as",
    options: [
      { id: "A21", text: "Original law" },
      { id: "B21", text: "Common law" },
      { id: "C21", text: "Statutory law" },
      { id: "D21", text: "Consensus law" }
    ],
    explanation: "In common law systems, there are laws that judges develop through court decisions, as well as codes and statutes that establish laws. The common law is developed on a case-by-case basis and is referred to as judge-made law.",
    correctAnswer: "B",
    showAnswer: false,
    moreQuestionsLink: "https://aia.in.net/cfe-free-practice-questions-two"
  },
  {
    id: 3,
    moduleTitle: "MODULE-III: INVESTIGATION",
    question: "Which of the following would be the LEAST effective way to obtain permission to examine someone's bank records?",
    options: [
      { id: "A31", text: "Oral consent" },
      { id: "B31", text: "A subpoena" },
      { id: "C31", text: "Written consent" },
      { id: "D31", text: "A court order" }
    ],
    explanation: "Bank records can be obtained by consent only if the subject of the records consents in writing.",
    correctAnswer: "A",
    showAnswer: false,
    moreQuestionsLink: "https://aia.in.net/cfe-free-practice-questions-three"
  },
  {
    id: 4,
    moduleTitle: "MODULE-IV: FRAUD PREVENTION & DETERRENCE",
    question: "Most effective method of preventing fraud is?",
    options: [
      { id: "A41", text: "Increasing the perception of detection" },
      { id: "B41", text: "Having an open door policy" },
      { id: "C41", text: "Conducting covert audits" },
      { id: "D41", text: "Screening employees" }
    ],
    explanation: "Increasing the perception of detection might be the most effective fraud prevention method.",
    correctAnswer: "A",
    showAnswer: false,
    moreQuestionsLink: "https://aia.in.net/cfe-free-practice-questions-four"
  }
];

const FreeResourcePracticeQuestion = () => {
  const [activeModule, setActiveModule] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswerFor, setShowAnswerFor] = useState(2); 

  const currentQuestion = questionsData.find(q => q.id === activeModule) || questionsData[0];

  const handleShowAnswer = (moduleId) => {
    setShowAnswerFor(showAnswerFor === moduleId ? null : moduleId);
  };

  const handleOptionSelect = (moduleId, optionId) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [moduleId]: optionId
    }));
  };

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-340 mx-auto">
        <div className="mb-8">
          <div className="bg-[#0F3652] text-white text-center py-3 px-4 rounded-lg">
            <h1 className="text-lg sm:text-xl font-bold">
              Free Practice Questions   -- second module check
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
       
          <div className="w-full md:w-2/5 space-y-2">
            {questionsData.map((item) => (
              <button
                key={item.id}
                onMouseEnter={() => setActiveModule(item.id)}
                className={`
                  w-full text-left p-3 rounded-tr-3xl rounded-bl-3xl transition-all duration-200
                  border
                  ${activeModule === item.id
                    ? "bg-[#F3831C] text-white border-[#F3831C]"
                    : "bg-white text-[#0F3652] border-gray-200 hover:bg-[#0F3652]/5"
                  }
                `}
              >
                <div className="flex items-center">
                  <div
                    className={`
                      w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold text-xs
                      ${activeModule === item.id
                        ? "bg-white text-[#F3831C]"
                        : "bg-[#F3831C] text-white"
                      }
                    `}
                  >
                    {item.id}
                  </div>
                  <span className="font-medium text-sm leading-tight">
                    {item.moduleTitle}
                  </span>
                </div>
              </button>
            ))}
          </div>

         
          <div className="w-full md:w-3/5">
            <div className="bg-white rounded-tr-3xl rounded-bl-3xl p-4 border border-[#F3831C]/20">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-[#F3831C] text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {currentQuestion.id}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F3652]">
                    {currentQuestion.moduleTitle}
                  </h3>
                </div>
                <div className="w-12 h-0.5 bg-[#0F3652] rounded-full mb-4" />
              </div>

              <div className="pr-2">
               
                <p className="text-[#0F3652] text-sm mb-4 font-medium">
                  {currentQuestion.question}
                </p>

            
                <div className="space-y-2 mb-6">
                  {currentQuestion.options.map((option) => {
                    const isSelected = selectedAnswers[currentQuestion.id] === option.id;
                    const isCorrect = option.id.startsWith(currentQuestion.correctAnswer);
                    const showCorrect = showAnswerFor === currentQuestion.id;
                    
                    return (
                      <div key={option.id} className="relative pl-8">
                        <label className="flex items-start cursor-pointer">
                          <div className="absolute left-0 top-0.5">
                            <input
                              type="radio"
                              name={`question-${currentQuestion.id}`}
                              checked={isSelected}
                              onChange={() => handleOptionSelect(currentQuestion.id, option.id)}
                              className="sr-only"
                            />
                            <div className={`
                              w-5 h-5 rounded-full border-2 flex items-center justify-center
                              ${showCorrect && isCorrect 
                                ? "border-[#21bf73] bg-[#21bf73]" 
                                : showCorrect && isSelected && !isCorrect
                                ? "border-red-500 bg-red-500"
                                : isSelected
                                ? "border-[#0F3652]"
                                : "border-gray-300"
                              }
                            `}>
                              {showCorrect && isCorrect && (
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              )}
                            </div>
                          </div>
                          <span className={`
                            text-[#0F3652] text-sm
                            ${showCorrect && isCorrect ? "text-[#21bf73] font-medium" : ""}
                          `}>
                            {option.text}
                          </span>
                        </label>
                      </div>
                    );
                  })}
                </div>

            
                <div className={`transition-all duration-300 ${showAnswerFor === currentQuestion.id ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                  {showAnswerFor === currentQuestion.id && (
                    <div className="bg-[#0F3652]/5 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 bg-[#21bf73] rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <h5 className="text-sm font-bold text-[#0F3652]">Explanation:</h5>
                      </div>
                      <p className="text-[#0F3652] text-xs leading-relaxed">
                        <span className="font-semibold">Option {currentQuestion.correctAnswer} is correct.</span>
                        <br />
                        {currentQuestion.explanation}
                      </p>
                    </div>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 justify-center mt-6">
                  <button
                    onClick={() => handleShowAnswer(currentQuestion.id)}
                    className="px-4 py-2 bg-[#F3831C] text-white text-xs font-semibold rounded-lg hover:bg-[#e57610] transition-colors duration-200 flex items-center justify-center gap-1"
                  >
                    <span>{showAnswerFor === currentQuestion.id ? "Hide Answer" : "Show Answer"}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d={showAnswerFor === currentQuestion.id ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"} />
                    </svg>
                  </button>

                  <a
                    href={currentQuestion.moreQuestionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#0F3652] text-white text-xs font-semibold rounded-lg hover:bg-[#0d2d44] transition-colors duration-200 flex items-center justify-center gap-1"
                  >
                    <span>More Question</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeResourcePracticeQuestion;