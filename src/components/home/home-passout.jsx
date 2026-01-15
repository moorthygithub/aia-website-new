import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import TestimonialsColumn2 from "@/components/ui/testimonial-column-2";
import usePreloadImages from "@/hooks/usePreloadImages";
import { BASE_URL } from "@/api/base-url";

const HomePassout = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["passout-students"],
    queryFn: async () => {
      const res = await axios.get(
         `${BASE_URL}/api/getAllPassoutStudents`
      );
      return res.data;
    },
  });

  const studentImageBase =
    data?.image_url?.find((img) => img.image_for === "Student")
      ?.image_url || "";
  const companyImageBase =
    data?.image_url?.find((img) => img.image_for === "Student Company")
      ?.image_url || "";


  const testimonials =
    data?.data?.map((item) => ({
      image: item.student_image
        ? `${studentImageBase}${item.student_image}`
        : "",
      alt: item.student_image_alt || "Student",
      course: item.student_course,
      name: item.student_name,
      student_designation: item.student_designation,
    
      comapany_image: item.student_company_image
      ? `${companyImageBase}${item.student_company_image}`
      : "",
      company_alt: item.student_company_image_alt  || "Student",
    })) || [];

    usePreloadImages(testimonials.map((t) => t.image));
  const firstColumn = testimonials.filter(
    (item) => item.course === "CFE"
  );
  const secondColumn = testimonials.filter(
    (item) => item.course === "CIAC"
  );
  const thirdColumn = testimonials.filter(
    (item) => item.course === "CAMS"
  );


  
  return (
    <section className="bg-linear-to-bl from-blue-300/25 via-transparent to-transparent relative pb-10">
      <div className="mx-auto pt-10 max-w-340 z-10">
        <div className="flex flex-col items-center justify-center max-w-135 mx-auto">
          <div className="border py-1 px-4 rounded-lg">
            Testimonials
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our Passout say
          </h2>

          <p className="text-center mt-5 opacity-75">
            See what our passout have to say about us.
          </p>
        </div>

      
        {isLoading && (
          <div className="text-center mt-10 text-gray-500">
            Loading testimonials...
          </div>
        )}

    
        {isError && (
          <div className="text-center mt-10 text-red-500">
            Failed to load testimonials
          </div>
        )}

      
        {!isLoading && !isError && testimonials.length > 0 && (
          <div className="flex justify-center gap-6 mt-10 mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-135 overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn2
              testimonials={secondColumn}
     
              duration={19}
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
        
              duration={17}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePassout;
