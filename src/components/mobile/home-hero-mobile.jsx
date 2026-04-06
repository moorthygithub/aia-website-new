// import React, { useState, useEffect, useCallback } from "react";
// import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
// import { BASE_URL } from "@/api/base-url";
// import OptimizedImage from "@/components/common/optmized-image";

// export default function HomeHeroMobile({ slug, bottombar = false }) {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [carouselSlides, setCarouselSlides] = useState([]);
//   const [announcements, setAnnouncements] = useState([]);

//   const { data, isLoading, isError, error } = useQuery({
//     queryKey: [slug],
//     queryFn: async () => {
//       const res = await axios.get(`${BASE_URL}/api/getBanner/${slug}`, {
//         timeout: 10000,
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//       });
//       return res.data;
//     },
//   });

//   useEffect(() => {
//     if (!data?.data || !data?.image_url) return;

//     const bannerImageUrlObj = data.image_url.find(
//       (item) => item.image_for === "Banner"
//     );
//     const baseImageUrl = bannerImageUrlObj?.image_url || "";

//     const slides = data.data.map((banner, index) => ({
//       id: index + 1,
//       imageUrl: `${baseImageUrl}${banner.banner_image}`,
//       link: banner.banner_link,
//       alt: banner.banner_image_alt,
//     }));

//     const announcementsData = data.data.map((banner, index) => ({
//       id: index + 1,
//       title: banner.banner_text,
//       subtext: banner.banner_sub_text,
//       link: banner.banner_link,
//     }));

//     setCarouselSlides(slides);
//     setAnnouncements(announcementsData);
//   }, [data]);

//   const nextSlide = useCallback(() => {
//     if (carouselSlides.length > 0)
//       setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
//   }, [carouselSlides.length]);

//   const prevSlide = () => {
//     if (carouselSlides.length > 0)
//       setCurrentSlide(
//         (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
//       );
//   };

//   const goToSlide = (index) => setCurrentSlide(index);

//   useEffect(() => {
//     if (!isAutoPlaying || carouselSlides.length === 0) return;
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, [isAutoPlaying, carouselSlides.length, nextSlide]);

//   if (isError) {
//     return (
//       <section className="relative h-[420px] bg-red-50 flex items-center justify-center">
//         <span className="text-xs text-red-400 font-medium">
//           Failed to load banners: {error?.message}
//         </span>
//       </section>
//     );
//   }

//   if (carouselSlides.length === 0) {
//     return (
//       <section className="relative h-[420px] bg-gray-100 flex items-center justify-center">
//         <span className="text-xs text-gray-400 font-medium">
//           No banners available
//         </span>
//       </section>
//     );
//   }

//   const current = announcements[currentSlide];

//   return (
//     <section className="relative">
//       <div
//         className="relative overflow-hidden"
//         onMouseEnter={() => setIsAutoPlaying(false)}
//         onMouseLeave={() => setIsAutoPlaying(true)}
//       >
//         <div className="relative w-full" style={{ aspectRatio: "11/5" }}>
//           {carouselSlides.map((slide, index) => (
//             <a
//               key={slide.id}
//               href={slide.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
//                 index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
//               }`}
//             >
//               <OptimizedImage
//                 src={slide.imageUrl}
//                 alt={slide.alt}
//                 priority={index === 0}
//                 className="w-full h-full object-cover"
//               />
//             </a>
//           ))}

//           {carouselSlides.length > 1 &&
//             [
//               {
//                 dir: "prev",
//                 Icon: ChevronLeft,
//                 onClick: prevSlide,
//                 side: "left-4",
//               },
//               {
//                 dir: "next",
//                 Icon: ChevronRight,
//                 onClick: nextSlide,
//                 side: "right-4",
//               },
//             ].map(({ dir, Icon, onClick, side }) => (
//               <button
//                 key={dir}
//                 onClick={onClick}
//                 aria-label={`${dir === "prev" ? "Previous" : "Next"} slide`}
//                 className={`absolute ${side} top-1/2 -translate-y-1/2 z-20
//                 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center
//                 rounded-full bg-black/25 hover:bg-black/55
//                 text-white backdrop-blur-sm border border-white/10
//                 transition-all duration-200 hover:scale-105 active:scale-95`}
//               >
//                 <Icon className="w-4 h-4 md:w-5 md:h-5" />
//               </button>
//             ))}
//         </div>
//       </div>

//       {current != null && bottombar && (
//         <div className="lg:absolute lg:w-[500px] lg:bottom-0 lg:left-5 lg:z-20 lg:translate-y-1/2">
//           <div className="h-[3px] bg-gradient-to-r from-[#F3831C] via-[#F3831C]/70 to-transparent" />

