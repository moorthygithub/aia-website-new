/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Award, Sparkles, ArrowRight, Check } from 'lucide-react';

const ContactHero = () => {
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

  const CardDecorator = useCallback(
    () => (
      <>
        <span className="border-[#0F3652] absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
        <span className="border-[#0F3652] absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
        <span className="border-[#0F3652] absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
        <span className="border-[#0F3652] absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
      </>
    ),
    []
  );

  const FeatureCard = useCallback(
    ({ children, className }) => (
      <div className={`group relative border border-[#0F3652]/20 rounded-lg shadow-lg bg-white hover:border-[#0F3652]/40 transition-all duration-300 ${className}`}>
        <CardDecorator />
        {children}
      </div>
    ),
    []
  );

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-gray-50 to-[#0F3652]/10 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(211_70%_20%/.08),transparent_50%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F3831C]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0F3652]/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F3652]">
              Discover How AIA Can
                <span className="text-[#F3831C]"> {" "}               Transform Your Career Growth</span> 
              </h2>

              <p className="text-[#0F3652] text-lg">
                Have a question or career goal? <span className="text-[#F3831C] font-semibold">Let's talk</span><br />
                We're here to guide you - just one message away!
              </p>
            </div>

            <div className="space-y-4">
              {['Expert-led Training', 'Proven Results', 'Global Certifications', 'Career Support'].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F3831C]/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#F3831C]" />
                  </div>
                  <span className="text-[#0F3652]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <FeatureCard>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative bg-white p-6"
            >
              <div className="absolute -top-3 -right-3 bg-linear-to-r from-[#0F3652] to-[#1A4A6E] text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                Free Demo
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#0F3652] mb-2">
                  Book Your Free Demo
                </h3>
                <p className="text-[#0F3652] italic font-medium text-sm">
                  Start your journey to professional excellence today
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <input
                      type="text"
                      name="userName"
                      value={formData.userName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border bg-white ${
                        errors.userName
                          ? 'border-red-500 focus:ring-red-500/20'
                          : 'border-gray-300 focus:ring-[#0F3652]/20 focus:border-[#0F3652]'
                      } focus:outline-none focus:ring-2 transition-all duration-200`}
                      placeholder="Full Name *"
                    />
                    {errors.userName && (
                      <p className="text-red-500 text-xs mt-1">{errors.userName}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <input
                      type="email"
                      name="userEmail"
                      value={formData.userEmail}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border bg-white ${
                        errors.userEmail
                          ? 'border-red-500 focus:ring-red-500/20'
                          : 'border-gray-300 focus:ring-[#0F3652]/20 focus:border-[#0F3652]'
                      } focus:outline-none focus:ring-2 transition-all duration-200`}
                      placeholder="Email *"
                    />
                    {errors.userEmail && (
                      <p className="text-red-500 text-xs mt-1">{errors.userEmail}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <input
                      type="text"
                      name="userMobile"
                      value={formData.userMobile}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border bg-white ${
                        errors.userMobile
                          ? 'border-red-500 focus:ring-red-500/20'
                          : 'border-gray-300 focus:ring-[#0F3652]/20 focus:border-[#0F3652]'
                      } focus:outline-none focus:ring-2 transition-all duration-200`}
                      placeholder="Phone Number *"
                    />
                    {errors.userMobile && (
                      <p className="text-red-500 text-xs mt-1">{errors.userMobile}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <input
                      type="text"
                      name="userLocation"
                      value={formData.userLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-[#0F3652]/20 focus:border-[#0F3652] focus:outline-none transition-all duration-200"
                      placeholder="Location"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <select
                    name="userCourse"
                    value={formData.userCourse}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border bg-white ${
                      errors.userCourse
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-gray-300 focus:ring-[#0F3652]/20 focus:border-[#0F3652]'
                    } focus:outline-none focus:ring-2 transition-all duration-200 appearance-none`}
                  >
                    <option value="">Service Interested In *</option>
                    <option value="Certified Fraud Examiner">Certified Fraud Examiner</option>
                    <option value="Certified Internal Auditor">Certified Internal Auditor</option>
                    <option value="Certified Anti Money Laundering Specialist">Certified Anti Money Laundering Specialist</option>
                    <option value="CIA Challenge Exam">CIA Challenge Exam</option>
                  </select>
                  {errors.userCourse && (
                    <p className="text-red-500 text-xs mt-1">{errors.userCourse}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <textarea
                    name="userMessage"
                    value={formData.userMessage}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-[#0F3652]/20 focus:border-[#0F3652] focus:outline-none transition-all duration-200 resize-none"
                    placeholder="Tell us about your career goals."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-linear-to-r from-[#0F3652] to-[#1A4A6E] hover:from-[#0F3652]/90 hover:to-[#1A4A6E]/90 text-white py-3.5 rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  disabled={loader}
                >
                  {loader ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Book Free Demo Call
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
                
                <p className="text-xs text-[#0F3652]/60 text-center">
                  By submitting the form you agree to our Terms of Service & Privacy Policy.
                </p>
              </form>
            </motion.div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;