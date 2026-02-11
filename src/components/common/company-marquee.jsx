import SectionHeading from "../SectionHeading/SectionHeading";

const CompanyMarquee = ({ companies }) => {
  if (!companies?.length) return null;

  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .marquee {
            animation: marquee 50s linear infinite;
          }
        `}
      </style>

      <div className="w-full bg-gradient-to-b from-[#0f365200]/5 via-[#0F3652]/30 to-[#0F3652]/60 py-20 overflow-hidden">
        <div className="pl-4 ml-12">
          <SectionHeading
            title="Shaping Alumni"
            highlight="Who Lead"
            description="Delivering excellence &
        empowering professionals who are creating a real-world impact"
          />

          {/* <div className="max-w-340 mx-auto px-6 mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F3652] mb-4">
              Shaping Alumni Who Lead
            </h2>
            <p className="text-[#0F3652] text-sm md:text-base max-w-3xl">
              Delivering excellence & empowering professionals who are creating
              a real-world impact
            </p>
          </div> */}
        </div>
        <div className="relative flex overflow-hidden py-8">
          {[1, 2].map((loop) => (
            <div
              key={loop}
              className="flex marquee whitespace-nowrap items-center"
              aria-hidden={loop === 2}
            >
              {companies.map((c, i) => (
                <div key={`${loop}-${i}`} className="mx-12 flex items-center">
                  <img
                    src={c.src}
                    alt={c.alt}
                    className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    style={{ maxWidth: "240px" }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CompanyMarquee;
