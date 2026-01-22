/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

function calculateGap(width) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
  colors = {},
  onIndexChange, // Add this prop
}) => {
  // Color & font config
  const colorArrowBg = colors.arrowBackground ?? "#141414";
  const colorArrowFg = colors.arrowForeground ?? "#f1f1f7";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#00a6fb";

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef(null);
  const autoplayIntervalRef = useRef(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials]
  );

  // Notify parent when index changes
  useEffect(() => {
    if (onIndexChange) {
      onIndexChange(activeIndex);
    }
  }, [activeIndex, onIndexChange]);

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        const newIndex = (activeIndex + 1) % testimonialsLength;
        setActiveIndex(newIndex);
        if (onIndexChange) {
          onIndexChange(newIndex);
        }
      }, 5000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, testimonialsLength, activeIndex, onIndexChange]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, testimonialsLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    const newIndex = (activeIndex + 1) % testimonialsLength;
    setActiveIndex(newIndex);
    
    if (onIndexChange) {
      onIndexChange(newIndex);
    }
    
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
      if (autoplay) {
        autoplayIntervalRef.current = setInterval(() => {
          const nextIndex = (newIndex + 1) % testimonialsLength;
          setActiveIndex(nextIndex);
          if (onIndexChange) {
            onIndexChange(nextIndex);
          }
        }, 5000);
      }
    }
  }, [activeIndex, testimonialsLength, autoplay, onIndexChange]);

  const handlePrev = useCallback(() => {
    const newIndex = (activeIndex - 1 + testimonialsLength) % testimonialsLength;
    setActiveIndex(newIndex);
    
    if (onIndexChange) {
      onIndexChange(newIndex);
    }
    
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
      if (autoplay) {
        autoplayIntervalRef.current = setInterval(() => {
          const nextIndex = (newIndex + 1) % testimonialsLength;
          setActiveIndex(nextIndex);
          if (onIndexChange) {
            onIndexChange(nextIndex);
          }
        }, 5000);
      }
    }
  }, [activeIndex, testimonialsLength, autoplay, onIndexChange]);

  // Compute transforms for each image
  function getImageStyle(index) {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;

    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  return (
    <div className="testimonial-container">
      <div className="testimonial-grid">
        {/* Images */}
        <div className="image-container" ref={imageContainerRef}>
          {testimonials.map((testimonial, index) => (
            <img
              key={testimonial.src}
              src={testimonial.src}
              alt={testimonial.name}
              className="testimonial-image"
              data-index={index}
              style={getImageStyle(index)}
            />
          ))}
        </div>

        {/* Quote */}
        <div className="quote-wrapper ">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              className="quote"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              style={{ color: "#000000" }}
            >
              {activeTestimonial.quote}
            </motion.p>
          </AnimatePresence>
        </div>

     
        <div className="  w-full flex flex-row items-center justify-center gap-2">
          <Button
             className="mb-4  relative cursor-pointer overflow-hidden px-4 py-2  text-xs bg-[#F3831C] text-white rounded-none hover:bg-[#0F3652] transition-colors duration-300"
            onClick={handlePrev}
            variant="ghost"
            onMouseEnter={() => setHoverPrev(true)}
            onMouseLeave={() => setHoverPrev(false)}
            aria-label="Previous testimonial"
          >
            <span className="relative z-10 flex flex-row items-center text-white ">
              <ChevronLeft size={28} /> <span>Prev</span>
            </span>
            
          </Button>
          <Button
            className="mb-4  relative cursor-pointer overflow-hidden px-4 py-2  text-xs bg-[#F3831C] text-white rounded-none hover:bg-[#0F3652] transition-colors duration-300"
            onClick={handleNext}
            variant="ghost"
            onMouseEnter={() => setHoverNext(true)}
            onMouseLeave={() => setHoverNext(false)}
            aria-label="Next testimonial"
          >
            <span className="relative z-10 flex flex-row items-center text-white ">
              <span>Next</span>
              <ChevronRight size={28} />
            </span>
 
          </Button>
        </div>
      </div>

      <style>{`
        .testimonial-container {
          width: 100%;
          max-width: 56rem;
          padding: 2rem;
        }
        .testimonial-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .image-container {
          position: relative;
          width: 100%;
          min-width: 400px;
          height: 24rem;
          perspective: 1000px;
          overflow: visible;
        }
        .testimonial-image {
          position: absolute;
          width: 480px;
          height: 100%;
          object-fit: contain;
          object-position: contain;
          border-radius: 1.5rem;
          left: 50%;
          transform-origin: center center;
          margin-left: -240px;
        }
        .quote-wrapper {
          width: 100%;
          text-align: center;
          padding: 0 0rem;
        }
        .quote {
          font-size: 1.125rem;
          line-height: 1.75;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .testimonial-container {
            padding: 1rem;
          }
          .image-container {
            min-width: 320px;
            height: 20rem;
          }
          .testimonial-image {
            width: 400px;
            margin-left: -200px;
          }
        }

        @media (max-width: 480px) {
          .image-container {
            height: 18rem;
          }
          .testimonial-image {
            width: 350px;
            margin-left: -160px;
          }
        }
      `}</style>
    </div>
  );
};

export default CircularTestimonials;