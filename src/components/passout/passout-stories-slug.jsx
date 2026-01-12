import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "@/api/base-url";

const PassoutStoriesSlug = () => {
  const { slug } = useParams();


  const { data: storyData, isLoading, isError } = useQuery({
    queryKey: ["passout-stories-slug", slug],
    queryFn: async () => {
      const res = await axios.get(
        `${BASE_URL}/api/getStudentsStorybySlug/${slug}`
      );
      return res.data;
    },
    enabled: !!slug,
  });

const [email, setEmail] = useState('');
const [subscriptionStatus, setSubscriptionStatus] = useState('');
const [isSubscribing, setIsSubscribing] = useState(false);

const handleSubscribe = async (e) => {
  e.preventDefault();
  
 
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    setSubscriptionStatus('Please enter a valid email address');
    setTimeout(() => setSubscriptionStatus(''), 3000);
    return;
  }
  
  setIsSubscribing(true);
  setSubscriptionStatus('');
  
  try {
    const response = await axios.post(
      `${BASE_URL}/api/create-newslettersubscription`,
      {
        newsletter_email: email
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );
    
    if (response.data.code === '201') {
      setSubscriptionStatus('Successfully subscribed! Thank you.');
      setEmail('');
    } else {
      setSubscriptionStatus(response.data.message || 'Subscription failed. Please try again.');
    }
  } catch (error) {
    console.error('Subscription error:', error);
    if (error.response) {
    
      setSubscriptionStatus(
        error.response.data.message || 
        error.response.data.error || 
        'Subscription failed. Please try again.'
      );
    } else if (error.request) {
     
      setSubscriptionStatus('Network error. Please check your connection.');
    } else {
   
      setSubscriptionStatus('An error occurred. Please try again.');
    }
  } finally {
    setIsSubscribing(false);
   
    setTimeout(() => setSubscriptionStatus(''), 5000);
  }
};



  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (isError || !storyData?.data) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-red-600">Error loading story</div>
      </div>
    );
  }

  const {
    student_name,
    student_course,
    student_designation,
    student_linkedin_link,
    student_story_details,
 
    company,
    country
  } = storyData.data;

 
  const companyImageUrl = storyData.image_url.find(img => img.image_for === "Student Company")?.image_url + company?.student_company_image;

  return (
    <div className="min-h-screen bg-white">
       <header className="relative overflow-visible">
        <div className="px-4 sm:px-6 lg:px-8 max-w-340 mx-auto">
          <div className="relative">
            <div className="pt-8">
              <div className="flex items-start">
                <a
                  href="/passed-out"
                  className="inline-flex items-center gap-2 group transition-colors text-gray-700 hover:text-gray-900"
                >
                  <svg
                    className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 13L6 8L11 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span className="text-sm font-medium tracking-wide uppercase">
                    All stories
                  </span>
                </a>
              </div>

              <div className="mt-6"></div>

              <h1 className="text-3xl md:text-4xl  lg:text-5xl font-semibold text-center text-gray-900  leading-tight">
                How StayVista 3.5X'd Qualified Leads with an AI Agent
              </h1>
            </div>

            <div className="mt-8 relative rounded-2xl overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/65cd70909df4e526b27c7d0f/67bde29ad83aecf97314e45f_hamptons-charm-60b249.jpg"
                alt="How StayVista 3.5X'd Qualified Leads with an AI Agent"
                className="w-full h-auto object-cover"
                loading="eager"
                sizes="100vw"
                srcSet="https://cdn.prod.website-files.com/65cd70909df4e526b27c7d0f/67bde29ad83aecf97314e45f_hamptons-charm-60b249-p-500.jpg 500w,
                        https://cdn.prod.website-files.com/65cd70909df4e526b27c7d0f/67bde29ad83aecf97314e45f_hamptons-charm-60b249-p-800.jpg 800w,
                        https://cdn.prod.website-files.com/65cd70909df4e526b27c7d0f/67bde29ad83aecf97314e45f_hamptons-charm-60b249-p-1080.jpg 1080w,
                        https://cdn.prod.website-files.com/65cd70909df4e526b27c7d0f/67bde29ad83aecf97314e45f_hamptons-charm-60b249-p-1600.jpg 1600w,
                        https://cdn.prod.website-files.com/65cd70909df4e526b27c7d0f/67bde29ad83aecf97314e45f_hamptons-charm-60b249.jpg 1920w"
              />
            </div>

            <div className="absolute -z-10 top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-gray-50 to-transparent"></div>
          </div>
        </div>
      </header>

      <main className="py-16">
        <div className="px-4 sm:px-6 lg:px-8 max-w-340 mx-auto">
          <div className="pb-24">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/4 rounded-2xl bg-gray-50 p-4">
                <div className="">
                  {/* About the brand */}
                  <div>
                    <h3 className="text-base font-medium text-gray-900">
                      About the Professional
                    </h3>
                    <div className="mt-2"></div>
                    <div className="flex items-center gap-3 mb-3">
                      {companyImageUrl && (
                        <img
                          src={companyImageUrl}
                          alt={company?.student_company_image_alt || company?.student_company_name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <p className="text-sm font-medium text-gray-900">{student_name}</p>
                        <p className="text-xs text-gray-500">{student_designation}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">
                      {student_name}, a {student_course} graduate, currently serves as {student_designation} at {company?.student_company_name} in {country?.country_name}.
                    </p>
                  </div>

                  {/* About Details */}
                  <div className="space-y-2">
                    <div>
                      <h3 className="text-base font-medium text-gray-900">
                        LinkedIn
                      </h3>
                      <div className="mt-2"></div>
                      <a
                        href={student_linkedin_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-gray-700 transition-colors underline"
                      >
                        {student_linkedin_link || "Not available"}
                      </a>
                    </div>

                    <div>
                      <h3 className="text-base font-medium text-gray-900">
                        Company
                      </h3>
                      <div className="mt-2"></div>
                      <p className="text-sm text-gray-500">{company?.student_company_name || "Not specified"}</p>
                    </div>

                    <div>
                      <h3 className="text-base font-medium text-gray-900">
                        Course
                      </h3>
                      <div className="mt-2"></div>
                      <p className="text-sm text-gray-500">{student_course || "Not specified"}</p>
                    </div>

                    <div>
                      <h3 className="text-base font-medium text-gray-900">
                        Designation
                      </h3>
                      <div className="mt-2"></div>
                      <p className="text-sm text-gray-500">{student_designation || "Not specified"}</p>
                    </div>

                    <div>
                      <h3 className="text-base font-medium text-gray-900">
                        Location
                      </h3>
                      <div className="mt-2"></div>
                      <p className="text-sm text-gray-500">
                        {country?.country_name || "Not specified"}
                        {country?.country_city && country.country_city !== country.country_name ? `, ${country.country_city}` : ''}
                      </p>
                    </div>
                  </div>
   <div className="py-2">
        <h2 className="text-base font-medium text-gray-900 mb-1">
          Subscribe to newsletter
        </h2>
        
        <form  onSubmit={handleSubscribe}  className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
              value={email}
        onChange={(e) => setEmail(e.target.value)}
            className="w-full px-2 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent text-gray-900 placeholder-gray-400"
          />
          <button
        type="submit"
        disabled={isSubscribing}
        className={`w-full py-1.5 ${isSubscribing ? 'bg-lime-300' : 'bg-lime-400 hover:bg-lime-500'} text-gray-900 font-semibold rounded-lg transition-colors disabled:cursor-not-allowed`}
      >
        {isSubscribing ? 'Subscribing...' : 'Subscribe'}
      </button>
        </form>
         {subscriptionStatus && (
      <div className={`text-sm ${subscriptionStatus.includes('Success') ? 'text-green-600' : 'text-red-600'} font-medium text-center`}>
        {subscriptionStatus}
      </div>
    )}
      </div>
                  {/* Social Share */}
                  <div>
                    <h3 className="text-base font-medium text-gray-900 mb-4">
                      Share this Success Story
                    </h3>
                    <div className="flex gap-4">
                      {/* Copy Link Button */}
                      <button
                        type="button"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-300 transition-colors group"
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.href);
                          // You can add toast notification here
                        }}
                      >
                        <svg
                          className="w-5 h-5 text-gray-600 group-hover:text-gray-900"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1479_3143)">
                            <path
                              d="M4.1665 12.5001H3.33317C2.89114 12.5001 2.46722 12.3245 2.15466 12.0119C1.8421 11.6994 1.6665 11.2754 1.6665 10.8334V3.33341C1.6665 2.89139 1.8421 2.46746 2.15466 2.1549C2.46722 1.84234 2.89114 1.66675 3.33317 1.66675H10.8332C11.2752 1.66675 11.6991 1.84234 12.0117 2.1549C12.3242 2.46746 12.4998 2.89139 12.4998 3.33341V4.16675M9.1665 7.50008H16.6665C17.587 7.50008 18.3332 8.24627 18.3332 9.16675V16.6667C18.3332 17.5872 17.587 18.3334 16.6665 18.3334H9.1665C8.24603 18.3334 7.49984 17.5872 7.49984 16.6667V9.16675C7.49984 8.24627 8.24603 7.50008 9.1665 7.50008Z"
                              stroke="currentColor"
                              strokeWidth="1.67"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1479_3143">
                              <rect
                                width="20"
                                height="20"
                                fill="currentColor"
                                transform="translate(-0.000488281)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>

                      {/* Twitter */}
                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                          window.location.href
                        )}&text=Success Story: ${encodeURIComponent(student_name)} at ${encodeURIComponent(company?.student_company_name || '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 text-gray-600 hover:text-gray-900"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.9042 8.46961L19.3508 0H17.5868L11.1182 7.35254L5.95551 0H-0.000488281L7.80818 11.1194L-0.000488281 20H1.76351L8.59018 12.2338L14.0435 20H19.9995M2.40018 1.30158H5.11018L17.5855 18.7624H14.8748"
                            fill="currentColor"
                          />
                        </svg>
                      </a>

                      {/* Facebook */}
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 text-gray-600 hover:text-gray-900"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1479_3149)">
                            <path
                              d="M19.9995 10C19.9995 4.47715 15.5224 0 9.99951 0C4.47666 0 -0.000488281 4.47715 -0.000488281 10C-0.000488281 14.9912 3.65635 19.1283 8.43701 19.8785V12.8906H5.89795V10H8.43701V7.79688C8.43701 5.29063 9.92998 3.90625 12.2142 3.90625C13.3079 3.90625 14.4526 4.10156 14.4526 4.10156V6.5625H13.1917C11.9495 6.5625 11.562 7.3334 11.562 8.125V10H14.3354L13.8921 12.8906H11.562V19.8785C16.3427 19.1283 19.9995 14.9912 19.9995 10Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1479_3149">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(-0.000488281)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>

                      {/* LinkedIn */}
                      <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                          window.location.href
                        )}&title=${encodeURIComponent(`Success Story: ${student_name}`)}&summary=${encodeURIComponent(`${student_name}, a ${student_course} graduate, now ${student_designation} at ${company?.student_company_name}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 text-gray-600 hover:text-gray-900"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1479_3152)">
                            <path
                              d="M18.519 0H1.47607C0.659668 0 -0.000488281 0.644531 -0.000488281 1.44141V18.5547C-0.000488281 19.3516 0.659668 20 1.47607 20H18.519C19.3354 20 19.9995 19.3516 19.9995 18.5586V1.44141C19.9995 0.644531 19.3354 0 18.519 0ZM5.9331 17.043H2.96436V7.49609H5.9331V17.043ZM4.44873 6.19531C3.49561 6.19531 2.72607 5.42578 2.72607 4.47656C2.72607 3.52734 3.49561 2.75781 4.44873 2.75781C5.39795 2.75781 6.16748 3.52734 6.16748 4.47656C6.16748 5.42188 5.39795 6.19531 4.44873 6.19531ZM17.0425 17.043H14.0776V12.4023C14.0776 11.2969 14.0581 9.87109 12.5347 9.87109C10.9917 9.87109 10.7573 11.0781 10.7573 12.3242V17.043H7.79639V7.49609H10.6401V8.80078H10.6792C11.0737 8.05078 12.0425 7.25781 13.4839 7.25781C16.4878 7.25781 17.0425 9.23438 17.0425 11.8047V17.043Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1479_3152">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(-0.000488281)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-3/4">
                <div className="mb-12">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                    Our Impact
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="space-y-2 border bg-green-950 p-4 rounded-2xl">
                      <div className="text-4xl md:text-5xl font-bold text-green-400">
                        3.5x
                      </div>
                      <div className="text-lg font-medium text-white">
                        Increase in lead generation
                      </div>
                    </div>
                    <div className="space-y-2 border bg-green-950 p-4 rounded-2xl">
                      <div className="text-4xl md:text-5xl font-bold text-green-400">
                        3.5x
                      </div>
                      <div className="text-lg font-medium text-white">
                        Increase in lead generation
                      </div>
                    </div>
                    <div className="space-y-2 border bg-green-950 p-4 rounded-2xl">
                      <div className="text-4xl md:text-5xl font-bold text-green-400">
                        3.5x
                      </div>
                      <div className="text-lg font-medium text-white">
                        Increase in lead generation
                      </div>
                    </div>
                    <div className="space-y-2 border bg-green-950 p-4 rounded-2xl">
                      <div className="text-4xl md:text-5xl font-bold text-green-400">
                        3.5x
                      </div>
                      <div className="text-lg font-medium text-white">
                        Increase in lead generation
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <div 
                    className="ck-content"
                    dangerouslySetInnerHTML={{ __html: student_story_details }} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PassoutStoriesSlug;