import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { TestimonialCardCourse } from "./testimonial-card-course";
export function TestimonialsSectionCourse({
  title,
  description,
  testimonials,
  className,
}) {
  const marqueeRef = useRef(null);
  const [duration, setDuration] = useState(40);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marqueeWidth = marqueeRef.current.scrollWidth;
    const SPEED = 150;
    setDuration(marqueeWidth / SPEED);
  }, [testimonials]);

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className={cn("py-12 sm:py-16 md:py-18 px-0", className)}>
      <div className="mx-auto flex max-w-340 flex-col items-center gap-4 text-center sm:gap-16">
        <SectionHeading
          title={title}
          description={description}
          align="center"
        />
        <div className="relative flex w-full overflow-hidden">
          <div
            className="group flex gap-4"
            style={{ ["--duration"]: `${duration}s` }}
          >
            {/* FIRST SET */}
            <div
              ref={marqueeRef}
              className="flex shrink-0 gap-4 animate-marquee group-hover:paused"
            >
              {testimonials.map((testimonial, i) => (
                <TestimonialCardCourse
                  key={`first-${i}`}
                  {...testimonial}
                  href={testimonial.youtubeLink}
                  target="_blank"
                />
              ))}
            </div>

            {/* DUPLICATE SET */}
            <div
              className="flex shrink-0 gap-4 animate-marquee group-hover:paused"
              aria-hidden="true"
            >
              {testimonials.map((testimonial, i) => (
                <TestimonialCardCourse
                  key={`second-${i}`}
                  {...testimonial}
                  href={testimonial.youtubeLink}
                  target="_blank"
                />
              ))}
            </div>
          </div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background" />
        </div>
      </div>
    </section>
  );
}
