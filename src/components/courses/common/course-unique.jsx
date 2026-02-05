import React from "react";
import { Zap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading/SectionHeading";

export default function CourseUnique({
  badgeText,
  heading,
  highlight,
  description,
  services,
  lastText = "",
}) {
  return (
    <section
      id="unique-section"
      className="w-full py-24 px-4 text-gray-800 relative"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center mb-6">
          <span className="text-[#F3831C] font-medium mb-2 flex items-center gap-2">
            <Zap className="w-4 h-4" /> {badgeText}
          </span>

          <SectionHeading
            title={heading}
            highlight1={highlight}
            align="center"
          />
        </div>

        <p className="text-center max-w-2xl mx-auto mb-16 text-[#0F3652]">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <div className="space-y-16">
            {services
              .filter((s) => s.position === "left")
              .map((service, index) => (
                <ServiceItem key={index} {...service} />
              ))}
          </div>

          <div className="space-y-16">
            {services
              .filter((s) => s.position === "right")
              .map((service, index) => (
                <ServiceItem key={index} {...service} />
              ))}
          </div>

          <div className="font-bold w-full  col-span-2 text-center text-xl">
            {lastText}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ icon, secondaryIcon, title, description }) {
  return (
    <div className="flex flex-col group">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-[#F3831C] bg-[#F3831C]/10 p-3 rounded-lg relative transition-colors duration-300 group-hover:bg-[#F3831C]/20 group-hover:rotate-6">
          {icon}
          {secondaryIcon}
        </div>
        <h3 className="text-xl font-medium text-[#0F3652] group-hover:text-[#F3831C] transition-colors duration-300">
          {title}
        </h3>
      </div>
      <p className="text-sm text-[#0F3652] leading-relaxed pl-12">
        {description}
      </p>
    </div>
  );
}
