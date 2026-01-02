import React from "react";

const AboutTrainerSection = () => {
  return (
    <div className="bg-linear-to-r from-slate-700 via-slate-600 to-blue-950 ">
      <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 items-center">
    
          <div className="relative">
            <div className="relative">
             
              
              <img
                src="https://aia.in.net/crm/public/assets/images/faculty/Puneet_Garg.webp"
                alt="Puneet Garg - Trainer"
                className="w-full h-auto relative z-0"
              />
            </div>
          </div>

        
          <div className="text-white">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Know Your Trainer
            </h2>
            <p className="text-xl md:text-2xl mb-4 font-medium">
              Not Just a Trainer, But Your Success Coach
            </p>
            </div>

            <div className="space-y-2 text-base leading-relaxed">
              <p>
                <span className="font-bold">Puneet Garg</span> is a globally certified audit leader with{" "}
                <span className="font-bold">22+ years</span> of experience in Internal Audit, Risk Management, Compliance, Forensics, and Finance. 
                Holding prestigious credentials including{" "}
                <span className="font-bold">CA, CS, CIA, CAMS, and CFE</span>, he brings unmatched expertise to his role as a mentor.
              </p>

              <p>
                He held key positions at renowned companies such as{" "}
                <span className="font-bold">Hyundai Motors, Samsung Electronics India, Panasonic India, DCM Shriram Industries, and Alchemist Group</span>, 
                and has led audit projects across India, the Middle East, and the UK to bring rich and practical insights into his every session for his students.
              </p>

              <p>
                Driven by a passion for teaching, Puneet has mentored and trained{" "}
                <span className="font-bold">1,000+ aspirants</span>, helping them build{" "}
                <span className="font-bold">successful careers and master complex concepts</span> like CIA, CFE, and CAMS with confidence. 
                At AIA, he simplifies tough topics with real-world practical examples and engaging teaching methods, which students truly value.
              </p>
               <div className="">
              <img
                src="https://aia.in.net/crm/public/assets/images/faculty/message.png"
                alt="Student Testimonials"
                className="w-full rounded-lg"
              />
            </div>
            </div>

            {/* Testimonial Image */}
           
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutTrainerSection;