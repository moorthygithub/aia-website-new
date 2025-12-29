import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Calendar, Clock, ArrowLeft, Image as ImageIcon } from 'lucide-react';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [imageBaseUrl, setImageBaseUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    if (id) {
      fetchBlogDetails();
    }
  }, [ id]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [blog]);

  const fetchBlogDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://aia.in.net/webapi/public/api/getBlogbySlug/${id}`
      );
      
      const blogData = response.data.data;
      setBlog(blogData);
      setRelatedBlogs(response.data.related_blogs || []);
      
     
      const blogImageConfig = response.data.image_url?.find(
        item => item.image_for === "Blog"
      );
      if (blogImageConfig) {
        setImageBaseUrl(blogImageConfig.image_url);
      }
      
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blog details:", error);
      setLoading(false);
    }
  };

  const scrollToSection = (index) => {
    setActiveSection(index);
    const element = sectionRefs.current[index];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getCourseColor = (course) => {
    const colors = {
      CIA: 'bg-amber-50 text-amber-700 border-amber-200',
      CAMS: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      CFE: 'bg-blue-50 text-blue-700 border-blue-200',
      default: 'bg-gray-50 text-gray-700 border-gray-200'
    };
    return colors[course] || colors.default;
  };

  const handleRelatedBlogClick = (slug) => {
    navigate(`/blogs/${slug}`);
    window.scrollTo(0, 0);
  };

  const goBack = () => {
    navigate('/blogs');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="space-y-4">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog not found</h1>
          <button
            onClick={goBack}
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
     
        <button
          onClick={goBack}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </button>

  
        <header className="mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
     
            <div className="lg:w-1/2">
        
              {blog.blog_course && (
                <span className={`inline-block ${getCourseColor(blog.blog_course)} text-sm font-medium px-3 py-1.5 rounded border mb-4`}>
                  {blog.blog_course}
                </span>
              )}
              
           
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {blog.blog_heading}
              </h1>
              
         
              {blog.blog_short_description && (
                <p className="text-lg text-gray-600 mb-6">
                  {blog.blog_short_description}
                </p>
              )}
              
         
              <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={blog.blog_created}>
                    {formatDate(blog.blog_created)}
                  </time>
                </div>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
                
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:w-1/2">
              <div className="relative aspect-video rounded-md  overflow-hidden">
                {blog.blog_images ? (
                  <img 
                    src={`${imageBaseUrl}${blog.blog_images}`}
                    alt={blog.blog_images_alt || blog.blog_heading}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src = "https://aia.in.net/webapi/public/assets/images/no_image.jpg";
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <ImageIcon className="h-12 w-12 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">Blog Image</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

 
        <div className="flex flex-col lg:flex-row gap-8">

          {blog.web_blog_subs?.length > 0 && (
            <aside className="lg:w-1/4">
              <div className="sticky top-8">
                <nav className="bg-gray-50 rounded-md p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-3 pb-2 border-b">Table of Contents</h3>
                  <ul className="space-y-2 h-80 overflow-y-auto overflow-hidden">
                    {blog.web_blog_subs.map((sub, index) => (
                      <li key={sub.id}>
                        <button
                          onClick={() => scrollToSection(index)}
                          className={`w-full text-left p-2 rounded text-sm transition-colors ${
                            activeSection === index
                              ? 'bg-indigo-50 text-indigo-700 border-l-4 border-indigo-600'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {sub.blog_sub_heading || `Section ${index + 1}`}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>
          )}

      
          <main className={`${blog.web_blog_subs?.length > 0 ? 'lg:w-3/4' : 'w-full'}`}>
            {blog.web_blog_subs?.length > 0 ? (
              <div className="space-y-12">
                {blog.web_blog_subs.map((sub, index) => (
                  <article 
                    key={sub.id}
                    id={`section-${index}`}
                    ref={el => sectionRefs.current[index] = el}
                    className="scroll-mt-8"
                  >
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 pb-3 border-b">
                      {sub.blog_sub_heading || `Section ${index + 1}`}
                    </h2>
                    <div className="prose prose-gray max-w-none">
                      <div 
                        className="ck-content"
                        dangerouslySetInnerHTML={{ __html: sub.blog_sub_description }} 
                      />
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                No content available for this blog.
              </div>
            )}

         
            {relatedBlogs.length > 0 && (
              <section className="mt-16 pt-8 border-t border-gray-200">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">Related Articles</h3>
                  <p className="text-gray-600 mt-2">You might also be interested in these articles</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                  {relatedBlogs.map((relatedBlog) => (
                    <div
                      key={relatedBlog.id}
                      onClick={() => handleRelatedBlogClick(relatedBlog.blog_slug)}
                      className="bg-white border border-gray-200 rounded-md overflow-hidden hover:border-indigo-300 cursor-pointer transition-all duration-200 group"
                    >
    
                      <div className="relative h-48 bg-linear-to-r from-gray-100 to-gray-200 overflow-hidden">
                        <img
                          src={`${imageBaseUrl}${relatedBlog.blog_images}`}
                          alt={relatedBlog.blog_images_alt || relatedBlog.blog_heading}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.src = "https://aia.in.net/webapi/public/assets/images/no_image.jpg";
                          }}
                        />
             
                        <div className="absolute top-3 left-3">
                          <span className={`${getCourseColor(relatedBlog.blog_course)} text-xs font-medium px-2 py-1 rounded border`}>
                            {relatedBlog.blog_course}
                          </span>
                        </div>
                      </div>

        
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-700">
                          {relatedBlog.blog_heading}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {relatedBlog.blog_short_description}
                        </p>
                        <div className="flex items-center justify-between text-gray-500 text-xs pt-3 border-t border-gray-100">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(relatedBlog.blog_created)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            5 min read
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;