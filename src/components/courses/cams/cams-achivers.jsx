// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import { BASE_URL } from '@/api/base-url';
// import CourseAchiverCard from '../common/course-achiver-card';

// const CamsAchivers = () => {
//   const [cardSize, setCardSize] = useState(315);
//   const [testimonialsList, setTestimonialsList] = useState([]);

//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["ciac-passout-students"],
//     queryFn: async () => {
//       const res = await axios.get(
//         `${BASE_URL}/api/getPassoutStudentbyCourse/CAMS`
//       );
//       return res.data;
//     },
//   });

//   useEffect(() => {
//     if (data?.data) {
//       const studentImageUrl = data.image_url?.find(img => img.image_for === "Student")?.image_url || '';
      
//       const transformedData = data.data.map(student => ({
//         tempId: student.id,
//         student_name: student.student_name,
//         student_course: student.student_course,
//         student_image_url: studentImageUrl + student.student_image,
//         student_image_alt: student.student_image_alt,
//         country_name: student.country_name,
//         country_city: student.country_city,
//         imgSrc: studentImageUrl + student.student_image,
//         by: `${student.student_name}, ${student.country_name}${student.country_city ? `, ${student.country_city}` : ''}`
//       }));

//       setTestimonialsList(transformedData);
//     }
//   }, [data]);

//   const handleMove = (steps) => {
//     if (testimonialsList.length === 0) return;
    
//     const newList = [...testimonialsList];
//     if (steps > 0) {
//       for (let i = steps; i > 0; i--) {
//         const item = newList.shift();
//         if (!item) return;
//         newList.push({ ...item, tempId: Math.random() });
//       }
//     } else {
//       for (let i = steps; i < 0; i++) {
//         const item = newList.pop();
//         if (!item) return;
//         newList.unshift({ ...item, tempId: Math.random() });
//       }
//     }
//     setTestimonialsList(newList);
//   };

//   useEffect(() => {
//     const updateSize = () => {
//       const { matches } = window.matchMedia("(min-width: 640px)");
//       setCardSize(matches ? 315 : 240);
//     };

//     updateSize();
//     window.addEventListener("resize", updateSize);
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="relative w-full overflow-hidden bg-[#0F3652]/5 flex items-center justify-center" style={{ height: 600 }}>
//         <div className="text-lg text-[#0F3652]">Loading achievers...</div>
//       </div>
//     );
//   }

//   if (isError) {
//     return (
//       <div className="relative w-full overflow-hidden bg-[#0F3652]/5 flex items-center justify-center" style={{ height: 600 }}>
//         <div className="text-lg text-[#0F3652]">Failed to load achievers</div>
//       </div>
//     );
//   }
// if(testimonialsList.length === 0)  return null
//   return (
//     <div
//       className="relative w-full overflow-hidden bg-[#0F3652]/5"
//       style={{ height: 600 }}>
//       {testimonialsList.map((testimonial, index) => {
//         const position = testimonialsList.length % 2
//           ? index - (testimonialsList.length + 1) / 2
//           : index - testimonialsList.length / 2;
//         return (
//           <CourseAchiverCard
//             key={testimonial.tempId}
//             testimonial={testimonial}
//             handleMove={handleMove}
//             position={position}
//             cardSize={cardSize} />
//         );
//       })}
//       <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
//         <button
//           onClick={() => handleMove(-1)}
//           className={cn(
//             "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
//             "bg-white border-2 border-[#0F3652] hover:bg-[#0F3652] hover:text-white text-[#0F3652]"
//           )}
//           aria-label="Previous testimonial">
//           <ChevronLeft />
//         </button>
//         <button
//           onClick={() => handleMove(1)}
//           className={cn(
//             "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
//             "bg-white border-2 border-[#0F3652] hover:bg-[#0F3652] hover:text-white text-[#0F3652]"
//           )}
//           aria-label="Next testimonial">
//           <ChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CamsAchivers;