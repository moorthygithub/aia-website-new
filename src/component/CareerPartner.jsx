import React from "react";
import { Globe, Clock, Users, GraduationCap, BookOpen, Trophy } from "lucide-react";

const CareerPartner = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Certifications",
      description: "Internationally recognized certifications that open doors worldwide",
      color: "indigo",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-200",
      bg: "bg-white"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Learning",
      description: "Study anytime, anywhere with our comprehensive LMS platform",
      color: "amber",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      borderColor: "border-amber-200",
      bg: "bg-white"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Support",
      description: "24/7 support team ready to help you succeed",
      color: "blue",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
      bg: "bg-white"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Expert Faculty",
      description: "Learn from industry experts and experienced members",
      color: "emerald",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-200",
      bg: "bg-white"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Custom Materials",
      description: "Tailored study materials designed for exam success",
      color: "violet",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
      borderColor: "border-violet-200",
      bg: "bg-white"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Proven Success",
      description: "Join thousands of successful professionals worldwide",
      color: "rose",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      borderColor: "border-rose-200",
      bg: "bg-white"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Your Career Partner Guiding You From Enrollment to Success
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-indigo-600 to-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Compact Features Grid - 3x2 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`${feature.bg} rounded-xl p-6 border ${feature.borderColor} shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-200`}
            >
              {/* Icon */}
              <div className={`${feature.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <div className={feature.iconColor}>
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional: Add a subtle divider or decorative element */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-500 text-sm">
            Start your journey to professional excellence today
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerPartner;