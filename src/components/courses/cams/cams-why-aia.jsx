import React from "react";

const CamsWhyAia = () => {
  return (
    <div className="max-w-340  mx-auto">
      <div className="w-full py-10 bg-[url('https://christuniversity.in/images/bg_2.jpg')] bg-cover bg-center">
        <div className="text-center mb-1 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">
            Why Academy of Internal Audit
          </h2>
          
        </div>

        {/* Desktop View */}
        <div className="  md:flex justify-center ">
          {items.map((item, i) => (
            <DiamondCard 
              key={i} 
              img={item.img} 
              title={item.title}
             
            />
          ))}
        </div>

      
        
      </div>
    </div>
  );
};

export default CamsWhyAia;

const DiamondCard = ({ img, title }) => (
  <div className="group w-60 h-80 flex flex-col items-center justify-center">
    {/* Diamond Container */}
    <div className="relative w-40 h-40">
      <div
        className="
          absolute inset-0 rotate-45 rounded-xl
          border-2 border-gray-300
          transition-all duration-500
          group-hover:-translate-y-3 group-hover:border-blue-600 group-hover:shadow-lg
          group-hover:bg-linear-to-br group-hover:from-blue-50 group-hover:via-white group-hover:to-blue-50 
        "
      >
        {/* Content inside diamond */}
        <div className="absolute inset-0 -rotate-45 flex flex-col items-center justify-center p-4">
          <div className="w-20 h-20 bg-linear-to-br from-blue-50 to-indigo-100 rounded-full shadow flex items-center justify-center mb-3">
            <img
              src={img}
              alt={title}
              className="max-w-14 max-h-14 object-contain"
            />
          </div>
          <h3 className="text-sm font-semibold text-gray-900 text-center mb-1">{title}</h3>
      
        </div>
      </div>
    </div>
    
  
  </div>
);

const items = [
  { 
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Teacher Icon
    title: "CAMS Qualified Instructor",
    description: "Learn from certified industry experts"
  },
  { 
    img: "https://cdn-icons-png.flaticon.com/512/3143/3143477.png", // Support Icon
    title: "Training Support",
    description: "Dedicated support throughout your learning journey"
  },
  { 
    img: "https://cdn-icons-png.flaticon.com/512/2991/2991232.png", // Video Icon
    title: "Access to Recorded Sessions",
    description: "Review classes anytime with recorded video access"
  },
  { 
    img: "https://cdn-icons-png.flaticon.com/512/3063/3063812.png", // Flexible Schedule
    title: "Flexible Schedule",
    description: "Learn at your own pace with flexible timing"
  },
  { 
    img: "https://cdn-icons-png.flaticon.com/512/2702/2702134.png", // Books Icon
    title: "CAMS Version 7 Study Material",
    description: "Latest updated study materials and resources"
  },
];