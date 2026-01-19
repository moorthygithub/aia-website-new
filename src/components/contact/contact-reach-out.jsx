import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactReachOut = () => {
  const contactMethods = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Office Address",
      color: "indigo",
      details: [
        "C826-828, Vipul Plaza,",
        "Sector-81, Faridabad,",
        "Delhi - NCR 121002,",
        "India"
      ],
      iconBg: "bg-[#0F3652]/10",
      iconColor: "text-[#0F3652]",
      borderColor: "border-[#0F3652]/20",
      bg: "bg-white"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Us",
      color: "amber",
      details: [
        "support@aia.in.net",
        "contact@aia.in.net"
      ],
      iconBg: "bg-[#F3831C]/10",
      iconColor: "text-[#F3831C]",
      borderColor: "border-[#F3831C]/20",
      bg: "bg-white"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Us",
      color: "blue",
      details: [
        "+91 93113 20114",
        "+91 97175 97197",
        "0129 417 4177",
        "Toll free number"
      ],
      iconBg: "bg-[#0F3652]/10",
      iconColor: "text-[#0F3652]",
      borderColor: "border-[#0F3652]/20",
      bg: "bg-white"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F3652] mb-2">
            Reach Out Anytime
            <div className="w-20 h-1 bg-linear-to-r from-[#0F3652] to-[#F3831C] mx-auto rounded-full"></div>
          </h2>
          <p className="text-[#0F3652]/80 text-sm md:text-base">
            We're here for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {contactMethods.map((method) => (
            <div
              key={method.title}
              className={`${method.bg} rounded-xl p-5 border ${method.borderColor} shadow-sm hover:shadow-md transition-shadow duration-200`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`${method.iconBg} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <div className={method.iconColor}>
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#0F3652]">
                  {method.title}
                </h3>
              </div>

              <div className="space-y-2">
                {method.details.map((detail, i) => (
                  <p key={i} className="text-[#0F3652] text-sm leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactReachOut;