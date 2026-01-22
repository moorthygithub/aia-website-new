import React from "react";

const HomeAccredited = () => {
  return (
    <div className="py-8 max-w-340 mx-auto">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto py-2">
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
      
      <div className="w-full py-10 bg-cover bg-center">
        {/* Desktop view  */}
        <div className="hidden md:flex justify-center gap-20 px-6">
         
          <div className="grayscale hover:grayscale-0 flex items-center justify-center transition-transform duration-300 hover:scale-110">
            <img
              src="https://aia.in.net/crm/public/assets/images/brand/IAO.jpeg"
              alt="IAO logo"
              className="w-40 h-40 object-contain"
            />
          </div>
          
         
          <div className="grayscale hover:grayscale-0 flex items-center justify-center transition-transform duration-300  scale-150 hover:scale-175">
            <img
              src="https://aia.in.net/crm/public/assets/images/brand/IIA.png"
              alt="IIA logo"
              className="w-48 h-48 object-contain"
            />
          </div>
          
        
          <div className="grayscale hover:grayscale-0 flex items-center justify-center transition-transform duration-300 hover:scale-110">
            <img
              src="https://aia.in.net/crm/public/assets/images/brand/ISO.jpeg"
              alt="ISO logo"
              className="w-40 h-40 object-contain"
            />
          </div>
          
      
          <div className="grayscale hover:grayscale-0 flex items-center justify-center transition-transform duration-300 hover:scale-110">
            <img
              src="https://aia.in.net/crm/public/assets/images/brand/Gleim.jpeg"
              alt="Gleim logo"
              className="w-40 h-40 object-contain"
            />
          </div>
          
   
          <div className="grayscale hover:grayscale-0 flex items-center justify-center transition-transform duration-300 hover:scale-110">
            <img
              src="https://aia.in.net/crm/public/assets/images/brand/GSAAA.png"
              alt="GSAAA logo"
              className="w-40 h-40 object-contain"
            />
          </div>
        </div>

        {/* Mobile view  */}
        <div className="md:hidden grid grid-cols-2 gap-8 px-6 place-items-center">

          <div className="bg-white rounded-full shadow-md flex items-center justify-center">
            <img
              src="https://aia.in.net/crm/public/assets/images/brand/IAO.jpeg"
              alt="IAO logo"
              className="w-full h-full object-contain"
            />
          </div>
          
   
          <div className="bg-white rounded-full shadow-md flex items-center justify-center">
            <img
              src="https://aia.in.net/crm/public/assets/images/brand/IIA.png"
              alt="IIA logo"
              className="w-full h-full object-contain"
            />
          </div>
          
        
          <div className="bg-white rounded-full shadow-md flex items-center justify-center">
            <img
              src="https://aia.in.net/crm/public/assets/images/brand/ISO.jpeg"
              alt="ISO logo"
              className="w-full h-full object-contain"
            />
          </div>
          
     
          <div className="bg-white rounded-full shadow-md flex items-center justify-center">
            <img
              src="https://aia.in.net/crm/public/assets/images/brand/Gleim.jpeg"
              alt="Gleim logo"
              className="w-full h-full object-contain"
            />
          </div>
          
        
          <div className="col-span-2 bg-white rounded-full shadow-md flex items-center justify-center">
            <img
              src="https://aia.in.net/crm/public/assets/images/brand/GSAAA.png"
              alt="GSAAA logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAccredited;