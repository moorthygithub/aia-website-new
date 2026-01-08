import React, { useState, useEffect, useRef } from "react";
import { Users, Trophy, Award, Search, FileText, UserCheck, Settings, TrendingUp, Heart } from "lucide-react";

const stats = [
  { number: "1000+", label: "Students Trained", icon: <Users /> },
  { number: "99%", label: "Positive Results", icon: <Trophy /> },
  { number: "22+", label: "Faculty Experience", icon: <Award />, suffix: "Years" },
];

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

      const section = processRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
     
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const sectionHeight = rect.height;
        const scrolled = windowHeight - rect.top;
        const totalScrollable = sectionHeight + windowHeight;
        const scrollProgress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
        setProgress(scrollProgress);
      } else if (rect.top > windowHeight) {
        setProgress(0);
      } else if (rect.bottom < 0) {
        setProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  const activeStep = Math.min(Math.floor(progress * processSteps.length), processSteps.length - 1);

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Journey
          </h2>
          <div className="mx-auto space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Matebiz has completed its 9 years journey till now, growing further. It has seen many odds at the time of its formation and during the attempt to establish itself as a powerful organization. But the teammates here never viewed this odds as anything negative. Instead, they remained optimistic and accepted the challenges with passion and hard work of hours sending even till midnight. We were so passionate and persistent about what we wanted to achieve that we didn't even bother about the time. During our attempt to build and establish.
            </p>
            <p className="font-semibold text-orange-600">
              Matebiz with the limited team, other than the hunger for development and success, the only thing we had with us was sheer hard work and persistence.
            </p>
          </div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-xl transition-all duration-300 border border-gray-400"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white">
                {React.cloneElement(stat.icon, { className: "w-10 h-10" })}
              </div>

              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-1">
                <span>{stat.number}</span>
                {stat.suffix && (
                  <span className="text-2xl text-gray-600">{stat.suffix}</span>
                )}
              </div>

              <p className="text-lg text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

       
        <div ref={processRef} className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
          </div>

        
          <div className="hidden md:block relative">
          
         
            <div className="absolute top-1/2 left-0 w-full h-64 -translate-y-1/2 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
          
                <path
                  d="M 100 50 
                     L 1100 50 
                     L 1100 150 
                     L 100 150"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="4"
                />
                
             
                <path
                  d="M 100 50 
                     L 1100 50 
                     L 1100 150 
                     L 100 150"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeDasharray="2200"
                  strokeDashoffset={2200 - (progress * 2200)}
                  style={{ transition: 'stroke-dashoffset 0.3s ease-out' }}
                />
                
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7fbd82" />
                    <stop offset="50%" stopColor="#94d85d" />
                    <stop offset="100%" stopColor="#94d85d" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

           
            <div className="relative mb-40">
              <div className="grid grid-cols-3 gap-8">
                {processSteps.slice(0, 3).map((step, index) => (
                  <div
                    key={index}
                    className={`text-center transition-all duration-500 ${
                      index <= activeStep ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-4'
                    }`}
                  >
                    <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 ${
                      index <= activeStep 
                        ? 'bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg scale-110' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

           
            <div className="relative mt-40">
              <div className="grid grid-cols-3 gap-8">
                {processSteps.slice(3, 6).map((step, index) => (
                  <div
                    key={index + 3}
                    className={`text-center transition-all duration-500 ${
                      (index + 3) <= activeStep ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-4'
                    }`}
                  >
                    <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 ${
                      (index + 3) <= activeStep 
                        ? 'bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg scale-110' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

       
          
          <div className="md:hidden relative">
            <div className="absolute left-8 top-0 w-1 bg-gray-200 h-full">
              <div 
                className="w-full bg-gradient-to-b from-green-400 via-green-500 to-green-600 transition-all duration-300"
                style={{ height: `${progress * 100}%` }}
              />
            </div>

            <div className="space-y-12 pl-20">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index <= activeStep ? 'opacity-100 translate-x-0' : 'opacity-40 translate-x-4'
                  }`}
                >
                  <div className={`w-16 h-16 absolute left-0 rounded-full flex items-center justify-center transition-all duration-500 ${
                    index <= activeStep 
                      ? 'bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg scale-110' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {React.cloneElement(step.icon, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

    
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-green-700">
                Step {activeStep + 1} of {processSteps.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutJourney;