import React from "react";
import { FaFacebookF, FaStar, FaGoogle, FaYoutube } from "react-icons/fa";

const FooterReviews = ({ footer = true }) => {
  const reviews = [
    {
      name: "Facebook",
      rating: "4.8",
      icon: <FaFacebookF className="text-blue-500 text-2xl" />,
      bgColor: "bg-[#2D3748]",
    },
    {
      name: "Google",
      rating: "4.9",
      icon: <FaGoogle className="text-white text-2xl" />,
      bgColor: "bg-[#2D3748]",
    },
    {
      name: "YouTube",
      rating: "5.0",
      icon: (
        <div className="bg-red-600 rounded-sm p-1.5">
          <FaYoutube className="text-white text-xl" />
        </div>
      ),
      bgColor: "bg-[#2D3748]",
    },
    {
      name: "Justdial",
      rating: "5.0",
      icon: (
        <span className="text-[#00A9E0] font-bold text-2xl tracking-tighter">
          Jd
        </span>
      ),
      bgColor: "bg-[#2D3748]",
      link: "https://www.justdial.com/Bijnor/Zara-Software-Provider/9999P1342-1342-230615131339-S2A5_BZDET",
    },
  ];

  return (
    <section className="py-6 md:py-8 border-b border-white/10">
      <div>
        {footer ? (
          <div className="flex flex-col justify-start">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c2340]">
                Our Reviews
              </h2>
              <p className="mt-2 text-sm md:text-base">
                We love our Clients as much as they love us!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-2xl w-full">
              {reviews.map((item, index) => {
                const CardWrapper = item.link ? "a" : "div";

                return (
                  <CardWrapper
                    key={index}
                    href={item.link || undefined}
                    target={item.link ? "_blank" : undefined}
                    rel={item.link ? "noopener noreferrer" : undefined}
                    className={`flex items-center ${item.bgColor} max-h-18 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg`}
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-r border-white/10">
                      {item.icon}
                    </div>
                    <div className="px-4 md:px-6 py-3 md:py-4 flex items-center gap-2">
                      <span className="text-white font-bold text-xl md:text-2xl">
                        {item.rating}
                      </span>
                      <FaStar className="text-orange-500 text-base md:text-lg" />
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center lg:hidden px-3">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Our Reviews
                </h2>
                <p className="text-gray-400 mt-2 text-sm md:text-base">
                  We love our Clients as much as they love us!
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-2xl w-full">
                {reviews.map((item, index) => {
                  const CardWrapper = item.link ? "a" : "div";

                  return (
                    <CardWrapper
                      key={index}
                      href={item.link || undefined}
                      target={item.link ? "_blank" : undefined}
                      rel={item.link ? "noopener noreferrer" : undefined}
                      className={`flex items-center ${item.bgColor} max-h-14 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg`}
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-r border-white/10">
                        {item.icon}
                      </div>
                      <div className="px-4 md:px-6 py-3 md:py-4 flex items-center gap-2">
                        <span className="text-white font-bold text-xl md:text-2xl">
                          {item.rating}
                        </span>
                        <FaStar className="text-orange-500 text-base md:text-lg" />
                      </div>
                    </CardWrapper>
                  );
                })}
              </div>
            </div>

            {/* Desktop: Side-by-side layout (>= lg) */}
            <div className="hidden lg:flex flex-row items-center justify-between gap-8 px-14">
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Our Reviews
                </h2>
                <p className="text-gray-400 mt-2 text-sm md:text-base">
                  We love our Clients as much as they love us!
                </p>
              </div>

              <div className="flex flex-wrap justify-end gap-3 md:gap-4">
                {reviews.map((item, index) => {
                  const CardWrapper = item.link ? "a" : "div";

                  return (
                    <CardWrapper
                      key={index}
                      href={item.link || undefined}
                      target={item.link ? "_blank" : undefined}
                      rel={item.link ? "noopener noreferrer" : undefined}
                      className={`flex items-center ${item.bgColor} max-h-16 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg`}
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-r border-white/10">
                        {item.icon}
                      </div>
                      <div className="px-4 md:px-6 py-3 md:py-4 flex items-center gap-2">
                        <span className="text-white font-bold text-xl md:text-2xl">
                          {item.rating}
                        </span>
                        <FaStar className="text-orange-500 text-base md:text-lg" />
                      </div>
                    </CardWrapper>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FooterReviews;
