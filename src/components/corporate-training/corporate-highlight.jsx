









import React from 'react'
import CourseHighLight from '../courses/common/course-highlight'


const CorporateHighlight = () => {
  return (
    <CourseHighLight
    badgeText="Accreditation & Highlights"
    title=" Trusted & Authorized by Leading Global Bodies"
    description="With globally recognized certifications, authorized partnerships, and a proven track record of success. We empower professionals and organizations across various industries with audit, risk, and compliance excellence."
    stats={[
      { value: 50000, suffix: "+ Hours", subtitle: "Expert Mentoring Sessions" },
      { value: 99.6, suffix: "%", subtitle: "Success Rate" },
      { value: 1000, suffix: "+", subtitle: "Success Stories" },
      { value: 32, suffix: "+ Countries", subtitle: "Served" },
    ]}
    
    logos={[
      { img: "https://aia.in.net/crm/public/assets/images/brand/IAO.jpeg" },
      { img: "https://aia.in.net/crm/public/assets/images/brand/IIA.png" },
      { img: "https://aia.in.net/crm/public/assets/images/brand/ISO.jpeg" },
      { img: "https://aia.in.net/crm/public/assets/images/brand/Gleim.jpeg" },
      { img: "https://aia.in.net/crm/public/assets/images/brand/GSAAA.png" },
    ]}
  />
  
  )
}

export default CorporateHighlight