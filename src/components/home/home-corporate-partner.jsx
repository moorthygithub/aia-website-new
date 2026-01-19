import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Waves from "@/components/ui/waves-background";
import CircularTestimonials from "@/components/ui/circular-testimonial";
import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/api/base-url";

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

  return (
    <div className="w-full">
      <div className="mx-auto">
    <section className="relative w-full overflow-hidden bg-background">
      <div className="relative z-10 w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-340 mx-auto">
        <div>
          <span className="block mb-4 text-xs md:text-sm text-[#F3831C] font-medium">
          Academy of Internal Audit
          </span>
          <h3 className="text-4xl font-semibold text-[#0F3652]">
   Corporate Training Delivered to Leading Organisations Trusted by Corporations for Fraud & Risk Capability Building
</h3>
          <p className="text-base md:text-lg text-[#0F3652] my-4 md:my-6">
          From engaging with national leaders to presenting the SIGA Pre-Budget Memo, 
  hosting insightful Apparel Talks, and organizing the grand SIGA Fair, 
  our association works tirelessly to represent the garment industry's voice. 
  These moments capture our ongoing commitment to strengthening connections 
  between industry stakeholders, policymakers, and the business community.
          </p>
          
          <Button
    className="rounded-xl mb-4 px-5 text-base relative cursor-pointer overflow-hidden group"
            variant="ghost"
              aria-label="Explore Siga"
            >
                <Link to={'/efforts'}>

<span className="relative z-10 text-white">
 <span>Explore AIA</span>
</span>
              <span className="absolute inset-0 bg-[#0F3652] opacity-100 transition-opacity duration-300 -skew-x-12" />
</Link>
            </Button>
        </div>
        {!isLoading && !isError && testimonials.length > 0 && (
  <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
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