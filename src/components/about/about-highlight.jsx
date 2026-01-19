



import React from 'react'
import CourseHighLight from '../courses/common/course-highlight'


const AboutHighlight = () => {
  return (
    <CourseHighLight
    badgeText="INDUSTRIES WE SERVE"
    title=" Recognized & Accredited by Leading Global Bodies"
    description="   Our programs are recognized by international accreditation and professional bodies,
reinforcing our commitment to quality education and global relevance"
    stats={[
      {
        value: "50,000+ Hours",
        subtitle: "Expert Mentoring Sessions",
      },
      {
        value: "99.6%",
        subtitle: "Success Rate",
      },
      {
        value: "1,000+",
        subtitle: "Success Stories",
      },
      {
        value: "32+ Countries",
        subtitle: "Served",
      },
    ]}
    logos={[
      { img: "https://aia.in.net/crm/public/assets/images/brand/IAO.jpeg" },
      { img: "https://aia.in.net/crm/public/assets/images/brand/IIA.png" },
      { img: "https://aia.in.net/crm/public/assets/images/brand/ISO.jpeg" },
      { img: "https://aia.in.net/crm/public/assets/images/brand/Gleim.jpeg" },
    ]}
  />
  
  )
}

export default AboutHighlight