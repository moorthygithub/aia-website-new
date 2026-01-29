import React, { useState, useEffect, useRef } from "react";
import { Users, Trophy, Award, Search, FileText, UserCheck, Settings, TrendingUp, Heart } from "lucide-react";
import CountUp from "../common/count-up";



const processSteps = [
  {
    title: "Requirement Analysis",
    icon: <Search className="w-8 h-8" />,
    description: "Understanding your needs and project goals",
    position: "top"
  },
  {
    title: "Project Allocation",
    icon: <FileText className="w-8 h-8" />,
    description: "Strategic planning and resource assignment",
    position: "top"
  },
  {
    title: "Team Match-up",
    icon: <UserCheck className="w-8 h-8" />,
    description: "Assembling the perfect team for your project",
    position: "top"
  },
  {
    title: "Project Implementation",
    icon: <Settings className="w-8 h-8" />,
    description: "Bringing your vision to life",
    position: "bottom"
  },
  {
    title: "Effect Analysis",
    icon: <TrendingUp className="w-8 h-8" />,
    description: "Measuring impact and optimizing results",
    position: "bottom"
  },
  {
    title: "Long-term Relationship!",
    icon: <Heart className="w-8 h-8" />,
    description: "Ongoing support and partnership",
    position: "bottom"
  }
];const statsCards = [
  {
    value: 5,
    suffix: "+",
    label: "Years of consistent growth",
    icon: "📈",
  },
  {
    value: 2000,
    suffix: "+",
    label: "Professionals Enrolled",
    icon: "👥",
  },
  {
    value: 36,
    suffix: "+",
    label: "Countries Reached",
    icon: "🌍",
  },
  {
    value: 99.6,
    suffix: "%",
    label: "Certification Success Rate",
    icon: "✅",
  },
  {
    value: 22,
    suffix: "+",
    label: "Years of Faculty Experience",
    icon: "🎓",
  },
];


const AboutJourney = () => {
  const [progress, setProgress] = useState(0);
    const processRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        if (!processRef.current) return;
  
        const rect = processRef.current.getBoundingClientRect();
        const vh = window.innerHeight;
  
        
        const start = vh * 0.7;          
        const end = rect.height * 0.75;  
  
        const current = start - rect.top;
        const value = current / end;
  
        setProgress(Math.min(Math.max(value, 0), 1));
      };
  
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const activeStep = Math.min(
      Math.floor(progress * processSteps.length),
      processSteps.length - 1
    );
  return (
    <>
    <div className="py-8">
      <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F3652] mb-6">
            Our Journey
          </h2>
          <div className="mx-auto space-y-4 text-[#0F3652] text-lg leading-relaxed">
            <p>
            AIA started its journey in 2020 with a simple idea of sharing knowledge through YouTube has steadily evolved into a trusted global learning ecosystem. Each year at AIA marks a deliberate step forward, building structure, earning learner trust, and strengthening outcomes. From guiding the first 3 learners batch of CFE in 2021 to shaping careers across 36+ countries in 2026 & still counting, the journey has been defined by consistency, practical learning, and expert-led mentorship.
            </p>
            <p className="font-semibold text-[#F3831C]">
            Meaningful growth is built step by step, with clarity, discipline, and long-term impact at its core.
            </p>
          </div>
        </div>
        <div className="px-6">
        <div className="max-w-340 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-5">
  {statsCards.map((item, index) => (
    <div
      key={index}
      className="relative bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-[#F3831C] cursor-pointer transition-all duration-300 hover:shadow-lg group overflow-hidden"
    >

      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0F3652] to-[#F3831C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      
 
      <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#0F3652]/20 rounded-tr-xl"></div>
      <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#0F3652]/20 rounded-bl-xl"></div>

      <h2 className="text-5xl font-black text-[#0F3652]  mb-2">
        <CountUp end={item.value} suffix={item.suffix} />
      </h2>

      <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#F3831C] to-transparent mx-auto my-4"></div>

      <p className="text-sm font-medium text-gray-700">
        {item.label}
      </p>
    </div>
  ))}
</div>
       
       
</div>


       
        <div ref={processRef} className="py-16 hidden md:block relative">

{/* SVG Path */}
<div className="absolute top-1/2 left-0 w-full h-64 -translate-y-1/2 pointer-events-none">
  <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
  <path
    d="M100 50 
       L1050 50 
       Q1100 50 1100 100 
       Q1100 150 1050 150 
       L100 150"
    fill="none"
    stroke="#e5e7eb"
    strokeWidth="4"
  />
  <path
    d="M100 50 
       L1050 50 
       Q1100 50 1100 100 
       Q1100 150 1050 150 
       L100 150"
    fill="none"
    stroke="url(#g)"
    strokeWidth="4"
    strokeDasharray="2200"
    strokeDashoffset={2200 - progress * 2200}
  />
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#F3831C" />
      <stop offset="100%" stopColor="#F3831C" />
    </linearGradient>
  </defs>
</svg>

</div>


<div className="relative mb-40">
  <div className="grid grid-cols-3 gap-8">
    {processSteps.slice(0, 3).map((step, i) => (
      <div
        key={i}
        className={`text-center transition-all duration-500 ${
          i <= activeStep ? "opacity-100" : "opacity-40"
        }`}
      >
        <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 ${
          i <= activeStep
            ? "bg-[#0F3652] text-white scale-110"
            : "bg-gray-200 text-gray-500"
        }`}>
          {step.icon}
        </div>
        <h3 className="font-bold text-[#0F3652]">{step.title}</h3>
        <p className="text-sm text-[#0F3652]/80">{step.description}</p>
      </div>
    ))}
  </div>
</div>


<div className="relative mt-40">
  <div className="grid grid-cols-3 gap-8 direction-rtl">
    {processSteps.slice(3, 6).map((step, i) => {
      const realIndex = i + 3;
      return (
        <div
          key={realIndex}
          className={`text-center transition-all duration-500 direction-ltr ${
            realIndex <= activeStep ? "opacity-100" : "opacity-40"
          }`}
        >
          <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 ${
            realIndex <= activeStep
              ? "bg-[#0F3652] text-white scale-110"
              : "bg-gray-200 text-gray-500"
          }`}>
            {step.icon}
          </div>
          <h3 className="font-bold text-[#0F3652]">{step.title}</h3>
          <p className="text-sm text-[#0F3652]/80">{step.description}</p>
        </div>
      );
    })}
  </div>
</div>
</div>
      </div>
    </div>
    <style jsx>{`
      .direction-rtl {
        direction: rtl;
      }
      .direction-ltr {
        direction: ltr;
      }
    `}</style>
    </>
  );
};

export default AboutJourney;