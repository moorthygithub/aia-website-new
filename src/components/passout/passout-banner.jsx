import React from 'react'

const PassoutBanner = () => {
  const images = [
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop'
  ]

  return (
    <section className="bg-yellow-50 py-16 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 max-w-xl">
          {/* <div className="inline-block mb-4">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-yellow-400">
              <path d="M8 12L20 4L32 12M8 12V28L20 36M8 12L20 20M32 12V28L20 36M32 12L20 20M20 20V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div> */}
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Proud AIA Alumni
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
           Meet our certified professionals who cleared CFE, CIA 
& CAMS with confidence.
          </p>
        </div>

        {/* Right Marquee Images */}
        <div className="flex-1 relative h-96 w-full overflow-hidden">
          {/* Column 1 - Moving Up */}
          <div className="absolute left-0 w-1/2 pr-2">
            <div className="animate-marquee-up">
              {[...images, ...images].map((img, idx) => (
                <div key={idx} className="mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={img} 
                    alt={`Customer ${idx + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 - Moving Down */}
          <div className="absolute right-0 w-1/2 pl-2">
            <div className="animate-marquee-down">
              {[...images.slice().reverse(), ...images.slice().reverse()].map((img, idx) => (
                <div key={idx} className="mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={img} 
                    alt={`Customer ${idx + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-yellow-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-yellow-50 to-transparent z-10 pointer-events-none"></div>
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
  )
}

export default PassoutBanner