//           <div className="bg-black/85 backdrop-blur-md border border-t-0 border-white/10">
//             {/* Row 1 — Text + CTA */}
//             <div className="px-4 pt-3.5 pb-2.5 flex items-start gap-3">
//               <div className="shrink-0 w-[3px] self-stretch bg-gradient-to-b from-[#F3831C] to-[#F3831C]/20 rounded-full" />

//               <div className="flex-1">
//                 <p className="text-[13px] font-semibold text-white leading-snug">
//                   {current.title}
//                 </p>
//                 {current.subtext && (
//                   <p className="text-[11.5px] text-white/50 mt-1 leading-snug font-normal">
//                     {current.subtext}
//                   </p>
//                 )}
//               </div>

//               <a
//                 href={current.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5
//                   text-[10.5px] font-bold uppercase tracking-widest
//                   text-white bg-[#F3831C] hover:bg-[#e07318] active:bg-[#c96510]
//                   transition-colors duration-150 whitespace-nowrap self-start"
//               >
//                 Know More.
//                 <ArrowUpRight className="w-3 h-3" />
//               </a>
//             </div>

//             <div className="px-4 pb-3 flex items-center justify-between border-t border-white/5 pt-2">
//               <span className="text-[10px] font-mono text-white/25 tracking-widest uppercase">
//                 {String(currentSlide + 1).padStart(2, "0")} /{" "}
//                 {String(announcements.length).padStart(2, "0")}
//               </span>

//               <div className="flex items-center gap-2">
//                 {announcements.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => goToSlide(index)}
//                     aria-label={`Go to slide ${index + 1}`}
//                     className="w-3 h-[2px] flex items-center justify-start overflow-hidden"
//                     style={{ background: "rgba(255,255,255,0.2)" }}
//                   >
//                     <span
//                       className="h-full transition-all duration-300"
//                       style={{
//                         width: index === currentSlide ? "100%" : "0%",
//                         background: "#F3831C",
//                       }}
//                     />
//                   </button>
//                 ))}
//               </div>
//               <div className="flex items-center gap-0.5">
//                 <button
//                   onClick={prevSlide}
//                   aria-label="Previous slide"
//                   className="w-6 h-6 flex items-center justify-center
//                     text-white/30 hover:text-white/70 transition-colors duration-150 cursor-pointer"
//                 >
//                   <ChevronLeft className="w-3.5 h-3.5" />
//                 </button>
//                 <button
//                   onClick={nextSlide}
//                   aria-label="Next slide"
//                   className="w-6 h-6 flex items-center justify-center
//                     text-white/30 hover:text-white/70 transition-colors duration-150 cursor-pointer"
//                 >
//                   <ChevronRight className="w-3.5 h-3.5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/api/base-url";
import OptimizedImage from "@/components/common/optmized-image";

