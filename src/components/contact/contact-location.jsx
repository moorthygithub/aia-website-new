/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Award, Sparkles, ArrowRight, Check } from 'lucide-react';

const ContactLocation = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userMobile: '',
    userLocation: '',
    userCourse: '',
    userMessage: ''
  });

  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    
    if (name === "userMobile" && value && !/^\d*$/.test(value)) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }, []);

  const validate = useCallback(() => {
    const newErrors = {};
    if (!formData.userName.trim()) {
      newErrors.userName = "Full name is required";
    }
    if (!formData.userEmail.trim()) {
      newErrors.userEmail = "Email is required";
    }
    if (!formData.userMobile.trim()) {
      newErrors.userMobile = "Mobile number is required";
    }
    if (!formData.userCourse) {
      newErrors.userCourse = "Service selection is required";
    }
    return newErrors;
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoader(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setLoader(false);
      alert("Demo booked successfully!");
      
      setFormData({
        userName: "",
        userEmail: "",
        userMobile: "",
        userLocation: "",
        userCourse: "",
        userMessage: ""
      });
    }, 1500);
  };




 

  return (
    <section className="relative overflow-hidden  py-10">

      
      <div className="relative z-10 max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
       

       

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-xl  p-6"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
           
            <div>
              <h2 className="text-xl   text-center text-gray-900">Find Us</h2>
              <p className="text-gray-600 text-2xl font-bold italic"> <span className='text-indigo-700'>Our Office</span> Location</p>
            </div>
          </div>

          <div className="h-100 relative rounded-lg overflow-hidden border border-gray-200">
            {!mapLoaded && (
              <div className="absolute inset-0 bg-linear-to-r from-indigo-50 to-gray-100 animate-pulse" />
            )}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d428221.04602404166!2d77.348773!3d28.388809000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd5a9988bdcf%3A0x1dd0f04210cae34e!2sAcademy%20of%20Internal%20Audit!5e1!3m2!1sen!2sus!4v1766150573238!5m2!1sen!2sus"
              referrerPolicy="no-referrer-when-downgrade"
              className={`w-full h-full transition-opacity duration-500 ${
                mapLoaded ? "opacity-100" : "opacity-0"
              }`}
              allowFullScreen
              loading="lazy"
              onLoad={() => setMapLoaded(true)}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactLocation;