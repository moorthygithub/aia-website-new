import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CubicSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const slides = [
    {
      image:
        "https://edusphere.radiantthemes.com/wp-content/uploads/2020/07/sld1.jpg",
      tag: "Education benefits",
      title: "Limitless learning and get more possibilities",
      description:
        "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium totam rem aperiam, eaque ipsa quae ab illo",
    },
    {
      image:
        "https://edusphere.radiantthemes.com/wp-content/uploads/2020/07/sld2.jpg",
      tag: "Virtual Learning",
      title: "Learn with virtual classroom anytime anywhere",
      description:
        "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium totam rem aperiam, eaque ipsa quae ab illo",
    },
    {
      image:
        "https://edusphere.radiantthemes.com/wp-content/uploads/2020/07/sld3.jpg",
      tag: "Online Resources",
      title: "Access more than 200K online tutorials",
      description:
        "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium totam rem aperiam, eaque ipsa quae ab illo",
    },
  ];

  const next = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      const newIndex = (current + 1) % slides.length;
      setRotation(rotation - 120);
      setTimeout(() => {
        setCurrent(newIndex);
        setIsTransitioning(false);
      }, 700);
    }
  }, [slides.length, isTransitioning, current, rotation]);

  const prev = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      const newIndex = (current - 1 + slides.length) % slides.length;
      setRotation(rotation + 120);
      setTimeout(() => {
        setCurrent(newIndex);
        setIsTransitioning(false);
      }, 700);
    }
  }, [slides.length, isTransitioning, current, rotation]);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(next, 6000);
      return () => clearInterval(timer);
    }
  }, [isHovered, next]);

  return (
    <div className="w-full">
      {/* Main Slider Container */}
      <div
        className="relative w-full h-screen md:h-[600px] overflow-hidden bg-black"
        // style={{ perspective: "1200px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 3D Cubic Container */}
        <div
          className="relative w-full h-full transition-transform"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotation}deg)`,
            transitionDuration: isTransitioning ? "700ms" : "0ms",
            transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {/* Slide Faces */}
          {slides.map((slide, idx) => {
            const anglePerSlide = 360 / slides.length;
            const angle = idx * anglePerSlide;

            return (
              <div
                key={idx}
                className="absolute inset-0 w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateX(${angle}deg) translateZ(400px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Background Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                {/* Left Content Area */}
                <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24">
                  <div className="max-w-2xl">
                    {/* Subtitle Tag */}
                    <div
                      className="inline-block mb-4 transition-all duration-700"
                      style={{
                        opacity: idx === current ? 1 : 0,
                        transform:
                          idx === current
                            ? "translateX(0)"
                            : "translateX(-30px)",
                        transitionDelay: idx === current ? "100ms" : "0ms",
                      }}
                    >
                      <h6 className="text-xs sm:text-sm font-bold tracking-widest text-white uppercase">
                        {slide.tag}
                      </h6>
                    </div>

                    {/* Main Heading */}
                    <div
                      className="transition-all duration-700"
                      style={{
                        opacity: idx === current ? 1 : 0,
                        transform:
                          idx === current
                            ? "translateX(0) scale(1)"
                            : "translateX(-30px) scale(0.95)",
                        transitionDelay: idx === current ? "150ms" : "0ms",
                      }}
                    >
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                        {slide.title}
                      </h1>
                    </div>

                    {/* Description */}
                    <div
                      className="transition-all duration-700"
                      style={{
                        opacity: idx === current ? 1 : 0,
                        transform:
                          idx === current
                            ? "translateX(0)"
                            : "translateX(-30px)",
                        transitionDelay: idx === current ? "200ms" : "0ms",
                      }}
                    >
                      <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 md:mb-8 max-w-xl leading-relaxed">
                        {slide.description}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div
                      className="transition-all duration-700"
                      style={{
                        opacity: idx === current ? 1 : 0,
                        transform:
                          idx === current
                            ? "translateX(0)"
                            : "translateX(-30px)",
                        transitionDelay: idx === current ? "250ms" : "0ms",
                      }}
                    >
                      <button className="bg-white text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-gray-100 transition-all duration-300 transform hover:shadow-xl">
                        Explore Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation - Bottom Left */}
        <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 md:left-16 lg:left-24 z-20 flex gap-3">
          <button
            onClick={prev}
            disabled={isTransitioning}
            className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white hover:bg-white/10 transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={next}
            disabled={isTransitioning}
            className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white hover:bg-white/10 transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Slide Indicators - Bottom Right */}
        <div className="absolute bottom-8 sm:bottom-10 right-6 sm:right-8 md:right-16 lg:right-24 z-20 flex flex-col gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  const diff = idx - current;
                  const newRotation = rotation - diff * 120;
                  setRotation(newRotation);
                  setTimeout(() => {
                    setCurrent(idx);
                    setIsTransitioning(false);
                  }, 700);
                }
              }}
              className={`transition-all duration-300 ${
                idx === current
                  ? "w-2 h-8 bg-white"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              } rounded-full`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter - Top Left */}
        <div className="absolute top-6 sm:top-8 left-6 sm:left-8 md:left-16 lg:left-24 z-20">
          <p className="text-white/70 text-sm font-mono">
            <span className="font-bold text-white">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="mx-2">/</span>
            <span>{String(slides.length).padStart(2, "0")}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CubicSlider;
