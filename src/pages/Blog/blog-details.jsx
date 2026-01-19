import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Calendar, Copy, Clock, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { BASE_URL } from '@/api/base-url';
import BlogFaq from '@/components/blog/blog-faq';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [imageBaseUrl, setImageBaseUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);
  const [students, setStudents] = useState([]);
  const [faq, setFaq] = useState([]);
  const [studentImageBaseUrl, setStudentImageBaseUrl] = useState('');
  const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  useEffect(() => {
    if (id) {
      fetchBlogDetails();
    }
  }, [id]);

  useEffect(() => {
    if (!blog) return;

    document.title = blog.blog_meta_title || blog.blog_heading;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = blog.blog_meta_description || blog.blog_short_description;

    if (blog.blog_meta_keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = blog.blog_meta_keywords;
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = `https://aia.in.net/blogs/${blog.blog_slug}`;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://aia.in.net/blogs/${blog.blog_slug}`
      },
      "headline": blog.blog_heading,
      "description": blog.blog_short_description,
      "image": blog.blog_images
        ? `${imageBaseUrl}${blog.blog_images}`
        : "https://aia.in.net/webapi/public/assets/images/no_image.jpg",
      "author": {
        "@type": "Organization",
        "name": "AIA"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Academy of Internal Audit",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aia.in.net/crm/public/assets/images/logo/new_logo.webp"
        }
      },
      "datePublished": blog.created_at,
      "dateModified": blog.updated_at
    };

    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      if (metaDescription && metaDescription.parentNode === document.head) {
        document.head.removeChild(metaDescription);
      }
      const keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (keywordsMeta && keywordsMeta.parentNode === document.head) {
        document.head.removeChild(keywordsMeta);
      }
      if (canonicalLink && canonicalLink.parentNode === document.head) {
        document.head.removeChild(canonicalLink);
      }
      if (script && script.parentNode === document.head) {
        document.head.removeChild(script);
      }
      document.title = 'AIA | Academy of Internal Audit';
    };
  }, [blog, imageBaseUrl]);

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
        `${BASE_URL}/api/getBlogbySlug/${id}`
      );
      
      const blogData = response.data.data;
      setBlog(blogData);
      setRelatedBlogs(response.data.related_blogs || []);
      setStudents(response.data.student || []);
      setFaq(response.data.faq || []);
      const blogImageConfig = response.data.image_url?.find(
        item => item.image_for === "Blog"
      );
      if (blogImageConfig) {
        setImageBaseUrl(blogImageConfig.image_url);
      }
      const studentImageConfig = response.data.image_url?.find(
        item => item.image_for === "Student"
      );
      if (studentImageConfig) {
        setStudentImageBaseUrl(studentImageConfig.image_url);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blog details:", error);
      setLoading(false);
    }
  };

  const faqHeading = faq?.[0]?.faq_heading || "FAQs";
  const faqItems = faq?.map((item, index) => ({
    id: `item-${index + 1}`,
    question: item.faq_que,
    answer: item.faq_ans,
  })) || [];

  useEffect(() => {
    if (faqItems.length > 0) {
      const existingScript = document.querySelector(
        'script[type="application/ld+json"][data-faq-schema]'
      );
      if (existingScript) {
        existingScript.remove();
      }

      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-faq-schema", "true");
      script.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(script);

      return () => {
        if (script && document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, [faqItems]);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setSubscriptionStatus('Please enter a valid email address');
      setTimeout(() => setSubscriptionStatus(''), 3000);
      return;
    }
    
    setIsSubscribing(true);
    setSubscriptionStatus('');
    
    try {
      const response = await axios.post(
        `${BASE_URL}/api/create-newslettersubscription`,
        {
          newsletter_email: email
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );
      
      if (response.data.code === 200) {
        setSubscriptionStatus(response.data.msg || 'Successfully subscribed! Thank you.');
        setEmail('');
      } else {
        setSubscriptionStatus(response.data.message || 'Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      if (error.response) {
        setSubscriptionStatus(
          error.response.data.message || 
          error.response.data.error || 
          'Subscription failed. Please try again.'
        );
      } else if (error.request) {
        setSubscriptionStatus('Network error. Please check your connection.');
      } else {
        setSubscriptionStatus('An error occurred. Please try again.');
      }
    } finally {
      setIsSubscribing(false);
      setTimeout(() => setSubscriptionStatus(''), 5000);
    }
  };

  const scrollToSection = (index) => {
    setActiveSection(index);
    const element = sectionRefs.current[index];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (students.length > 1) {
      const interval = setInterval(() => {
        setCurrentStudentIndex((prevIndex) => 
          prevIndex === students.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
  
      return () => clearInterval(interval);
    }
  }, [students]);
 
  const nextStudent = () => {
    setCurrentStudentIndex((prevIndex) => 
      prevIndex === students.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevStudent = () => {
    setCurrentStudentIndex((prevIndex) => 
      prevIndex === 0 ? students.length - 1 : prevIndex - 1
    );
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
      CIA: 'bg-[#F3831C]/20 text-[#F3831C] border-[#F3831C]/30',
      CAMS: 'bg-[#F3831C]/20 text-[#F3831C] border-[#F3831C]/30',
      CFE: 'bg-[#F3831C]/20 text-[#F3831C] border-[#F3831C]/30',
      default: 'bg-[#0F3652]/10 text-[#0F3652] border-[#0F3652]/20'
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
        <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-[#0F3652]/10 rounded w-1/4 mb-8"></div>
            <div className="h-64 bg-[#0F3652]/10 rounded"></div>
            <div className="space-y-4">
              <div className="h-6 bg-[#0F3652]/10 rounded w-3/4"></div>
              <div className="h-4 bg-[#0F3652]/10 rounded w-full"></div>
              <div className="h-4 bg-[#0F3652]/10 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-[#0F3652] mb-4">Blog not found</h1>
          <button
            onClick={goBack}
            className="inline-flex items-center gap-2 text-[#0F3652] hover:text-[#0F3652] font-medium "
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
      <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={goBack}
          className="inline-flex items-center gap-2 text-[#0F3652] hover:text-[#0F3652] mb-8 font-medium cursor-pointer"
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
              
              <h1 className="text-3xl md:text-4xl font-bold text-[#0F3652] mb-4">
                {blog.blog_heading}
              </h1>
              
              {blog.blog_short_description && (
                <p className="text-lg text-[#0F3652] mb-6">
                  {blog.blog_short_description}
                </p>
              )}
              
              <div className="flex flex-wrap items-center gap-4 text-[#0F3652] text-sm">
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

            <div className="lg:w-1/2">
              <div className="relative aspect-video rounded-md overflow-hidden">
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
                    <ImageIcon className="h-12 w-12 text-[#0F3652] mb-2" />
                    <p className="text-sm text-[#0F3652]">Blog Image</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {blog.web_blog_subs?.length > 0 && (
            <aside className="lg:w-1/4">
              <div className="sticky top-28">
                <nav className="bg-[#0F3652]/5 rounded-md p-4 border border-[#0F3652]/20">
                  <h3 className="font-semibold text-[#0F3652] mb-1 pb-1 border-b">Table of Contents</h3>
                  <ul className="space-y-1">
                    {blog.web_blog_subs.map((sub, index) => (
                      <li key={sub.id}>
                        <button
                          onClick={() => scrollToSection(index)}
                          className={`w-full text-left p-1 rounded text-sm transition-colors ${
                            activeSection === index
                              ? 'bg-[#F3831C]/10 text-[#F3831C] border-l-4 border-[#F3831C]'
                              : 'text-[#0F3652] hover:bg-[#0F3652]/5'
                          }`}
                        >
                          {sub.blog_sub_heading || `Section ${index + 1}`}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
                
                <div className="max-w-md mx-auto p-1 space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-medium text-[#0F3652]">
                      Subscribe to newsletter
                    </h2>
                    
                    <form onSubmit={handleSubscribe} className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-[#0F3652]/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#F3831C] focus:border-transparent text-[#0F3652] placeholder-[#0F3652]/50"
                        required
                      />
                      
                      <button
                        type="submit"
                        disabled={isSubscribing}
                        className={`w-full py-3 ${isSubscribing ? 'bg-[#F3831C]/70' : 'bg-[#F3831C] hover:bg-[#F3831C]/90'} text-white font-semibold rounded-2xl transition-colors disabled:cursor-not-allowed`}
                      >
                        {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                      </button>
                    </form>
                    
                    {subscriptionStatus && (
                      <div className={`text-sm ${subscriptionStatus.includes('Success') ? 'text-[#F3831C]' : 'text-[#F3831C]'} font-medium text-center`}>
                        {subscriptionStatus}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-[#0F3652]">
                      Share this blog
                    </h3>
                    
                    <div className="flex gap-3">
                      <button className="p-3 border border-[#0F3652]/20 rounded-lg hover:bg-[#0F3652]/5 transition-colors">
                        <Copy className="w-5 h-5 text-[#0F3652]" />
                      </button>
                      
                      <button className="p-3 border border-[#0F3652]/20 rounded-lg hover:bg-[#0F3652]/5 transition-colors">
                        <svg className="w-5 h-5 text-[#0F3652]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </button>
                      
                      <button className="p-3 border border-[#0F3652]/20 rounded-lg hover:bg-[#0F3652]/5 transition-colors">
                        <svg className="w-5 h-5 text-[#0F3652]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </button>
                      
                      <button className="p-3 border border-[#0F3652]/20 rounded-lg hover:bg-[#0F3652]/5 transition-colors">
                        <svg className="w-5 h-5 text-[#0F3652]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
               
              </div>
            </aside>
          )}

          <main className={`
            ${blog.web_blog_subs?.length > 0 ? 'lg:w-3/4' : 'w-full'} 
            ${blog.web_blog_subs?.length > 0 && relatedBlogs.length > 0 ? 'lg:w-2/4' : ''}
          `}>
            {blog.web_blog_subs?.length > 0 ? (
              <div className="space-y-12">
                {blog.web_blog_subs.map((sub, index) => (
                  <article 
                    key={sub.id}
                    id={`section-${index}`}
                    ref={el => sectionRefs.current[index] = el}
                    className="scroll-mt-8"
                  >
                    <h2 className="text-2xl font-bold mb-6 text-[#0F3652] pb-3 border-b">
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
              <div className="text-center py-12 text-[#0F3652]">
                No content available for this blog.
              </div>
            )}
            
            <BlogFaq
              title={faqHeading}        
              faqs={faqItems}           
            />
          </main>
          
          {blog.web_blog_subs?.length > 0 && (
            <aside className="lg:w-1/4">
              <div className=" sticky top-26">
                {relatedBlogs.length > 0 && (
                  <section className="border-[#0F3652]/20 ">
                    <div className="mb-2">
                      <h3 className="text-2xl font-bold text-[#0F3652]">Related Articles</h3>
                      <p className="text-[#0F3652] ">You might also be interested in these articles</p>
                    </div>
                    
                    <div className="grid gap-2">
                     
                      
                      {relatedBlogs.map((relatedBlog) => (
                        <div
                          key={relatedBlog.id}
                          onClick={() => handleRelatedBlogClick(relatedBlog.blog_slug)}
                          className="flex gap-2 p-1 border border-[#0F3652]/20 rounded-md hover:border-[#F3831C] cursor-pointer transition-all group"
                        >
                          <div className="w-16 h-16 shrink-0 overflow-hidden rounded-md bg-[#0F3652]/10">
                            <img
                              src={`${imageBaseUrl}${relatedBlog.blog_images}`}
                              alt={relatedBlog.blog_images_alt || relatedBlog.blog_heading}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                e.target.src = "https://aia.in.net/webapi/public/assets/images/no_image.jpg";
                              }}
                            />
                          </div>

                          <div className="flex flex-col justify-between flex-1">
                            <div>
                              <h4 className="text-base font-semibold text-[#0F3652] line-clamp-2 group-hover:text-[#F3831C]">
                                {relatedBlog.blog_heading}
                              </h4>
                            </div>

                            <div className="flex items-center gap-4 text-[#0F3652] text-xs mt-1">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {formatDate(relatedBlog.blog_created)}
                              </div>
                              {/* <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />5 min read
                              </div> */}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                 {students.length > 0 && (
                  <div className="mt-6 bg-[#0F3652]/5 rounded-lg p-2 border border-[#0F3652]/20">
                    <h3 className="font-semibold text-[#0F3652] mb-2"> Recently Passed Out Students</h3>
                    
                    <div className="relative group">
                      <div className="overflow-hidden rounded-xl">
                        <div 
                          className="flex transition-transform duration-700 ease-out"
                          style={{ transform: `translateX(-${currentStudentIndex * 100}%)` }}
                        >
                          {students.map((student, index) => (
                            <div key={index} className="min-w-full">
                              <div className="relative h-auto overflow-hidden rounded-xl">
                                <img
                                  src={`${studentImageBaseUrl}${student.student_image}`}
                                  alt={student.student_image_alt || student.student_name}
                                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                  onError={(e) => {
                                    e.target.src = "https://aia.in.net/webapi/public/assets/images/no_image.jpg";
                                  }}
                                />
                                
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent"></div>
                                
                                <div className="absolute bottom-0 left-0 right-0 p-5 transition-opacity duration-300 group-hover:opacity-0">
                                  <div className="flex flex-col items-center text-center">
                                    <h4 className="font-semibold text-white text-xl mb-2">
                                      {student.student_name}
                                    </h4>
                                    
                                   
                                  </div>
                                </div>

                                 {student.student_course && (
                                      <span className={` absolute top-0 right-0 ${getCourseColor(student.student_course)} text-sm font-medium px-4 py-1.5  rounded-bl-md   border-0`}>
                                        {student.student_course}
                                      </span>
                                    )}


                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {students.length > 1 && (
                        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex items-center justify-between">
                            <button
                              onClick={prevStudent}
                              className="bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center transition-all hover:scale-110"
                              aria-label="Previous student"
                            >
                              <ArrowLeft className="w-4 h-4 text-white" />
                            </button>
                            
                            <button
                              onClick={nextStudent}
                              className="bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center transition-all hover:scale-110"
                              aria-label="Next student"
                            >
                              <ArrowLeft className="w-4 h-4 text-white rotate-180" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;