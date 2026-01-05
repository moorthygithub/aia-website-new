import React from "react";
import {
  Users,
  Calendar,
  Award,
  Building2,
  Handshake,
  ShoppingBag,
  Zap,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Star,
} from "lucide-react";

export default function CamsUnique() {
  const services = [
    {
      icon: <Users className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />,
      title: "Dedicated Support Person",
      description:
        "Get one-on-one guidance throughout your learning journey — we're with you every step of the way.",
      position: "left",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />,
      title: "Hard Copy Notes",
      description:
        "Comprehensive and well-structured notes delivered to your doorstep for easy offline study.",
      position: "left",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />,
      title: "50+ Hours of Video Lectures",
      description:
        "Learn at your own pace with high-quality, detailed video lectures covering the complete syllabus.",
      position: "left",
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />,
      title: "Live Sessions with Faculty",
      description:
        "Interact directly with expert faculty members to clarify doubts and deepen your understanding.",
      position: "right",
    },
    {
      icon: <Award className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />,
      title: "100% Exam Registration Support",
      description:
        "From registration to scheduling your exam —we assist you at every stage.",
      position: "right",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />,
      title: "Practical & Proven Training",
      description:
        "Join AIA and experience audit training that's practical, personal, and proven.",
      position: "right",
    },
  ];

  return (
    <section
      id="unique-section"
      className="w-full py-24 px-4 bg-linear-to-bl from-blue-50 via-transparent to-red-50 text-gray-800 relative"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center mb-6">
          <span className="text-blue-500 font-medium mb-2 flex items-center gap-2">
            <Zap className="w-4 h-4" /> WHAT MAKES US UNIQUE
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">
            Welcome to <span className="text-blue-500">AIA</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500"></div>
        </div>

        <p className="text-center max-w-2xl mx-auto mb-16 text-gray-600">
          At the Academy of Internal Audit, we go beyond just training — we provide a complete support system to ensure your success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem key={index} {...service} />
              ))}
          </div>

          <div className="space-y-16">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem key={index} {...service} />
              ))}
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
        <div className="text-blue-500 bg-blue-100 p-3 rounded-lg relative transition-colors duration-300 group-hover:bg-blue-200 group-hover:rotate-6">
          {icon}
          {secondaryIcon}
        </div>
        <h3 className="text-xl font-medium text-gray-800 group-hover:text-blue-500 transition-colors duration-300">
          {title}
        </h3>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed pl-12">{description}</p>
    </div>
  );
}