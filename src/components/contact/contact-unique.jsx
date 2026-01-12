



import React from 'react'
import {
  Users,
  Calendar,
  Award,
  Building2,
  Handshake,
  ShoppingBag,
  Sparkles,
  CheckCircle,
  Star,
} from "lucide-react";
import CourseUnique from '../courses/common/course-unique';


const ContactUnique = () => {
  return (

<CourseUnique
  badgeText="WHAT MAKES US UNIQUE"
  heading="Welcome to"
  highlight="AIA"
  description="Your Career Partner Guiding You From Enrollment to Success with"
  services={[
    {
      icon: <Users className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />,
      title: "Global Certifications",
      description: "Internationally recognized certifications that open doors worldwide",
      position: "left",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />,
      title: "Flexible Learning",
      description: "Study anytime, anywhere with our comprehensive LMS platform",
      position: "left",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />,
      title: "Dedicated Support",
      description: "24/7 support team ready to help you succeed",
      position: "left",
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />,
      title: "Expert Faculty",
      description: "Learn from industry experts and experienced members",
      position: "right",
    },
    {
      icon: <Award className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />,
      title: "Custom Materials",
      description: "Tailored study materials designed for exam success",
      position: "right",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-blue-400" />,
      title: "Proven Success",
      description: "Join thousands of successful professionals worldwide",
      position: "right",
    },
  ]}
/>

  )
}

export default ContactUnique


