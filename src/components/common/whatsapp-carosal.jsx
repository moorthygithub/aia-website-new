import { BASE_URL } from "@/api/base-url";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { WhatsappTestimonialsSectionCourse } from "../courses/common/whatsapp-testimonial-with-marquee-course";

const WhatsappCarosal = ({ title, description, course }) => {
  const {
    data: certificatesData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["screenshot-slider", course],
    queryFn: async () => {
      const res = await axios.get(
        `${BASE_URL}/api/getScreenshotSlider/${course}`,
      );
      return res.data;
    },
    enabled: !!course, 
  });

  const testimonials = React.useMemo(() => {
    if (!certificatesData?.data) return [];

    const studentImageBaseUrl =
      certificatesData.image_url?.find((item) => item.image_for === "Student")
        ?.image_url || "";

    return certificatesData.data.map((item) => ({
      image: `${studentImageBaseUrl}${item.student_screenshot_image}`,
      alt: item.student_screenshot_image_alt || "Student Testimonial",
      youtubeLink: item.student_youtube_link,
    }));
  }, [certificatesData]);

  /* ---------------- LOADING ---------------- */
  if (isLoading) {
    return (
      <div className="relative w-full py-12 sm:py-24 md:py-32">
        <div className="mx-auto max-w-container flex flex-col items-center gap-4 text-center sm:gap-16">
          <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
            <Skeleton height={40} width={400} />
            <Skeleton height={20} width={250} />
          </div>

          <div className="flex gap-4 overflow-hidden">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="w-[290px] h-[165px]">
                <Skeleton height={165} width={290} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="relative w-full py-12 sm:py-24 md:py-32">
        <div className="mx-auto max-w-container text-center text-red-500">
          Error loading certificates. Please try again later.
        </div>
      </div>
    );
  }

  if (!testimonials.length) return null;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <WhatsappTestimonialsSectionCourse
        title={title || "Meet Professionals Who Made It with AIA"}
        description={
          description ||
          "Click a success story to watch their full interview with Puneet Sir and get inspired."
        }
        testimonials={testimonials}
        sucessstory={true}
      />
    </div>
  );
};

export default WhatsappCarosal;
