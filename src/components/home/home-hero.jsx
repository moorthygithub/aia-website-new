// /* eslint-disable react-hooks/exhaustive-deps */
// import { useState, useEffect, useCallback } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
// import { BASE_URL } from "@/api/base-url";

// export default function HomeHero() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [carouselSlides, setCarouselSlides] = useState([]);
//   const [announcements, setAnnouncements] = useState([]);

//   const { data, isLoading, isError, error } = useQuery({
//     queryKey: ["hero-banners"],
//     queryFn: async () => {
//       const res = await axios.get(`${BASE_URL}/api/getBanner`, {
//         timeout: 10000,
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//       });
//       return res.data;
//     },
//   });
//   // "banner_text": "CAMS Prep That Fits Your Career",
//   // "banner_sub_text": "CAMS Prep That Fits Your Career",

//   useEffect(() => {
//     if (!data?.data || !data?.image_url) return;

//     const bannerImageUrlObj = data.image_url.find(
//       (item) => item.image_for === "Banner"
//     );
//     const baseImageUrl = bannerImageUrlObj?.image_url || "";

//     const slides = data.data.map((banner, index) => ({
//       id: index + 1,
//       type: "image",
//       imageUrl: `${baseImageUrl}${banner.banner_image}`,
//       link: banner.banner_link,
//       alt: banner.banner_image_alt,
//     }));

//     const announcementsData = data.data.map((banner, index) => ({
//       id: index + 1,
//       title: banner.banner_text,
//       subtext: banner.banner_sub_text,
//       link: banner.banner_link,
//       buttonText: "Click here",
//     }));

//     setCarouselSlides(slides);
//     setAnnouncements(announcementsData);
//   }, [data]);

//   const nextSlide = useCallback(() => {
//     if (carouselSlides.length > 0) {
//       setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
//     }
//   }, [carouselSlides.length]);

//   const prevSlide = () => {
//     if (carouselSlides.length > 0) {
//       setCurrentSlide(
//         (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
//       );
//     }
//   };

//   const goToSlide = (index) => setCurrentSlide(index);

//   useEffect(() => {
//     if (!isAutoPlaying || carouselSlides.length === 0) return;

//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, [isAutoPlaying, carouselSlides.length, nextSlide]);

//   const handleMouseEnter = () => setIsAutoPlaying(false);
//   const handleMouseLeave = () => setIsAutoPlaying(true);

//   if (isLoading) {
//     return (
//       <section className="relative">
//         <div className="relative h-100 bg-gray-200 animate-pulse flex items-center justify-center">
//           <div className="text-gray-500">Loading banners...</div>
//         </div>
//       </section>
//     );
//   }

//   if (isError) {
//     return (
//       <section className="relative">
//         <div className="relative h-100 bg-red-50 flex items-center justify-center">
//           <div className="text-red-500">
//             Failed to load banners: {error?.message}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (carouselSlides.length === 0) {
//     return (
//       <section className="relative">
//         <div className="relative h-100 bg-gray-100 flex items-center justify-center">
//           <div className="text-gray-500">No banners available</div>
//         </div>
//       </section>
//     );
//   }

//   const currentAnnouncement = currentSlide;
//   return (
//     <section className="relative">
//       <div
//         className="relative overflow-hidden"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div className="relative">
//           {carouselSlides.map((slide, index) => (
//             <a
//               key={slide.id}
//               href={slide.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`block transition-opacity duration-700 ease-in-out ${
//                 index === currentSlide
//                   ? "opacity-100 z-10"
//                   : "opacity-0 z-0 absolute top-0 left-0"
//               }`}
//             >
//               <img
//                 src={slide.imageUrl}
//                 alt={slide.alt}
//                 className="w-full h-auto object-cover"
//                 onError={(e) => {
//                   e.target.src =
//                     "https://via.placeholder.com/1200x400?text=Banner+Image";
//                 }}
//               />
//             </a>
//           ))}
//         </div>

//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-1 md:p-3 rounded-full"
//         >
//           <ChevronLeft className="w-4 md:w-6 h-4 md:h-6" />
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-1 md:p-3 rounded-full"
//         >
//           <ChevronRight className="w-4 md:w-6 h-4 md:h-6" />
//         </button>

//         {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
//           {carouselSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full ${
//                 index === currentSlide
//                   ? "bg-white scale-125"
//                   : "bg-white/50"
//               }`}
//             />
//           ))}
//         </div> */}
//       </div>

//       <div className="lg:absolute lg:w-125 lg:-bottom-12 lg:z-20 lg:left-5">
//         <div className="bg-black/60 overflow-hidden">
//           <div className="md:pb-2 mx-2">
//             <div className="relative h-24">
//               {announcements.length > 0 &&
//                 announcements[currentAnnouncement] && (
//                   <div
//                     key={announcements[currentAnnouncement].id}
//                     className="absolute inset-0 top-5 flex flex-col items-start px-5 transition-opacity duration-500"
//                   >
//                     <h2 className="text-sm font-semibold text-white mb-2">
//                       {announcements[currentAnnouncement].title}
//                     </h2>

//                     <p className="text-xs text-white mb-4">
//                       {announcements[currentAnnouncement].subtext}
//                     </p>

//                     <a
//                       href={announcements[currentAnnouncement].link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center justify-center w-36 px-4 py-2 text-xs font-medium text-white bg-[#F3831C] hover:bg-[#0F3652]/70 transition-colors duration-300"
//                     >
//                       {announcements[currentAnnouncement].buttonText}
//                     </a>
//                   </div>
//                 )}
//             </div>

