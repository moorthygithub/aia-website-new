import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '@/api/base-url'

const CorporateQuote = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userMobile: '',
    userLocation: '',
    userCourse: '',
    userMessage: '',
    userType: 'Corporate-Quote'
  })
  const [errors, setErrors] = useState({})
  const [loader, setLoader] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    
    if (name === "userMobile" && value && !/^\d*$/.test(value)) return

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }))
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.userName.trim()) {
      newErrors.userName = "Full name is required"
    }
    if (!formData.userEmail.trim()) {
      newErrors.userEmail = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.userEmail)) {
      newErrors.userEmail = "Please enter a valid email"
    }
    if (!formData.userMobile.trim()) {
      newErrors.userMobile = "Mobile number is required"
    } else if (formData.userMobile.length < 10) {
      newErrors.userMobile = "Please enter a valid mobile number"
    }
    if (!formData.userCourse) {
      newErrors.userCourse = "Service selection is required"
    }
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoader(true)

    try {
      const { data } = await axios.post(
        `${BASE_URL}/api/create-webenquiry`,
        {
          userName: formData.userName,
          userEmail: formData.userEmail,
          userMobile: formData.userMobile,
          userCourse: formData.userCourse,
          userLocation: formData.userLocation,
          userMessage: formData.userMessage,
          userType: formData.userType
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )

      console.log("API success:", data)
      alert("Demo booked successfully!")
      
      // Reset form and close modal
      setFormData({
        userName: "",
        userEmail: "",
        userMobile: "",
        userLocation: "",
        userCourse: "",
        userMessage: "",
        userType: "Corporate-Quote"
      })
      setErrors({})
      setIsModalOpen(false)
      
    } catch (error) {
      console.error(
        "API error:",
        error.response?.data || error.message
      )
      alert(
        error.response?.data?.message ||
        "Something went wrong. Please try again."
      )
    } finally {
      setLoader(false)
    }
  }

  return (
    <>
      <div className="relative px-6 py-10 md:py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E5A7A] via-[#F3831C]/90 to-[#F3831C]"></div>
        {/* <span className="bg-gradient-to-r from-[#0F3652] via-[#1E5A7A] to-[#4FA3C7] bg-clip-text text-transparent"> */}

        
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,100 Q150,50 300,100 T600,100 T900,100 T1200,100" stroke="white" strokeWidth="1" strokeOpacity="0.3"/>
            <path d="M0,120 Q200,80 400,120 T800,120 T1200,120" stroke="white" strokeWidth="1" strokeOpacity="0.2"/>
            <circle cx="200" cy="100" r="4" fill="white" fillOpacity="0.5">
              <animate attributeName="cx" values="200;1000;200" dur="20s" repeatCount="indefinite"/>
            </circle>
            <circle cx="800" cy="120" r="3" fill="white" fillOpacity="0.4">
              <animate attributeName="cx" values="800;200;800" dur="15s" repeatCount="indefinite" begin="2s"/>
            </circle>
          </svg>
          0F3652
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="relative flex-1">
              <div className="absolute -top-4 -left-2 text-white/30 text-5xl font-serif">"</div>
              
              <div className="pl-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-4">
                  <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Invest in people because untrained teams can't execute great strategies.
                  </span>
                </h2>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-0.5 bg-white/50"></div>
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                  <div className="text-white/80 text-sm italic">
                    — Leadership Insight
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group ">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer relative bg-[#0F3652] hover:bg-[#0F3652]/90 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 whitespace-nowrap group-hover:scale-105 group-hover:shadow-xl border-2 border-transparent group-hover:border-white/20"
              >
                <span className="flex items-center gap-2">
                  Level Up Your Team
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </span>
              </button>
              
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-white/40 group-hover:bg-white/60 transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div 
            className="fixed inset-0 bg-black/30"
            onClick={() => setIsModalOpen(false)}
          />
          
          <div className="relative bg-white rounded-md w-full max-w-2xl">
       
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Level Up Your Team
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Fill in your details and our experts will contact you shortly
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="userName"
                      value={formData.userName}
                      onChange={handleChange}
                      placeholder="Full Name *"
                      className={`w-full px-3 py-2 border rounded-md ${errors.userName ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.userName && (
                      <p className="text-red-500 text-xs mt-1">{errors.userName}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="userEmail"
                      value={formData.userEmail}
                      onChange={handleChange}
                      placeholder="Email *"
                      className={`w-full px-3 py-2 border rounded-md ${errors.userEmail ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.userEmail && (
                      <p className="text-red-500 text-xs mt-1">{errors.userEmail}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="userMobile"
                      value={formData.userMobile}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      className={`w-full px-3 py-2 border rounded-md ${errors.userMobile ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.userMobile && (
                      <p className="text-red-500 text-xs mt-1">{errors.userMobile}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="userLocation"
                      value={formData.userLocation}
                      onChange={handleChange}
                      placeholder="Location"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <select
                    name="userCourse"
                    value={formData.userCourse}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md ${errors.userCourse ? 'border-red-500' : 'border-gray-300'}`}
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

                <div>
                  <textarea
                    name="userMessage"
                    value={formData.userMessage}
                    onChange={handleChange}
                    placeholder="Tell us about your team's training needs..."
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loader}
                  className="w-full bg-[#F3831C] hover:bg-[#E07410] text-white font-medium py-2.5 px-4 rounded-md transition-colors disabled:opacity-50"
                >
                  {loader ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    'Schedule Free Consultation'
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our Terms of Service & Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CorporateQuote