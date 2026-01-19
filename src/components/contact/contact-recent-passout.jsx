import React from "react";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CardCarousel } from "@/components/ui/card-carousel";
import axios from "axios";
import { BASE_URL } from "@/api/base-url";

const ContactRecentPassout = () => {
  const { data: camsPassoutData, isLoading, isError } = useQuery({
    queryKey: ["contact-passout-students"],
    queryFn: async () => {
      const res = await axios.get(
          `${BASE_URL}/api/getAllPassoutStudents`
      );
      return res.data;
    },
  });

  const images = React.useMemo(() => {
    if (!camsPassoutData?.data) return [];
    
    const studentImageUrlObj = camsPassoutData.image_url?.find(
      item => item.image_for === "Student"
    );
    const studentImageUrl = studentImageUrlObj?.image_url || "";
    
    return camsPassoutData.data.map((student) => ({
      src: `${studentImageUrl}${student.student_image}`,
      alt: student.student_name || "Student Image",
      name: student.student_name,
      course: student.student_course
    }));
  }, [camsPassoutData]);

  if (isLoading) {
    return (
      <div className="relative w-full bg-linear-to-br from-[#0F3652]/10 to-transparent py-8">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          ></div>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 70% 30%, #0F3652 1px, transparent 1.5px), radial-gradient(circle at 30% 70%, #F3831C 1px, transparent 1.5px)',
              backgroundSize: '60px 60px',
              animation: 'moveBackground 20s infinite alternate',
            }}
          ></div>
        </div>

        <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="mb-8 text-center gap-4">
            <div className="relative z-30"> 
              <Skeleton height={40} width={400} className="mx-auto" />
              <Skeleton height={20} width={200} className="mx-auto mt-2" />
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="w-64 h-80">
                <Skeleton height={320} width={256} />
                <Skeleton height={20} width={150} className="mt-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="relative w-full bg-linear-to-br from-[#0F3652]/10 via-transparent to-[#F3831C]/25 py-8">
        <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <div className="text-[#0F3652]">Error loading students. Please try again later.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full bg-linear-to-br from-[#0F3652]/10 to-transparent">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>
      
      <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="mb-8 text-center gap-4">
          <div className="relative z-30"> 
            <h2 className="text-3xl font-medium text-[#0F3652]">
            AIA Certified Achievers Driving  <span className="text-[#F3831C]">Excellence Everywhere</span>
            </h2>
            <p className="text-[#0F3652]/80 mt-2">
              Our successful graduates making a difference in the industry
            </p>
          </div>
        </div>
      
        <CardCarousel
          images={images}
          autoplayDelay={3000}
          showPagination={true}
          showNavigation={true}
          className="showcase-student-carousel relative z-0"
        />
      </div>
      <style>{`
        .showcase-student-carousel .swiper {
          width: 100%;
          padding-bottom: 50px;
        }
        
        .showcase-student-carousel .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 300px;
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        .showcase-student-carousel .swiper-slide img {
          display: block;
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 8px;
          transform: translateZ(0);
          will-change: transform;
        }
        
        .showcase-student-carousel .swiper-3d .swiper-slide-shadow-left,
        .showcase-student-carousel .swiper-3d .swiper-slide-shadow-right {
          background-image: none;
        }
        
        .showcase-student-carousel .swiper-pagination {
          display: none !important;
        }
        
        @keyframes moveBackground {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .showcase-student-carousel .swiper {
            transition: none;
          }
          .showcase-student-carousel .swiper-slide {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactRecentPassout;