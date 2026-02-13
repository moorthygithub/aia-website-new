import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";

const CorporateReview = () => {
  const reviews = [
    {
      text: "Thank you, AIA it wouldn't be possible without yoursupport & guidance.",
      author: "HET BARBHAIYA,CFE, KPMG",
    },
    {
      text: "Puneet Sir's CFE classes are outstanding-clear, focused, and incredibly helpful for exam prep. Highly recommended! ThankyouSir...",
      author: "Nathasha D, CFE, Bahrain",
    },
    {
      text: "Best Institute for CAMS Prep.",
      author: " Karan Wahi, CAMS, Investcorp",
    },
    {
      text: "Nice Faculty and staff. Recommended for CFE course.",
      author: "Ankit Dhyani, Audit Associate, PWC",
    },
    {
      text: "I truly appreciate the professionalism, dedication, and personalized support provided by team AIA, which helped me clear the certification with confidence. I would highly recommend AIA to all professionals aspiring to build a career in fraud examination, audit, and risk management.",
      author: "Prithvi Raj Chauhan, Subject Matter Expert, GLA university",
    },
    {
      text: "Ever Grateful to Mr. Garg for founding AIA. The coaching is immaculate & indeed helpful enough to score amazingly. I would choose AIA again for my future courses. Thankyou AIA team!",
      author: "Lakshmi Chandana, Forensic Associate Consultant, EY",
    },
    {
      text: "AIA delivered a high-quality CAMS training program that met my expectation in every aspect. Well-structured and aligned with current industry standards.Highly recommend to any organization looking to enhance their AML compliance capabilities.",
      author: "Kamal Mahmoud, Head of Regulatory & Compliance, MEC Gulf",
    },
  ];

  return (
    <div className="py-1">
      <div className="max-w-340 mx-auto">
        <div className="grid md:grid-cols-2">
          <div className="p-2 rounded-lg">
            <SectionHeading title="Straight From the Learners & Organizations Who Experience Us" />

            <div className="space-y-4 text-[#0F3652]">
              <p className="font-semibold">
                AIA is a trusted partner for companies seeking measurable growth
                and long-term talent development.
              </p>

              <p>
                Our tailored programs are designed to align with your business
                objectives - helping teams strengthen core competencies, improve
                productivity, and foster leadership that's ready for the future.
              </p>
            </div>

            {/* <button className="mt-8 bg-[#F3831C] hover:bg-[#F3831C]/90 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md">
              Know More
            </button> */}
          </div>

          <div className="relative h-96 bg-[#0F3652]  overflow-y-auto overflow-hidden rounded-md w-full">
            <div className="flex flex-col gap-4 p-4 ">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-[#F3831C] rounded-md py-2 px-4 shadow-lg shrink-0 "
                >
                  <p className="text-white mb-1 leading-relaxed text-sm">
                    {review.text}
                  </p>
                  <p className="text-white font-semibold text-md">
                    - {review.author}
                  </p>
                </div>
              ))}
            </div>

            <div className="absolute top-0 left-0 right-0 h-8 bg-linear-to-b from-[#F3831C]/70 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-[#F3831C]/70 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateReview;
