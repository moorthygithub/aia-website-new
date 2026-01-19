/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props) => {
  
  const getCourseName = (course) => {
    switch(course) {
      case "CFE": return "CFE";
      case "CIAC": return "CIA";
      case "CAMS": return "CAMS";
      default: return course;
    }
  };

  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ name, image, alt, student_designation, comapany_image, company_alt, course }, i) => (
                <div
                  className="rounded-md border border-[#F3831C]/20 bg-white max-w-xs w-full overflow-hidden"
                  key={i}
                >
                  <div className="h-48 w-full relative">
                    <img
                      src={image}
                      alt={alt}
                      decoding="async"
                      className="h-full w-full object-top object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-[#0F3652]/10 backdrop-blur-sm text-black px-3 py-1 rounded-md text-xs font-semibold">
                      {getCourseName(course)}
                    </div>
                  </div>
                  
                  <div className="p-4 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold tracking-tight text-[#0F3652]">
                          {name}
                        </span>
                        <span className="text-xs opacity-60 text-[#0F3652]">
                          {student_designation}
                        </span>
                      </div>
                      
                      <img
                        src={comapany_image}
                        alt={company_alt}
                        decoding="async"
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};