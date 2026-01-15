/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/api/base-url";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [carouselSlides, setCarouselSlides] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  // 🔹 TanStack Query
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["hero-banners"],
    queryFn: async () => {
      const res = await axios.get(
        `${BASE_URL}/api/getBanner`,
        {
          timeout: 10000,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    },
  });

  
  useEffect(() => {
    if (!data?.data || !data?.image_url) return;

    const bannerImageUrlObj = data.image_url.find(
      (item) => item.image_for === "Banner"
    );
    const baseImageUrl = bannerImageUrlObj?.image_url || "";

    const slides = data.data.map((banner, index) => ({
      id: index + 1,
      type: "image",
      imageUrl: `${baseImageUrl}${banner.banner_image}`,
      link: banner.banner_link,
      alt: banner.banner_image_alt,
    }));

    const announcementsData = data.data.map((banner, index) => ({
      id: index + 1,
      title: banner.banner_text,
      link: banner.banner_link,
      buttonText: "Click Here",
    }));

    setCarouselSlides(slides);
    setAnnouncements(announcementsData);
  }, [data]);

  const nextSlide = useCallback(() => {
    if (carouselSlides.length > 0) {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }
  }, [carouselSlides.length]);

  const prevSlide = () => {
    if (carouselSlides.length > 0) {
      setCurrentSlide(
        (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
      );
    }
  };

  const goToSlide = (index) => setCurrentSlide(index);


  useEffect(() => {
    if (!isAutoPlaying || carouselSlides.length === 0) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselSlides.length, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);


  if (isLoading) {
    return (
      <section className="relative">
        <div className="relative h-100 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-500">Loading banners...</div>
        </div>
      </section>
    );
  }


  if (isError) {
    return (
      <section className="relative">
        <div className="relative h-100 bg-red-50 flex items-center justify-center">
          <div className="text-red-500">
            Failed to load banners: {error?.message}
          </div>
        </div>
      </section>
    );
  }


  if (carouselSlides.length === 0) {
    return (
      <section className="relative">
        <div className="relative h-100 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-500">No banners available</div>
        </div>
      </section>
    );
  }

  const currentAnnouncement = currentSlide;

  return (
    <section className="relative">
      <div
        className="relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative">
          {carouselSlides.map((slide, index) => (
            <a
              key={slide.id}
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block transition-opacity duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 absolute top-0 left-0"
              }`}
            >
              <img
                src={slide.imageUrl}
                alt={slide.alt}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/1200x400?text=Banner+Image";
                }}
              />
            </a>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-1 md:p-3 rounded-full"
        >
          <ChevronLeft className="w-4 md:w-6 h-4 md:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-1 md:p-3 rounded-full"
        >
          <ChevronRight className="w-4 md:w-6 h-4 md:h-6" />
        </button>

        {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div> */}
      </div>

      
      <div className="lg:absolute lg:w-125 lg:-bottom-16 lg:z-20 lg:left-5">
        <div className="bg-black/60 overflow-hidden">
          <div className="md:p-6">
            <div className="relative h-24">
              {announcements.length > 0 && announcements[currentAnnouncement] && (
                <div 
                  key={announcements[currentAnnouncement].id}
                  className="absolute inset-0 flex flex-col justify-center items-center text-center transition-opacity duration-500"
                >
                  <h2 className="text-sm md:text-md text-start font-semibold text-white mb-4 px-5">
                    {announcements[currentAnnouncement].title}
                  </h2>
                  <a
                    href={announcements[currentAnnouncement].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-0 md:-bottom-5 right-0 inline-flex items-center justify-center px-6 py-2 text-xs bg-sky-500 text-white font-medium rounded-none hover:bg-gray-100 transition-colors duration-300"
                  >
                    {announcements[currentAnnouncement].buttonText}
                  </a>
                </div>
              )}
            </div>

            <div className="flex justify-center mt-4 space-x-2">
              {announcements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)} 
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentAnnouncement 
                      ? "bg-white scale-125" 
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to announcement ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
