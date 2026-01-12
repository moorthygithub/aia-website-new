




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
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-200",
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
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      borderColor: "border-amber-200",
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
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
      bg: "bg-white"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Reach Out Anytime
            <div className="w-20 h-1 bg-linear-to-r from-indigo-600 to-amber-500 mx-auto rounded-full"></div>
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            We're here for you
          </p>
        </div>

        {/* Compact Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {contactMethods.map((method) => (
            <div
              key={method.title}
              className={`${method.bg} rounded-xl p-5 border ${method.borderColor} shadow-sm hover:shadow-md transition-shadow duration-200`}
            >
              {/* Icon and Title Row */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`${method.iconBg} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <div className={method.iconColor}>
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {method.title}
                </h3>
              </div>

              {/* Details - Compact */}
              <div className="space-y-2">
                {method.details.map((detail, i) => (
                  <p key={i} className="text-gray-700 text-sm leading-relaxed">
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