







import React from 'react'
import CourseHighLight from '../courses/common/course-highlight'


const CorporateWhy = () => {
  return (
    <CourseHighLight
    badgeText=""
    title="Why Leading Organizations are Investing in Employee"
    description="Because every smart business knows - when your people grow it leads to strong results. Here’s the proof"
    stats={[
      {
        value: "94%",
        subtitle: "Say employees stay longer at a company",
      },
      {
        value: "74%",
        subtitle: "Report higher engagement with structured training",
      },
      {
        value: "30% ",
        subtitle: "See improved performance within 3 months ",
      },
      {
        value: "21%",
        subtitle: "of companies report direct profitability gains ",
      },
    ]}
    logos={[
      
    ]}
  />
  
  )
}

export default CorporateWhy