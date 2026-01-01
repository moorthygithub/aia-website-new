import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  {
    title: "Key Revision Points For CIA Exam Day",
    course: "Knowledge",
    imageUrl: "https://aia.in.net/crm/public/assets/images/channel/3.webp",
    link: "https://youtu.be/H9cLdl6wY7s"
  },
  {
    title: "Important Updates from ACFE",
    course: "Knowledge",
    imageUrl: "https://aia.in.net/crm/public/assets/images/channel/2.webp",
    link: "https://youtu.be/Gfg0vRJcNPE"
  },
  {
    title: "CIA Exam Syllabus 2025 Update",
    course: "Knowledge",
    imageUrl: "https://aia.in.net/crm/public/assets/images/channel/1.webp",
    link: "https://youtu.be/aYQzi9iP1bg"
  },
  {
    title: "Podcast Episode 6",
    course: "Knowledge",
    imageUrl: "https://aia.in.net/crm/public/assets/images/channel/podcast-thumbnail (6).webp",
    link: "https://youtu.be/mywuEbJ3Ng4"
  },
  {
    title: "Podcast Episode 5",
    course: "Knowledge",
    imageUrl: "https://aia.in.net/crm/public/assets/images/channel/podcast-thumbnail (5).webp",
    link: "https://youtu.be/3jNuMOjeiC0"
  },
  {
    title: "Podcast Episode 4",
    course: "Knowledge",
    imageUrl: "https://aia.in.net/crm/public/assets/images/channel/podcast-thumbnail (4).webp",
    link: "https://youtu.be/0y1Sq82BXyw"
  },
  {
    title: "Reasonable Assurance",
    course: "CIA",
    imageUrl: "https://aia.in.net/crm/public/assets/images/channel/ReasonableAssurance.webp",
    link: "https://youtu.be/uR6dJ7rViC8"
  },
  {
    title: "CAMS V7 Overview",
    course: "CAMS",
    imageUrl: "https://aia.in.net/crm/public/assets/images/channel/CAMSV7.webp",
    link: "https://youtu.be/YG-5hh6ajaA"
  },
  {
    title: "AIA Alumni - Voice of Success",
    course: "Knowledge",
    imageUrl: "https://aia.in.net/crm/public/assets/images/channel/9.webp",
    link: "https://youtu.be/tBVkDgocnuI"
  },
  {
    title: "CFE Success Mantra",
    course: "CFE",
    imageUrl: "https://aia.in.net/crm/public/assets/images/channel/8.webp",
    link: "https://youtu.be/qs09netxU84"
  },
  {
    title: "CAMS Success Mantra",
    course: "CAMS",
    imageUrl: "https://aia.in.net/crm/public/assets/images/channel/7.webp",
    link: "https://youtu.be/o9doS_dgQ8Y"
  },
  {
    title: "Free CFE Lectures",
    course: "CFE",
    imageUrl: "https://aia.in.net/crm/public/assets/images/channel/6.webp",
    link: "https://youtu.be/Npx-SOVJRew"
  },
  {
    title: "Become Certified Internal Auditor",
    course: "CIA",
    imageUrl: "https://aia.in.net/crm/public/assets/images/channel/4.webp",
    link: "https://youtu.be/UDGKHviTq-A"
  }
];

const tabs = ['Knowledge', 'CIA', 'CAMS', 'CFE'];

const HomeYoutube = () => {
  const [activeTab, setActiveTab] = useState('Knowledge');
  const scrollContainerRef = useRef(null);

  const filteredVideos = videos.filter(video => video.course === activeTab);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-340 mx-auto">
     
        <div className="mb-8 border-b border-gray-200">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium text-sm whitespace-nowrap cursor-pointer transition-all duration-200 border-b-2 ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

    
        <div className="relative group">
     
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-50 -ml-4"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

        
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredVideos.map((video, index) => (
              <a
                key={index}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 w-72 group/card cursor-pointer border p-2 rounded-md bg-white"
              >
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
             
                  <div className="relative overflow-hidden bg-gray-100">
                    <img
                      src={video.imageUrl}
                      alt={video.title}
                      className="w-full h-40 object-cover"
                    />
                  </div>

              
                  
                </div>
                <div className="p-1">
                    <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 leading-snug">
                      {video.title}
                    </h3>
                  </div>
              </a>
            ))}
          </div>

       
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-50 -mr-4"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default HomeYoutube;