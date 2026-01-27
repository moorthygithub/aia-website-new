/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const certificationCourses = [
  {
    id: 1,
    title: "CFE Certified Fraud Examiner",
    description: "CFE certification gives your professionals the mindset and tools to detect, investigate, and prevent fraud. The program blends analytical thinking, investigative techniques, and real-world case studies, enabling teams to uncover financial irregularities before they cause any damage to organization. It's about creating a workplace culture where integrity becomes a shared habit, not an expectation.",
    description2: "How It Transforms Your Team & Organization",
    features: [
      "Develop sharp-eyed fraud examiners who protect what your company stands for.",
      "Build organizational resilience by minimizing financial, operational, and reputational risks linked to fraud.",
      "Instill a culture of transparency, accountability, and ethical decision-making across departments.",
      "Strengthen compliance functions and reinforce trust with regulators, clients, and stakeholders.",
      "Improve overall financial governance by equipping managers with tools to identify and mitigate risk in"
    ],
    cta: "Explore More About CFE",
    link: "cfe-curriculum",
    bgColor: "#ffffff",
    textColor: "#0F3652"
  },
  {
    id: 2,
    title: "CIA - Certified Internal Auditor",
    description: "The CIA program provides an in-depth mastery of internal audit methodologies, risk management frameworks, and governance practices aligned with international standards. Designed for modern auditors, this program transforms traditional auditing into strategic advisory, helping professionals deliver insights that directly influence leadership decisions and business outcomes.",
    description2: "How It Transforms Your Team & Organization",
    features: [
      "Strengthen audit quality through evidence-based evaluation, analytical thinking, and clear reporting.",
      "Develop auditors who identify control gaps & help management close them effectively.",
      "Enhance risk-based audit planning and execution, improving efficiency and decision-making.",
      "Build consistent internal control mechanisms that ensure governance, compliance, and accountability.",
      "Position your audit team as trusted advisors who contribute to performance improvement.",
      "Increase organizational credibility by aligning audit practices with global standards and best-in-class methodologies."
    ],
    cta: "Explore More About CIA",
    link: "cia-curriculum",
    bgColor: "#0F3652",
    textColor: "#ffffff"
  },
  {
    id: 3,
    title: "CAMS - Certified Anti-Money Laundering Specialist",
    description: "CAMS training equips compliance and finance professionals to spot, assess, and prevent money laundering activities with confidence. This program develops a proactive mindset that protects your business from risk, strengthens its reputation, and ensures you stay aligned with global Anti Financial Crime standards",
 description2: "How It Transforms Your Team & Organization",
     features: [
      "Strengthen AML and compliance readiness by training teams to spot suspicious activity early.",
      "Build a compliance culture where everyone, from frontline staff to leadership, understands their role in keeping your organization safe",
      "Equip professionals with global AFC insights and investigative skills to respond confidently to regulatory changes.",
      "Reduce exposure to financial and reputational threats that can quietly erode trust and long-term stability.",
      "Streamline compliance processes, minimize penalties, and maintain consistent reporting accuracy.",
      "Fosters stronger relationships with regulators, clients, and partners through trust and transparency."
    ],
    cta: "Explore More About the CIA Challenge",
    link: "cia-challenge-curriculum",
    bgColor: "#ffffff",
    textColor: "#0F3652"
  },
 
];

const ALL_SERVICES = [...certificationCourses];

