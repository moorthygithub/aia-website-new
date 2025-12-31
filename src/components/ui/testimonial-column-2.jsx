/* eslint-disable no-unused-vars */

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsColumn2 = (props) => {
  return (
     <div className={props.className}>
          <motion.div
            animate={{
              translateY: "50%",
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
                  {props.testimonials.map(({ text, image, alt, role }, i) => (
                    <div
                      className="p-2 rounded-md border  shadow-lg shadow-primary/10 max-w-xs w-full"
                      key={i}
                    >
                      {/* <div>{text}</div> */}
                      <div className="flex items-center gap-2 mt-5">
                        <img
                     
                        
                         decoding="async"
                          src={image}
                          alt={alt}
                          className="h-full w-full"
                        />
                        {/* <div className="flex flex-col">
                          <div className="font-medium tracking-tight leading-5">
                            {name}
                          </div>
                          <div className="leading-5 opacity-60 tracking-tight">
                            {role}
                          </div>
                        </div> */}
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              )),
            ]}
          </motion.div>
        </div>
  )
}

export default TestimonialsColumn2