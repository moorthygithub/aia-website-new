import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const CardCarousel = ({
  studentData,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
  className = "",
}) => {
  return (
    <section className={`py-6 ${className}`}>
      <div className="px-4">
        <div className="relative mx-auto flex w-full flex-col">
          <div className="flex w-full items-center justify-center">
            <div className="w-full">
              {/* <Swiper
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                speed={800}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                  slideShadows: false,
                }}
                pagination={showPagination ? { clickable: true } : false}
                navigation={
                  showNavigation
                    ? {
                        nextEl: `.${className} .swiper-button-next`,
                        prevEl: `.${className} .swiper-button-prev`,
                      }
                    : false
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                watchSlidesProgress={true}
                resistanceRatio={0.85}
                threshold={15}
                updateOnWindowResize={true}
                breakpoints={{
                  0: { spaceBetween: 10 },
                  640: { spaceBetween: 50 },
                }}
              > */}
              <Swiper
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={false}
                loop={studentData.length > 5}
                slidesPerView={5}
                speed={800}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 80,
                  modifier: 1,
                  slideShadows: false,
                }}
                pagination={showPagination ? { clickable: true } : false}
                navigation={showNavigation}
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 40,
                  },
                }}
              >
                {studentData.map((student, index) => (
                  <SwiperSlide key={index} className="max-w-xs">
                    <div className="relative bg-white shadow-lg shadow-gray-200/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-300/50">
                      <div className=" border !rounded-none border-[#0F3652]">
                        <img
                          src={student.src}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover !rounded-none "
                          alt={student.alt}
                          loading="lazy"
                        />
                      </div>

                      {/* <div className="bg-[#0F3652] px-4 py-3">
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-col it space-y-1">
                            <span className="text-white font-bold text-base">
                              {student.name}
                            </span>

                            {student.marks &&
                              student.marks.split(",").length > 0 && (
                                <div className="flex flex-wrap gap-1">
                                  {student.marks.split(",").map((mark, idx) => (
                                    <span
                                      key={idx}
                                      className="px-2 py-0.5 bg-[#F3831C] text-white text-xs font-medium rounded"
                                    >
                                      {mark.trim()}
                                    </span>
                                  ))}
                                </div>
                              )}
                          </div>

                          <div className="flex-shrink-0 pt-1">
                            <div className="w-12 h-12 flex items-center justify-center overflow-hidden ">
                              <img
                                src={student.companyLogo}
                                alt={student.companyLogoAlt}
                                className="max-w-full border border-white !rounded-none  max-h-full object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
