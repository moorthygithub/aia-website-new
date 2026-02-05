import { cn } from "@/lib/utils";
import { TestimonialCardCourse } from "./testimonial-card-course";
import Highlight from "@/components/common/highlight";
import SectionHeading from "@/components/SectionHeading/SectionHeading";

export function TestimonialsSectionCourse({ title, testimonials, className }) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className={cn("py-12 sm:py-16 md:py-18 px-0 ", className)}>
      <div className="mx-auto flex max-w-340 flex-col items-center gap-4 text-center sm:gap-16">
        <SectionHeading title={title} align="center" />
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] gap-(--gap) flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around gap-(--gap) animate-marquee flex-row group-hover:paused">
              {[...Array(2)].map((_, setIndex) =>
                testimonials.map((testimonial, i) => (
                  <TestimonialCardCourse
                    key={`first-${setIndex}-${i}`}
                    {...testimonial}
                    href={testimonial.youtubeLink}
                    target="_blank"
                  />
                )),
              )}
            </div>

            <div
              className="flex shrink-0 justify-around gap-(--gap) animate-marquee flex-row group-hover:paused"
              aria-hidden="true"
            >
              {[...Array(2)].map((_, setIndex) =>
                testimonials.map((testimonial, i) => (
                  <TestimonialCardCourse
                    key={`second-${setIndex}-${i}`}
                    {...testimonial}
                    href={testimonial.youtubeLink}
                    target="_blank"
                  />
                )),
              )}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-48 bg-linear-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-48 bg-linear-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  );
}
