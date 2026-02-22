import { BASE_URL } from "@/api/base-url";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SectionHeading from "../SectionHeading/SectionHeading";

const CorporateCarouselSkeleton = ({ cards = 1 }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <SectionHeading
        title="Glimpses of Impactful Corporate Training Sessions at SBI Card"
        description="These moments capture AIA's hands-on corporate training engagement at SBI Card, marking professionals' successful participation in real-world learning sessions designed to strengthen audit, risk, and fraud capabilities through expert-led guidance."
        align="center"
      />
      <div className="relative mt-4 md:mt-6 lg:mt-8">
        <div className="overflow-hidden">
          <div className="flex gap-2 sm:gap-3 md:gap-4">
            {Array.from({ length: cards }).map((_, index) => (
              <div 
                key={index} 
                className="flex-shrink-0"
                style={{ width: `calc(${100 / cards}% - 12px)` }}
              >
                <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden border border-[#0F3652]/20">
                  <div className="aspect-w-16 aspect-h-12 sm:aspect-h-10 md:aspect-h-9">
                    <Skeleton className="w-full h-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CorporateCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  // Responsive cards to show based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1); // Mobile
      } else if (window.innerWidth < 768) {
        setCardsToShow(2); // Small tablet
      } else if (window.innerWidth < 1024) {
        setCardsToShow(3); // Tablet
      } else if (window.innerWidth < 1280) {
        setCardsToShow(4); // Small desktop
      } else {
        setCardsToShow(5); // Large desktop
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const {
    data: certificatesData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["corporater-carousel-slider"],
    queryFn: async () => {
      const res = await axios.get(`${BASE_URL}/api/getCorporateSlider`);
      return res?.data ?? { data: [], image_url: [] };
    },
  });

  const images = useMemo(() => {
    if (!certificatesData?.data?.length) return [];

    const sliderImageBase =
      certificatesData.image_url?.find(
        (item) => item.image_for === "Corporate Slider"
      )?.image_url || "";

    const noImage =
      certificatesData.image_url?.find((item) => item.image_for === "No Image")
        ?.image_url || "";

    return certificatesData.data.map((item) => ({
      src: item.corporate_slider_image
        ? `${sliderImageBase}${item.corporate_slider_image}`
        : noImage,
      alt: item.corporate_slider_image_alt || "Corporate Image",
    }));
  }, [certificatesData]);

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = prev + 1;
        const maxSlide = Math.max(0, Math.ceil(images.length / cardsToShow) - 1);
        return next > maxSlide ? 0 : next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, cardsToShow]);

  const totalSlides = Math.ceil(images.length / cardsToShow);
  const currentSlideIndex = currentSlide;

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  if (isLoading) {
    return <CorporateCarouselSkeleton cards={cardsToShow} />;
  }
  
  if (isError || !images.length) return null;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <SectionHeading
        title="Glimpses of Impactful Corporate Training Sessions at SBI Card"
        description="These moments capture AIA's hands-on corporate training engagement at SBI Card, marking professionals' successful participation in real-world learning sessions designed to strengthen audit, risk, and fraud capabilities through expert-led guidance."
        align="center"
      />
      
      <div className="relative mt-4 md:mt-6 lg:mt-8">
        <div className="overflow-hidden">
          <div
            className="flex gap-2 sm:gap-3 md:gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlideIndex * 100}%)`,
            }}
          >
            {images.map((img, index) => (
              <div 
                key={index} 
                className="flex-shrink-0"
                style={{ 
                  width: `calc(${100 / cardsToShow}% - ${
                    cardsToShow > 1 ? '8px' : '0px'
                  })`,
                }}
              >
                <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden border border-[#0F3652] hover:border-[#F3831C] transition-colors duration-300 h-full">
                  <div className="relative pt-[100%]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      loading="lazy"
                      onError={(e) => {
                        const noImageUrl = certificatesData.image_url?.find(
                          (item) => item.image_for === "No Image"
                        )?.image_url;
                        if (noImageUrl && e.currentTarget.src !== noImageUrl) {
                          e.currentTarget.src = noImageUrl;
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {totalSlides > 1 && (
          <div className="flex justify-center mt-4 sm:mt-5 md:mt-6 gap-1.5 sm:gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  currentSlideIndex === index
                    ? "bg-[#F3831C] w-6 sm:w-8"
                    : "bg-gray-300 hover:bg-gray-400 w-1.5 sm:w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CorporateCarousel;