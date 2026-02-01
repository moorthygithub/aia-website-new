


import { TestimonialsSection } from '@/components/ui/testimonials-with-marquee'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { BASE_URL } from '@/api/base-url'
import { TestimonialsSectionCourse } from '../common/testimonials-with-marquee-course'

const CiaResult = () => {
  const { data: certificatesData, isLoading, isError } = useQuery({
    queryKey: ["cia-challenge-certificates"],
    queryFn: async () => {
      const res = await axios.get(
         `${BASE_URL}/api/getCertificatebyCourse/CIAC`
      );
      return res.data;
    },
  })


  const testimonials = React.useMemo(() => {
    if (!certificatesData?.data) return []
    
   
    const certificateImageUrlObj = certificatesData.image_url?.find(
      item => item.image_for === "Student"
    )
    const certificateImageUrl = certificateImageUrlObj?.image_url || ""
    
    return certificatesData.data.map((certificate) => ({
      author: {
    
        avatar: `${certificateImageUrl}${certificate.student_other_certificate_image}`
      },
  
      alt: certificate.student_other_certificate_image_alt || "Certificate Image"
    }))
  }, [certificatesData])

  if (isLoading) {
    return (
      <div className="relative w-full py-12 sm:py-24 md:py-32">
        <div className="mx-auto max-w-container flex flex-col items-center gap-4 text-center sm:gap-16">
          <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
            <Skeleton height={40} width={400} className="mx-auto" />
            <Skeleton height={20} width={200} className="mx-auto" />
          </div>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <div className="flex overflow-hidden p-2 gap-4 flex-row">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="w-[320px] h-50">
                  <Skeleton height={200} width={320} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="relative w-full py-12 sm:py-24 md:py-32">
        <div className="mx-auto max-w-container flex flex-col items-center gap-4 text-center sm:gap-16">
          <div className="text-red-500">Error loading certificates. Please try again later.</div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <TestimonialsSectionCourse
        title="Proof of Excellence: CIA Challenge Exam Success Stories of AIA Achievers"
    
        testimonials={testimonials}
     
      />
    </div>
  )
}

export default CiaResult
