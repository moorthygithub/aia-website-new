import React from 'react'

const FreeResourceBanner = () => {
  return (
    <div className="relative w-full overflow-hidden bg-linear-to-r from-slate-900 via-slate-800 to-blue-900 px-6 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">

      <div className="absolute right-0 top-0 h-full w-1/2 opacity-60">
     
        <div className="absolute right-0 top-0 h-full w-full">
          <div className="absolute right-0 top-0 border-r-300 border-t-400 border-r-transparent border-t-blue-800 sm:border-r-400 sm:border-t-500 md:border-r-500 md:border-t-600"></div>
        </div>
     
        <div className="absolute right-0 top-0 h-full w-full">
          <div className="absolute right-0 top-0 border-r-250 border-t-350 border-r-transparent border-t-blue-600 sm:border-r-350 sm:border-t-450 md:border-r-450 md:border-t-550"></div>
        </div>
      
        <div className="absolute right-0 top-0 h-full w-full">
          <div className="absolute right-0 top-0 border-r-200 border-t-300 border-r-transparent border-t-blue-400 sm:border-r-300 sm:border-t-400 md:border-r-400 md:border-t-500"></div>
        </div>
      </div>

    
      <div className="relative z-10 max-w-4xl">
        <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          CFE Free Resources
        </h2>
        <p className="text-sm leading-relaxed text-gray-200 sm:text-base md:text-lg">
          Whether you're aiming for Certified Fraud Examiner (CFE), Certified Internal Auditor (CIA), or Certified Anti-Money Laundering Specialist (CAMS) certification, our offerings ensure that you have the tools needed to succeed. Take advantage of this opportunity to strengthen your knowledge and skills in forensic accounting, internal audit practices, and anti-money laundering strategies. Looking for more ways to boost your preparation? Explore AIA's Prep Programs, guidance, and expert-led resources.
        </p>
        <p className="mt-4 text-sm font-medium text-blue-300 sm:text-base md:text-lg">
          Start your journey to certification confidently with our valuable study aids.
        </p>
      </div>
    </div>
  )
}

export default FreeResourceBanner