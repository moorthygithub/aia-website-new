import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Calendar, ArrowRight, Clock, BookOpen, Tag, Search, TrendingUp } from "lucide-react";
import { BASE_URL } from "@/api/base-url";
import PopUp from "@/components/common/pop-up";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageBaseUrl, setImageBaseUrl] = useState("");
  const [selectedCategory, setSelectedCategory] = useState('ALL');
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

  const handleBlogClick = (slug) => {
    navigate(`/blogs/${slug}`);
  };

  const BlogCard = ({ blog }) => {
    return (
      <div
        onClick={() => handleBlogClick(blog.blog_slug)}
        className="bg-white border border-gray-200 rounded-md hover:border-[#0F3652] transition-colors duration-200 cursor-pointer group"
      >
        <div className="relative overflow-hidden rounded-t-md">
          <div className="h-48 bg-linear-to-r from-gray-100 to-gray-200">
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
          <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formatDate(blog.blog_created)}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              5 min
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0F3652]">
            {blog.blog_heading}
          </h3>

          <p className="text-gray-600 text-sm mb-5 line-clamp-3 leading-relaxed">
            {blog.blog_short_description}
          </p>

          <div className="flex items-center gap-2 text-[#0F3652] group/readmore">
            <span className="text-sm font-medium">Read Article</span>
            <ArrowRight className="w-4 h-4 group-hover/readmore:translate-x-1 transition-transform" />
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Blogs</h2>
            <div className="flex justify-center gap-1 mt-4">
              <div className="w-2 h-2 bg-[#0F3652] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#0F3652] rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-[#0F3652] rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 rounded-md border border-gray-200 p-5">
                <div className="h-40 bg-linear-to-r from-gray-200 to-gray-300 rounded-md mb-4 animate-pulse"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-300 rounded w-full"></div>
                  <div className="h-3 bg-gray-300 rounded w-2/3"></div>
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Blogs</h2>
            <div className="w-20 h-0.5 bg-gray-300 mx-auto"></div>
          </div>
          <div className="text-center py-12 border border-gray-200 rounded-md bg-gray-50">
            <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No blogs available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <PopUp  slug="Blogs"/>
   
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="text-center mb-12 bg-linear-to-b from-blue-100 to-white rounded-2xl p-2">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Explore expert insights from Academy of Internal Audit
          </h1>
          
          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative">
              <input
                type="text"
                placeholder=" Search smart. Learn Audit, Fraud & AML with AIA..."
                className="w-full px-6 py-2 pr-12 text-lg rounded-2xl focus:outline-none shadow-sm bg-white text-black"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-6 h-6 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

     
        {trendingBlogs.length > 0 && (
          <div className="mb-12 p-4 bg-[#F3AB64]/10 rounded-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl md:text-3xl font-medium text-gray-900">Trending Blog</h2>
              </div>
              <span className="text-sm text-gray-500">
                {trendingBlogs.length} {trendingBlogs.length === 1 ? 'article' : 'articles'} trending
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {trendingBlogs.slice(0, 3).map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {trendingBlogs.length > 3 && (
              <div className="text-center">
                <button
                  className="relative overflow-hidden cursor-pointer flex items-center justify-center px-4 py-2 border border-[#0F3652] mx-auto gap-2 rounded-md font-medium text-sm text-[#0F3652] group"
                  onClick={() => setSelectedCategory('ALL')}
                >
                  <span className="absolute inset-0 bg-[#0F3652] scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
                  <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                    View All Trending Articles
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
            )}
          </div>
        )}

      
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 text-left mb-6">Categories</h2>
          
          <div className="flex flex-wrap justify-start gap-3 mb-8">
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`px-6 py-2 rounded-md text-sm transition-colors duration-200 ${selectedCategory === 'ALL' ? 'bg-[#0F3652] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              ALL
            </button>
            
            {uniqueCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 cursor-pointer rounded-md text-sm transition-colors duration-200 ${selectedCategory === category ? 'bg-[#0F3652] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        
        {selectedCategory === 'ALL' ? (
          uniqueCategories.map((category) => {
            const categoryBlogs = blogs.filter(blog => blog.blog_course === category).slice(0, 3);
            if (categoryBlogs.length === 0) return null;
            
            return (
              <div key={category} className="mb-16 p-4 bg-[#F3AB64]/10 rounded-lg">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl md:text-2xl font-medium text-gray-900">{category}</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
          <div className="p-4 bg-[#F3AB64]/10 rounded-lg">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <h3 className="text-xl md:text-2xl font-medium text-gray-900">{selectedCategory}</h3>
              </div>
              <span className="text-sm text-gray-500">
                Showing {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredBlogs.slice(0, 6).map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {filteredBlogs.length > 6 && (
              <div className="text-center mt-12 pt-8 border-t border-gray-200">
                <button className="inline-flex items-center gap-2 border border-gray-300 hover:border-[#0F3652] text-gray-700 hover:text-[#0F3652] px-6 py-3 rounded-md font-medium transition-colors duration-200">
                  View All {selectedCategory} Articles ({filteredBlogs.length})
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

<div className="flex flex-col items-center justify-center  bg-white px-4">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8 max-w-5xl">
        Grow Better with AIA today
      </h1>
      
      <div className="flex flex-wrap gap-4 justify-center">
      
        
        <button className="px-6 py-3 bg-emerald-400 text-black rounded-lg font-medium hover:bg-emerald-500 transition-colors">
        Contact Now
        </button>
      </div>
    </div>
      </div>
    </section>
     </>
  );
};

export default Blog;