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
      
   
      <div className="hidden md:flex justify-center gap-20 px-6">
        {items.map((item, i) => (
     
         <div
  key={i}
  className="w-36 h-36 grayscale hover:grayscale-0 flex items-center justify-center transition-transform duration-300 hover:scale-110"
>

      <img
        src={item.img}
        alt="logo"
        className="w-auto h-auto object-contain "
      />
    </div>
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




const items = [
  { img: "https://aia.in.net/crm/public/assets/images/brand/IAO.jpeg" },
  { img: "https://aia.in.net/crm/public/assets/images/brand/IIA.png" },
  { img: "https://aia.in.net/crm/public/assets/images/brand/ISO.jpeg" },
  { img: "https://aia.in.net/crm/public/assets/images/brand/Gleim.jpeg" },
];
