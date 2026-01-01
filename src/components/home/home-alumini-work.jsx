import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const HomeAlumniWork = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["aia-alumini"],
    queryFn: async () => {
      const res = await axios.get(
        "https://aia.in.net/webapi/public/api/getAlumni"
      );
      return res.data;
    },
  });

  if (isLoading) return null;
  if (isError) return null;

  const alumniList = data?.data || [];

  const companyImageBaseUrl =
    data?.image_url?.find(
      (img) => img.image_for === "Student Company"
    )?.image_url || "";

 
  const companies = alumniList.map((item) => ({
    src: `${companyImageBaseUrl}${item.student_company_image}`,
    alt: item.student_company_image_alt || item.student_company_name,
  }));

  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .marquee {
            animation: marquee 25s linear infinite;
          }
        `}
      </style>

      <div className="w-full bg-linear-to-b from-black to-blue-400/80 py-20 overflow-hidden">
        <div className="max-w-340 mx-auto px-6 mb-2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Trusted by more than <br />
            <span className="text-blue-500">300,000 organizations</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-3xl">
            Including 88 Fortune Global Top 100 companies that use JetBrains products to deliver top-quality software.
          </p>
        </div>

        <div className="relative flex overflow-hidden py-8">
        
          <div className="flex marquee whitespace-nowrap items-center">
            {companies.map((c, i) => (
              <div key={`first-${i}`} className="mx-12 flex items-center justify-center">
                <img
                  src={c.src}
                  alt={c.alt}
                  className="h-12 w-auto object-contain"
                  style={{ maxWidth: "140px" }}
                />
              </div>
            ))}
          </div>

        
          <div className="flex marquee whitespace-nowrap items-center" aria-hidden="true">
            {companies.map((c, i) => (
              <div key={`second-${i}`} className="mx-12 flex items-center justify-center">
                <img
                  src={c.src}
                  alt={c.alt}
                  className="h-12 w-auto object-contain"
                  style={{ maxWidth: "140px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAlumniWork;
