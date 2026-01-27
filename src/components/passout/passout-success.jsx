import React, { useState } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { BASE_URL } from '@/api/base-url'
import { ArrowRight } from 'lucide-react' 

const PassoutSuccess = () => {
  
  const [expandedCourses, setExpandedCourses] = useState({}) 

  const { data: studentStoriesData, isLoading, isError } = useQuery({
    queryKey: ["student-stories"],
    queryFn: async () => {
      const res = await axios.get(`${BASE_URL}/api/getStudentsStory`)
      return res.data
    },
  })

  

  const getImageUrl = (type) => {
    if (!studentStoriesData?.image_url) return ''
    const imageConfig = studentStoriesData.image_url.find(item => item.image_for === type)
    return imageConfig ? imageConfig.image_url : ''
  }

  const transformStories = () => {
    if (!studentStoriesData?.data) return []
    const studentImageUrl = getImageUrl('Student')
    const companyImageUrl = getImageUrl('Student Company')
    
    return studentStoriesData.data.map(story => ({
      id: story.id,
      name: story.student_name,
      designation: story.student_course,
      role: story.student_designation,
      date: story.student_story_date,
      slug: story.student_slug,
      image: story.student_story_banner_image 
        ? `${studentImageUrl}${story.student_story_banner_image}`
        : 'https://aia.in.net/webapi/public/assets/images/no_image.jpg',
      companyImage: story.company?.student_company_image 
        ? `${companyImageUrl}${story.company.student_company_image}`
        : null,
      companyName: story.company?.student_company_name || '',
      fullStory: story.student_story_details,
      linkedIn: story.student_linkedin_link,
      imageAlt: story.student_story_banner_image_alt,
      course: story.student_course || 'Other' 
    }))
  }

  
  const groupStoriesByCourse = () => {
    const stories = transformStories()
    const grouped = stories.reduce((acc, story) => {
      const course = story.course || 'Other'
      if (!acc[course]) {
        acc[course] = []
      }
      acc[course].push(story)
      return acc
    }, {})
    
    return grouped
  }

  const toggleCourseExpansion = (course) => {
    setExpandedCourses(prev => ({
      ...prev,
      [course]: !prev[course]
    }))
  }

  const groupedStories = groupStoriesByCourse()

  if (isLoading) {
    return (
      <section className="bg-white py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-12 bg-[#0F3652]/10 rounded w-3/4 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-[#0F3652]/10 rounded-2xl h-80"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (isError) {
    return (
      <section className="bg-white py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#F3831C]">Failed to load student stories. Please try again later.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F3652] mb-4">
            Read Our Student's Journey
          </h2>
        </div>

        

       
        {Object.entries(groupedStories).map(([course, stories]) => (
          <div key={course} className="mb-12 p-4 border-2 rounded-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-[#F3831C]">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-medium text-[#0F3652]">{course}</h2>
              </div>
              <span className="text-sm text-[#0F3652]">
                {stories.length} {stories.length === 1 ? 'story' : 'stories'}
              </span>
            </div>
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {expandedCourses[course] 
                ? stories.map((story) => (
                    <article key={story.id} className="bg-white rounded-md overflow-hidden shadow-lg transition-shadow duration-300 flex flex-col">
                      <div className="relative h-54">
                        <img 
                          src={story.image}
                          alt={story.imageAlt}
                          className="w-full h-full object-contain rounded-md border-2 border-amber-300"
                        />
                      </div>

                      <div className="p-2 flex-1 flex flex-col">
                        <h5 className="font-bold text-gray-900 text-sm">
                          {story.name}, {story.designation}
                        </h5>
                        
                        <div className="flex flex-row items-center justify-between">
                          <p className="text-xs text-gray-600 mt-1">{story.role} Works at {story.companyName}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(story.date).toLocaleDateString('en-GB', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                        
                        <div className="mt-auto flex items-center justify-between pt-4">
                          <div className="flex items-center">
                            {story.companyImage && (
                              <div className="flex items-center gap-2">
                                <img 
                                  src={story.companyImage}
                                  alt={story.companyName}
                                  className="w-8 h-8 object-contain"
                                />
                              </div>
                            )}
                          </div>
                          
                          <a 
                            href={`/passout-stories/${story.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-full inline-flex items-center gap-2 transition-colors text-sm ml-auto"
                          >
                            Learn More
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </article>
                  ))
                : stories.slice(0, 3).map((story) => (
                    <article key={story.id} className="bg-white rounded-md overflow-hidden shadow-lg transition-shadow duration-300 flex flex-col">
                      <div className="relative h-54">
                        <img 
                          src={story.image}
                          alt={story.imageAlt}
                          className="w-full h-full object-contain rounded-md border-2 border-amber-300"
                        />
                      </div>

                      <div className="p-2 flex-1 flex flex-col">
                        <h5 className="font-bold text-gray-900 text-sm">
                          {story.name}, {story.designation}
                        </h5>
                        
                        <div className="flex flex-row items-center justify-between">
                          <p className="text-xs text-gray-600 mt-1">{story.role} Works at {story.companyName}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(story.date).toLocaleDateString('en-GB', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                        
                        <div className="mt-auto flex items-center justify-between pt-4">
                          <div className="flex items-center">
                            {story.companyImage && (
                              <div className="flex items-center gap-2">
                                <img 
                                  src={story.companyImage}
                                  alt={story.companyName}
                                  className="w-8 h-8 object-contain"
                                />
                              </div>
                            )}
                          </div>
                          
                          <a 
                            href={`/passout-stories/${story.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-full inline-flex items-center gap-2 transition-colors text-sm ml-auto"
                          >
                            Learn More
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </article>
                  ))
              }
            </div>

           
            {stories.length > 3 && !expandedCourses[course] && (
              <div className="text-center">
                <button
                  className="relative overflow-hidden cursor-pointer flex items-center justify-center px-4 py-2 border border-[#0F3652] mx-auto gap-2 rounded-md font-medium text-sm text-[#0F3652] group"
                  onClick={() => toggleCourseExpansion(course)}
                >
                  <span className="absolute inset-0 bg-[#0F3652] scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
                  <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                    View All {course} Stories ({stories.length})
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
            )}

         
            {expandedCourses[course] && stories.length > 3 && (
              <div className="text-center">
                <button
                  className="relative overflow-hidden cursor-pointer flex items-center justify-center px-4 py-2 border border-[#0F3652] mx-auto gap-2 rounded-md font-medium text-sm text-[#0F3652] group"
                  onClick={() => toggleCourseExpansion(course)}
                >
                  <span className="absolute inset-0 bg-[#0F3652] scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
                  <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                    Show Less
                    <ArrowRight className="w-4 h-4 rotate-180" />
                  </span>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default PassoutSuccess