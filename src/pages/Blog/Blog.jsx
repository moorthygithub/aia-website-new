import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Calendar, ArrowRight, Clock, BookOpen, Tag, Search, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { BASE_URL } from "@/api/base-url";
import PopUp from "@/components/common/pop-up";

import BlogListFaq from "./blog-list-faq";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageBaseUrl, setImageBaseUrl] = useState("");
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [showAllTrending, setShowAllTrending] = useState(false); 
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/getAllBlogs`
      );
      setBlogs(response.data.data || []);
      
      const blogImageConfig = response.data.image_url?.find(
        (item) => item.image_for === "Blog"
      );
      if (blogImageConfig) {
        setImageBaseUrl(blogImageConfig.image_url);
      }
      
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setLoading(false);
    }
  };

  const uniqueCategories = [...new Set(blogs.map(blog => blog.blog_course).filter(Boolean))];
  const trendingBlogs = blogs.filter(blog => blog.blog_trending === 'yes');

  const filteredBlogs = selectedCategory === 'ALL' 
    ? blogs 
    : blogs.filter(blog => blog.blog_course === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };
  useEffect(() => {
    if (!showAllTrending && trendingBlogs.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.min(4, trendingBlogs.length));
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [showAllTrending, trendingBlogs.length]);
  const handleBlogClick = (slug) => {
    navigate(`/blogs/${slug}`);
  };



  const BlogCard = ({ blog }) => {
    return (
      <div
        onClick={() => handleBlogClick(blog.blog_slug)}
        className="bg-white border border-[#0F3652]/20 rounded-md hover:border-[#0F3652] transition-colors duration-200 cursor-pointer group"
      >
        <div className="relative overflow-hidden rounded-t-md">
          <div className="h-48 bg-linear-to-r from-[#0F3652]/10 to-[#0F3652]/20">
            <img
              src={`${imageBaseUrl}${blog.blog_images}`}
              alt={blog.blog_images_alt || blog.blog_heading}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.src = "https://aia.in.net/webapi/public/assets/images/no_image.jpg";
              }}
            />
          </div>
          <div className="absolute top-3 left-3">
            <span className="bg-[#0F3652] text-white text-xs font-medium px-3 py-1.5 rounded border border-[#0F3652]">
              {blog.blog_course}
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between text-xs text-[#0F3652] mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formatDate(blog.blog_created)}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              5 min
            </div>
          </div>

          <h3 className="text-lg font-semibold text-[#0F3652] mb-3 line-clamp-2 group-hover:text-[#0F3652]">
            {blog.blog_heading}
          </h3>

          <p className="text-[#0F3652] text-sm mb-5 line-clamp-3 leading-relaxed">
            {blog.blog_short_description}
          </p>

          <div className="flex items-center gap-2 text-[#F3831C] group/readmore">
            <span className="text-sm font-medium">Read Article</span>
            <ArrowRight className="w-4 h-4 group-hover/readmore:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    );
  };

 
  const BannerBlogCard = ({ blog }) => {
    return (
      <div
        onClick={() => handleBlogClick(blog.blog_slug)}
        className="  rounded-lg hover:border-[#0F3652] transition-all duration-300 cursor-pointer group overflow-hidden"
      >
        <div className="flex flex-col md:flex-row gap-6 ">
        
          <div className="md:w-2/5 relative overflow-hidden rounded-lg">
            <div className="h-64 md:h-full bg-linear-to-r from-[#0F3652]/10 to-[#0F3652]/20">
              <img
                src={`${imageBaseUrl}${blog.blog_images}`}
                alt={blog.blog_images_alt || blog.blog_heading}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = "https://aia.in.net/webapi/public/assets/images/no_image.jpg";
                }}
              />
            </div>
            <div className="absolute top-4 left-4">
              <span className="bg-[#0F3652] text-white text-sm font-medium px-4 py-2 rounded border border-[#0F3652]">
                {blog.blog_course}
              </span>
            </div>
          </div>

         
          <div className="md:w-3/5 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-sm text-[#0F3652] mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(blog.blog_created)}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                5 min read
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-[#0F3652] mb-4 group-hover:text-[#0F3652] line-clamp-2">
              {blog.blog_heading}
            </h3>

            <p className="text-[#0F3652] text-base mb-6 line-clamp-3 leading-relaxed">
              {blog.blog_short_description}
            </p>

            <div className="flex items-center gap-3 text-[#F3831C] group/readmore">
              <span className="text-base font-semibold">Read Full Article</span>
              <ArrowRight className="w-5 h-5 group-hover/readmore:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F3652] mb-3">Blogs</h2>
            <div className="flex justify-center gap-1 mt-4">
              <div className="w-2 h-2 bg-[#0F3652] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#0F3652] rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-[#0F3652] rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#0F3652]/5 rounded-md border border-[#0F3652]/20 p-5">
                <div className="h-40 bg-linear-to-r from-[#0F3652]/10 to-[#0F3652]/20 rounded-md mb-4 animate-pulse"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-[#0F3652]/10 rounded w-3/4"></div>
                  <div className="h-3 bg-[#0F3652]/10 rounded w-full"></div>
                  <div className="h-3 bg-[#0F3652]/10 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (blogs.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F3652] mb-3">Blogs</h2>
            <div className="w-20 h-0.5 bg-[#0F3652] mx-auto"></div>
          </div>
          <div className="text-center py-12 border border-[#0F3652]/20 rounded-md bg-[#0F3652]/5">
            <BookOpen className="w-12 h-12 text-[#0F3652] mx-auto mb-4" />
            <p className="text-[#0F3652]">No blogs available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <PopUp slug="Blogs"/>
   
      <section className="py-16 bg-white">
        <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
      
          <div className="text-center mb-12 rounded-2xl p-4">
            <h1 className="text-4xl sm:text-5xl font-semibold text-[#0F3652] mb-6 leading-tight">
              Explore expert insights from Academy of Internal Audit
            </h1>
          
            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder=" Search smart. Learn Audit, Fraud & AML with AIA..."
                  className="w-full px-6 py-2 pr-12 text-lg rounded-2xl focus:outline-none shadow-sm bg-white text-[#0F3652] border border-[#0F3652]/20"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 hover:bg-[#0F3652]/10 rounded-full transition-colors">
                  <Search className="w-6 h-6 text-[#0F3652]" />
                </button>
              </div>
            </div>
          </div>

       
          {trendingBlogs.length > 0 && (
            <div className="mb-12 p-2 border-2 rounded-lg bg-[#0F3652]/5">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-[#F3831C]" />
                  <h2 className="text-2xl md:text-3xl font-medium text-[#0F3652]">Trending Blog</h2>
                </div>
                <span className="text-sm text-[#0F3652]">
                  {trendingBlogs.length} {trendingBlogs.length === 1 ? 'article' : 'articles'} trending
                </span>
              </div>
            
            
              {!showAllTrending ? (
                <>
                
                  <div className="relative mb-8 px-2 pb-2 pt-4 rounded-lg ">
                    <div className="overflow-hidden">
                      <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                      >
                        {trendingBlogs.slice(0, 4).map((blog) => (
                          <div key={blog.id} className="w-full shrink-0 px-2">
                            <BannerBlogCard blog={blog} />
                          </div>
                        ))}
                      </div>
                    </div>



                  
                    {trendingBlogs.slice(0, 4).length > 1 && (
                      <div className="flex justify-center gap-2 mt-2">
                        {trendingBlogs.slice(0, 4).map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              currentSlide === index 
                                ? 'w-8 bg-[#0F3652]' 
                                : 'w-2 bg-[#0F3652]/30 hover:bg-[#0F3652]/50'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                
                  {/* {trendingBlogs.length > 4 && (
                    <div className="text-center">
                      <button
                        className="relative overflow-hidden cursor-pointer flex items-center justify-center px-4 py-2 border border-[#0F3652] mx-auto gap-2 rounded-md font-medium text-sm text-[#0F3652] group"
                        onClick={() => setShowAllTrending(true)}
                      >
                        <span className="absolute inset-0 bg-[#0F3652] scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
                        <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                          View All 
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </button>
                    </div>
                  )} */}
                </>
              ) : (
                <>
                 
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {trendingBlogs.map((blog) => (
                      <BlogCard key={blog.id} blog={blog} />
                    ))}
                  </div>

              
                  {trendingBlogs.length > 4 && (
                    <div className="text-center">
                      <button
                        className="relative overflow-hidden cursor-pointer flex items-center justify-center px-4 py-2 border border-[#0F3652] mx-auto gap-2 rounded-md font-medium text-sm text-[#0F3652] group"
                        onClick={() => {
                          setShowAllTrending(false);
                          setCurrentSlide(0);
                        }}
                      >
                        <span className="absolute inset-0 bg-[#0F3652] scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
                        <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                          Show Less
                          <ArrowRight className="w-4 h-4 rotate-180" />
                        </span>
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

       
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-medium text-[#0F3652] text-left mb-6">Categories</h2>
          need to open in new page-- all res -  full formcourse name  - all button remove
            <div className="flex flex-wrap justify-start gap-3 mb-8">
              <button
                onClick={() => {
                  setSelectedCategory('ALL');
                  setShowAllTrending(false);
                }}
                className={`px-6 py-2 rounded-md text-sm transition-colors duration-200 ${selectedCategory === 'ALL' ? 'bg-[#0F3652] text-white' : 'bg-[#0F3652]/10 text-[#0F3652] hover:bg-[#0F3652]/20'}`}
              >
                ALL
              </button>
            
              {uniqueCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowAllTrending(false);
                  }}
                  className={`px-6 py-2 cursor-pointer rounded-md text-sm transition-colors duration-200 ${selectedCategory === category ? 'bg-[#0F3652] text-white' : 'bg-[#0F3652]/10 text-[#0F3652] hover:bg-[#0F3652]/20'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

         
          {selectedCategory === 'ALL' ? (
            uniqueCategories.map((category) => {
              const categoryBlogs = blogs.filter(blog => blog.blog_course === category).slice(0, 4);
              if (categoryBlogs.length === 0) return null;
            
              return (
                <div key={category} className="mb-16 p-4 border-2 rounded-lg">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl md:text-2xl font-medium text-[#0F3652]">{category}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {categoryBlogs.map((blog) => (
                      <BlogCard key={blog.id} blog={blog} />
                    ))}
                  </div>
            
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className="relative overflow-hidden cursor-pointer flex items-center justify-center px-4 py-2 border border-[#0F3652] mx-auto gap-2 rounded-md font-medium text-sm text-[#0F3652] group"
                  >
                    <span className="absolute inset-0 bg-[#0F3652] scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
                    <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                      View All
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>
                </div>
              );
            })
          ) : (
            <div className="p-4 bg-[#f3841c56] rounded-lg">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl md:text-2xl font-medium text-[#0F3652]">{selectedCategory}</h3>
                </div>
                <span className="text-sm text-[#0F3652]">
                  Showing {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {filteredBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>

              {filteredBlogs.length > 6 && (
                <div className="text-center mt-12 pt-8 border-t border-[#0F3652]/20">
                  <button className="inline-flex items-center gap-2 border border-[#0F3652]/20 hover:border-[#0F3652] text-[#0F3652] hover:text-[#0F3652] px-6 py-3 rounded-md font-medium transition-colors duration-200">
                    View All {selectedCategory} Articles ({filteredBlogs.length})
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}

        
          <div className="flex flex-col items-center justify-center bg-white px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8 max-w-5xl text-[#0F3652]">
              Grow Better with AIA today
            </h1>
          
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-6 py-3 bg-[#F3831C] text-white rounded-lg font-medium hover:bg-[#F3831C]/90 transition-colors">
                Contact Now  -- link to contact
              </button>
            </div>
          </div>
          

        </div>
      </section>
    </>
  );
};

export default Blog;