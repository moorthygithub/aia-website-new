import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Waves from "@/components/ui/waves-background";
import CircularTestimonials from "@/components/ui/circular-testimonial";
import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/api/base-url";
import { useState } from "react";

const HomeCorporatePartner = () => {
  
  const { data: effortsData = {}, isLoading, isError } = useQuery({
      queryKey: ["efforts"],
      queryFn: async () => {
        const response = await axios.get(`${BASE_URL}/api/getEfforts`);
        return response.data;
      },
    });
  
  const imageBaseUrl =
    effortsData?.image_url?.find(
      (item) => item.image_for === "Efforts"
    )?.image_url || "";

  const testimonials =
    effortsData?.data?.map((effort) => ({
      quote: effort.efforts_heading,
      src: `${imageBaseUrl}${effort.efforts_image}`,
    })) || [];


  const [currentEffortIndex, setCurrentEffortIndex] = useState(0);
  
 
  const handleTestimonialChange = (index) => {
    setCurrentEffortIndex(index);
  };

  
  const currentDescription = effortsData?.data?.[currentEffortIndex]?.efforts_description || 
    "From engaging with national leaders to presenting the SIGA Pre-Budget Memo, hosting insightful Apparel Talks, and organizing the grand SIGA Fair, our association works tirelessly to represent the garment industry's voice. These moments capture our ongoing commitment to strengthening connections between industry stakeholders, policymakers, and the business community.";
    const currentTitle = effortsData?.data?.[currentEffortIndex]?.efforts_heading 
  return (
    <div className="w-full">
      <div className="mx-auto">
        <section className="relative w-full overflow-hidden bg-background">
          <div className="relative z-10 w-full px-8 pb-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-340 mx-auto">
            <div>
              <span className="block mb-4 text-xs md:text-sm text-[#F3831C] font-medium">
               AIA Empowers Organisations Through Audit & Fraud Excellence
              </span>
              <h3 className="text-xl font-semibold text-[#0F3652]">
                {currentTitle}
              </h3>
              <p className="text-base md:text-lg text-[#0F3652] my-4">
                {currentDescription}
              </p>
              
              <Button
                className=" mb-4  relative cursor-pointer overflow-hidden group  px-4 py-2  text-xs bg-[#F3831C] text-white rounded-none hover:bg-[#0F3652] transition-colors duration-300 "
                variant="ghost"
                aria-label="Explore Siga"
              >
                <Link to={'/corpo'}>
                  <span className="relative z-10 text-white">
                    <span>Read More</span>
                  </span>
           
                </Link>
              </Button>
            </div>
            
            {!isLoading && !isError && testimonials.length > 0 && (
              <CircularTestimonials
                testimonials={testimonials}
                autoplay={true}
                onIndexChange={handleTestimonialChange} // Pass callback
                colors={{
                  name: "#0F3652",
                  designation: "#0F3652",
                  testimony: "#0F3652",
                  arrowBackground: "#F3831C",
                  arrowForeground: "#ffffff",
                  arrowHoverBackground: "#0F3652",
                }}
                fontSizes={{
                  name: "28px",
                  designation: "20px",
                  quote: "20px",
                }}
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeCorporatePartner;