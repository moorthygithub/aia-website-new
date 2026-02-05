import { cn } from "@/lib/utils"
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { TestimonialCardCourse } from "../courses/common/testimonial-card-course";

export function TestimonialsSection({
  title,
  testimonials,
  className
}) {

  if (!testimonials || testimonials.length === 0) return null;

  return (

    <section className={cn("py-12  px-0  ", className)}>
      <div className="mx-auto flex max-w-340 flex-col items-center gap-4 text-center sm:gap-16">
        {title && (
          <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
            <h2 className="max-w-340 text-[#0F3652] text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight">
              {title}
            </h2>
          </div>
        )}

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] gap-(--gap) flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around gap-(--gap) animate-marquee flex-row group-hover:paused">
              {[...Array(2)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCardCourse 
                    key={`first-${setIndex}-${i}`} 
                    {...testimonial} 
                    href={testimonial.youtubeLink} 
                    target="_blank"
                  />
                ))
              ))}
            </div>
            
            <div
              className="flex shrink-0 justify-around gap-(--gap) animate-marquee flex-row group-hover:paused"
              aria-hidden="true">
              {[...Array(2)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCardCourse 
                    key={`second-${setIndex}-${i}`} 
                    {...testimonial} 
                    href={testimonial.youtubeLink} 
                    target="_blank"
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-48 bg-linear-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-48 bg-linear-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  );
}