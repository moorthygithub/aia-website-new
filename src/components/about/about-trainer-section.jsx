import React from "react";

const AboutTrainerSection = () => {
  return (
    <div className="bg-linear-to-r from-slate-700 via-slate-600 to-blue-950 ">
      <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 items-center">
    
          <div className="relative">
          <img
                src="https://aia.in.net/crm/public/assets/images/faculty/Puneet_Garg.webp"
                alt="Puneet Garg - Trainer"
                className="w-full h-screen relative z-0"
              />
          </div>

        
          <div className="text-white py-2">
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
                <span className="font-bold">Puneet Garg</span> is a globally certified audit leader with <span className="font-bold"> over 22 years of experience </span> across Internal Audit, Risk Management, Compliance, Forensics, and Finance. Holding prestigious credentials including   <span className="font-bold"> CA, CS, CIA, CAMS, and CFE</span>, he brings deep technical expertise and practical insight to his role as a mentor and industry expert.
            
              </p>

              <p>
              Over the course of his career, he has worked with leading multinational organizations such as <span className="font-bold">  Samsung, Hyundai, Panasonic, and Alchemist, and has served as the Head of Internal Audit at DCM Shriram Industries Ltd.</span>, where he led enterprise-wide audit, risk, and control initiatives. His strong foundation in corporate governance, internal controls, and fraud investigation has established him as a trusted authority within the audit and compliance ecosystem.
              </p>

              <p>
              Driven by a genuine passion for teaching, he has <span className="font-bold"> mentored and trained 2,000+ aspirants</span>, helping them build successful careers and confidently master complex certifications themselves first. <span className="font-bold"> At the Academy of Internal Audit (AIA), he is known for simplifying challenging concepts </span> through real-world examples, practical case discussions, and engaging teaching methods that learners consistently value. In addition to individual mentoring,<span className="font-bold"> he has conducted specialized training programs for corporate teams, regulatory bodies, and investigative agencies.
              </span>
              </p>
              <p>He has also served as an <span className="font-bold">Authorized Trainer with the NSE Academy</span>, contributing to the professional development of finance and audit professionals across India. 

              </p>

              <p>
              In recognition of his impact on ethical leadership and capability building in the profession, <a href="https://www.ceoinsightsindia.com/leader/puneet-garg-equipping-audit-compliance-professionals-to-lead-with-integrity-impact-cid-9846.html" target="_blank" className="font-bold text-blue-200">CEO Insights India</a> <span className="font-bold">featured him</span> among the <span className="font-bold">Top 10 Impactful Business Leaders in India.</span>
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