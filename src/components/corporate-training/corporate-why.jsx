import React from 'react';
import CountUp from "@/components/common/count-up";

const CorporateWhy = () => {
  const statsCards = [
   
    { value: 94, suffix: "%", subtitle: "Say employees stay longer at a company" },
    { value: 74, suffix: "%", subtitle: "Report higher engagement with structured training" },
    { value: 30, suffix: "%", subtitle: "See improved performance within 3 months" },
    { value: 21, suffix: "%", subtitle: "of companies report direct profitability gains" },
  ];

  return (
    <div className="pt-12 pb-0 relative overflow-hidden">
 
      <div className="absolute right-0 top-0 bottom-0 w-48 pointer-events-none hidden lg:block">
        <svg
          className="h-full"
          viewBox="0 0 200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
        
          <path
            d="M150,50 C150,300 150,400 150,750"
            stroke="url(#verticalGradient)"
            strokeWidth="2"
            strokeOpacity="0.4"
            strokeDasharray="4 4"
          />
          
     
          <circle cx="150" cy="100" r="6" fill="#F3831C" opacity="0.8">
            <animate
              attributeName="cy"
              values="100;120;100"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
          
          <circle cx="150" cy="300" r="4" fill="#0F3652" opacity="0.6">
            <animate
              attributeName="cy"
              values="300;320;300"
              dur="3.5s"
              repeatCount="indefinite"
              begin="0.5s"
            />
          </circle>
          
          <circle cx="150" cy="500" r="5" fill="#F3831C" opacity="0.7">
            <animate
              attributeName="cy"
              values="500;520;500"
              dur="5s"
              repeatCount="indefinite"
              begin="1s"
            />
          </circle>
          
          <circle cx="150" cy="700" r="3" fill="#0F3652" opacity="0.5">
            <animate
              attributeName="cy"
              values="700;720;700"
              dur="4.5s"
              repeatCount="indefinite"
              begin="2s"
            />
          </circle>
          
     
          <polygon
            points="120,200 150,170 180,200 150,230"
            fill="#F3831C"
            fillOpacity="0.1"
            stroke="#F3831C"
            strokeOpacity="0.3"
            strokeWidth="1"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 150 200"
              to="360 150 200"
              dur="20s"
              repeatCount="indefinite"
            />
          </polygon>
          
          <rect
            x="130"
            y="400"
            width="40"
            height="40"
            fill="#0F3652"
            fillOpacity="0.05"
            stroke="#0F3652"
            strokeOpacity="0.2"
            strokeWidth="1"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 150 420"
              to="360 150 420"
              dur="25s"
              repeatCount="indefinite"
            />
          </rect>
          
          <defs>
            <linearGradient
              id="verticalGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#F3831C" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#0F3652" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#F3831C" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

    
      <div className="absolute left-0 top-0 bottom-0 w-48 pointer-events-none hidden lg:block">
        <svg
          className="h-full"
          viewBox="0 0 200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
         
          <path
            d="M50,50 C50,300 50,400 50,750"
            stroke="url(#verticalGradientLeft)"
            strokeWidth="2"
            strokeOpacity="0.3"
            strokeDasharray="4 4"
          />
          
     
          <circle cx="50" cy="150" r="3" fill="#F3831C" opacity="0.5" />
          <circle cx="50" cy="350" r="3" fill="#0F3652" opacity="0.4" />
          <circle cx="50" cy="550" r="3" fill="#F3831C" opacity="0.5" />
          <circle cx="50" cy="750" r="3" fill="#0F3652" opacity="0.4" />
          
          <defs>
            <linearGradient
              id="verticalGradientLeft"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#F3831C" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#0F3652" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#F3831C" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#F3831C]"></div>
            <span className="text-[#F3831C] text-sm font-semibold uppercase tracking-[0.2em] px-4 py-2 bg-gradient-to-r from-orange-50 to-transparent rounded-full">
              Accreditation & Highlights
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#F3831C]"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight px-4">
            <span className="bg-gradient-to-r from-[#0F3652] via-[#1E5A8A] to-[#0F3652] bg-clip-text text-transparent">
              Why Leading Organizations are Investing in Employee Development
            </span>
          </h2>

          <p className="text-lg text-[#0F3652]/80 leading-relaxed max-w-3xl mx-auto mb-12">
            Because every smart business knows - when your people grow it leads to strong results. Here's the proof
          </p>
        </div>

      
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-5">
          {statsCards.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-[#F3831C] cursor-pointer transition-all duration-300 hover:shadow-lg group overflow-hidden"
            >
        
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0F3652] to-[#F3831C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
       
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#0F3652]/20 rounded-tr-xl"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#0F3652]/20 rounded-bl-xl"></div>

             
              <h2 className="text-5xl font-black text-[#0F3652] mb-2">
                <CountUp end={item.value} suffix={item.suffix} />
              </h2>

          
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#F3831C] to-transparent mx-auto my-4"></div>

         
              <p className="text-sm font-medium text-gray-700">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

       
        <div className="mt-12 pt-8 border-t border-gray-100 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-3">
            <div className="w-24 h-1 bg-gradient-to-r from-[#F3831C] via-[#0F3652] to-[#F3831C] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateWhy;