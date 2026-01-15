/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BASE_URL } from '@/api/base-url';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { TestimonialsSection } from '@/components/ui/testimonials-with-marquee';
const CourseYoutube = ({ courseSlug  }) => {









  const {
    data: certificatesData,
    isLoading: isLoadingPassout,
    isError: isErrorPassout,
  } = useQuery({
    queryKey: ["youtube-testimonials"],
    queryFn: async () => {
      const res = await axios.get(`${BASE_URL}/api/getYoutubebyCourse/${courseSlug}`);
      return res.data;
    },
  });

  const testimonials = React.useMemo(() => {
    if (!certificatesData?.data) return [];

    const studentImageBaseUrl =
      certificatesData.image_url?.find((item) => item.image_for === "Student")
        ?.image_url || "";

    return certificatesData.data.map((item) => ({
      author: {
        name: item.student_name,
        avatar: `${studentImageBaseUrl}${item.student_youtube_image}`,
      },
      alt: item.student_youtube_image_alt || "Student Testimonial",
      youtubeLink: item.student_youtube_link,
      course: item.student_course,
    }));
  }, [certificatesData]);

  if (isLoadingPassout) {
    return (
      <div className="relative w-full py-12 sm:py-24 md:py-32">
        <div className="mx-auto max-w-container flex flex-col items-center gap-4 text-center sm:gap-16">
          <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
            <Skeleton height={40} width={400} className="mx-auto" />
            <Skeleton height={20} width={200} className="mx-auto" />
          </div>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <div className="flex overflow-hidden p-2 gap-4 flex-row">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="w-[320px] h-50">
                  <Skeleton height={200} width={320} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isErrorPassout) {
    return (
      <div className="relative w-full py-12 sm:py-24 md:py-32">
        <div className="mx-auto max-w-container flex flex-col items-center gap-4 text-center sm:gap-16">
          <div className="text-red-500">
            Error loading certificates. Please try again later.
          </div>
        </div>
      </div>
    );
  }

  

  return (
   <TestimonialsSection
          title=" "
          testimonials={testimonials}
        />
  );
};

export default CourseYoutube;