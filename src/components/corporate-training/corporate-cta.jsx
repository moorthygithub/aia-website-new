import React from 'react'

const CorporateCta = () => {
  return (
    <div className="bg-[#F3831C] px-6 py-8 md:px-12 md:py-10">
      <div className="max-w-340 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white text-left">
          <h2 className="text-xl md:text-2xl font-bold leading-relaxed">
            Let's Design Your Custom Training Plan Today!
          </h2>
        </div>
        <div className="shrink-0">
          <button className="bg-[#0F3652] hover:bg-[#0F3652]/90 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 whitespace-nowrap">
            Talk to our Training Expert  -- form dialog
          </button>
        </div>
      </div>
    </div>
  )
}

export default CorporateCta