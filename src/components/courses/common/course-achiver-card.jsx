import { cn } from "@/lib/utils";


const SQRT_5000 = Math.sqrt(5000);
const CourseAchiverCard = ({ 
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
          ? "z-10 bg-[#0F3652] text-primary-foreground border-[#0F3652]" 
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
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
        opacity: Math.abs(position) > 2 ? 0 : 1,
        pointerEvents: Math.abs(position) > 2 ? 'none' : 'auto',
      }}>
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 4,
          width: SQRT_5000,
          height: 2
        }} />
      <img
        src={testimonial.student_image_url}
        alt={testimonial.student_image_alt || testimonial.student_name}
        className="h-full w-full bg-muted object-cover object-top rounded-2xl"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))"
        }} />
    </div>
  );
};

export default CourseAchiverCard;