import React, { useState, useEffect, useRef } from "react";
import { Users, Trophy, Award, Search, FileText, UserCheck, Settings, TrendingUp, Heart } from "lucide-react";



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
              Matebiz has completed its 9 years journey till now, growing further. It has seen many odds at the time of its formation and during the attempt to establish itself as a powerful organization. But the teammates here never viewed this odds as anything negative. Instead, they remained optimistic and accepted the challenges with passion and hard work of hours sending even till midnight. We were so passionate and persistent about what we wanted to achieve that we didn't even bother about the time. During our attempt to build and establish.
            </p>
            <p className="font-semibold text-[#F3831C]">
              Matebiz with the limited team, other than the hunger for development and success, the only thing we had with us was sheer hard work and persistence.
            </p>
          </div>
        </div>

       <div className="bg-[#F3831C] py-16 px-8">
  <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
    <div>
      <h2 className="text-5xl md:text-6xl font-bold mb-2">1500+</h2>
      <p className="text-lg md:text-xl font-medium">Student Trained</p>
    </div>
    
    <div>
      <h2 className="text-5xl md:text-6xl font-bold mb-2">99%</h2>
      <p className="text-lg md:text-xl font-medium">Positive Result</p>
    </div>
    
    <div>
      <h2 className="text-5xl md:text-6xl font-bold mb-2">22+</h2>
      <p className="text-lg md:text-xl font-medium">Faculty Experience</p>
    </div>
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
      <stop offset="0%" stopColor="#0F3652" />
      <stop offset="100%" stopColor="#F3831C" />
    </linearGradient>
  </defs>
</svg>

</div>

{/* Row 1 */}
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
            ? "bg-gradient-to-br from-[#0F3652] to-[#F3831C] text-white scale-110"
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

{/* Row 2 (reversed visually) */}
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
              ? "bg-gradient-to-br from-[#0F3652] to-[#F3831C] text-white scale-110"
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