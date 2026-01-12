/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/button';



const prepCourses = [
  {
    id: 1,
    title: "CFE Certified Fraud Examiner",
    description: "CFE certification gives your professionals the mindset and tools to detect, investigate, and prevent fraud. The program blends analytical thinking, investigative techniques, and real-world case studies, enabling teams to uncover financial irregularities before they cause any damage to organization. It’s about creating a workplace culture where integrity becomes a shared habit, not an expectation.",
    features: [
        "Develop sharp-eyed fraud examiners who protect what your company stands for.",
"Build organizational resilience by minimizing financial, operational, and reputational risks linked to fraud.",
"Instill a culture of transparency, accountability, and ethical decision-making across departments.",
"Strengthen compliance functions and reinforce trust with regulators, clients, and stakeholders.",
"Improve overall financial governance by equipping managers with tools to identify and mitigate risk in"
     
    ],
    link: "become-cfe-in-just-30-days",
    bgColor: "#ffffff",
    textColor: "#1e293b"
  },
  {
    id: 2,
    title: "CIA - Certified Internal Auditor",
    description: "The CIA program provides an in-depth mastery of internal audit methodologies, risk management frameworks, and governance practices aligned with international standards. Designed for modern auditors, this program transforms traditional auditing into strategic advisory, helping professionals deliver insights that directly influence leadership decisions and business outcomes.",
    features: [
"Strengthen audit quality through evidence-based evaluation, analytical thinking, and clear reporting.",
"Develop auditors who identify control gaps & help management close them effectively.",
"Enhance risk-based audit planning and execution, improving efficiency and decision-making.",
"Build consistent internal control mechanisms that ensure governance, compliance, and accountability.",
"Position your audit team as trusted advisors who contribute to performance improvement.",
"Increase organizational credibility by aligning audit practices with global standards and best-in-class methodologies.",
   
    ],
    link: "become-cia-in-just-90-days",
    bgColor: "#0f172a",
    textColor: "#ffffff"
  },
  {
    id: 3,
    title: "CAMS - Certified Anti-Money Laundering Specialist",
    description: "CAMS training equips compliance and finance professionals to spot, assess, and prevent money laundering activities with confidence. This program develops a proactive mindset that protects your business from risk, strengthens its reputation, and ensures you stay aligned with global Anti Financial Crime standards",
    features: [
        "Strengthen AML and compliance readiness by training teams to spot suspicious activity early.",
        "Build a compliance culture where everyone, from frontline staff to leadership, understands their role in keeping your organization safe",
        "Equip professionals with global AFC insights and investigative skills to respond confidently to regulatory changes.",
        "Reduce exposure to financial and reputational threats that can quietly erode trust and long-term stability.",
        "Streamline compliance processes, minimize penalties, and maintain consistent reporting accuracy.",
        "Fosters stronger relationships with regulators, clients, and partners through trust and transparency.",
    ],
    link: "cia-challenge-prep-course",
    bgColor: "#ffffff",
    textColor: "#1e293b"
  },
  
];


const ALL_SERVICES = [ ...prepCourses];

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

const CorporateCourse = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <div className=" max-w-340 mx-auto px-4 sm:px-6 lg:px-8 py-20">
     
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

export default CorporateCourse;