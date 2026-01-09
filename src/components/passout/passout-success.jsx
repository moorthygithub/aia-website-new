import React, { useState } from 'react'

const PassoutSuccess = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All industries')
  const [selectedSolution, setSelectedSolution] = useState('All Solutions')
  const [visibleCount, setVisibleCount] = useState(6)

  const stories = [
    {
      id: 55,
      name: "Mohit Grover",
      designation: "CFE",
      role: "Assistant Account Manager at VP Kapitech",
      date: "05.11.2025",
      image: "https://aia.in.net/crm/public/assets/images/passout/MohitGrover.webp",
      excerpt: "Mohit Grover decided to take a bold step toward professional growth by pursuing the CFE Certification. He was looking for guidance that was clear, reliable, and capable of supporting him from the very beginning all the way to exam success.",
      fullStory: "What made his journey standout was how effortlessly everything came together at Academy of Internal Audit. The video lectures felt complete yet uncomplicated, the study plan removed all guesswork, and the support from the team gave him the assurance that he was on the right track.",
      linkedIn: "https://www.linkedin.com/in/mohitgroverca/"
    },
    {
      id: 54,
      name: "Sanjay Namdeo",
      designation: "CFE",
      role: "Professional",
      date: "29.10.2025",
      image: "https://aia.in.net/crm/public/assets/images/passout/SanjayNamdeo.webp",
      excerpt: "For Sanjay Namdeo, choosing the CFE Certification wasn't just a career move—it was a decision to sharpen his investigative mindset and grow beyond his comfort zone.",
      fullStory: "Joining Academy of Internal Audit changed the course of his preparation. With every class, concepts became clearer, patterns started forming, and fraud examination no longer felt intimidating. Puneet Sir's way of teaching made all the difference.",
      linkedIn: "https://www.linkedin.com/in/sanjay-namdeo/"
    },
    {
      id: 53,
      name: "Minal Masurekar",
      designation: "CFE",
      role: "Compliance Manager at FMC Corporation",
      date: "06.10.2025",
      image: "https://aia.in.net/crm/public/assets/images/passout/MinalMasurekar.webp",
      excerpt: "Success is often a combination of the right guidance and consistent effort, and Minal Masurekar experienced this firsthand while preparing for the CFE Certification.",
      fullStory: "At Academy of Internal Audit, Minal found a perfectly balanced approach. The combination of live and recorded sessions, practice questions, and mock tests made her preparation feel structured and achievable.",
      linkedIn: "https://www.linkedin.com/in/minal-masurekar/"
    },
    {
      id: 52,
      name: "Aboubacar Doumbia",
      designation: "CFE",
      role: "Professional from Abidjan",
      date: "26.09.2025",
      image: "https://aia.in.net/crm/public/assets/images/passout/AboubacarDoumbia-Abidjan.webp",
      excerpt: "Achievement across borders requires vision, determination, and the right guidance. Aboubacar Doumbia embraced the challenge of the CFE Certification from Abidjan.",
      fullStory: "At Academy of Internal Audit, Aboubacar experienced a learning journey that combined expert-led video lectures, comprehensive study manuals, and personal support from the team.",
      linkedIn: "https://www.linkedin.com/in/aboubacar-doumbia-cfe-a87880368/"
    },
    {
      id: 51,
      name: "Supreetha S",
      designation: "CFE",
      role: "Professional",
      date: "23.09.2025",
      image: "https://aia.in.net/crm/public/assets/images/passout/Supreetha.webp",
      excerpt: "Supreetha S always dreamed of earning her CFE Certification, but the thought of navigating the complex syllabus and exam process on her own felt overwhelming.",
      fullStory: "From the very first class, Supreetha noticed the difference. Classes and notes were short and crisp but with full needed content and explanation to clear exam in one shot.",
      linkedIn: "https://www.linkedin.com/in/supreetha-s-cfe-a960093b/"
    },
    {
      id: 37,
      name: "Nathasha Dowrla",
      designation: "CFE",
      role: "Professional from Bahrain",
      date: "25.08.2025",
      image: "https://aia.in.net/crm/public/assets/images/passout/NathashaDowrla-Behrain.webp",
      excerpt: "Nathasha Dowrla, from Bahrain, a professional who has always had a deep interest in criminal and fraud detection. What started as curiosity soon turned into passion.",
      fullStory: "That's when she discovered the Academy of Internal Audit (AIA), a place that gave her exactly what she needed: structured learning, simplified study material, and unwavering mentor support.",
      linkedIn: "https://www.linkedin.com/in/nathasha-d/"
    },
    {
      id: 38,
      name: "Xavier Dinesh Kumar Fernando",
      designation: "CFE",
      role: "Senior Deputy Manager at NDB, Sri Lanka",
      date: "19.08.2025",
      image: "https://aia.in.net/crm/public/assets/images/passout/Xavier-Dinesh-Kumar.webp",
      excerpt: "Xavier Dinesh Kumar Fernando began his CFE journey with uncertainty, unsure where to start or how to structure his preparation.",
      fullStory: "From the very beginning, Xavier found the guidance he needed - clear video lectures, concise notes, and a mentor who made complex concepts easy to grasp.",
      linkedIn: "https://www.linkedin.com/in/xavier-dinesh-kumar-fernando-cfe-mcom-bba-3216a560/"
    },
    {
      id: 39,
      name: "Viresh Karia",
      designation: "CFE",
      role: "Consultant at KPMG, Mumbai",
      date: "18.08.2025",
      image: "https://aia.in.net/crm/public/assets/images/passout/Viresh-Karia.webp",
      excerpt: "Viresh Karia had a clear goal: to earn the Certified Fraud Examiner (CFE) credential and strengthen his professional credibility in fraud and risk management.",
      fullStory: "His search led him to the Academy of Internal Audit where he found exactly what he was looking for: precise material, practical examples and perfect mentorship.",
      linkedIn: "https://www.linkedin.com/in/ca-viresh-karia/"
    }
  ]

  const [expandedStories, setExpandedStories] = useState({})

  const toggleStory = (id) => {
    setExpandedStories(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const handleReset = () => {
    setSelectedIndustry('All industries')
    setSelectedSolution('All Solutions')
  }

  const displayedStories = stories.slice(0, visibleCount)

  return (
    <section className="bg-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Read Our Student's Journey
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <select 
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="px-6 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>All industries</option>
            <option>Finance</option>
            <option>Consulting</option>
            <option>Banking</option>
          </select>

          <select 
            value={selectedSolution}
            onChange={(e) => setSelectedSolution(e.target.value)}
            className="px-6 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>All Solutions</option>
            <option>CFE</option>
            <option>Internal Audit</option>
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

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedStories.map((story) => (
            <article key={story.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              {/* Image with Profile */}
              <div className="relative h-64 bg-linear-to-br from-blue-100 to-purple-100">
                <img 
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover  rounded-2xl"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg p-3 shadow-md">
                  <h5 className="font-bold text-gray-900 text-sm">{story.name}, {story.designation}</h5>
                  <p className="text-xs text-gray-600 mt-1">{story.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{story.date}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {story.excerpt}
                </p>

                {expandedStories[story.id] && (
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {story.fullStory}
                  </p>
                )}

                {/* Actions */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-200">
                  <button 
                    onClick={() => toggleStory(story.id)}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    {expandedStories[story.id] ? 'Read Less' : 'Read More'}
                  </button>
                  <a 
                    href={story.linkedIn}
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

        {/* View More Button */}
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