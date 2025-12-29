import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPinterestP,
    FaTwitter,
    FaWhatsapp,
    FaYoutube,
} from "react-icons/fa";

const AIANavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const links = [
    {
      icon: <Mail size={16} />,
      text: "support@aia.in.net",
      href: "mailto:support@aia.in.net",
      color: "text-[#fb7705]",
      underline: true,
    },
    {
      icon: <FaWhatsapp />,
      text: "",
      href: "https://wa.me/+919311320114",
      color: "text-[#fb7705]",
      underline: false,
    },
    {
      icon: <Phone size={16} />,
      text: "+91 93113 20114",
      href: "tel:+919311320114",
      color: "text-[#fb7705]",
      underline: true,
    },
    {
      icon: <Phone size={16} />,
      text: "1800-1200-2555",
      href: "tel:+180012002555",
      color: "text-white",
      underline: true,
    },
  ];
  const menuItems = [
    {
      title: "Home",
      link: "/",
      submenu: null,
    },
    {
      title: "About us",
      link: "/about-us",
      submenu: null,
    },
    {
      title: "Courses",
      link: "#",
      submenu: [
        { name: "CFE Curriculum", link: "/cfe-curriculum" },
        { name: "CIA Curriculum", link: "/cia-curriculum" },
        { name: "CIA Challenge", link: "/cia-challenge-curriculum" },
        { name: "CAMS", link: "/cams" },
      ],
    },
    {
      title: "Free Resources",
      link: "#",
      submenu: [{ name: "CFE", link: "/cfe-free-resources" }],
    },
    {
      title: "Other",
      link: "#",
      submenu: [
        { name: "Blog", link: "/blogs" },
        { name: "Our Passout", link: "/passed-out" },
      ],
    },
    {
      title: "Contact Us",
      link: "/contact",
      submenu: null,
    },
  ];

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="w-full">
 
      {/* <div className="flex justify-center md:justify-between bg-[hsl(var(--dark))]">
        <div className="hidden md:block  text-white py-2.5">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-6 text-sm">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`
            flex items-center gap-2 relative ${link.color}
            ${
              link.underline
                ? `
              transition-colors duration-300
              after:content-['']
              after:absolute
              after:left-0
              after:bottom-0
              after:h-[1px]
              after:w-full
              after:bg-current
              after:scale-x-0
              after:origin-right
              after:transition-transform
              after:duration-500
              after:ease-out
              hover:after:scale-x-100
              hover:after:origin-left
            `
                : ""
            }
          `}
                >
                  {link.icon}
                  {link.text && <span>{link.text}</span>}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className=" text-white py-2.5 ">
          <div className="px-4 flex justify-center items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-white hover:text-[#fb7705] transition-colors"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div> */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <a href="/">
                <img
                  src="https://aia.in.net/crm/public/assets/images/logo/new_logo.webp"
                  alt="Academy of Internal Audit"
                  className="h-8 md:h-10 w-auto"
                />
              </a>
            </div>

            <ul className="hidden lg:flex items-center gap-6">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => item.submenu && setActiveDropdown(index)}
                  onMouseLeave={() => item.submenu && setActiveDropdown(null)}
                >
                  <a
                    href={item.link}
                    className="
    flex items-center gap-1
    text-gray-800 font-medium
    hover:text-[#0067DA]
    transition-colors
    py-2 text-[15px]
  "
                  >
                    {item.title}
                    {item.submenu && <ChevronDown size={14} />}
                  </a>

                  {item.submenu && (
                    <ul
                      className={`absolute top-full left-0 mt-2  px-6  bg-white rounded-lg shadow-xl min-w-[220px] py-2 transition-all duration-300 ${
                        activeDropdown === index
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-2"
                      }`}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.link}
                            className="
    relative inline-block
     py-2.5
    text-sm text-gray-600
    hover:text-[#0067DA]
  
    transition-colors
    duration-300

    after:content-['']
    after:absolute
    after:left-0
    after:bottom-1
    after:h-[1px]
    after:w-full
    after:bg-[#0067DA]
    after:scale-x-0
    after:origin-right
    after:transition-transform
    after:duration-500
    after:ease-out

    hover:after:scale-x-100
    hover:after:origin-left
  "
                          >
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              <li>
                <a
                  href="/enroll-now"
                  className="
    bg-[#0067DA] text-white
    px-6 py-2.5 rounded-md
    font-semibold
    hover:bg-[#0067DA]/90
    transition-all
    shadow-md hover:shadow-lg
  "
                >
                  Enroll Now
                </a>
              </li>
            </ul>

            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-800 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden fixed top-0 left-0 w-80 h-screen bg-white shadow-2xl transition-transform duration-300 overflow-y-auto z-50 ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-6">
              <button
                onClick={toggleMobileMenu}
                className="absolute top-7 right-6 text-gray-800"
              >
                <X size={28} />
              </button>

              <div className="mb-8">
                <img
                  src="https://aia.in.net/crm/public/assets/images/logo/new_logo.webp"
                  alt="Academy of Internal Audit"
                  className="h-8 md:h-10 w-auto"
                />
              </div>

              <div className="mt-8">
                {menuItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-200">
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(index)}
                          className="flex items-center justify-between w-full py-4 text-gray-800 font-medium"
                        >
                          {item.title}
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              activeDropdown === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {activeDropdown === index && (
                          <ul className="hover-bg-[#0067DA] rounded-md mb-4   ">
                            {item.submenu.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <a
                                  href={subItem.link}
                                  className="
    relative inline-block
 px-4 py-2.5
    text-sm text-gray-600
    hover:text-[#0067DA]
    transition-colors
    duration-300

    after:content-['']
    after:absolute
    after:left-0
    after:bottom-1
    after:h-[1px]
    after:w-full
    after:bg-[#0067DA]
    after:scale-x-0
    after:origin-right
    after:transition-transform
    after:duration-500
    after:ease-out

    hover:after:scale-x-100
    hover:after:origin-left
  "
                                >
                                  {subItem.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.link}
                        className="block py-4 text-gray-800 font-medium hover-text-[#0067DA] transition-colors"
                      >
                        {item.title}
                      </a>
                    )}
                  </div>
                ))}

                <div className="mt-6">
                  <a
                    href="/enroll-now"
                    className="block w-full bg-[#0067DA] text-white text-center px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-all"
                  >
                    Enroll Now
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
                  <a
                    href="mailto:support@aia.in.net"
                    className="flex items-center gap-2 text-sm text-gray-600 hover-text-[#0067DA]"
                  >
                    <Mail size={16} />
                    support@aia.in.net
                  </a>
                  <a
                    href="tel:+919311320114"
                    className="flex items-center gap-2 text-sm text-gray-600 hover-text-[#0067DA]"
                  >
                    <Phone size={16} />
                    +91 93113 20114
                  </a>
                  <a
                    href="tel:+180012002555"
                    className="flex items-center gap-2 text-sm text-gray-600 hover-text-[#0067DA]"
                  >
                    <Phone size={16} />
                    1800-1200-2555
                  </a>
                </div>
              </div>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleMobileMenu}
            />
          )}
        </div>
      </nav>
    </div>
  );
};

export default AIANavbar;