const ServiceCard = ({ service, i, progress, range, targetScale }) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, [i * 0.25, (i + 1) * 0.25], [1, 1]);

  return (
    <div ref={container} className="h-screen  flex items-center justify-center sticky top-0" >
      <motion.div
        style={{
          backgroundColor: service.bgColor,
          scale,
          opacity,
          top: 0
        }}
        className="relative w-full rounded-none p-8 border-2 border-[#F3831C]/20 min-h-125 flex flex-col justify-between origin-top"
      >
        <div>
          {/* Only show ID number, no title */}
          <div className="flex items-start justify-between mb-2">
          <p
              className="text-xl  font-bold"
              style={{ color: service.textColor === '#ffffff' ? '#ffffff' : '#000000' }}
            >
              {service.description2}
            </p>
            <div className="text-5xl font-bold text-[#F3831C] opacity-20">
              {String(service.id).padStart(2, '0')}
            </div>
          </div>

          {/* Right side only shows features (description2 + features) */}
          <div className="mt-2">
            {/* <p
              className="text-md mb-3 font-bold"
              style={{ color: service.textColor === '#ffffff' ? '#ffffff' : '#000000' }}
            >
              {service.description2}
            </p> */}

            {service.features && (
              <div className="space-y-5">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F3831C] shrink-0"></div>
                    <span
                      className="text-lg"
                      style={{ color: service.textColor === '#ffffff' ? '#d1d5db' : '#475569' }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const CorporateCourse = () => {
  const container = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const cardIndex = Math.floor(latest * ALL_SERVICES.length);
      if (cardIndex >= 0 && cardIndex < ALL_SERVICES.length) {
        setActiveCard(cardIndex);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
      {/* Mobile - Simple stacked layout similar to desktop but simplified */}
      <div className="md:hidden">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-wider text-[#F3831C] font-semibold mb-4">
            PROFESSIONAL CERTIFICATION PROGRAMS
          </p>
        </div>

        {ALL_SERVICES.map((service) => (
          <div
            key={service.id}
            className="relative w-full rounded-md p-6 border-2 border-[#F3831C]/20 mb-6"
            style={{
              backgroundColor: service.bgColor,
            }}
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2" style={{ color: service.textColor }}>
                {service.title}
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: service.textColor === '#ffffff' ? '#d1d5db' : '#64748b' }}
              >
                {service.description}
              </p>
            </div>

            <div className="mb-4">
              <p
                className="text-sm font-bold mb-3"
                style={{ color: service.textColor === '#ffffff' ? '#ffffff' : '#000000' }}
              >
                {service.description2}
              </p>

              {service.features && (
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#F3831C] shrink-0 mt-2"></div>
                      <span
                        className="text-sm flex-1"
                        style={{ color: service.textColor === '#ffffff' ? '#d1d5db' : '#475569' }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6">
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
                  w-full justify-center
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
          </div>
        ))}
      </div>

      {/* Desktop - Split layout with sticky left and scrolling right */}
      <div className="hidden md:grid md:grid-cols-2 gap-12 ">
        {/* Left side - Changes with scroll */}
        <div className="md:sticky md:top-20 md:h-screen md:flex md:flex-col md:justify-center ">
          <div>
            <p className="text-sm uppercase tracking-wider text-[#F3831C] font-semibold mb-4">
              PROFESSIONAL CERTIFICATION PROGRAMS
            </p>

            {/* Dynamic content based on active card */}
            <div className="transition-opacity duration-300">
              <h1 className="text-xl md:text-3xl font-bold mb-3 leading-tight text-[#0F3652]">
                {ALL_SERVICES[activeCard]?.title || ALL_SERVICES[0].title}
              </h1>

              <p className="text-[#0F3652] text-lg mb-2 max-w-lg leading-relaxed">
                {ALL_SERVICES[activeCard]?.description || ALL_SERVICES[0].description}
              </p>
            </div>

            {/* Button moved to left side */}
            <div className="mt-4">
              <a
                href={ALL_SERVICES[activeCard]?.link || ALL_SERVICES[0].link}
                className="
                  group inline-flex items-center gap-2
                  h-10 px-4
                
                  border border-[#F3831C]/30
                  bg-[#F3831C]
                  text-sm font-medium text-white
                  transition-colors duration-200
                  hover:bg-[#F3831C]/90
                "
              >
                <span>{ALL_SERVICES[activeCard]?.cta || ALL_SERVICES[0].cta}</span>
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

            <div className="hidden md:flex items-center gap-4 mt-8">
              <div className="h-px w-16 bg-[#F3831C]"></div>
              <p className="text-sm text-[#0F3652]/70">Scroll to explore all courses</p>
            </div>
          </div>
        </div>

        {/* Right side - Scrollable cards (Desktop) */}
        <div ref={container} className="relative hidden md:block ">
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

export default CorporateCourse;


