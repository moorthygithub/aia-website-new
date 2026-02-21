import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

import { Play } from "lucide-react";

export function TestimonialCardCourse({
  author,
  href,
  alt,
  className,
  target,
}) {
  const Card = href ? "a" : "div";

  return (
    <Card
      {...(href
        ? {
            href,
            target: target || "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
      className={cn(
        "flex flex-col  rounded-lg  relative group",

        "text-start",
        "hover:from-muted/60 hover:to-muted/20",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-all duration-300",
        "h-[182px] w-[320px]",
        href ? "cursor-pointer" : "cursor-default",
        className
      )}
    >
      <div className="h-full w-full flex items-center justify-center border-2 border-[#0F3652] rounded-lg overflow-hidden relative">
        <Avatar className="h-full w-full rounded-md">
          <AvatarImage
            src={author?.avatar}
            alt={alt || "Certificate Image"}
            className="w-full h-full object-contain rounded-md"
          />
        </Avatar>
      </div>
    </Card>
  );
}
