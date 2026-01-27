import React from 'react';

const CorporateDeliver = () => {
  const features = [
    {
      icon: (
        <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="12" width="48" height="36" rx="2" stroke="#F3831C" strokeWidth="2" fill="none"/>
          <path d="M8 20 H56" stroke="#F3831C" strokeWidth="2"/>
          <circle cx="32" cy="32" r="6" fill="#F3831C"/>
          <path d="M26 32 L30 36 L38 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="16" y="52" width="32" height="4" rx="1" fill="#F3831C"/>
          <path d="M32 48 L32 52" stroke="#F3831C" strokeWidth="2"/>
        </svg>
      ),
      title: 'Strategic Skill Mapping',
      description: 'We start by assessing your team’s current expertise and aligning learning outcomes with your organization’s audit and compliance goals, ensuring relevance from day one.'
    },
    {
      icon: (
        <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 8 L40 20 L52 22 L42 32 L44 44 L32 38 L20 44 L22 32 L12 22 L24 20 Z" stroke="#F3831C" strokeWidth="2" fill="none"/>
          <circle cx="28" cy="24" r="2" fill="#F3831C"/>
          <circle cx="36" cy="24" r="2" fill="#F3831C"/>
          <path d="M26 32 Q32 36 38 32" stroke="#F3831C" strokeWidth="2" strokeLinecap="round" fill="none"/>
          <circle cx="20" cy="16" r="3" stroke="#F3831C" strokeWidth="1.5" fill="none"/>
          <circle cx="44" cy="16" r="3" stroke="#F3831C" strokeWidth="1.5" fill="none"/>
          <circle cx="16" cy="38" r="3" stroke="#F3831C" strokeWidth="1.5" fill="none"/>
          <circle cx="48" cy="38" r="3" stroke="#F3831C" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
     title: 'Adaptive Frameworks',
      description: 'Choose from virtual, on-site, or hybrid corporate sessions, each customized to your workforce size, time availability, and project cycles.'
    },
    {
      icon: (
        <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="20" stroke="#F3831C" strokeWidth="2" fill="none"/>
          <circle cx="32" cy="32" r="14" stroke="#F3831C" strokeWidth="2" fill="none"/>
          <circle cx="32" cy="32" r="8" fill="#F3831C"/>
          <path d="M32 12 L32 8" stroke="#F3831C" strokeWidth="2"/>
          <path d="M32 56 L32 52" stroke="#F3831C" strokeWidth="2"/>
          <path d="M52 32 L56 32" stroke="#F3831C" strokeWidth="2"/>
          <path d="M8 32 L12 32" stroke="#F3831C" strokeWidth="2"/>
          <circle cx="32" cy="32" r="3" fill="white"/>
        </svg>
      ),
      title: 'Role-Driven Capability Building',
      description: 'From junior staff to CXOs, every learning path is customized to develop critical thinking, ethical judgment, and decision-making skills relevant to their roles.'
    },
    {
      icon: (
        <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="16" width="40" height="32" rx="2" stroke="#F3831C" strokeWidth="2" fill="none"/>
          <path d="M12 24 H52" stroke="#F3831C" strokeWidth="2"/>
          <rect x="18" y="30" width="12" height="2" rx="1" fill="#F3831C"/>
          <rect x="18" y="36" width="16" height="2" rx="1" fill="#F3831C"/>
          <rect x="18" y="42" width="10" height="2" rx="1" fill="#F3831C"/>
          <circle cx="42" cy="36" r="6" stroke="#F3831C" strokeWidth="2" fill="none"/>
          <path d="M38 36 L40 38 L46 32" stroke="#F3831C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Data-Backed Performance Insights',
      description: 'Every program includes progress tracking and post-training analytics, helping HR and L&D teams measure the impact of learning, engagement, and skill improvement across departments.'
    }
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-340 mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
         Corporate Training That Speaks Your Business Language
        </h1>
        <div className="w-16 h-1 bg-blue-900 mx-auto mb-4"></div>
        <p className="text-center text-gray-600 mb-2">
        Because real learning happens when content meets context, 
        </p>
        <p className="text-center text-[#F3831C] font-semibold mb-12">
     and that’s exactly what we deliver.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {feature.icon}
              <h3 className="text-blue-900 font-bold text-center mb-3 text-base">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorporateDeliver;