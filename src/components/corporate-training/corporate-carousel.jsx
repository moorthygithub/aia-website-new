import { BASE_URL } from "@/api/base-url";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SectionHeading from "../SectionHeading/SectionHeading";

const CorporateCarouselSkeleton = ({ cards = 5 }) => {
  return (
    <div className="w-full max-w-340 mx-auto py-8">
      <div className="overflow-hidden">
        <div className="flex gap-4">
          {Array.from({ length: cards }).map((_, index) => (
            <div key={index} className="shrink-0 w-[calc(20%-16px)]">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Skeleton height={250} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} width={20} height={8} borderRadius={4} />
        ))}
      </div>
    </div>
  );
};

const CorporateCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsToShow = 5;

  const {
    data: certificatesData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["corporater-carousel-slider"],
    queryFn: async () => {
      const res = await axios.get(`${BASE_URL}/api/getCorporateSlider`);
      return res?.data ?? { data: [], image_url: [] };
    },
  });

  const images = useMemo(() => {
    if (!certificatesData?.data?.length) return [];

    const sliderImageBase =
      certificatesData.image_url?.find(
        (item) => item.image_for === "Corporate Slider"
      )?.image_url || "";

    const noImage =
      certificatesData.image_url?.find((item) => item.image_for === "No Image")
        ?.image_url || "";

    return certificatesData.data.map((item) => ({
      src: item.corporate_slider_image
        ? `${sliderImageBase}${item.corporate_slider_image}`
        : noImage,
      alt: item.corporate_slider_image_alt || "Corporate Image",
    }));
  }, [certificatesData]);

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev + cardsToShow >= images.length ? 0 : prev + cardsToShow
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (isLoading) {
    return <CorporateCarouselSkeleton cards={5} />;
  }
  if (isError || !images.length) return null;

  return (
    <div className="w-full max-w-340 mx-auto py-8">
      <SectionHeading
        title="Moments That Made Professionals Journey Worth It"
        align="center"
      />
      <div className="relative mt-3">
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentSlide / cardsToShow) * 100}%)`,
            }}
          >
            {images.map((img, index) => (
              <div key={index} className="shrink-0 w-[calc(20%-16px)]">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#0F3652]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-60 object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        certificatesData.image_url?.find(
                          (item) => item.image_for === "No Image"
                        )?.image_url || "";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {Array.from({
            length: Math.ceil(images.length / cardsToShow),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index * cardsToShow)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index * cardsToShow
                  ? "bg-[#F3831C] w-8"
                  : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorporateCarousel;
