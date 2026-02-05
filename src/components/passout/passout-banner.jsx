import React from "react";

const PassoutBanner = () => {
  const images = [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
  ];

  return (
    <section className="bg-[#0F3652]/10  px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 max-w-xl">
          <h1 className="text-5xl font-bold text-[#0F3652] mb-4">
            Unfiltered Reflections from AIA-Trained Professionals
          </h1>
          <p className="text-[#0F3652] text-lg leading-relaxed">
            Heartfelt messages shared by professionals after completing their
            CFE preparation with AIA.
          </p>
        </div>

        <div className="flex-1 relative h-160 w-full overflow-hidden">
          <div className="absolute left-0 w-1/2 pr-2">
            <div className="animate-marquee-up">
              {[...images, ...images].map((img, idx) => (
                <div
                  key={idx}
                  className="mb-4 rounded-2xl overflow-hidden shadow-lg border border-[#F3831C]/20"
                >
                  <img
                    src={img}
                    alt={`Customer ${idx + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-0 w-1/2 pl-2">
            <div className="animate-marquee-down">
              {[...images.slice().reverse(), ...images.slice().reverse()].map(
                (img, idx) => (
                  <div
                    key={idx}
                    className="mb-4 rounded-2xl overflow-hidden shadow-lg border border-[#F3831C]/20"
                  >
                    <img
                      src={img}
                      alt={`Customer ${idx + 1}`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="absolute top-0 left-0 right-0 h-20 bg-linear-to-b from-yellow-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-yellow-50 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes marquee-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-marquee-up {
          animation: marquee-up 20s linear infinite;
        }

        .animate-marquee-down {
          animation: marquee-down 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PassoutBanner;
