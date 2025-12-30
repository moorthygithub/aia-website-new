import React from "react";
import { Users, Trophy, Target, Eye, Award } from "lucide-react";

const AboutPage = () => {
  const stats = [
    {
      number: "1000+",
      label: "Student Trained",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "99%",
      label: "Positive Result",
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      number: "22+",
      label: "Faculty Experience",
      icon: <Award className="w-6 h-6" />,
      suffix: "Years"
    }
  ];

  return (
    <div className="min-h-screen bg-white  ">
   
      <div 
        className="relative h-[60vh] min-h-125 flex items-center"
        style={{
          backgroundImage: 'url("https://aia.in.net/crm/public/assets/images/about/about-us.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
    
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-blue-900/70 via-indigo-900/60 to-blue-900/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Academy of Internal Audit
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Excellence in Professional Education
            </p>
          </div>
        </div>
      </div>

   
      <div className="py-16 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <img
                src="https://aia.in.net/crm/public/assets/images/why-choose-us.webp"
                alt="Academy of Internal Audit"
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-1 bg-indigo-500"></div>
                <span className="text-sm font-medium text-indigo-600 uppercase tracking-wider">About Us</span>
                <div className="w-8 h-1 bg-amber-500"></div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Academy of Internal Audit
                <span className="block text-lg md:text-xl font-normal text-gray-600 mt-3">
                  Excellence in Professional Education
                </span>
              </h2>

              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  AIA is an online training institute to secure success in international certification courses. With the proven study material, we are committed towards success in professional courses for our students and help them grow in their professional journey.
                </p>
                <p>
                  We are pleased to say that our faculty has always been our greatest strength who is always ready to assist students with his knowledge theoretically and practically. We help aspirants not only how to obtain international certifications, but also how to have them in the real sense so that they can demonstrate the same skills and competence in relevant areas as well.
                </p>
                <p>
                  Since 15 years, AIA has been teaching commerce students under the name of Perfect Coaching Centre and now providing guidance for Top Certification Courses as well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

   
      <div className="py-16 bg-linear-to-b from-amber-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Numbers Speak Louder Than Words !!
            </h2>
            <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>

                <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center gap-1">
                  <span>{stat.number}</span>
                  {stat.suffix && (
                    <span className="text-2xl text-white/80">{stat.suffix}</span>
                  )}
                </div>

                <p className="text-lg text-white/90 font-medium">
                  {stat.label}
                </p>
                
                <div className="w-16 h-1 bg-white/40 mx-auto mt-4 group-hover:w-24 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

     
      <div className="py-16 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="relative">
              <img
                src="https://aia.in.net/crm/public/assets/images/faculty/Puneet_Garg.webp"
                alt="Trainer Photo"
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>

            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-linear-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <span>Expert Faculty</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Know Your Trainer
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-amber-600 mb-6">
                  Not Just a Trainer, But Your Success Coach
                </h3>
                
                <div className="w-24 h-1 bg-linear-to-r from-amber-400 to-amber-500 rounded-full"></div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold text-gray-900">Puneet Garg</span> is a globally certified audit leader with{" "}
                  <span className="font-bold text-gray-900">22+ years</span> of experience in Internal Audit, Risk Management, Compliance, Forensics, and Finance. 
                  Holding prestigious credentials including{" "}
                  <span className="font-bold text-gray-900">CA, CS, CIA, CAMS, and CFE</span>, he brings unmatched expertise to his role as a mentor.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  He held key positions at renowned companies such as{" "}
                  <span className="font-bold text-gray-900">Hyundai Motors, Samsung Electronics India, Panasonic India, DCM Shriram Industries, and Alchemist Group</span>, 
                  and has led audit projects across India, the Middle East, and the UK to bring rich and practical insights into his every session for his students.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Driven by a passion for teaching, Puneet has mentored and trained{" "}
                  <span className="font-bold text-gray-900">1,000+ aspirants</span>, helping them build{" "}
                  <span className="font-bold text-gray-900">successful careers and master complex concepts</span> like CIA, CFE, and CAMS with confidence. 
                  At AIA, he simplifies tough topics with real-world practical examples and engaging teaching methods, which students truly value.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <img
                  src="https://aia.in.net/crm/public/assets/images/faculty/message.png"
                  alt="message"
                  className="opacity-90"
                />
                <p className="text-gray-600 text-sm mt-2 italic">
                  "Passionate about transforming careers through practical learning"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="py-16 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div className="relative">
              <img
                src="https://aia.in.net/crm/public/assets/images/about/about_us1.jpg"
                alt="Our Mission - Academy of Internal Audit"
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-1 bg-blue-600"></div>
                <span className="text-sm font-medium text-blue-600 uppercase">Our Purpose</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our Mission is to provide the best training, study material and complete guidance related to Global Certifications to the aspirants at the lowest possible cost and let the corporate's have a right set of internal auditors and fraud examiners to safeguard their efforts and wealth.
              </p>
            </div>
          </div>

       
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-1 bg-amber-500"></div>
                <span className="text-sm font-medium text-amber-600 uppercase">Future Focus</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  At AIA, our vision is to empower professionals across the globe to learn the right skills, grow confidently in their careers, and demonstrate true professional excellence.
                </p>
                <p>
                  We are committed to helping individuals stay ahead of emerging risks and controls, ensuring they remain relevant, ethical, and impactful in their roles.
                </p>
                <p>
                  To explore more about how AIA can support your career journey with certification-driven training programs{" "}
                  <a 
                    href="https://aia.in.net/" 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Click here to explore AIA courses
                  </a>
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://aia.in.net/crm/public/assets/images/about/about_us2.jpg"
                alt="Our Vision - Academy of Internal Audit"
                className="w-full h-auto rounded-lg border border-gray-200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;