import React from "react";
import { Mail, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const TopHeader = () => {
  const socialLinks = [
    {
      icon: FaFacebookF,
      url: "https://www.facebook.com/@academyofinternalaudit",
      label: "Facebook",
    },
    {
      icon: FaTwitter,
      url: "https://twitter.com/AcademyAudit",
      label: "Twitter",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/academyofia/",
      label: "Instagram",
    },
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/company/academy-of-internal-audit",
      label: "LinkedIn",
    },
    {
      icon: FaPinterestP,
      url: "https://in.pinterest.com/academyofia/",
      label: "Pinterest",
    },
    {
      icon: FaYoutube,
      url: "https://www.youtube.com/@academyofia",
      label: "YouTube",
    },
  ];

  const infoLinks = [
    {
      icon: <Mail size={16} />,
      text: "support@aia.in.net",
      href: "mailto:support@aia.in.net",
    },
    {
      icon: <FaWhatsapp size={16} />,
      text: "",
      href: "https://wa.me/+919311320114",
    },
    {
      icon: <Phone size={16} />,
      text: "+91 93113 20114",
      href: "tel:+919311320114",
    },
    {
      icon: <Phone size={16} />,
      text: "1800-1200-2555",
      href: "tel:+180012002555",
    },
  ];

  return (
    <div className="bg-[#30446e] text-white text-sm">
      <div className="px-4 py-2.5">
        <div className="flex justify-center md:justify-between items-center gap-4">
          <div className="hidden md:flex items-center">
            {infoLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="group flex items-center gap-2 px-3 py-1 rounded-full transition-all duration-300"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0067DA] text-white">
                  {link.icon}
                </span>

                {link.text && (
                  <span className="text-white group-hover:text-[#fb7705] transition-colors duration-300">
                    {link.text}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                    flex items-center justify-center
                    w-9 h-9 rounded-full
                    bg-[#0067DA] text-white
                    transition-all duration-300
                    hover:bg-white hover:text-[#0067DA]
                    hover:border hover:border-[#0067DA]
                  "
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
