import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const SQRT_5000 = Math.sqrt(5000);

const TestimonialCard = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-6 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-amber-600 text-primary-foreground border-amber-500" 
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
      }}>
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }} />
      <img
        src={testimonial.student_image_url}
        alt={testimonial.student_image_alt || testimonial.student_name}
        className="h-full w-full bg-muted object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))"
        }} />
    </div>
  );
};

const CamsAchivers = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState([]);

  
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cams-passout-students"],
    queryFn: async () => {
      const res = await axios.get(
        "https://aia.in.net/webapi/public/api/getPassoutStudentbyCourse/CAMS"
      );
      return res.data;
    },
  });

  useEffect(() => {
    if (data?.data) {
    
      const studentImageUrl = data.image_url?.find(img => img.image_for === "Student")?.image_url || '';
      
      const transformedData = data.data.map(student => ({
        tempId: student.id,
        student_name: student.student_name,
        student_course: student.student_course,
        student_image_url: studentImageUrl + student.student_image,
        student_image_alt: student.student_image_alt,
        country_name: student.country_name,
        country_city: student.country_city,
        imgSrc: studentImageUrl + student.student_image, 
        by: `${student.student_name}, ${student.country_name}${student.country_city ? `, ${student.country_city}` : ''}`
      }));

      setTestimonialsList(transformedData);
    }
  }, [data]);

  const handleMove = (steps) => {
    if (testimonialsList.length === 0) return;
    
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (isLoading) {
    return (
      <div className="relative w-full overflow-hidden bg-muted/30 flex items-center justify-center" style={{ height: 600 }}>
        <div className="text-lg">Loading achievers...</div>
      </div>
    );
  }

  if (isError || testimonialsList.length === 0) {
    return (
      <div className="relative w-full overflow-hidden bg-muted/30 flex items-center justify-center" style={{ height: 600 }}>
        <div className="text-lg text-red-500">Failed to load achievers</div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden bg-muted/30"
      style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize} />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial">
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CamsAchivers;