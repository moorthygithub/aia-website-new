import React from "react";

const HomeAccredited = () => {
  return (
<div className="py-8 max-w-340 mx-auto">
    <div className="px-4 sm:px-6 lg:px-8  mx-auto py-2   ">
              {/* <div className="flex items-center gap-3 mb-2 ">
                <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                Smart Digital Service For Modern Businesses
                </span>
              </div> */}

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Recognized & Accredited by Leading Global Bodies
              </h2>

              <div className="text-gray-600 leading-relaxed space-y-4 mb-4">
                <p>
                Our programs are recognized by international accreditation and professional bodies,
reinforcing our commitment to quality education and global relevance
                </p>
             
              </div>
              </div>
    <div className="w-full py-10  bg-cover bg-center">
      
   
      <div className="hidden md:flex justify-center gap-10 px-6">
        {items.map((item, i) => (
          <DiamondCard key={i} img={item.img} />
        ))}
      </div>

   
      <div className="md:hidden grid grid-cols-2 gap-8 px-6 place-items-center">
        {items.map((item, i) => (
          <div
            key={i}
            className=" bg-white rounded-full shadow-md flex items-center justify-center"
          >
            <img
              src={item.img}
              alt="logo"
              className="w-auto h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default HomeAccredited;

const DiamondCard = ({ img }) => (
  <div
    className="
      group w-40 h-40 rotate-45 rounded-xl
      flex items-center justify-center
      border-2 border-gray-300
      transition-all duration-500
      grayscale hover:grayscale-0 
      hover:-translate-y-3 hover:border-yellow-500
      hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.55)_40%,rgba(255,255,255,0.18)_70%,rgba(255,255,255,0)_100%)]
    "
  >

    <div className="-rotate-45 w-28 h-28 bg-white rounded-full shadow flex items-center justify-center">
      <img
        src={img}
        alt="logo"
        className="w-auto h-auto object-contain "
      />
    </div>
  </div>
);



const items = [
  { img: "https://aia.in.net/crm/public/assets/images/brand/IAO.jpeg" },
  { img: "https://aia.in.net/crm/public/assets/images/brand/IIA.png" },
  { img: "https://aia.in.net/crm/public/assets/images/brand/ISO.jpeg" },
  { img: "https://aia.in.net/crm/public/assets/images/brand/Gleim.jpeg" },
];
