import { IMAGE_PATH } from "@/api/base-url";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import React, { useEffect, useRef, useState } from "react";

const CourseLms = ({ courseFeatures, cardTitle, image = "lms2.webp" }) => {
  const labels = [
    "Dedicated Support Person",
    "Updated Study Curriculum",
    "Exam-Oriented Practice Questions",
    "60+ Hours of Detailed Video Lectures",
    "Mock Tests Preparation",
    "100% Exam Registration Assistant",
    "Live Interactive Sessions with Faculty",
  ];

  const radius = 150;
  const center = 250;
  const centerX = 250;
  const centerY = 250;
  const [angleOffset, setAngleOffset] = useState(0);
  const frameRef = useRef(null);
  const lastTimeRef = useRef(performance.now());

  useEffect(() => {
    const animate = (time) => {
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;
      setAngleOffset((prev) => (prev + delta * 0.02) % 360);
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const getPosition = (angle) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: center + radius * Math.cos(rad),
      y: center + radius * Math.sin(rad),
    };
  };

  return (
    <>
      <section className="mt-8">
        {/* <div className="relative w-full h-full">
          <img
            src={`${IMAGE_PATH}/LMS.webp`}
            alt="LMS-Image"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                AIA Digital Learning Platform
              </h1>

              <h2 className="text-xl lg:text-2xl font-semibold text-white/90 mb-8">
                Your All-in-One Partner for Structured Exam Preparation
              </h2>
              <p className="text-3xl font-bold text-white mb-2">
                Padho Kabhi Bhi, Kahi Bhi
              </p>
              <p className="text-2xl font-semibold text-white/80">
                Learn Anytime, Anywhere
              </p>
            </div>
          </div>
        </div> */}
        <img
          src={`${IMAGE_PATH}/${image}`}
          alt="LMS-Image"
          className="w-full h-full object-cover"
        />
        {/* <img
          src={`${IMAGE_PATH}/lms2.webp`}
          alt="LMS-Image"
          className="w-full h-full object-cover"
        /> */}
      </section>
      <section className="py-12 px-4 bg-white">
        <div className="max-w-340 mx-auto">
          <SectionHeading title={cardTitle} align="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {courseFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-[#0F3652]/20 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#0F3652] text-white rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#0F3652] leading-tight">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-700 pl-11">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseLms;
