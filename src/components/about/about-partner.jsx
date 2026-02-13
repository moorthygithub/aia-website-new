import { BASE_URL } from "@/api/base-url";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const AboutPartner = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["efforts"],
    queryFn: async () => {
      const response = await axios.get(`${BASE_URL}/api/getEfforts`);
      return response.data;
    },
  });

  if (isLoading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-center py-20 text-red-500">Error loading data</div>
    );
  }

  const efforts = data?.data || [];

  const imageBaseUrl =
    data?.image_url?.find((img) => img.image_for === "Efforts")?.image_url ||
    "";
  console.log(efforts, "efforts");
  return (
    <div className="bg-white">
      <div className="max-w-full mx-auto">
        <div className="max-w-full mx-auto">
          <section className="relative space-y-10 bg-[#0F3652] p-8 overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-30">
              <div className="absolute right-0 top-0 h-full w-full">
                <div className="absolute right-0 top-0 border-r-300 border-t-400 border-r-transparent border-t-[#F3831C] sm:border-r-400 sm:border-t-500 md:border-r-500 md:border-t-600"></div>
              </div>
              <div className="absolute right-0 top-0 h-full w-full">
                <div className="absolute right-0 top-0 border-r-250 border-t-350 border-r-transparent border-t-[#F3831C] sm:border-r-350 sm:border-t-450 md:border-r-450 md:border-t-550"></div>
              </div>
              <div className="absolute right-0 top-0 h-full w-full">
                <div className="absolute right-0 top-0 border-r-200 border-t-300 border-r-transparent border-t-[#F3831C] sm:border-r-300 sm:border-t-400 md:border-r-400 md:border-t-500"></div>
              </div>
            </div>

            <div className="relative z-10 max-w-340 mx-auto">
              <h2 className="text-3xl max-w-340 mx-auto md:text-4xl font-bold text-white">
                Corporate Training Delivered to Leading Organisations
                <br />
                <span className="text-[#F3831C]">
                  Trusted by Corporations for Fraud & Risk Capability Building
                </span>
              </h2>

              <div className="grid max-w-340 mx-auto md:grid-cols-2 gap-8 items-center mt-10">
                <div className="order-2 md:order-1">
                  <div className="p-1">
                    <img
                      src={`${imageBaseUrl}${efforts[2]?.efforts_image}`}
                      alt={efforts[2]?.efforts_heading}
                      className="w-full shadow-lg object-cover"
                    />
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {efforts[2].efforts_heading}
                  </h3>
                  <p className="text-white text-lg">
                    {efforts[2].efforts_description}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="p-8 max-w-340 mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0F3652] mb-3">
                  {efforts[0].efforts_heading}
                </h3>
                <p className="text-[#0F3652] text-lg">
                  {efforts[0].efforts_description}
                </p>
              </div>

              <div>
                <div className="p-1">
                  <img
                    src={`${imageBaseUrl}${efforts[0]?.efforts_image}`}
                    alt={efforts[0]?.efforts_heading}
                    className="w-full shadow-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="relative bg-[#0F3652] p-8 overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-30">
              <div className="absolute right-0 top-0 h-full w-full">
                <div className="absolute right-0 top-0 border-r-300 border-t-400 border-r-transparent border-t-[#F3831C] sm:border-r-400 sm:border-t-500 md:border-r-500 md:border-t-600"></div>
              </div>
              <div className="absolute right-0 top-0 h-full w-full">
                <div className="absolute right-0 top-0 border-r-250 border-t-350 border-r-transparent border-t-[#F3831C] sm:border-r-350 sm:border-t-450 md:border-r-450 md:border-t-550"></div>
              </div>
              <div className="absolute right-0 top-0 h-full w-full">
                <div className="absolute right-0 top-0 border-r-200 border-t-300 border-r-transparent border-t-[#F3831C] sm:border-r-300 sm:border-t-400 md:border-r-400 md:border-t-500"></div>
              </div>
            </div>

            <div className="relative z-10 max-w-340 mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="p-1">
                    <img
                      src={`${imageBaseUrl}${efforts[1]?.efforts_image}`}
                      alt={efforts[1]?.efforts_heading}
                      className="w-full  shadow-lg object-cover"
                    />
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {efforts[1].efforts_heading}{" "}
                  </h3>
                  <p className="text-white text-lg">
                    {efforts[1].efforts_description}{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPartner;
