import React from 'react';

const AboutPartner = () => {
  return (
    <div className="bg-white">
      <div className="max-w-full mx-auto">
      
        <section className="relative space-y-10 bg-[#0F3652] p-8 overflow-hidden">
        
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-30">
            <div className="absolute right-0 top-0 h-full w-full">
              <div className="absolute right-0 top-0 border-r-300 border-t-400 border-r-transparent border-t-[#F3831C] sm:border-r-400 sm:border-t-500 md:border-r-500 md:border-t-600"></div>
            </div>
            <div className="absolute right-0 top-0 h-full w-full">
              <div className="absolute right-0 top-0 border-r-250 border-t-350 border-r-transparent border-t-[#F3831C] sm:border-r-350 sm:border-t-450 md:border-r-450 md:border-t-550"></div>
            </div>
            <div className="absolute right-0 top-0 h-full w-full">
              <div className="absolute right-0 top-0 border-r-200 border-t-300 border-r-transparent border-t-[#F3831C] sm:border-r-300 sm:border-t-400 md:border-r-400 md:border-t-500"></div>
            </div>
          </div>

          <div className="relative z-10 max-w-340 mx-auto">
            <h2 className="text-3xl max-w-340 mx-auto md:text-4xl font-bold text-white">
              Corporate Training Delivered to Leading Organisations 
              <br />
              <span className="text-[#F3831C]">Trusted by Corporations for Fraud & Risk Capability Building</span>
            </h2>

            <div className="grid max-w-340 mx-auto md:grid-cols-2 gap-8 items-center mt-10">
              <div className="order-2 md:order-1">
                <div className="p-1">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
                    alt="Quick access dashboard"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  SBI Card X AIA 
                </h3>
                <p className="text-white text-lg">
                  SBI Card is one of India's leading credit card issuers, operating in a highly regulated and fraud-sensitive environment. AIA supported SBI Card through focused Certified Fraud Examiner (CFE) training, aimed at strengthening fraud awareness, detection techniques, and investigative thinking among professionals. The program helped teams better identify fraud risks, enhance compliance alignment, and apply structured fraud prevention practices across critical operational areas.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className='p-8 max-w-340 mx-auto'>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0F3652] mb-3">
                Bajaj Allianz X AIA
              </h3>
              <p className="text-[#0F3652] text-lg">
                Bajaj Allianz is a trusted name in insurance and financial services, where fraud risk management plays a critical role. We delivered CFE-oriented training to equip professionals with practical knowledge in fraud detection, investigation methodologies, and control mechanisms. This training enabled teams to improve internal vigilance, strengthen fraud response frameworks, and support more informed decision-making in risk and compliance functions across the organization.
              </p>
            </div>

            <div>
              <div className="p-1">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop"
                  alt="Quick access interface"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

  
        <section className="relative bg-[#0F3652] p-8 overflow-hidden">
         
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-30">
            <div className="absolute right-0 top-0 h-full w-full">
              <div className="absolute right-0 top-0 border-r-300 border-t-400 border-r-transparent border-t-[#F3831C] sm:border-r-400 sm:border-t-500 md:border-r-500 md:border-t-600"></div>
            </div>
            <div className="absolute right-0 top-0 h-full w-full">
              <div className="absolute right-0 top-0 border-r-250 border-t-350 border-r-transparent border-t-[#F3831C] sm:border-r-350 sm:border-t-450 md:border-r-450 md:border-t-550"></div>
            </div>
            <div className="absolute right-0 top-0 h-full w-full">
              <div className="absolute right-0 top-0 border-r-200 border-t-300 border-r-transparent border-t-[#F3831C] sm:border-r-300 sm:border-t-400 md:border-r-400 md:border-t-500"></div>
            </div>
          </div>

          <div className="relative z-10 max-w-340 mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="p-1">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop"
                    alt="Assessment interface"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Adani X AIA
                </h3>
                <p className="text-white text-lg">
                  Adani Group is a diversified conglomerate with operations spanning infrastructure, energy, and logistics. AIA conducted CFE-based professional training to build awareness around fraud risks, ethical practices, and governance responsibilities. The program supported professionals in understanding complex fraud scenarios, reinforcing internal controls, and promoting a proactive approach to risk management, contributing to stronger governance and compliance culture across business functions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPartner;