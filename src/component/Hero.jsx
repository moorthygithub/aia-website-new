import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselSlides = [
  {
    id: 1,
    type: "image",
    imageUrl: "https://aia.in.net/crm/public/assets/images/banner/cia%20cfe%20cams%20certification.webp",
    link: "https://aia.in.net/",
    alt: "Admissions 2026"
  },
  {
    id: 2,
    type: "image",
    imageUrl: "https://aia.in.net/crm/public/assets/images/banner/banner12.jpg",
    link: "https://aia.in.net/",
    alt: "Admissions 2026"
  },
  {
    id: 3,
    type: "image",
    imageUrl: "https://aia.in.net/crm/public/assets/images/banner/banner13.webp",
    link: "https://aia.in.net/",
    alt: "PGP Courses"
  }
];

const announcements = [
  {
    id: 1,
    title: "CA Foundation, Intermediate & Final Admission Guidance Program",
    link: "https://christuniversity.in/commerce/ca-admission-guidance",
    buttonText: "Know More"
  },
  {
    id: 2,
    title: "Executive Certificate Course in Accounting, Taxation & Auditing (CA Oriented)",
    link: "https://christuniversity.in/courses/ca-accounting-taxation",
    buttonText: "Know More"
  },
  {
    id: 3,
    title: "National Seminar on Career Opportunities in Chartered Accountancy",
    link: "https://christuniversity.in/events/ca-career-seminar",
    buttonText: "Know More"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);


  const currentAnnouncement = currentSlide;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };



  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

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
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 absolute top-0 left-0"
              }`}
            >
              <img
                src={slide.imageUrl}
                alt={slide.alt}
                className="w-full h-auto object-cover"
              />
            </a>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-white scale-125" 
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    
      <div className="mt-4 lg:mt-0 lg:absolute lg:w-125 lg:-bottom-16 lg:z-99 lg:right-5">
        <div className="bg-black/60 overflow-hidden">
          <div className="p-6">
            <div className="relative h-24">
              <div 
                key={announcements[currentAnnouncement].id}
                className="absolute inset-0 flex flex-col justify-center items-center text-center transition-opacity duration-500"
              >
                <h2 className="text-md text-start font-semibold text-white mb-4 px-5">
                  {announcements[currentAnnouncement].title}
                </h2>
                <a
                  href={announcements[currentAnnouncement].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-5 right-0 inline-flex items-center justify-center px-6 py-2 text-xs bg-sky-500 text-white font-medium rounded-none hover:bg-gray-100 transition-colors duration-300"
                >
                  {announcements[currentAnnouncement].buttonText}
                </a>
              </div>
            </div>

         
            <button
              onClick={prevSlide} 
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
              aria-label="Previous announcement"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide} 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
              aria-label="Next announcement"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

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