// import React, { useRef, useState, useEffect } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import certificationCourses from "@/data/certificationCourses";
// import SectionHeading from "../SectionHeading/SectionHeading";

// const ALL_SERVICES = [...certificationCourses];

// const ServiceCard = ({ service, i, progress, range, targetScale }) => {
//   const container = useRef(null);
//   const scale = useTransform(progress, range, [1, targetScale]);
//   const opacity = useTransform(progress, [i * 0.25, (i + 1) * 0.25], [1, 1]);

//   return (
//     <div
//       ref={container}
//       className="h-screen flex items-center justify-center sticky top-0"
//     >
//       <motion.div
//         style={{
//           backgroundColor: service.bgColor,
//           scale,
//           opacity,
//           top: 0,
//         }}
//         className="relative w-full rounded-none p-8 border-2 border-[#F3831C]/20 min-h-125 flex flex-col justify-between origin-top"
//       >
//         <div>
//           <div className="flex items-start justify-between mb-2">
//             <p
//               className="text-xl  font-bold"
//               style={{
//                 color: service.textColor === "#ffffff" ? "#ffffff" : "#000000",
//               }}
//             >
//               {service.description2}
//             </p>
//             <div className="text-5xl font-bold text-[#F3831C] opacity-20">
//               {String(service.id).padStart(2, "0")}
//             </div>
//           </div>

//           <div className="mt-2">
//             {service.features && (
//               <div className="space-y-5">
//                 {service.features.map((feature, idx) => (
//                   <div key={idx} className="flex items-center gap-3">
//                     <div className="w-2 h-2 rounded-full bg-[#F3831C] shrink-0"></div>
//                     <span
//                       className="text-lg"
//                       style={{
//                         color:
//                           service.textColor === "#ffffff"
//                             ? "#d1d5db"
//                             : "#475569",
//                       }}
//                     >
//                       {feature}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// const HomeCourses = () => {
//   const container = useRef(null);
//   const [activeCard, setActiveCard] = useState(0);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   useEffect(() => {
//     const unsubscribe = scrollYProgress.on("change", (latest) => {
//       const cardIndex = Math.floor(latest * ALL_SERVICES.length);
//       if (cardIndex >= 0 && cardIndex < ALL_SERVICES.length) {
//         setActiveCard(cardIndex);
//       }
//     });

//     return () => unsubscribe();
//   }, [scrollYProgress]);

//   return (
//     <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 my-8">
//       <div className="md:hidden">
//         <SectionHeading
//           title="International Certification Programs Offered by AIA"
//           align="center"
//         />

//         <div className="mb-8">
//           <p className="text-xs uppercase tracking-wider text-[#F3831C] font-semibold mb-4">
//             PROFESSIONAL CERTIFICATION PROGRAMS
//           </p>
//         </div>

//         {ALL_SERVICES.map((service) => (
//           <div
//             key={service.id}
//             className="relative w-full rounded-md p-6 border-2 border-[#F3831C]/20 mb-6"
//             style={{
//               backgroundColor: service.bgColor,
//             }}
//           >
//             <div className="mb-4">
//               <h3
//                 className="text-xl font-bold mb-2"
//                 style={{ color: service.textColor }}
//               >
//                 {service.title}
//               </h3>
//               <p
//                 className="text-sm mb-4"
//                 style={{
//                   color:
//                     service.textColor === "#ffffff" ? "#d1d5db" : "#64748b",
//                 }}
//               >
//                 {service.description}
//               </p>
//             </div>

//             <div className="mb-4">
//               <p
//                 className="text-sm font-bold mb-3"
//                 style={{
//                   color:
//                     service.textColor === "#ffffff" ? "#ffffff" : "#000000",
//                 }}
//               >
//                 {service.description2}
//               </p>

//               {service.features && (
//                 <div className="space-y-2">
//                   {service.features.map((feature, idx) => (
//                     <div key={idx} className="flex items-start gap-3">
//                       <div className="w-2 h-2 rounded-full bg-[#F3831C] shrink-0 mt-2"></div>
//                       <span
//                         className="text-sm flex-1"
//                         style={{
//                           color:
//                             service.textColor === "#ffffff"
//                               ? "#d1d5db"
//                               : "#475569",
//                         }}
//                       >
//                         {feature}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <div className="mt-6">
//               <a
//                 href={service.link}
//                 className="
//                   group inline-flex items-center gap-2
//                   h-10 px-4
//                   rounded-md
//                   border border-[#F3831C]/30
//                   bg-[#F3831C]
//                   text-sm font-medium text-white
//                   transition-colors duration-200
//                   hover:bg-[#F3831C]/90
//                   w-full justify-center
//                 "
//               >
//                 <span>{service.cta}</span>
//                 <svg
//                   className="
//                     w-4 h-4
//                     transition-transform duration-200
//                     group-hover:translate-x-0.5
//                   "
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M14 5l7 7m0 0l-7 7m7-7H3"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="hidden md:grid md:grid-cols-2 gap-12">
//         <div className="md:sticky md:top-30 md:self-start">
//           <div className="flex flex-col">
//             <div className="mb-8 col-span-2">
//               <SectionHeading title="International Certification Programs Offered by AIA" />
//             </div>

//             <div className="flex flex-col justify-between min-h-[60vh]">
//               <div>
//                 <p className="text-sm uppercase tracking-wider text-[#F3831C] font-semibold mb-4">
//                   PROFESSIONAL CERTIFICATION PROGRAMS
//                 </p>

//                 <div className="transition-opacity duration-300">
//                   <h1 className="text-xl md:text-3xl font-bold mb-3 leading-tight text-[#0F3652]">
//                     {ALL_SERVICES[activeCard]?.title || ALL_SERVICES[0].title}
//                   </h1>

//                   <p className="text-[#0F3652] text-lg mb-2 max-w-lg leading-relaxed text-justify">
//                     {ALL_SERVICES[activeCard]?.description ||
//                       ALL_SERVICES[0].description}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-10">
//                 <div className="mt-4">
//                   <a
//                     href={
//                       ALL_SERVICES[activeCard]?.link || ALL_SERVICES[0].link
//                     }
//                     className="
//                       group inline-flex items-center gap-2
//                       h-10 px-4
//                       border border-[#F3831C]/30
//                       bg-[#F3831C]
//                       text-sm font-medium text-white
//                       transition-colors duration-200
//                       hover:bg-[#F3831C]/90
//                     "
//                   >
//                     <span>
//                       {ALL_SERVICES[activeCard]?.cta || ALL_SERVICES[0].cta}
//                     </span>
//                     <svg
//                       className="
//                         w-4 h-4
//                         transition-transform duration-200
//                         group-hover:translate-x-0.5
//                       "
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M14 5l7 7m0 0l-7 7m7-7H3"
//                       />
//                     </svg>
//                   </a>
//                 </div>

//                 <div className="flex items-center gap-4 mt-8">
//                   <div className="h-px w-16 bg-[#F3831C]"></div>
//                   <p className="text-sm text-[#0F3652]/70">
//                     Scroll to explore all courses
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div ref={container} className="relative">
//           {ALL_SERVICES.map((service, i) => {
//             const targetScale = 1 - (ALL_SERVICES.length - i) * 0.05;
//             const start = i / ALL_SERVICES.length;
//             const end = start + 1 / ALL_SERVICES.length;

//             return (
//               <ServiceCard
//                 key={service.id}
//                 service={service}
//                 i={i}
//                 progress={scrollYProgress}
//                 range={[start, end]}
//                 targetScale={targetScale}
//                 onInView={() => setActiveCard(i)}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeCourses;
