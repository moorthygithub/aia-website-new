import React, { useState, useEffect } from 'react'

const CorporateReview = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  
  const reviews = [
    {
      text: "Thank you, AIA It wouldn't be possible without your support & guidance.",
      author: "HRT BARRINGAYA, CFE, KPMG"
    },
    {
      text: "Purest 5in 5 CFE classes are outstanding-clear, focused, and incredibly helpful for exam prep. Highly recommended! Thank you Sir...",
      author: "Nathania D, CFE, Bahrain"
    },
    {
      text: "Best Institute for CAMS Prep.",
      author: "Karan Warit, CAMS, Investcorp"
    },
    {
      text: "Thank you, AIA It wouldn't be possible without your support & guidance.",
      author: "HRT BARRINGAYA, CFE, KPMG"
    },
    {
      text: "Purest 5in 5 CFE classes are outstanding-clear, focused, and incredibly helpful for exam prep. Highly recommended! Thank you Sir...",
      author: "Nathania D, CFE, Bahrain"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prev => {
        const newPosition = prev + 1
        
        if (newPosition >= reviews.length * 100) {
          return 0
        }
        return newPosition
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="py-1">
      <div className="max-w-340 mx-auto">
        <div className="grid md:grid-cols-2">
          <div className="p-2 rounded-lg">
            <h2 className="text-3xl font-bold text-[#0F3652] mb-6">
              Straight From the Learners & Organizations Who Experience Us
            </h2>
            
            <div className="space-y-4 text-[#0F3652]">
              <p className="font-semibold">
                AIA is a trusted partner for companies seeking measurable growth and long-term talent development.
              </p>
              
              <p>
                Our tailored programs are designed to align with your business objectives - helping teams strengthen core competencies, improve productivity, and foster leadership that's ready for the future.
              </p>
            </div>
            
            <button className="mt-8 bg-[#F3831C] hover:bg-[#F3831C]/90 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md">
              Know More
            </button>
          </div>

         <div className="relative h-96 bg-[#0F3652] overflow-hidden rounded-md w-full">
            <div 
              className="flex flex-col gap-4 p-4 transition-transform duration-100 ease-linear"
              style={{ transform: `translateY(-${scrollPosition}px)` }}
            >
              {reviews.map((review, index) => (
                <div 
                  key={index}
                  className="bg-[#F3831C] rounded-md py-2 px-4 shadow-lg shrink-0 "
                >
                  <p className="text-white mb-1 leading-relaxed text-sm">
                    {review.text}
                  </p>
                  <p className="text-white font-semibold text-md">
                    - {review.author}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="absolute top-0 left-0 right-0 h-8 bg-linear-to-b from-[#F3831C]/70 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-[#F3831C]/70 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CorporateReview