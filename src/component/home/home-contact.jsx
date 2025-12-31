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
    <div className="w-full  ">
      <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
       
          <div className="space-y-8">
            <div>
              <h2 className="text-gray-800 text-2xl font-medium mb-2">
              Start Your Certification Journey with AIA
              </h2>
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600  via-orange-800 to-amber-800 italic">
              Learn. Prepare. Succeed.
              </h1>
            </div>

     
            <div className="grid grid-cols-3 gap-8 pt-4">
              <div className="border-b-4 border-amber-600 pb-3">
                <div className="text-3xl font-bold text-gray-900">1000+ </div>
                <div className="text-sm text-gray-600 mt-1">Student Trained</div>
              </div>
              <div className="border-b-4 border-amber-600 pb-3">
                <div className="text-3xl font-bold text-gray-900">99% </div>
                <div className="text-sm text-gray-600 mt-1">Positive Result </div>
              </div>
              <div className="border-b-4 border-amber-600 pb-3">
                <div className="text-3xl font-bold text-gray-900">22+</div>
                <div className="text-sm text-gray-600 mt-1">Faculty Experience</div>
              </div>
            </div>
          </div>

      
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No*"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  required
                />
            
              
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                required
              />
              
              <textarea
                name="message"
                placeholder="Type Your Message*"
                value={formData.message}
                onChange={handleChange}
                rows="2"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm resize-none"
                required
              />
                </div>
              <div className="text-end gap-4">
             
              <Button
    className="rounded-xl mb-4   px-5 text-base relative cursor-pointer overflow-hidden group hover:bg-linear-to-r hover:from-yellow-400/30 hover:via-yellow-500/40 hover:to-yellow-400/30"
            type="submit"
             
            variant="ghost"
              aria-label="Explore Siga"
            >
              

<span className="relative z-10  text-white ">
 <span>            Submit </span>
</span>
              <span className="absolute inset-0 bg-linear-to-r from-blue-400 via-blue-500 to-blue-400  
               
              
              opacity-100 transition-opacity duration-300 -skew-x-12" />

            </Button>
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;