//             <div className="flex justify-center  space-x-2">
//               {announcements.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={`w-2 h-2 rounded-full transition-all ${
//                     index === currentAnnouncement
//                       ? "bg-white scale-125"
//                       : "bg-white/50 hover:bg-white/80"
//                   }`}
//                   aria-label={`Go to announcement ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/api/base-url";

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [carouselSlides, setCarouselSlides] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["hero-banners"],
    queryFn: async () => {
      const res = await axios.get(`${BASE_URL}/api/getBanner`, {
        timeout: 10000,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
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
      imageUrl: `${baseImageUrl}${banner.banner_image}`,
      link: banner.banner_link,
      alt: banner.banner_image_alt,
    }));

    const announcementsData = data.data.map((banner, index) => ({
      id: index + 1,
      title: banner.banner_text,
      subtext: banner.banner_sub_text,
      link: banner.banner_link,
    }));

    setCarouselSlides(slides);
    setAnnouncements(announcementsData);
  }, [data]);

  const nextSlide = useCallback(() => {
    if (carouselSlides.length > 0)
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  }, [carouselSlides.length]);

  const prevSlide = () => {
    if (carouselSlides.length > 0)
      setCurrentSlide(
        (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
      );
  };

  const goToSlide = (index) => setCurrentSlide(index);

  useEffect(() => {
    if (!isAutoPlaying || carouselSlides.length === 0) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselSlides.length, nextSlide]);

  /* ── Loading / Error / Empty ── */
  if (isLoading) {
    return (
      <section className="relative h-[420px] bg-gray-100 animate-pulse flex items-center justify-center">
        <span className="text-xs text-gray-400 tracking-[0.2em] uppercase font-medium">
          Loading…
        </span>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="relative h-[420px] bg-red-50 flex items-center justify-center">
        <span className="text-xs text-red-400 font-medium">
          Failed to load banners: {error?.message}
        </span>
      </section>
    );
  }

  if (carouselSlides.length === 0) {
    return (
      <section className="relative h-[420px] bg-gray-100 flex items-center justify-center">
        <span className="text-xs text-gray-400 font-medium">No banners available</span>
      </section>
    );
  }

  const current = announcements[currentSlide];

  return (
    <section className="relative">

      {/* ── Carousel ── */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Slides */}
        <div className="relative">
          {carouselSlides.map((slide, index) => (
            <a
              key={slide.id}
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block transition-opacity duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 relative z-10"
                  : "opacity-0 absolute inset-0 z-0"
              }`}
            >
              <img
                src={slide.imageUrl}
                alt={slide.alt}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/1200x400?text=Banner";
                }}
              />
            </a>
          ))}
        </div>

        {/* Nav arrows */}
        {[
          { dir: "prev", Icon: ChevronLeft, onClick: prevSlide, side: "left-4" },
          { dir: "next", Icon: ChevronRight, onClick: nextSlide, side: "right-4" },
        ].map(({ dir, Icon, onClick, side }) => (
          <button
            key={dir}
            onClick={onClick}
            aria-label={`${dir === "prev" ? "Previous" : "Next"} slide`}
            className={`absolute ${side} top-1/2 -translate-y-1/2 z-20
              w-8 h-8 md:w-10 md:h-10 flex items-center justify-center
              rounded-full bg-black/25 hover:bg-black/55
              text-white backdrop-blur-sm border border-white/10
              transition-all duration-200 hover:scale-105 active:scale-95`}
          >
            <Icon className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        ))}
      </div>

      {/* ── Announcement Panel ── */}
      {current && (
        <div className="lg:absolute lg:w-[500px] lg:bottom-0 lg:left-5 lg:z-20 lg:translate-y-1/2">
          {/* Top orange accent */}
          <div className="h-[3px] bg-gradient-to-r from-[#F3831C] via-[#F3831C]/70 to-transparent" />

          <div className="bg-black/85 backdrop-blur-md border border-t-0 border-white/10">

            {/* Row 1 — Text + CTA */}
            <div className="px-4 pt-3.5 pb-2.5 flex items-start gap-3">
              {/* Left accent bar */}
              <div className="shrink-0 w-[3px] self-stretch bg-gradient-to-b from-[#F3831C] to-[#F3831C]/20 rounded-full" />

              {/* Text — no truncation, wraps naturally */}
              <div className="flex-1">
                <p className="text-[13px] font-semibold text-white leading-snug">
                  {current.title}
                </p>
                {current.subtext && (
                  <p className="text-[11.5px] text-white/50 mt-1 leading-snug font-normal">
                    {current.subtext}
                  </p>
                )}
              </div>

              {/* CTA */}
              <a
                href={current.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5
                  text-[10.5px] font-bold uppercase tracking-widest
                  text-white bg-[#F3831C] hover:bg-[#e07318] active:bg-[#c96510]
                  transition-colors duration-150 whitespace-nowrap self-start"
              >
                View now
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Row 2 — Slide counter + Dots + Arrows */}
            <div className="px-4 pb-3 flex items-center justify-between border-t border-white/5 pt-2">
              {/* Slide counter */}
              <span className="text-[10px] font-mono text-white/25 tracking-widest uppercase">
                {String(currentSlide + 1).padStart(2, "0")} / {String(announcements.length).padStart(2, "0")}
              </span>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {announcements.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className="transition-all duration-300 rounded-full"
                    style={{
                      width: index === currentSlide ? 16 : 4,
                      height: 3,
                      background:
                        index === currentSlide
                          ? "#F3831C"
                          : "rgba(255,255,255,0.2)",
                    }}
                  />
                ))}
              </div>

              {/* Prev / Next arrows */}
              <div className="flex items-center gap-0.5">
                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="w-6 h-6 flex items-center justify-center
                    text-white/30 hover:text-white/70 transition-colors duration-150"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="w-6 h-6 flex items-center justify-center
                    text-white/30 hover:text-white/70 transition-colors duration-150"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}