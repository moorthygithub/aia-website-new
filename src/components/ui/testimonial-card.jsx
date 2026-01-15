import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export function TestimonialCard({
  author,

  href,
  alt,
  className
}) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-lg border-t",
        "bg-linear-to-b from-muted/50 to-muted/10",
        " text-start ",
        "hover:from-muted/60 hover:to-muted/20",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-colors duration-300",
        "h-50 w-[320px]", 
        className
      )}>
      <div className="h-full w-full flex items-center justify-center">
        <Avatar className="h-full w-full rounded-md">
          <AvatarImage 
            src={author.avatar} 
            alt={alt || "Certificate Image"}
            className=" w-full h-full object-fit rounded-md"
          />
        </Avatar>
      </div>
    </Card>
  );
}