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

      <div className="w-full bg-linear-to-b from-black/0 via-black/0 to-[#0F3652]/40 py-20 overflow-hidden">
        <SectionHeading
          title="Shaping Alumni Who Lead"
          description="Delivering excellence &
        empowering professionals who are creating a real-world impact"
          align="center"
        />
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
