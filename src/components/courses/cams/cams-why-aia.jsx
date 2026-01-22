import React from 'react'
import CourseWhyAia from '../common/course-why-aia'

const CamsWhyAia = () => {
  return (
    <CourseWhyAia
      heading="Why Academy of Internal Audit"
      items={[
        {
          img: "https://aia.in.net/crm/public/assets/images/teacher-svgrepo-com.png",
          title: "CAMS Qualified Instructor",
        },
        {
          img: "https://aia.in.net/assets/images/support-svgrepo-com.png",
          title: "Training Support",
        },
        {
          img: "https://aia.in.net/assets/images/video-record-device-svgrepo-com.png",
          title: "Access to Recorded Sessions",
        },
        {
          img: "https://aia.in.net/assets/images/calender-svgrepo-com.png",
          title: "Flexible Schedule",
        },
        {
          img: "https://aia.in.net/assets/images/books-svgrepo-com.png",
          title: "CAMS Version 7 Study Material",
        },
      ]}
    />
  )
}

export default CamsWhyAia