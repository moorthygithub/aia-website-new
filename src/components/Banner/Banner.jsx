import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ModernCarouselOne from "./Bannerone";
import CubicBoxSlider from "./CubicBoxSlider";

const ModernCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1920&h=650&fit=crop",
      tag: "Education benefits",
      title: "Limitless learning and get more possibilities",
      description:
        "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium totam rem aperiam, eaque ipsa quae ab illo",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=650&fit=crop",
      tag: "Modern Learning",
      title: "Learn with virtual classroom anytime anywhere",
      description:
        "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium totam rem aperiam, eaque ipsa quae ab illo",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=650&fit=crop",
      tag: "Resources",
      title: "Access more than 200K online tutorials",
      description:
        "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium totam rem aperiam, eaque ipsa quae ab illo",
    },
  ];

  const next = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrent((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 600);
    }
  }, [slides.length, isTransitioning]);

  const prev = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 600);
    }
  }, [slides.length, isTransitioning]);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(next, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered, next]);

  return (
    <div className="w-full">
      {/* Main Carousel */}
      <div
        className="relative w-full h-96 sm:h-[450px] md:h-[550px] overflow-hidden bg-gray-900"
        style={{ perspective: "1200px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slides Container */}
        {slides.map((slide, idx) => {
          let rotationY = 0;
          let translateZ = 0;
          let opacity = 0;

          if (idx === current) {
            rotationY = 0;
            translateZ = 0;
            opacity = 1;
          } else if (idx === (current + 1) % slides.length) {
            rotationY = -60;
            translateZ = -100;
            opacity = 0.3;
          } else if (idx === (current - 1 + slides.length) % slides.length) {
            rotationY = 60;
            translateZ = -100;
            opacity = 0.3;
          } else {
            rotationY = -180;
            translateZ = -200;
            opacity = 0;
          }

          return (
            <div
              key={idx}
              className="absolute inset-0 transition-all duration-700 ease-in-out"
              style={{
                opacity,
                transform: `rotateY(${rotationY}deg) translateZ(${translateZ}px)`,
                transformStyle: "preserve-3d",
                zIndex: idx === current ? 10 : 0,
              }}
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center px-6 sm:px-12 md:px-20 lg:px-32">
                <div
                  className={`max-w-3xl transition-all duration-700 ${
                    idx === current
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-12"
                  }`}
                >
                  {/* Tag */}
                  <div className="inline-block mb-4">
                    <span className="text-xs sm:text-sm font-semibold tracking-widest text-blue-400 uppercase bg-blue-400/10 px-4 py-2 rounded-full">
                      {slide.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed">
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          disabled={isTransitioning}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 transform hover:scale-110 disabled:opacity-50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={next}
          disabled={isTransitioning}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 transform hover:scale-110 disabled:opacity-50"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrent(idx);
                  setTimeout(() => setIsTransitioning(false), 600);
                }
              }}
              className={`transition-all duration-300 rounded-full ${
                idx === current
                  ? "bg-white w-10 h-2"
                  : "bg-white/40 hover:bg-white/60 w-2 h-2"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <ModernCarouselOne />
      <CubicBoxSlider />
    </div>
  );
};

export default ModernCarousel;
