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





  const CardDecorator = useCallback(
    () => (
      <>
        <span className="border-indigo-600 absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
        <span className="border-indigo-600 absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
        <span className="border-indigo-600 absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
        <span className="border-indigo-600 absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
      </>
    ),
    []
  );

  const FeatureCard = useCallback(
    ({ children, className }) => (
      <div className={`group relative border border-indigo-200 rounded-lg shadow-lg bg-white hover:border-indigo-400 transition-all duration-300 ${className}`}>
        <CardDecorator />
        {children}
      </div>
    ),
    []
  );

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-gray-50 to-indigo-50/30 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(221_83%_53%/.08),transparent_50%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-3 h-3" />
            Contact Us
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AIA <span className="text-indigo-700">Contact Us</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or career goal? Let's talk. We're here to guide you - just one message away!
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* AIA Info */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                AIA is India's Leading Institute for 
                <span className="text-amber-600"> {" "} CFE, CIA & CAMS</span> Prep Courses
              </h2>

              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                Discover How AIA Can <br />
                Transform Your Career Growth
              </h3>

              <p className="text-gray-600 text-lg">
                Have a question or career goal? <span className="text-amber-600 font-semibold">Let's talk</span><br />
                We're here to guide you - just one message away!
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {['Expert-led Training', 'Proven Results', 'Global Certifications', 'Career Support'].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Accredited Section */}
            <div className="bg-linear-to-r from-indigo-50 to-amber-50 rounded-xl p-6 border border-indigo-100 shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="text-center md:text-left">
                  <div className="text-indigo-900 font-bold text-2xl flex items-center gap-2">
                    <Award className="w-6 h-6" />
                    Accredited
                  </div>
                  <div className="text-gray-600 text-sm">by Leading Bodies</div>
                </div>
                
                <div className="hidden md:block h-12 w-px bg-linear-to-b from-transparent via-indigo-300 to-transparent"></div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  {['https://aia.in.net/crm/public/assets/images/brand/IAO.jpeg', 'https://aia.in.net/crm/public/assets/images/brand/IIA.png', 'https://aia.in.net/crm/public/assets/images/brand/ISO.jpeg', 'https://aia.in.net/crm/public/assets/images/brand/Gleim.jpeg'].map((logo,index ) => (
                    <div
                      key={index}
                      className="w-14 h-14   flex flex-row items-center justify-center  transition-all duration-300"
                    >
                      <img src={logo} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Grid with Form and Contact Cards */}
          <FeatureCard>
       

            {/* Form Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative bg-white   p-6"
            >
              <div className="absolute -top-3 -right-3 bg-linear-to-r from-indigo-600 to-indigo-700 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                Free Demo
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Book Your Free Demo
                </h3>
                <p className="text-gray-600 italic font-medium text-sm">
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
                          : 'border-gray-300 focus:ring-indigo-500/20 focus:border-indigo-500'
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
                          : 'border-gray-300 focus:ring-indigo-500/20 focus:border-indigo-500'
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
                          : 'border-gray-300 focus:ring-indigo-500/20 focus:border-indigo-500'
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
                      className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:outline-none transition-all duration-200"
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
                        : 'border-gray-300 focus:ring-indigo-500/20 focus:border-indigo-500'
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
                    className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:outline-none transition-all duration-200 resize-none"
                    placeholder="Tell us about your career goals."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-linear-to-r from-indigo-700 to-indigo-800 hover:from-indigo-600 hover:to-indigo-700 text-white py-3.5 rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
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
                
                <p className="text-xs text-gray-500 text-center">
                  By submitting the form you agree to our Terms of Service & Privacy Policy.
                </p>
              </form>
            </motion.div>
          </FeatureCard>
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-xl border border-indigo-100 shadow-lg p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Our Location</h2>
              <p className="text-gray-600 text-sm">Visit our headquarters in Mumbai</p>
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

export default ContactHero;