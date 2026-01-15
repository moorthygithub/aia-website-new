/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "@/api/base-url";
import { TestimonialsSection } from "../ui/testimonials-with-marquee";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const HomeYoutube = () => {
  const [activeTab, setActiveTab] = useState("");
  const scrollContainerRef = useRef(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["aia-youtube-home"],
    queryFn: async () => {
      const res = await axios.get(
        `${BASE_URL}/api/getLectureYoutubebySlug/home`
      );
      return res.data;
    },
  });

  const tabs = data?.data
    ? Array.from(new Set(data.data.map((item) => item.youtube_language)))
        .filter(Boolean)
        .sort()
    : [];

  useEffect(() => {
    if (tabs.length > 0 && !activeTab) {
      setActiveTab(tabs[0]);
    }
  }, [tabs, activeTab]);

  const filteredVideos =
    data?.data && activeTab
      ? data.data.filter((video) => video.youtube_language === activeTab)
      : [];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -350 : 350;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const getImageUrl = (imageName) => {
    if (!data?.image_url || !imageName) return "";

    const lectureImage = data.image_url.find(
      (item) => item.image_for === "Lecture Youtube"
    );
    if (lectureImage) {
      return `${lectureImage.image_url}${imageName}`;
    }

    const noImage = data.image_url.find(
      (item) => item.image_for === "No Image"
    );
    return noImage ? noImage.image_url : "";
  };

  const {
    data: certificatesData,
    isLoading: isLoadingPassout,
    isError: isErrorPassout,
  } = useQuery({
    queryKey: ["youtube-testimonials"],
    queryFn: async () => {
      const res = await axios.get(`${BASE_URL}/api/getAllYoutube`);
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

  if (isLoading) {
    return (
      <div className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-340 mx-auto text-center">
          <p>Loading videos...</p>
        </div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-340 mx-auto text-center text-red-600">
          <p>Failed to load videos. Please try again later.</p>
        </div>
      </div>
    );
  }

  if (filteredVideos.length === 0) return null;

  return (
    <div className="w-full  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-340 mx-auto">
        <div className="flex flex-col items-center justify-center mb-8 mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-bold tracking-tighter mt-5">
            Visit Our Youtube Channel
          </h2>
        </div>
        {tabs.length > 0 && (
          <div className="mb-8 border-b border-gray-200">
            <div className="flex gap-1 overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-medium text-sm whitespace-nowrap cursor-pointer transition-all duration-200 border-b-2 ${
                    activeTab === tab
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        )}

        {filteredVideos.length > 0 && (
          <div className="relative group">
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-50 -ml-4"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {filteredVideos.map((video) => (
                <a
                  key={video.id}
                  href={video.youtube_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 w-72 group/card cursor-pointer border p-2 rounded-md bg-white"
                >
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden bg-gray-100">
                      <img
                        src={getImageUrl(video.youtube_image)}
                        alt={video.youtube_image_alt || video.youtube_language}
                        className="w-full h-40 object-fit"
                      />
                    </div>
                  </div>
                  <p className="  font-semibold px-1 mt-1 ">
                    {video.youtube_language}
                  </p>
                </a>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-50 -mr-4"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        )}

        {filteredVideos.length === 0 && activeTab && (
          <div className="text-center py-8 text-gray-500">
            <p>No videos available for {activeTab}</p>
          </div>
        )}
      </div>
      <TestimonialsSection
        title="    Meet Recently Qualified on YouTube"
        testimonials={testimonials}
      />
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default HomeYoutube;
