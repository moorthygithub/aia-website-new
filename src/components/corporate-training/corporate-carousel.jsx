import React, { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
  "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
];

const CorporateCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsToShow = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => 
        prev + cardsToShow >= images.length ? 0 : prev + cardsToShow
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-340 mx-auto  py-8">
      <div className="relative">
       
        <div className="overflow-hidden">
          <div className="flex gap-4 transition-all duration-500 ease-in-out"
               style={{ transform: `translateX(-${(currentSlide / cardsToShow) * 100}%)` }}>
            {images.map((src, index) => (
              <div 
                key={index}
                className="shrink-0 w-[calc(20%-16px)]"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-56 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: Math.ceil(images.length / cardsToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index * cardsToShow)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index * cardsToShow 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorporateCarousel;