import { BASE_URL } from "@/api/base-url";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Highlight from "../common/highlight";
import { Avatar, AvatarImage } from "../ui/avatar";
import SectionHeading from "../SectionHeading/SectionHeading";

export function TestimonialCardCourse({
  author,
  href,
  alt,
  className,
  target,
}) {
  const Card = href ? "a" : "div";

  return (
    <Card
      {...(href
        ? {
            href,
            target: target || "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
      className={cn(
        "flex flex-col rounded-lg relative group",
        "text-start",
        "hover:from-muted/60 hover:to-muted/20",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-all duration-300",
        "h-50 w-[320px]",
        href ? "cursor-pointer" : "cursor-default",
        className
      )}
    >
      <div className="h-full w-full flex items-center justify-center">
        <Avatar className="h-full w-full rounded-md">
          <AvatarImage
            src={author?.avatar}
            alt={alt || "Certificate Image"}
            className="w-full h-full object-contain rounded-md"
          />
        </Avatar>
      </div>
    </Card>
  );
}

const PassoutResult = () => {
  const {
    data: certificatesData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["cams-certificates"],
    queryFn: async () => {
      const res = await axios.get(`${BASE_URL}/api/getAllCertificate`);
      return res.data;
    },
  });

  const testimonials = React.useMemo(() => {
    if (!certificatesData?.data) return [];

    const certificateImageUrlObj = certificatesData.image_url?.find(
      (item) => item.image_for === "Student"
    );
    const certificateImageUrl = certificateImageUrlObj?.image_url || "";

    return certificatesData.data.map((certificate) => ({
      author: {
        avatar: `${certificateImageUrl}${certificate.student_certificate_image}`,
      },
      href: certificate.student_linkedin_link,
      alt: certificate.student_certificate_image_alt || "Certificate Image",
      target: "_blank",
    }));
  }, [certificatesData]);

  if (isLoading) {
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

  if (isError) {
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

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div>
      <section className="py-12 px-0">
        <div className="mx-auto flex max-w-340 flex-col items-center gap-4 text-center sm:gap-16">
          <SectionHeading
            title="Meet the AIA-Certified Professionals Worldwide"
            description="Click a certificate to explore their LinkedIn profile and connect with certified professionals"
            align="center"
          />
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <div className="group flex overflow-hidden p-2 [--gap:1rem] gap-(--gap) flex-row [--duration:150s]">
              <div className="flex shrink-0 justify-around gap-(--gap) animate-marquee flex-row group-hover:paused">
                {testimonials.map((testimonial, i) => (
                  <TestimonialCardCourse
                    key={`first-${i}`}
                    author={testimonial.author}
                    href={testimonial.href}
                    alt={testimonial.alt}
                    target={testimonial.target}
                  />
                ))}
              </div>

              <div
                className="flex shrink-0 justify-around gap-(--gap) animate-marquee flex-row group-hover:paused"
                aria-hidden="true"
              >
                {testimonials.map((testimonial, i) => (
                  <TestimonialCardCourse
                    key={`second-${i}`}
                    author={testimonial.author}
                    href={testimonial.href}
                    alt={testimonial.alt}
                    target={testimonial.target}
                  />
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-48 bg-linear-to-r from-background sm:block" />
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-48 bg-linear-to-l from-background sm:block" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PassoutResult;
