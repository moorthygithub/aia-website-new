import React from "react";

const AboutSection = () => {
  return (
    <div className="py-16 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm font-medium text-[#F3831C] uppercase tracking-wider">
                Academy of Internal Audit
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0F3652] mb-6">
              Excellence in Professional Education
            </h2>

            <div className="text-[#0F3652] leading-relaxed space-y-4">
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
  );
};

export default AboutSection;