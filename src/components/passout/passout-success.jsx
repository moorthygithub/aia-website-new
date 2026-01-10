import React, { useState } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { BASE_URL } from '@/api/base-url'


const PassoutSuccess = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All industries')
  const [selectedSolution, setSelectedSolution] = useState('All Solutions')
  const [visibleCount, setVisibleCount] = useState(6)

  
  const { data: studentStoriesData, isLoading, isError } = useQuery({
    queryKey: ["student-stories"],
    queryFn: async () => {
      const res = await axios.get(`${BASE_URL}/api/getStudentsStory`)
      return res.data
    },
  })


  const handleReset = () => {
    setSelectedIndustry('All industries')
    setSelectedSolution('All Solutions')
  }


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
 
      image: story.student_image 
        ? `${studentImageUrl}${story.student_image}`
        : 'https://aia.in.net/webapi/public/assets/images/no_image.jpg',
    
      companyImage: story.company?.student_company_image 
        ? `${companyImageUrl}${story.company.student_company_image}`
        : null,
      companyName: story.company?.student_company_name || '',
      fullStory: story.student_story_details,
      linkedIn: story.student_linkedin_link
    }))
  }

  const stories = transformStories()
  const displayedStories = stories.slice(0, visibleCount)

  if (isLoading) {
    return (
      <section className="bg-white py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-3/4 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-gray-200 rounded-2xl h-80"></div>
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
          <p className="text-red-600">Failed to load student stories. Please try again later.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
       
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Read Our Student's Journey
          </h2>
        </div>

       
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <select 
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="px-6 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>All industries</option>
          </select>

          <select 
            value={selectedSolution}
            onChange={(e) => setSelectedSolution(e.target.value)}
            className="px-6 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>All Solutions</option>
            <option>CFE</option>
          </select>

          <button 
            onClick={handleReset}
            className="px-6 py-3 text-gray-700 hover:text-gray-900 font-medium flex items-center gap-2"
          >
            Reset
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-600">
              <path d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C12.0711 2.5 13.9464 3.35714 15.3033 4.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M17.5 4.16667V7.5H14.1667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedStories.map((story) => (
            <article key={story.id} className="bg-white rounded-2xl  overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
           
              <div className="relative h-64">
                <img 
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover rounded-2xl p-2 border-2 border-amber-300"
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
                
               
              

            
                <div className="mt-auto flex items-center justify-between pt-4 ">
             
                  

                    {story.companyImage && (
                  <div className=" mx-2">
                    <div className="flex items-center gap-2">
                      <img 
                        src={story.companyImage}
                        alt={story.companyName}
                        className="w-8 h-8 object-contain"
                      />
                      
                    </div>
                  </div>
                )}
              
                  
                  <a 
                    href={`/passout-stories/${story.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-full inline-flex items-center gap-2 transition-colors text-sm"
                  >
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>


        {visibleCount < stories.length && (
          <div className="text-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-colors"
            >
              <span>View More</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default PassoutSuccess