export default function HomeHeroMobile({ slug, bottombar = false }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [carouselSlides, setCarouselSlides] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  // Touch swipe support
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [slug],
    queryFn: async () => {
      const res = await axios.get(`${BASE_URL}/api/getBanner/${slug}`, {
        timeout: 10000,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      return res.data;
    },
    // Cache for 5 min — avoids re-fetching on mount if wrapper swaps components
    staleTime: 5 * 60 * 1000,
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

  const prevSlide = useCallback(() => {
    if (carouselSlides.length > 0)
      setCurrentSlide(
        (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
      );
  }, [carouselSlides.length]);

  const goToSlide = (index) => setCurrentSlide(index);

  useEffect(() => {
    if (!isAutoPlaying || carouselSlides.length === 0) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselSlides.length, nextSlide]);

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      diff > 0 ? nextSlide() : prevSlide();
    }
  };

  // ── Loading skeleton ──────────────────────────────────────────────
  if (isLoading) {
    return (
      <section className="relative">
        {/* Match the exact mobile aspect ratio to prevent CLS */}
        <div
          className="relative w-full overflow-hidden bg-gray-200 shimmer"
          style={{ aspectRatio: "4/3" }}
        />
        {bottombar && (
          <div className="w-full">
            <div className="h-[3px] bg-gray-300 animate-pulse" />
            <div className="bg-gray-200 shimmer">
              <div className="px-4 pt-4 pb-3 flex items-start gap-3">
                <div className="shrink-0 w-[3px] h-14 bg-gray-300 rounded-full" />
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-4 bg-gray-300 rounded w-3/4" />
                  <div className="h-3 bg-gray-300 rounded w-1/2" />
                </div>
                <div className="w-20 h-7 bg-gray-300 rounded shrink-0" />
              </div>
              <div className="px-4 pb-3 flex items-center justify-between border-t border-gray-300/30 pt-2">
                <div className="w-10 h-2.5 bg-gray-300 rounded" />
                <div className="flex items-center gap-2">
                  <div className="w-3 h-[2px] bg-gray-300 rounded-full" />
                  <div className="w-3 h-[2px] bg-gray-300 rounded-full" />
                  <div className="w-3 h-[2px] bg-gray-300 rounded-full" />
                </div>
                <div className="flex gap-0.5">
                  <div className="w-6 h-6 bg-gray-300 rounded" />
                  <div className="w-6 h-6 bg-gray-300 rounded" />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }

  // ── Error state ───────────────────────────────────────────────────
  if (isError) {
    return (
      <section
        className="relative bg-red-50 flex items-center justify-center"
        style={{ aspectRatio: "4/3" }}
      >
        <span className="text-xs text-red-400 font-medium">
          Failed to load banners: {error?.message}
        </span>
      </section>
    );
  }

  // ── Empty state ───────────────────────────────────────────────────
  if (carouselSlides.length === 0) {
    return (
      <section
        className="relative bg-gray-100 flex items-center justify-center"
        style={{ aspectRatio: "4/3" }}
      >
        <span className="text-xs text-gray-400 font-medium">
          No banners available
        </span>
      </section>
    );
  }

  const current = announcements[currentSlide];

  return (
    <section className="relative">
      {/* ── Carousel ─────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden"
        // Pause autoplay on touch interactions
        onTouchStart={(e) => {
          setIsAutoPlaying(false);
          handleTouchStart(e);
        }}
        onTouchEnd={(e) => {
          handleTouchEnd(e);
          setIsAutoPlaying(true);
        }}
      >
        {/*
          aspect-ratio: 4/3 for mobile — prevents CLS (layout shift).
          The 11/5 desktop ratio causes a very short image on small screens
          which forces the browser to load a full-width image into a tiny slot,
          hurting both LCP and TBT.
        */}
        <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
          {carouselSlides.map((slide, index) => (
            <a
              key={slide.id}
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <OptimizedImage
                src={slide.imageUrl}
                alt={slide.alt}
                // ── LCP fix: slide 0 is above-the-fold on mobile ──
                priority={index === 0}
                fetchpriority={index === 0 ? "high" : "low"}
                loading={index === 0 ? "eager" : "lazy"}
                decoding={index === 0 ? "sync" : "async"}
                // ── Correct sizes hint so browser picks right srcset ──
                sizes="100vw"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/600x450?text=Banner";
                }}
              />
            </a>
          ))}

          {/*
            Nav arrows removed on mobile — replaced by swipe.
            Arrows on mobile overlap the image, cause accidental taps,
            and add render-blocking event listeners that hurt TBT.
          */}
        </div>
      </div>

      {/* ── Bottombar ────────────────────────────────────────────── */}
      {current != null && bottombar && (
        <div>
          <div className="h-[3px] bg-gradient-to-r from-[#F3831C] via-[#F3831C]/70 to-transparent" />

          <div className="bg-black/85 backdrop-blur-md border border-t-0 border-white/10">
            {/* Row 1 — Text + CTA */}
            <div className="px-4 pt-3.5 pb-2.5 flex items-start gap-3">
              <div className="shrink-0 w-[3px] self-stretch bg-gradient-to-b from-[#F3831C] to-[#F3831C]/20 rounded-full" />

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

              <a
                href={current.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1 px-3.5 py-1.5
                  text-[10.5px] font-bold uppercase tracking-widest
                  text-white bg-[#F3831C] hover:bg-[#e07318] active:bg-[#c96510]
                  transition-colors duration-150 whitespace-nowrap self-start"
              >
                Know More.
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Row 2 — Counter + Dots + Arrows */}
            <div className="px-4 pb-3 flex items-center justify-between border-t border-white/5 pt-2">
              <span className="text-[10px] font-mono text-white/25 tracking-widest uppercase">
                {String(currentSlide + 1).padStart(2, "0")} /{" "}
                {String(announcements.length).padStart(2, "0")}
              </span>

              <div className="flex items-center gap-2">
                {announcements.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className="w-3 h-[2px] flex items-center justify-start overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.2)" }}
                  >
                    <span
                      className="h-full transition-all duration-300"
                      style={{
                        width: index === currentSlide ? "100%" : "0%",
                        background: "#F3831C",
                      }}
                    />
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-0.5">
                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="w-6 h-6 flex items-center justify-center
                    text-white/30 hover:text-white/70 transition-colors duration-150 cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="w-6 h-6 flex items-center justify-center
                    text-white/30 hover:text-white/70 transition-colors duration-150 cursor-pointer"
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
