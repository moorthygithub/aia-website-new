/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Gift } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/api/base-url";


const HomeBlog = () => {
  const carouselRef = React.useRef(null);
  const controls = useAnimation();

  const [isAtStart, setIsAtStart] = React.useState(true);
  const [isAtEnd, setIsAtEnd] = React.useState(false);

  
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["aia-blog"],
    queryFn: async () => {
      const res = await axios.get(
          `${BASE_URL}/api/getFrontBlogs`
      );
      return res.data;
    },
  });

 
  const blogs = data?.data || [];
  const blogImageBaseUrl = data?.image_url?.find(item => item.image_for === "Blog")?.image_url || "";
  const noImageUrl = data?.image_url?.find(item => item.image_for === "No Image")?.image_url || "";

  const scroll = (direction) => {
    if (!carouselRef.current) return;

    const scrollAmount = carouselRef.current.clientWidth * 0.8;
    const newScrollLeft =
      carouselRef.current.scrollLeft +
      (direction === "right" ? scrollAmount : -scrollAmount);

    controls.start({
      x: -newScrollLeft,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });

    carouselRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  const checkScrollPosition = React.useCallback(() => {
    if (!carouselRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setIsAtStart(scrollLeft < 10);
    setIsAtEnd(scrollWidth - scrollLeft - clientWidth < 10);
  }, []);

  React.useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScrollPosition);
    checkScrollPosition();

    return () => el.removeEventListener("scroll", checkScrollPosition);
  }, [checkScrollPosition]);

 
  if (isLoading) {
    return (
      <div className="flex min-h-125 w-full items-center justify-center bg-background p-4">
        <div className="w-full max-w-340 rounded-2xl border bg-card p-4 shadow-sm md:p-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-3">
             
              <div className="animate-pulse">
                <div className="h-6 w-3/4 rounded bg-gray-200"></div>
                <div className="mt-4 h-8 w-full rounded bg-gray-200"></div>
                <div className="mt-2 h-4 w-5/6 rounded bg-gray-200"></div>
                <div className="mt-6 h-10 w-full rounded bg-gray-200"></div>
              </div>
            </div>
            <div className="lg:col-span-9">
           
              <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="w-64 shrink-0">
                    <div className="animate-pulse overflow-hidden rounded-lg border bg-gray-100 shadow-sm">
                      <div className="h-40 w-full bg-gray-200"></div>
                      <div className="p-4">
                        <div className="h-4 w-3/4 rounded bg-gray-200"></div>
                        <div className="mt-2 h-3 w-full rounded bg-gray-200"></div>
                        <div className="mt-3 h-4 w-1/2 rounded bg-gray-200"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" py-4 ">
      <div className="w-full max-w-340 mx-auto rounded-2xl border bg-linear-to-r from-blue-100 via-blue-400 to-blue-600/60 p-4 shadow-sm md:p-6 ">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        
          <div className="flex flex-col items-center text-center lg:col-span-3 lg:items-start lg:text-left">
            

           <div className=" flex flex-col h-full justify-center">
            
             <h2 className="mt-4 text-2xl font-bold text-primary">
              Expert articles, exam tips, and real-world insights 
for CFE, CIA, and CAMS aspirants.
            </h2>
           
 <Button
    className="rounded-xl mt-6   px-5 text-base relative cursor-pointer overflow-hidden group hover:bg-linear-to-r hover:from-yellow-400/30 hover:via-yellow-500/40 hover:to-yellow-400/30"
      
                  onClick={() => window.open(`/blogs`, '_blank')}
            variant="ghost"
              aria-label="Explore Siga"
            >
              

<span className="relative z-10  text-white ">
 <span>                Read Our Blogs </span>
</span>
              <span className="absolute inset-0 bg-linear-to-r from-orange-400 via-orange-500 to-orange-400  
               
              
              opacity-100 transition-opacity duration-300 -skew-x-12" />

            </Button>
           </div>
         
          </div>

       
          <div className="relative lg:col-span-9">
            <div ref={carouselRef} className="">
              <motion.div className="flex gap-4 px-1 py-2" animate={controls}>
                {(isError || blogs.length === 0) ? (
                
                  <div className="flex w-full items-center justify-center p-8">
                    <p className="text-muted-foreground">
                      No blogs available at the moment. Please try again later.
                    </p>
                  </div>
                ) : (
                  blogs.map((blog) => {
                 
                    const imageUrl = blog.blog_images 
                      ? `${blogImageBaseUrl}${blog.blog_images}`
                      : noImageUrl;

                    return (
                      <motion.div
                        key={blog.id}
                        className="group w-64 shrink-0"
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="overflow-hidden rounded-lg border bg-card shadow-sm">
                          <div className="relative">
                            <img
                              src={imageUrl}
                              alt={blog.blog_images_alt || blog.blog_heading}
                              className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                              onError={(e) => {
                                e.target.src = noImageUrl;
                              }}
                            />
                            <div className="absolute bottom-2 right-2 rounded-md bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                              {blog.blog_course}
                            </div>
                          </div>

                          <div className="p-4">
                            <div className="flex items-start justify-between">
                              <h3 className="text-base font-semibold line-clamp-2">
                                {blog.blog_heading}
                              </h3>
                   
                            </div>

                            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                              {blog.blog_short_description}
                            </p>

                            <div className="mt-3 flex items-center justify-between">
                              <div>
                                <p className="text-xs text-muted-foreground">
                                  Published on
                                </p>
                                <p className="text-sm font-medium">
                                  {new Date(blog.blog_created).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                  })}
                                </p>
                              </div>
                              <div className="flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-600">
                                <Star className="h-3 w-3" />
                                {blog.blog_course}
                              </div>
                            </div>

                            <Button
                              variant="ghost"
                              size="sm"
                              className="mt-3 w-full cursor-pointer bg-amber-500"
                              onClick={() => window.open(`/blogs/${blog.blog_slug}`, '_blank')}
                            >
                              Read More
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })
                )}
              </motion.div>
            </div>

        
            {/* {!isAtStart && blogs.length > 0 && (
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full hidden md:flex"
                onClick={() => scroll("left")}
              >
                <ChevronLeft />
              </Button>
            )}

            {!isAtEnd && blogs.length > 0 && (
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-full hidden md:flex"
                onClick={() => scroll("right")}
              >
                <ChevronRight />
              </Button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;