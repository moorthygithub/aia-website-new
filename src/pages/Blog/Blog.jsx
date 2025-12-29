import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Calendar, ArrowRight, Clock, BookOpen, Tag } from "lucide-react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageBaseUrl, setImageBaseUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "https://aia.in.net/webapi/public/api/getAllBlogs"
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  const getCourseColor = (course) => {
    const colors = {
      CIA: "bg-amber-50 text-amber-700 border-amber-200",
      CAMS: "bg-indigo-50 text-indigo-700 border-indigo-200",
      CFE: "bg-blue-50 text-blue-700 border-blue-200",
      default: "bg-gray-50 text-gray-700 border-gray-200"
    };
    return colors[course] || colors.default;
  };

  const handleBlogClick = (slug) => {
    navigate(`/blogs/${slug}`);
  };


  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Blogs</h2>
            <div className="flex justify-center gap-1 mt-4">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-200"></div>
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-gray-600 mb-3">
            <div className="w-4 h-0.5 bg-indigo-500"></div>
            <span className="text-sm font-medium">INSIGHTS</span>
            <div className="w-4 h-0.5 bg-amber-500"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Latest Blogs</h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => handleBlogClick(blog.blog_slug)}
              className="bg-white border border-gray-200 rounded-md hover:border-indigo-400 transition-colors duration-200 cursor-pointer group"
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
                  <span className={`${getCourseColor(blog.blog_course)} text-xs font-medium px-3 py-1.5 rounded border`}>
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

     
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-700">
                  {blog.blog_heading}
                </h3>

             
                <p className="text-gray-600 text-sm mb-5 line-clamp-3 leading-relaxed">
                  {blog.blog_short_description}
                </p>

              
                <div className="flex items-center gap-2 text-indigo-700 group/readmore">
                  <span className="text-sm font-medium">Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover/readmore:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      
        {blogs.length > 3 && (
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <button className="inline-flex items-center gap-2 border border-gray-300 hover:border-indigo-500 text-gray-700 hover:text-indigo-700 px-6 py-3 rounded-md font-medium transition-colors duration-200">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;