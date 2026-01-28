import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

export const CardCarousel = ({
  studentData,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
  className = "", 
}) => {
  return (
    <section className={`py-6 ${className}`}>
      <div className="mx-auto px-4">
        <div className="relative mx-auto flex w-full flex-col">
          <div className="flex w-full items-center justify-center">
            <div className="w-full max-w-6xl">
              <Swiper
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
              >
                {studentData.map((student, index) => (
                  <SwiperSlide key={index} className="max-w-xs">
                    <div className="relative bg-white rounded-md shadow-lg shadow-gray-200/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-300/50">
                   
                      {student.marks && student.marks.split(',').length > 0 && (
                        <div className="bg-[#0F3652] px-3 py-2">
                          <div className="flex flex-wrap items-center justify-center gap-1">
                            {student.marks.split(',').map((mark, idx) => (
                              <div 
                                key={idx}
                                className="px-2 py-1 bg-[#F3831C] text-white text-xs font-medium rounded"
                              >
                                {mark.trim()}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}  , redegisn
                      
                    
                      <div className="">
                        <img
                          src={student.src}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover rounded-lg shadow-md"
                          alt={student.alt}
                          loading="lazy"
                        />
                      </div>
                      
        
                      <div className="bg-[#0F3652] px-4 py-3">
                        <div className="flex flex-col space-y-2">
                        
                          <h3 className="text-base flex flex-row items-center justify-between font-bold text-white truncate ">
                            <span>{student.name}  </span>
                            
                            
                            <span className="text-xs text-white/90 truncate">
                                  <span className="text-sm text-[#F3831C] font-medium truncate">
                                {student.companyName}  , logo 
                              </span>
                              </span>
                          </h3>
                     
                         
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}