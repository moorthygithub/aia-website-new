/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/button';

const certificationCourses = [
  {
    id: 1,
    title: "Certified Fraud Examiner",
    description: "CFE is a globally recognized certification in the field of fraud prevention, detection, and deterrence. By obtaining a CFE title you can explore growth in your career in the fields of audit, investigation, compliance, security etc.",
    link: "cfe-curriculum",
    bgColor: "#ffffff",
    textColor: "#1e293b"
  },
  {
    id: 2,
    title: "Certified Internal Auditor (Three Part Exam)",
    description: "A platform for Internal Audit professionals to accelerate their professional career. CIA is a three-level exam starting from fundamentals of internal audit and moves towards excellence in practice of Internal Auditing.",
    link: "cia-curriculum",
    bgColor: "#0f172a",
    textColor: "#ffffff"
  },
  {
    id: 3,
    title: "Certified Internal Auditor Challenge",
    description: "A chance to become a Certified Internal Auditor by appearing in a single exam. Members from 18 qualified bodies are eligible for the challenge exam only. It includes content not covered in the curriculum of the qualified bodies exam.",
    link: "cia-challenge-curriculum",
    bgColor: "#ffffff",
    textColor: "#1e293b"
  },
  {
    id: 4,
    title: "Certified Anti Money Laundering Specialist",
    description: "CAMS is the global gold standard in AML certifications, with more than 40,000 CAMS graduates worldwide. CAMS is an established global qualification that outlines the key principles of money laundering, and how to prevent it.",
    link: "cams",
    bgColor: "#0f172a",
    textColor: "#ffffff"
  }
];

const prepCourses = [
  {
    id: 5,
    title: "AIA CFE Prep Course",
    description: "Comprehensive preparation for the CFE certification with extensive learning materials and practice resources.",
    features: [
      "60+ Hours of Video Lectures",
      "1500+ Practice Questions",
      "Live Doubt Taking Sessions",
      "Customized Study Notes"
    ],
    link: "become-cfe-in-just-30-days",
    bgColor: "#ffffff",
    textColor: "#1e293b"
  },
  {
    id: 6,
    title: "AIA CIA Prep Course",
    description: "Complete preparation package for the CIA certification exam with expert guidance and practice materials.",
    features: [
      "80+ Hours of Recorded Video Lectures",
      "Gleim Practice Questions",
      "Gleim Mock Test",
      "Experienced & CIA Qualified Faculty"
    ],
    link: "become-cia-in-just-90-days",
    bgColor: "#0f172a",
    textColor: "#ffffff"
  },
  {
    id: 7,
    title: "AIA CIA Challenge Prep Course",
    description: "Specialized preparation for the CIA Challenge exam with focused study materials.",
    features: [
      "70+ Hours of Recorded Video Lectures",
      "1500+ Practice Questions",
      "Online Live Revision Classes",
      "Classes Exam Oriented Study Material"
    ],
    link: "cia-challenge-prep-course",
    bgColor: "#ffffff",
    textColor: "#1e293b"
  },
  {
    id: 8,
    title: "AIA CAMS Prep Course",
    description: "Preparation course for the CAMS certification with comprehensive study materials.",
    features: [
      "30+ Hours of Recorded/Live Video Lecture",
      "700+ Practice Questions",
      "Exam Oriented Study Material",
      "CAMS Mock Test"
    ],
    link: "cams",
    bgColor: "#0f172a",
    textColor: "#ffffff"
  }
];


const ALL_SERVICES = [...certificationCourses, ...prepCourses];

const ServiceCard = ({ service, i, progress, range, targetScale }) => {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          backgroundColor: service.bgColor,
          scale,
          top: `calc(-5vh + ${i * 25}px)`
        }}
        className="relative w-full rounded-3xl p-8 shadow-2xl border-2 border-orange-500/20 min-h-125 flex flex-col justify-between origin-top"
      >
        <div>
          <div className="flex items-start justify-between mb-6">
            <h3 className="text-3xl font-bold mb-4" style={{ color: service.textColor }}>
              {service.title}
            </h3>
            <div className="text-5xl font-bold text-orange-500 opacity-20">
              {String(service.id).padStart(2, '0')}
            </div>
          </div>
          
          <p 
            className="text-lg mb-6" 
            style={{ color: service.textColor === '#ffffff' ? '#d1d5db' : '#64748b' }}
          >
            {service.description}
          </p>

          {service.features && (
            <div className="space-y-3">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></div>
                  <span 
                    className="text-base" 
                    style={{ color: service.textColor === '#ffffff' ? '#d1d5db' : '#475569' }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Arrow Button in bottom right */}
        <div className="mt-8 flex justify-end">
          <a 
            href={service.link} 
            className="group inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors"
          >
            <svg 
              className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {i < ALL_SERVICES.length - 1 && (
          <div className="mt-8 flex justify-center">
            <div className="h-12 w-px bg-gradient-to-b from-orange-500 to-transparent"></div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

const HomeCourses = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <div className=" max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
     
        <div className="grid md:grid-cols-2 gap-12 ">
        
          <div className="md:sticky md:top-20 md:h-screen md:flex md:flex-col md:justify-start md:pt-20 ">
            <div>
              <p className="text-xs uppercase tracking-wider text-orange-500 font-semibold mb-4">
                PROFESSIONAL CERTIFICATION PROGRAMS
              </p>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-blue-900">
                Comprehensive Certification & Prep Courses
              </h1>
              
              <p className="text-slate-600 text-base mb-8 max-w-lg leading-relaxed">
                We offer complete certification programs and preparation courses for various professional qualifications 
                in auditing, fraud examination, and anti-money laundering. Our programs are designed to help professionals 
                excel in their careers with comprehensive study materials, expert guidance, and practical learning 
                experiences.
              </p>

              <div className="inline-block ">
                <div className="bg-white rounded-md p-4 border-2 border-orange-500/20">
                  <div className="flex items-center gap-6 ">
                    <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center">
                      <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-orange-500 mb-1">
                        Start Your Certification Journey
                      </h3>
                      <p className="text-xl font-bold text-orange-500">with Us</p>
                    </div>
                  </div>
                   <Button
                      className="rounded-xl w-full    px-5 text-base relative cursor-pointer overflow-hidden group hover:bg-linear-to-r hover:from-yellow-400/30 hover:via-yellow-500/40 hover:to-yellow-400/30"
                            
                               
                              variant="ghost"
                                aria-label="Explore Siga"
                              >
                                
                  
                  <span className="relative z-10  text-white ">
                   <span>                   Consult Experts </span>
                  </span>
                                <span className="absolute inset-0 bg-linear-to-r from-orange-400 via-orange-500 to-orange-400  
                                 
                                
                                opacity-100 transition-opacity duration-300 -skew-x-12" />
                  
                              </Button>
                
                </div>
              </div>

              <div className="hidden md:flex items-center gap-4 mt-8">
                <div className="h-px w-16 bg-orange-500"></div>
                <p className="text-sm text-slate-500">Scroll to explore all courses</p>
              </div>
            </div>
          </div>

        
          <div ref={container} className="relative ">
            {ALL_SERVICES.map((service, i) => {
              const targetScale = 1 - ((ALL_SERVICES.length - i) * 0.05);
              return (
                <ServiceCard
                  key={service.id}
                  service={service}
                  i={i}
                  progress={scrollYProgress}
                  range={[i * 0.125, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </div>
        </div>
      
    </div>
  );
};

export default HomeCourses;