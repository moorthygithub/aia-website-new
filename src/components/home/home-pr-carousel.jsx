import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BASE_URL } from '@/api/base-url';

const cn = (...classes) => classes.filter(Boolean).join(' ');


const SQRT_5000 = Math.sqrt(5000);

const TestimonialCard = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize,
  imageBaseUrl 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-[#0F3652] text-white border-[#0F3652]" 
          : "z-0 bg-white text-[#0F3652] border-gray-200 hover:border-[#F3831C]/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(15, 54, 82, 0.2)" : "0px 0px 0px 0px transparent",
        opacity: Math.abs(position) > 2 ? 0 : 1,
        pointerEvents: Math.abs(position) > 2 ? 'none' : 'auto',
      }}>
      <span
        className="absolute block origin-top-right rotate-45 bg-[#F3831C]"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }} />
      <img
        src={`${imageBaseUrl}${testimonial.pr_image}`}
        alt={testimonial.pr_image_alt || 'PR Image'}
        className="mb-4 h-48 w-full bg-gray-200 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px rgba(15, 54, 82, 0.1)"
        }} />
      <h3
        className={cn(
          "text-base font-medium",
          isCenter ? "text-white" : "text-[#0F3652]"
        )}>
        "{testimonial.pr_title}"
      </h3>
     
      <div className="flex flex-row items-center justify-between">
        <p
          className={cn(
            "text-sm italic",
            isCenter ? "text-white/80" : "text-[#0F3652]/80"
          )}>
          - {new Date(testimonial.pr_date).toLocaleDateString('en-GB', { 
            day: '2-digit', 
            month: 'short', 
            year: 'numeric' 
          })}
        </p>

        <a
          href={testimonial.pr_link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "font-semibold py-1 px-2 rounded-md inline-flex items-center gap-2 transition-colors", 
            isCenter ? "text-white bg-orange-500/90" : "text-white bg-[#0F3652]"
          )}
        >
          <span>Read More</span>
          <svg
                  className="
                    w-4 h-4
                    transition-transform duration-200
                    group-hover:translate-x-0.5
                  "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
        </a>
      </div>
    </div>
  );
};

export default function HomePrCarousel() {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState([]);
  const [imageBaseUrl, setImageBaseUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchPrData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/api/getPr`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch PR data');
        }
        
        const data = await response.json();
        
        if (data?.data) {
          const processedData = data.data.map((item) => ({
            ...item,
            tempId: item.id
          }));
          setTestimonialsList(processedData);
        }
        
        if (data?.image_url) {
          const prImageUrl = data.image_url.find(img => img.image_for === 'Pr');
          if (prImageUrl) {
            setImageBaseUrl(prImageUrl.image_url);
          }
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching PR data:', error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchPrData();
  }, []);

  const handleMove = (steps) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (isLoading) {
    return (
      <div className="relative w-full overflow-hidden bg-gray-50 flex items-center justify-center" style={{ height: 600 }}>
        <div className="text-[#0F3652] text-xl font-medium">Loading PR articles...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="relative w-full overflow-hidden bg-gray-50 flex items-center justify-center" style={{ height: 600 }}>
        <div className="text-red-600 text-xl font-medium">Error loading PR articles</div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden bg-gray-50"
      style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
            imageBaseUrl={imageBaseUrl} />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-[#0F3652] text-[#0F3652] hover:bg-[#0F3652] hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3831C] focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial">
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-[#0F3652] text-[#0F3652] hover:bg-[#0F3652] hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3831C] focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}