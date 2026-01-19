/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/button';

const certificationCourses = [
  {
    id: 1,
    title: "Certified Fraud Examiner (CFE)",
    description: "A globally recognised certification focused on fraud prevention, detection, and investigation, widely valued across audit, compliance, risk management, and forensic roles.",
    description2: "How AIA Supports Your Certification Journey",
    features: [
"Concise, exam-focused, quick notes distilled from extensive study material",
"60+ hours of structured, concept-driven video lectures",
"1,500+ exam-oriented practice questions",
"Live doubt-clearing sessions with experienced faculty",
"Mock test preparation simulating the real exam environment",
"End-to-end registration support for a smooth enrolment process",
    ],
    cta:"Explore More About CFE",
    link: "cfe-curriculum",
    bgColor: "#ffffff",
    textColor: "#0F3652"
  },
  {
    id: 2,
    title: "Certified Internal Auditor (CIA – Three-Part Exam)",
    description: "The leading international certification for internal audit professionals, covering internal audit fundamentals, risk management, governance, and advanced audit practices through a structured three-part examination framework.",
    description2: "How AIA Supports Your Certification Journey",
    features: [
"60+ hours of recorded, expert-led lectures",
"Gleim-authorised study material and practice questions",
"Full-length Gleim mock tests aligned with CIA exam standards",
"Training delivered by experienced, CIA-qualified faculty",
"Live doubt-clearing sessions for continuous support",
"Complete registration guidance at every stage",
    ],
    cta:"Explore More About CIA",
    link: "cia-curriculum",
    bgColor: "#0F3652",
    textColor: "#ffffff"
  },
  {
    id: 3,
    title: "CIA Challenge Exam",
    description: "A fast-track CIA pathway designed for eligible members of recognised professional bodies, allowing them to earn the CIA designation through a single comprehensive exam covering advanced internal audit competencies.",
    description2: "How AIA Supports Your Certification Journey",
    features: [
"Expert-curated quick notes tailored specifically for the Challenge exam",
"70+ hours of focused, recorded video lectures",
"1,500+ targeted practice questions mapped to exam expectations",
"Live online doubt-clearing sessions with qualified faculty",
"Exam-oriented study material covering additional competency areas",
"Mock test preparation and complete registration support",
    ],
    cta:"Explore More About the CIA Challenge",
    link: "cia-challenge-curriculum",
    bgColor: "#ffffff",
    textColor: "#0F3652"
  },
  {
    id: 4,
    title: "Certified Anti-Money Laundering Specialist (CAMS)",
    description: "A globally respected AML certification focused on money laundering risks, regulatory frameworks, compliance programs, and financial crime prevention, especially relevant for banking and financial services professionals.",
    description2: "How AIA Supports Your Certification Journey",
    features: [
"40+ hours of recorded, exam-focused video sessions",
"700+ practice questions aligned with the CAMS exam pattern",
"Expert-curated quick notes condensed for faster revision",
"Live doubt-clearing sessions with experienced AML faculty",
"CAMS-style mock tests simulating the real exam scenario",
"Complete support throughout the registration process",
    ],
    cta:"Explore More About CAMS",
    link: "cams",
    bgColor: "#0F3652",
    textColor: "#ffffff"
  }
];

const ALL_SERVICES = [...certificationCourses];

const ServiceCard = ({ service, i, progress, range, targetScale }) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, [i * 0.25, (i + 1) * 0.25], [1, 1]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          backgroundColor: service.bgColor,
          scale,
          opacity,
          top: 0
        }}
        className="relative w-full rounded-3xl p-8 shadow-2xl border-2 border-[#F3831C]/20 min-h-125 flex flex-col justify-between origin-top"
      >
        <div>
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-3xl font-bold mb-4" style={{ color: service.textColor }}>
              {service.title}
            </h3>
            <div className="text-5xl font-bold text-[#F3831C] opacity-20">
              {String(service.id).padStart(2, '0')}
            </div>
          </div>
          
          <p 
            className="text-lg mb-1" 
            style={{ color: service.textColor === '#ffffff' ? '#d1d5db' : '#64748b' }}
          >
            {service.description}
          </p>
          <p 
            className="text-md mb-3 font-bold" 
            style={{ color: service.textColor === '#ffffff' ? '#ffffff' : '#000000' }}
          >
            {service.description2}
          </p>

          {service.features && (
            <div className="space-y-3">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F3831C] shrink-0"></div>
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

        <div className="mt-6 flex justify-end">
          <a
            href={service.link}
            className="
              group inline-flex items-center gap-2
              h-10 px-4
              rounded-md
              border border-[#F3831C]/30
              bg-[#F3831C]
              text-sm font-medium text-white
              transition-colors duration-200
              hover:bg-[#F3831C]/90
            "
          >
            <span>{service.cta}</span>
            <svg
              className="
                w-4 h-4
                transition-transform duration-200
                group-hover:translate-x-0.5
              "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
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
    <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="md:sticky md:top-20 md:h-screen md:flex md:flex-col md:justify-start md:pt-20">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#F3831C] font-semibold mb-4">
              PROFESSIONAL CERTIFICATION PROGRAMS
            </p>
            
            <h1 className="text-xl md:text-2xl font-bold mb-3 leading-tight text-[#0F3652]">
              Empowering Careers with Expert-Led Prep for Global Certification / Global Certification Programs Designed for Professional Excellence
            </h1>
            
            <p className="text-[#0F3652] text-base mb-2 max-w-lg leading-relaxed">
              We design our training programs to help professionals prepare for globally recognised
              certifications in internal audit, fraud, risk, and compliance. The focus is on structured learning,
              proper guidance, and practical understanding aligned with real-world requirements.
            </p>
            <p className="text-[#0F3652] text-base max-w-lg leading-relaxed">
              Each AIA prep program follows a clear, guided approach, combining expert-led guidance,
              tailored study resources, and extensive practice, enabling learners to develop strong
              conceptual clarity and apply their knowledge confidently across various professional roles and
              responsibilities.
            </p>

            <div className="inline-block">
              <div className="bg-white rounded-md p-4 border-2 border-[#F3831C]/20">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-[#F3831C]/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#F3831C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#F3831C] mb-1">
                      Start Your Certification Journey
                    </h3>
                    <p className="text-xl font-bold text-[#F3831C]">with Us</p>
                  </div>
                </div>
                <Button
                  className="rounded-xl w-full px-5 text-base relative cursor-pointer overflow-hidden group mt-4"
                  variant="ghost"
                  aria-label="Consult Experts"
                >
                  <span className="relative z-10 text-white">
                    <span>Consult Experts</span>
                  </span>
                  <span className="absolute inset-0 bg-linear-to-r from-[#F3831C] via-[#F3831C] to-[#F3831C] opacity-100 transition-opacity duration-300 -skew-x-12" />
                </Button>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4 mt-8">
              <div className="h-px w-16 bg-[#F3831C]"></div>
              <p className="text-sm text-[#0F3652]/70">Scroll to explore all courses</p>
            </div>
          </div>
        </div>

        <div ref={container} className="relative">
          {ALL_SERVICES.map((service, i) => {
            const targetScale = 1 - ((ALL_SERVICES.length - i) * 0.05);
            const start = i / ALL_SERVICES.length;
            const end = start + 1 / ALL_SERVICES.length;
            
            return (
              <ServiceCard
                key={service.id}
                service={service}
                i={i}
                progress={scrollYProgress}
                range={[start, end]}
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