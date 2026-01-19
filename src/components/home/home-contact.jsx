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


    {/* 2nd  */}

    <div className="w-full bg-[#0F3652]/10">
         <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 py-12">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
             <div className="space-y-8">
               <div>
                 <span className="text-sm font-medium text-[#F3831C] uppercase tracking-wider">
                 Your Certification Journey Deserves the Right Guidance
                 </span>
                 <h2 className="text-[#0F3652] text-3xl mt-2 font-medium">
                 Add Global Certifications for a brighter <span className='text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#0F3652] via-[#F3831C] to-[#F3831C] italic'>
                 Career Path / Prepare. Certify. Succeed
                 </span>
                 </h2>
                 <p className="mt-2 text-[#0F3652]">
                 Connect with experienced professionals and get clear, honest guidance on choosing
                 the right international certification for your career goals.
                 </p>
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
                   className="w-full px-4 py-3 border border-[#0F3652] rounded focus:outline-none focus:ring-2 focus:ring-[#F3831C] text-sm"
                   required
                 />
                 
                 <textarea
                   name="message"
                   placeholder="Type Your Message*"
                   value={formData.message}
                   onChange={handleChange}
                   rows="2"
                   className="w-full px-4 py-3 border border-[#0F3652] rounded focus:outline-none focus:ring-2 focus:ring-[#F3831C] text-sm resize-none"
                   required
                 />
                   </div>
                 <div className="text-end gap-4">
                 <Button
       className="rounded-xl mb-4 px-5 text-base relative cursor-pointer overflow-hidden group hover:bg-linear-to-r hover:from-[#F3831C]/30 hover:via-[#F3831C]/40 hover:to-[#F3831C]/30"
               type="submit"
               variant="ghost"
                 aria-label="Explore Siga"
               >
<span className="relative z-10 text-white">
 <span>Submit</span>
</span>
                 <span className="absolute inset-0 bg-linear-to-r from-[#0F3652] via-[#0F3652] to-[#0F3652] opacity-100 transition-opacity duration-300 -skew-x-12" />
               </Button>
                 </div>
               </form>
             </div>

             <div className="grid grid-cols-3 gap-8 col-span-2">
                 <div className="border-b-4 border-[#F3831C] pb-3">
                   <div className="text-3xl font-bold text-[#0F3652]">50,000+ Hours</div>
                   <div className="text-sm text-[#0F3652] mt-1">Expert-Led Training Delivered</div>
                 </div>
                 <div className="border-b-4 border-[#F3831C] pb-3">
                   <div className="text-3xl font-bold text-[#0F3652]">2,000+ Students</div>
                   <div className="text-sm text-[#0F3652] mt-1">Trained Every Year</div>
                 </div>
                 <div className="border-b-4 border-[#F3831C] pb-3">
                   <div className="text-3xl font-bold text-[#0F3652]">22+ Years</div>
                   <div className="text-sm text-[#0F3652] mt-1">Industry Experience</div>
                 </div>
               </div>
           </div>
         </div>
       </div>

    
        </div>
  );
};

export default HomeContact;