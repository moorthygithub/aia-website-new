import { BASE_URL } from "@/api/base-url";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const FreeResourcePracticeQuestion = () => {
  const [activeModule, setActiveModule] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswerFor, setShowAnswerFor] = useState(null);

  const {
    data: practiceData = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["practice-question"],
    queryFn: async () => {
      const response = await axios.get(`${BASE_URL}/api/getQuestionAnswer`);
      return response.data;
    },
    retry: 3,
  });

  const questionsData = practiceData.data || [];

  const getModuleData = (moduleCode) => {
    switch (moduleCode) {
      case "CFE-1":
        return {
          id: 1,
          title: "MODULE-I: FINANCIAL TRANSACTIONS AND FRAUD SCHEMES",
          questions: questionsData.filter(
            (q) => q.questions_module === "CFE-1",
          ),
        };
      case "CFE-2":
        return {
          id: 2,
          title: "MODULE-II: LAW",
          questions: questionsData.filter(
            (q) => q.questions_module === "CFE-2",
          ),
        };
      case "CFE-3":
        return {
          id: 3,
          title: "MODULE-III: INVESTIGATION",
          questions: questionsData.filter(
            (q) => q.questions_module === "CFE-3",
          ),
        };
      case "CFE-4":
        return {
          id: 4,
          title: "MODULE-IV: FRAUD PREVENTION & DETERRENCE",
          questions: questionsData.filter(
            (q) => q.questions_module === "CFE-4",
          ),
        };
      default:
        return {
          id: 1,
          title: "MODULE-I: FINANCIAL TRANSACTIONS AND FRAUD SCHEMES",
          questions: [],
        };
    }
  };

  const modules = [
    getModuleData("CFE-1"),
    getModuleData("CFE-2"),
    getModuleData("CFE-3"),
    getModuleData("CFE-4"),
  ];

  const currentModule =
    modules.find((m) => m.id === activeModule) || modules[0];
  const currentQuestion = currentModule.questions[0] || null;

  const formatOptions = (question) => {
    const options = [];
    if (question.optionA) {
      options.push({ id: "A", text: question.optionA });
    }
    if (question.optionB) {
      options.push({ id: "B", text: question.optionB });
    }
    if (question.optionC) {
      options.push({ id: "C", text: question.optionC });
    }
    if (question.optionD) {
      options.push({ id: "D", text: question.optionD });
    }
    return options;
  };

  const getCorrectAnswerLetter = (question) => {
    if (!question || !question.answer) return "A";
    const options = formatOptions(question);
    const correctOption = options.find((opt) => opt.text === question.answer);
    return correctOption ? correctOption.id : "A";
  };

  const getMoreQuestionsLink = (moduleId) => {
    const moduleCode =
      moduleId === 1
        ? "CFE-1"
        : moduleId === 2
          ? "CFE-2"
          : moduleId === 3
            ? "CFE-3"
            : "CFE-4";
    return `/cfe-free-resource/${moduleCode}`;
  };

  const handleShowAnswer = (questionId) => {
    setShowAnswerFor(showAnswerFor === questionId ? null : questionId);
  };

  const handleOptionSelect = (questionId, optionId) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  if (isLoading) {
    return (
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-340 mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="text-[#0F3652]">Loading questions...</div>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !currentQuestion) {
    return (
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-340 mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="text-red-500">Failed to load questions</div>
          </div>
        </div>
      </div>
    );
  }

  const options = formatOptions(currentQuestion);
  const correctAnswerLetter = getCorrectAnswerLetter(currentQuestion);

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-340 mx-auto">
        <div className="mb-8">
          <div className="bg-[#0F3652] text-white text-center py-3 px-4 rounded-lg">
            <h1 className="text-lg sm:text-xl font-bold">
              Free Practice Questions
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/5 space-y-2">
            {modules.map((module) => (
              <button
                key={module.id}
                onMouseEnter={() => setActiveModule(module.id)}
                className={`
                  w-full text-left p-3 rounded-tr-3xl rounded-bl-3xl transition-all duration-200 cursor-pointer
                  border
                  ${
                    activeModule === module.id
                      ? "bg-[#F3831C] text-white border-[#F3831C]"
                      : "bg-white text-[#0F3652] border-gray-200 hover:bg-[#0F3652]/5"
                  }
                `}
              >
                <div className="flex items-center">
                  <div
                    className={`
                      w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold text-xs
                      ${
                        activeModule === module.id
                          ? "bg-white text-[#F3831C]"
                          : "bg-[#F3831C] text-white"
                      }
                    `}
                  >
                    {module.id}
                  </div>
                  <span className="font-medium text-sm leading-tight">
                    {module.title}
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
                    {currentModule.id}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F3652]">
                    {currentModule.title}
                  </h3>
                </div>
                <div className="w-12 h-0.5 bg-[#0F3652] rounded-full mb-4" />
              </div>

              <div className="pr-2">
                <p className="text-[#0F3652] text-sm mb-4 font-medium">
                  {currentQuestion.questions}
                </p>

                <div className="space-y-2 mb-6">
                  {options.map((option) => {
                    const isSelected =
                      selectedAnswers[currentQuestion.id] === option.id;
                    const isCorrect = option.id === correctAnswerLetter;
                    const showCorrect = showAnswerFor === currentQuestion.id;

                    return (
                      <div key={option.id} className="relative pl-8">
                        <label className="flex items-start cursor-pointer">
                          <div className="absolute left-0 top-0.5">
                            <input
                              type="radio"
                              name={`question-${currentQuestion.id}`}
                              checked={isSelected}
                              onChange={() =>
                                handleOptionSelect(
                                  currentQuestion.id,
                                  option.id,
                                )
                              }
                              className="sr-only"
                            />
                            <div
                              className={`
                              w-5 h-5 rounded-full border-2 flex items-center justify-center
                              ${
                                showCorrect && isCorrect
                                  ? "border-[#21bf73] bg-[#21bf73]"
                                  : showCorrect && isSelected && !isCorrect
                                    ? "border-red-500 bg-red-500"
                                    : isSelected
                                      ? "border-[#0F3652]"
                                      : "border-gray-300"
                              }
                            `}
                            >
                              {showCorrect && isCorrect && (
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              )}
                            </div>
                          </div>
                          <span
                            className={`
                            text-[#0F3652] text-sm
                            ${
                              showCorrect && isCorrect
                                ? "text-[#21bf73] font-medium"
                                : ""
                            }
                          `}
                          >
                            {option.text}
                          </span>
                        </label>
                      </div>
                    );
                  })}
                </div>

                <div
                  className={`transition-all duration-300 ${
                    showAnswerFor === currentQuestion.id
                      ? "opacity-100"
                      : "opacity-0 h-0 overflow-hidden"
                  }`}
                >
                  {showAnswerFor === currentQuestion.id && (
                    <div className="bg-[#0F3652]/5 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 bg-[#21bf73] rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <h5 className="text-sm font-bold text-[#0F3652]">
                          Explanation:
                        </h5>
                      </div>
                      <p className="text-[#0F3652] text-xs leading-relaxed">
                        <span className="font-semibold">
                          {currentQuestion.optionCorrect}
                        </span>
                        <br />
                        {currentQuestion.explanation}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 justify-center mt-6">
                  <button
                    onClick={() => handleShowAnswer(currentQuestion.id)}
                    className="px-4 py-2 bg-[#F3831C] text-white text-xs font-semibold rounded-lg hover:bg-[#e57610] transition-colors duration-200 flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>
                      {showAnswerFor === currentQuestion.id
                        ? "Hide Answer"
                        : "Show Answer"}
                    </span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={
                          showAnswerFor === currentQuestion.id
                            ? "M19 9l-7 7-7-7"
                            : "M9 5l7 7-7 7"
                        }
                      />
                    </svg>
                  </button>

                  <Link
                    to={getMoreQuestionsLink(currentModule.id)}
                    target="_blank"
                    className="px-4 py-2 bg-[#0F3652] text-white text-xs font-semibold rounded-lg hover:bg-[#0d2d44] transition-colors duration-200 flex items-center justify-center gap-1"
                  >
                    <span>More Questions</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
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

/*
import { BASE_URL } from "@/api/base-url";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FreeResourcePracticeQuestion = () => {
  const [activeModule, setActiveModule] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswerFor, setShowAnswerFor] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const {
    data: practiceData = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["practice-question"],
    queryFn: async () => {
      const response = await axios.get(`${BASE_URL}/api/getQuestionAnswer`);
      return response.data;
    },
    retry: 3,
  });

  const questionsData = practiceData.data || [];

  const getModuleData = (moduleCode) => {
    switch (moduleCode) {
      case "CFE-1":
        return {
          id: 1,
          title: "MODULE-I: FINANCIAL TRANSACTIONS AND FRAUD SCHEMES",
          questions: questionsData.filter(
            (q) => q.questions_module === "CFE-1"
          ),
        };
      case "CFE-2":
        return {
          id: 2,
          title: "MODULE-II: LAW",
          questions: questionsData.filter(
            (q) => q.questions_module === "CFE-2"
          ),
        };
      case "CFE-3":
        return {
          id: 3,
          title: "MODULE-III: INVESTIGATION",
          questions: questionsData.filter(
            (q) => q.questions_module === "CFE-3"
          ),
        };
      case "CFE-4":
        return {
          id: 4,
          title: "MODULE-IV: FRAUD PREVENTION & DETERRENCE",
          questions: questionsData.filter(
            (q) => q.questions_module === "CFE-4"
          ),
        };
      default:
        return {
          id: 1,
          title: "MODULE-I: FINANCIAL TRANSACTIONS AND FRAUD SCHEMES",
          questions: [],
        };
    }
  };

  const modules = [
    getModuleData("CFE-1"),
    getModuleData("CFE-2"),
    getModuleData("CFE-3"),
    getModuleData("CFE-4"),
  ];

  const currentModule =
    modules.find((m) => m.id === activeModule) || modules[0];
  const currentQuestion = currentModule.questions[currentQuestionIndex] || null;

  const formatOptions = (question) => {
    const options = [];
    if (question.optionA) {
      options.push({ id: "A", text: question.optionA });
    }
    if (question.optionB) {
      options.push({ id: "B", text: question.optionB });
    }
    if (question.optionC) {
      options.push({ id: "C", text: question.optionC });
    }
    if (question.optionD) {
      options.push({ id: "D", text: question.optionD });
    }
    return options;
  };

  const getCorrectAnswerLetter = (question) => {
    if (!question || !question.answer) return "A";
    const options = formatOptions(question);
    const correctOption = options.find((opt) => opt.text === question.answer);
    return correctOption ? correctOption.id : "A";
  };

  const getMoreQuestionsLink = (moduleId) => {
    const moduleCode =
      moduleId === 1
        ? "CFE-1"
        : moduleId === 2
        ? "CFE-2"
        : moduleId === 3
        ? "CFE-3"
        : "CFE-4";
    return `/cfe-free-resource/${moduleCode}`;
  };

  const handleShowAnswer = (questionId) => {
    setShowAnswerFor(showAnswerFor === questionId ? null : questionId);
  };
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setShowAnswerFor(null);
  }, [activeModule, practiceData]);
  const handleOptionSelect = (questionId, optionId) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };
  const isLastQuestion =
    currentModule.questions.length > 0 &&
    currentQuestionIndex === currentModule.questions.length - 1;

  const handleNextQuestion = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setShowAnswerFor(null);
    }
  };
  if (isLoading) {
    return (
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-340 mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="text-[#0F3652]">Loading questions...</div>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !currentQuestion) {
    return (
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-340 mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="text-red-500">Failed to load questions</div>
          </div>
        </div>
      </div>
    );
  }

  const options = formatOptions(currentQuestion);
  const correctAnswerLetter = getCorrectAnswerLetter(currentQuestion);

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-340 mx-auto">
        <div className="mb-8">
          <div className="bg-[#0F3652] text-white text-center py-3 px-4 rounded-lg">
            <h1 className="text-lg sm:text-xl font-bold">
              Free Practice Questions
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/5 space-y-2">
            {modules.map((module) => (
              <button
                key={module.id}
                onMouseEnter={() => {
                  setActiveModule(module.id);
                  setCurrentQuestionIndex(0);
                  setShowAnswerFor(null);
                }}
                className={`
                  w-full text-left p-3 rounded-tr-3xl rounded-bl-3xl transition-all duration-200
                  border
                  ${
                    activeModule === module.id
                      ? "bg-[#F3831C] text-white border-[#F3831C]"
                      : "bg-white text-[#0F3652] border-gray-200 hover:bg-[#0F3652]/5"
                  }
                `}
              >
                <div className="flex items-center">
                  <div
                    className={`
                      w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold text-xs
                      ${
                        activeModule === module.id
                          ? "bg-white text-[#F3831C]"
                          : "bg-[#F3831C] text-white"
                      }
                    `}
                  >
                    {module.id}
                  </div>
                  <span className="font-medium text-sm leading-tight">
                    {module.title}
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
                    {currentModule.id}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F3652]">
                    {currentModule.title}
                  </h3>
                </div>
                <div className="w-12 h-0.5 bg-[#0F3652] rounded-full mb-4" />
              </div>

              <div className="pr-2">
                <p className="text-[#0F3652] text-sm mb-4 font-medium">
                  {currentQuestion.questions}
                </p>

                <div className="space-y-2 mb-6">
                  {options.map((option) => {
                    const isSelected =
                      selectedAnswers[currentQuestion.id] === option.id;
                    const isCorrect = option.id === correctAnswerLetter;
                    const showCorrect = showAnswerFor === currentQuestion.id;

                    return (
                      <div key={option.id} className="relative pl-8">
                        <label className="flex items-start cursor-pointer">
                          <div className="absolute left-0 top-0.5">
                            <input
                              type="radio"
                              name={`question-${currentQuestion.id}`}
                              checked={isSelected}
                              onChange={() =>
                                handleOptionSelect(
                                  currentQuestion.id,
                                  option.id
                                )
                              }
                              className="sr-only"
                            />
                            <div
                              className={`
                              w-5 h-5 rounded-full border-2 flex items-center justify-center
                              ${
                                showCorrect && isCorrect
                                  ? "border-[#21bf73] bg-[#21bf73]"
                                  : showCorrect && isSelected && !isCorrect
                                  ? "border-red-500 bg-red-500"
                                  : isSelected
                                  ? "border-[#0F3652]"
                                  : "border-gray-300"
                              }
                            `}
                            >
                              {showCorrect && isCorrect && (
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              )}
                            </div>
                          </div>
                          <span
                            className={`
                            text-[#0F3652] text-sm
                            ${
                              showCorrect && isCorrect
                                ? "text-[#21bf73] font-medium"
                                : ""
                            }
                          `}
                          >
                            {option.text}
                          </span>
                        </label>
                      </div>
                    );
                  })}
                </div>

                <div
                  className={`transition-all duration-300 ${
                    showAnswerFor === currentQuestion.id
                      ? "opacity-100"
                      : "opacity-0 h-0 overflow-hidden"
                  }`}
                >
                  {showAnswerFor === currentQuestion.id && (
                    <div className="bg-[#0F3652]/5 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 bg-[#21bf73] rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <h5 className="text-sm font-bold text-[#0F3652]">
                          Explanation:
                        </h5>
                      </div>
                      <p className="text-[#0F3652] text-xs leading-relaxed">
                        <span className="font-semibold">
                          {currentQuestion.optionCorrect}
                        </span>
                        <br />
                        {currentQuestion.explanation}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 justify-center mt-6">
                  <button
                    onClick={() => handleShowAnswer(currentQuestion.id)}
                    className="px-4 py-2 bg-[#F3831C] text-white text-xs font-semibold rounded-lg hover:bg-[#e57610] transition-colors duration-200 flex items-center justify-center gap-1"
                  >
                    <span>
                      {showAnswerFor === currentQuestion.id
                        ? "Hide Answer"
                        : "Show Answer"}
                    </span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={
                          showAnswerFor === currentQuestion.id
                            ? "M19 9l-7 7-7-7"
                            : "M9 5l7 7-7 7"
                        }
                      />
                    </svg>
                  </button>

    
                  {!isLastQuestion ? (
                    <button
                      onClick={handleNextQuestion}
                      className="px-4 py-2 bg-[#0F3652] text-white text-xs font-semibold rounded-lg hover:bg-[#0d2d44] transition-colors duration-200 flex items-center justify-center gap-1"
                    >
                      <span>Next Question</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      to={getMoreQuestionsLink(currentModule.id)}
                      className="px-4 py-2 bg-[#0F3652] text-white text-xs font-semibold rounded-lg hover:bg-[#0d2d44] transition-colors duration-200 flex items-center justify-center gap-1"
                    >
                      <span>More Questions</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  )}
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

*/
