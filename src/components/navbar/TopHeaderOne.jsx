import { Mail, MessageCircle, Phone } from "lucide-react";
import TopHeader from "./TopHeader";

const TopHeaderOne = () => {
  const socialLinks = [
    {
      icon: "facebook",
      url: "https://www.facebook.com/@academyofinternalaudit",
      label: "Facebook",
    },
    {
      icon: "twitter",
      url: "https://twitter.com/AcademyAudit",
      label: "Twitter",
    },
    {
      icon: "instagram",
      url: "https://www.instagram.com/academyofia/",
      label: "Instagram",
    },
    {
      icon: "linkedin",
      url: "https://www.linkedin.com/company/academy-of-internal-audit",
      label: "LinkedIn",
    },
    {
      icon: "pinterest",
      url: "https://in.pinterest.com/academyofia/",
      label: "Pinterest",
    },
    {
      icon: "youtube",
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
      icon: <MessageCircle size={16} />,
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

  const SocialIcon = ({ icon }) => {
    const iconMap = {
      facebook: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      twitter: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      instagram: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      linkedin: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      pinterest: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
        </svg>
      ),
      youtube: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    };
    return iconMap[icon] || null;
  };

  return (
    <div className="space-y-8 py-8 bg-gray-50">
      <TopHeader />
      <div className="relative overflow-hidden r shadow-lg">
        <div
          style={{ backgroundColor: "#30446e" }}
          className="text-white text-sm"
        >
          <div className="px-4 py-3">
            <div className="flex justify-center md:justify-between items-center gap-6">
              <div className="hidden md:flex items-center gap-6">
                {infoLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="group flex items-center gap-2 transition-all duration-300 hover:scale-105"
                  >
                    <span
                      style={{ backgroundColor: "#fb7705" }}
                      className="flex items-center justify-center w-9 h-9 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {link.icon}
                    </span>
                    {link.text && (
                      <span
                        style={{ color: "#fb7705" }}
                        className="font-medium hover:opacity-80 transition-opacity duration-300"
                      >
                        {link.text}
                      </span>
                    )}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-9 h-9 rounded-full text-white border border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    style={{
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#fb7705";
                      e.currentTarget.style.borderColor = "#fb7705";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.borderColor =
                        "rgba(255, 255, 255, 0.3)";
                    }}
                  >
                    <SocialIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden  shadow-lg">
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 text-white text-sm">
          <div className="px-4 py-3 backdrop-blur-sm">
            <div className="flex justify-center md:justify-between items-center gap-6">
              <div className="hidden md:flex items-center gap-6">
                {infoLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="group flex items-center gap-2 transition-all duration-300 hover:scale-105"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-400/70 transition-all duration-300">
                      {link.icon}
                    </span>
                    {link.text && (
                      <span className="text-cyan-100 font-medium group-hover:text-cyan-300 transition-colors duration-300">
                        {link.text}
                      </span>
                    )}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:text-white hover:border-transparent hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 backdrop-blur-sm"
                  >
                    <SocialIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden  shadow-lg">
        <div className="bg-gradient-to-r from-orange-600 via-rose-600 to-pink-600 text-white text-sm">
          <div className="px-4 py-3">
            <div className="flex justify-center md:justify-between items-center gap-6">
              <div className="hidden md:flex items-center gap-6">
                {infoLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="group flex items-center gap-2 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-white group-hover:text-rose-600 transition-all duration-300 shadow-lg">
                      {link.icon}
                    </span>
                    {link.text && (
                      <span className="font-medium group-hover:text-yellow-200 transition-colors duration-300">
                        {link.text}
                      </span>
                    )}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white transition-all duration-300 hover:bg-white hover:text-rose-600 hover:scale-110 shadow-lg"
                  >
                    <SocialIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden  shadow-lg">
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white text-sm">
          <div className="px-4 py-3">
            <div className="flex justify-center md:justify-between items-center gap-6">
              <div className="hidden md:flex items-center gap-6">
                {infoLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="group flex items-center gap-2 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-emerald-300 to-teal-400 text-emerald-900 shadow-lg shadow-emerald-500/50 group-hover:shadow-emerald-400/70 transition-all duration-300">
                      {link.icon}
                    </span>
                    {link.text && (
                      <span className="text-emerald-50 font-medium group-hover:text-emerald-200 transition-colors duration-300">
                        {link.text}
                      </span>
                    )}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-emerald-300/40 text-emerald-200 transition-all duration-300 hover:bg-emerald-300 hover:text-emerald-900 hover:border-transparent hover:scale-110 hover:shadow-lg hover:shadow-emerald-400/50"
                  >
                    <SocialIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden  shadow-lg">
        <div className="bg-gradient-to-r from-purple-900 via-violet-800 to-fuchsia-800 text-white text-sm">
          <div className="px-4 py-3">
            <div className="flex justify-center md:justify-between items-center gap-6">
              <div className="hidden md:flex items-center gap-6">
                {infoLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="group flex items-center gap-2 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-fuchsia-400 to-purple-500 text-white shadow-lg shadow-purple-500/50 group-hover:shadow-fuchsia-500/70 group-hover:rotate-12 transition-all duration-300">
                      {link.icon}
                    </span>
                    {link.text && (
                      <span className="text-purple-100 font-medium group-hover:text-fuchsia-300 transition-colors duration-300">
                        {link.text}
                      </span>
                    )}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30 border border-purple-400/30 text-purple-200 transition-all duration-300 hover:from-fuchsia-500 hover:to-purple-500 hover:text-white hover:border-transparent hover:scale-110 hover:shadow-lg hover:shadow-fuchsia-500/50 backdrop-blur-sm"
                  >
                    <SocialIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden shadow-lg">
        <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white text-sm border-b border-amber-500/20">
          <div className="px-4 py-3">
            <div className="flex justify-center md:justify-between items-center gap-6">
              <div className="hidden md:flex items-center gap-6">
                {infoLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="group flex items-center gap-2 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-slate-900 shadow-lg shadow-amber-500/30 group-hover:shadow-amber-400/60 group-hover:scale-105 transition-all duration-300">
                      {link.icon}
                    </span>
                    {link.text && (
                      <span className="text-slate-300 font-medium group-hover:text-amber-400 transition-colors duration-300">
                        {link.text}
                      </span>
                    )}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-700/50 border border-amber-500/30 text-amber-400 transition-all duration-300 hover:bg-gradient-to-br hover:from-amber-400 hover:to-orange-500 hover:text-slate-900 hover:border-transparent hover:scale-110 hover:shadow-lg hover:shadow-amber-500/50"
                  >
                    <SocialIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeaderOne;
