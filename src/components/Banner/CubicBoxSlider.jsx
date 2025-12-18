import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CubicBoxSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);

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
    {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=650&fit=crop",
      tag: "Expert Trainers",
      title: "Learn from industry professionals and experts",
      description:
        "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium totam rem aperiam, eaque ipsa quae ab illo",
    },
  ];

  const next = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      const newIndex = (current + 1) % slides.length;
      const anglePerSlide = 360 / slides.length;
      setRotationY(rotationY - anglePerSlide);
      setTimeout(() => {
        setCurrent(newIndex);
        setIsTransitioning(false);
      }, 800);
    }
  }, [slides.length, isTransitioning, current, rotationY]);

  const prev = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      const newIndex = (current - 1 + slides.length) % slides.length;
      const anglePerSlide = 360 / slides.length;
      setRotationY(rotationY + anglePerSlide);
      setTimeout(() => {
        setCurrent(newIndex);
        setIsTransitioning(false);
      }, 800);
    }
  }, [slides.length, isTransitioning, current, rotationY]);

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
        className="relative w-full h-screen md:h-[700px] overflow-hidden bg-gradient-to-b from-gray-900 to-black flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 3D Cube Container */}
        <div
          className="relative w-full h-full transition-transform"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
            transitionDuration: isTransitioning ? "800ms" : "0ms",
            transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {/* Cube Faces */}
          {slides.map((slide, idx) => {
            const anglePerSlide = 360 / slides.length;
            const angle = idx * anglePerSlide;
            const radius = 800;

            return (
              <div
                key={idx}
                className="absolute inset-0 w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Face Content */}
                <div className="w-full h-full relative overflow-hidden">
                  {/* Background Image */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

                  {/* 3D Border Effect */}
                  <div className="absolute inset-0 border-4 border-white/20 pointer-events-none" />

                  {/* Left Content Area */}
                  <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-32">
                    <div className="max-w-2xl">
                      {/* Subtitle Tag */}
                      <div
                        className="inline-block mb-4 transition-all duration-700"
                        style={{
                          opacity: idx === current ? 1 : 0.3,
                          transform:
                            idx === current
                              ? "translateX(0)"
                              : "translateX(-40px)",
                          transitionDelay: idx === current ? "100ms" : "0ms",
                        }}
                      >
                        <h6 className="text-xs sm:text-sm font-bold tracking-widest text-blue-300 uppercase">
                          {slide.tag}
                        </h6>
                      </div>

                      {/* Main Heading */}
                      <div
                        className="transition-all duration-700"
                        style={{
                          opacity: idx === current ? 1 : 0.3,
                          transform:
                            idx === current
                              ? "translateX(0) scale(1)"
                              : "translateX(-40px) scale(0.95)",
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
                          opacity: idx === current ? 1 : 0.3,
                          transform:
                            idx === current
                              ? "translateX(0)"
                              : "translateX(-40px)",
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
                          opacity: idx === current ? 1 : 0.3,
                          transform:
                            idx === current
                              ? "translateX(0)"
                              : "translateX(-40px)",
                          transitionDelay: idx === current ? "250ms" : "0ms",
                        }}
                      >
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                          Explore Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows - Positioned on sides */}
        <button
          onClick={prev}
          disabled={isTransitioning}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/60 hover:border-white hover:bg-white/10 backdrop-blur-md transition-all duration-300 disabled:opacity-50 flex items-center justify-center group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={next}
          disabled={isTransitioning}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/60 hover:border-white hover:bg-white/10 backdrop-blur-md transition-all duration-300 disabled:opacity-50 flex items-center justify-center group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Vertical Slide Indicators - Right Side */}
        <div className="absolute left-8 sm:left-12 md:left-14 bottom-[30px] -translate-y-1/2 z-20 flex flex-col gap-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  const anglePerSlide = 360 / slides.length;
                  const diff = idx - current;
                  const newRotationY = rotationY - diff * anglePerSlide;
                  setRotationY(newRotationY);
                  setTimeout(() => {
                    setCurrent(idx);
                    setIsTransitioning(false);
                  }, 800);
                }
              }}
              className={`transition-all duration-300 rounded-full ${
                idx === current
                  ? "w-3 h-10 bg-blue-500"
                  : "w-3 h-3 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter - Top Right */}
        <div className="absolute top-8 right-8 md:right-16 z-20">
          <p className="text-white/70 text-sm font-mono text-right">
            <span className="font-bold text-white text-lg">
              {String(current + 1).padStart(2, "0")}
            </span>
            <br />
            <span className="text-xs">
              / {String(slides.length).padStart(2, "0")}
            </span>
          </p>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-white/30 z-10 pointer-events-none" />
        <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-white/30 z-10 pointer-events-none" />
      </div>
    </div>
  );
};

export default CubicBoxSlider;
