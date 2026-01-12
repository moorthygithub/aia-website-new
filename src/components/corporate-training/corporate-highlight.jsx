









import React from 'react'
import CourseHighLight from '../courses/common/course-highlight'


const CorporateHighlight = () => {
  return (
    <CourseHighLight
    badgeText="INDUSTRIES WE SERVE"
    title=" Customized Digital Solutions For Every Industry"
    description=" We believe every industry is unique and needs customized solutions to thrive. Our web design and development services in India are for every industry, where we help our clients overcome challenges and achieve their goals."
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

export default CorporateHighlight