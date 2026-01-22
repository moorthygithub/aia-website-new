import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

const HomeContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className='space-y-2'>
      {/* 2nd */}
      <div className="w-full bg-[#0F3652]/10">
        <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-4 ">
              <div>
                <span className="text-xs md:text-sm font-medium text-[#F3831C] uppercase tracking-wider block">
                Add Global Certifications for a brighter Career Path
                </span>
                <h2 className="text-[#0F3652] text-xl md:text-3xl mt-2 font-medium">
            <span className='text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#0F3652] via-[#F3831C] to-[#F3831C] italic block mt-2'>
                  Prepare. Certify. Succeed
                  </span>
                </h2>
                <p className="mt-2 text-[#0F3652] text-sm md:text-base">
                  Connect with experienced professionals and get clear, honest guidance on choosing
                  the right international certification for your career goals.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 col-span-1 lg:col-span-2">
              <div className="border-b-4 border-[#F3831C] pb-3 text-center">
                <div className="text-lg font-bold text-[#0F3652]">50,000+ Hours</div>
                <div className="text-xs md:text-sm text-[#0F3652] mt-1">Expert-Led Training Delivered</div>
              </div>
              <div className="border-b-4 border-[#F3831C] pb-3 text-center">
                <div className="text-lg font-bold text-[#0F3652]">2,000+ Students</div>
                <div className="text-xs md:text-sm text-[#0F3652] mt-1">Trained Every Year</div>
              </div>
              <div className="border-b-4 border-[#F3831C] pb-3 text-center">
                <div className="text-lg font-bold text-[#0F3652]">22+ Years</div>
                <div className="text-xs md:text-sm text-[#0F3652] mt-1">Industry Experience</div>
              </div>
            </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#0F3652] rounded focus:outline-none focus:ring-2 focus:ring-[#F3831C] text-sm"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone No*"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#0F3652] rounded focus:outline-none focus:ring-2 focus:ring-[#F3831C] text-sm"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    className="col-span-1 sm:col-span-2 w-full px-4 py-3 border border-[#0F3652] rounded focus:outline-none focus:ring-2 focus:ring-[#F3831C] text-sm"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Type Your Message*"
                    value={formData.message}
                    onChange={handleChange}
                    rows="2"
                    className="col-span-1 sm:col-span-2 w-full px-4 py-3 border border-[#0F3652] rounded focus:outline-none focus:ring-2 focus:ring-[#F3831C] text-sm resize-none"
                    required
                  />
                </div>
                <div className="text-center sm:text-end gap-4">
                  <Button
                    className=" mb-4 relative  px-4 py-2  text-xs bg-[#F3831C] text-white rounded-none hover:bg-[#0F3652] transition-colors duration-300 cursor-pointer overflow-hidden  w-full sm:w-auto"
                    type="submit"
                    variant="ghost"
                    aria-label="Explore Siga"
                  >
                    <span className="relative z-10 text-white">
                      <span>Submit</span>
                    </span>
              
                  </Button>
                </div>
              </form>
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 col-span-1 lg:col-span-2">
              <div className="border-b-4 border-[#F3831C] pb-3">
                <div className="text-2xl md:text-3xl font-bold text-[#0F3652]">50,000+ Hours</div>
                <div className="text-xs md:text-sm text-[#0F3652] mt-1">Expert-Led Training Delivered</div>
              </div>
              <div className="border-b-4 border-[#F3831C] pb-3">
                <div className="text-2xl md:text-3xl font-bold text-[#0F3652]">2,000+ Students</div>
                <div className="text-xs md:text-sm text-[#0F3652] mt-1">Trained Every Year</div>
              </div>
              <div className="border-b-4 border-[#F3831C] pb-3">
                <div className="text-2xl md:text-3xl font-bold text-[#0F3652]">22+ Years</div>
                <div className="text-xs md:text-sm text-[#0F3652] mt-1">Industry Experience</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;