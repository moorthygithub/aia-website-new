import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactReachOut = () => {
  const contactMethods = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Address",
      details: [
        "C826-828, Vipul Plaza,",
        "Sector-81, Faridabad,",
        "Delhi - NCR 121002,",
        "India"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: [
        { text: "support@aia.in.net", link: "mailto:support@aia.in.net" },
        { text: "contact@aia.in.net", link: "mailto:contact@aia.in.net" }
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: [
        { text: "+91 93113 20114", link: "tel:+919311320114" },
        { text: "+91 97175 97197", link: "tel:+919717597197" },
        { text: "0129 417 4177", link: "tel:01294174177" },
        { text: "1800-1200-2555", link: "tel:+180012002555", isTollFree: true }
      ]
    }
  ];

  return (
    <section 
      className="py-16 pb-16"
      style={{
        background: 'linear-gradient(to bottom, #052154 0%, #052154 50%, #ffffff 50%, #ffffff 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-0">
            Reach Out Anytime, We're Here for You
          </h2>
        </div>

        {/* Cards Container */}
        <div className="flex flex-wrap justify-center gap-8 px-5 pb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl w-72 pt-16 pb-8 px-5 text-center"
              style={{
                border: '2px solid #f97316'
              }}
            >
              {/* Icon Circle - Positioned absolutely */}
              <div 
                className="absolute -top-10 left-1/2 w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  transform: 'translateX(-50%)',
                  background: 'rgba(249, 115, 22, 0.1)'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{
                    backgroundColor: '#f97316'
                  }}
                >
                  {method.icon}
                </div>
              </div>

              {/* Content */}
              <h3 
                className="text-3xl font-bold mb-4 mt-8"
                style={{ color: '#f97316' }}
              >
                {method.title}
              </h3>

              <div className="space-y-1">
                {method.details.map((detail, i) => (
                  <p key={i} className="text-base text-black leading-relaxed">
                    {typeof detail === 'string' ? (
                     <span className="flex  justify-start">{ detail}</span>
                    ) : detail.isTollFree ? (
                      
                     <a
  href={detail.link}
  style={{ color: "#000", textDecoration: "none" }}
>
  <img
    src="https://aia.in.net/crm/public/assets/images/logo/toll free.png"
    alt="Toll free number"
    className="mx-auto"
  />
</a>

                    ) : (
                      <a 
                        href={detail.link}
                        className="text-black no-underline hover:text-[#f97316] transition-colors"
                      >
                        {detail.text}
                      </a>
                    )}
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

