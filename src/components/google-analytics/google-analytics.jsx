// components/GoogleAnalytics.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    const fetchAndInjectGTag = async () => {
      try {
        const response = await axios.get('https://aia.in.net/webapi/public/api/getGTag');
        
        if (response.data?.data?.gtag) {
          const existingScripts = document.querySelectorAll('script[src*="googletagmanager"]');
          const existingInlineScripts = document.querySelectorAll('script:not([src])');
          
          existingScripts.forEach(script => {
            if (script.textContent.includes('dataLayer') || script.textContent.includes('gtag')) {
              script.remove();
            }
          });
          
          existingInlineScripts.forEach(script => {
            if (script.textContent.includes('dataLayer') || script.textContent.includes('gtag')) {
              script.remove();
            }
          });

      
          const scriptElement = document.createElement('script');
          scriptElement.innerHTML = response.data.data.gtag;
          scriptElement.async = true;
          document.head.appendChild(scriptElement);
        }
      } catch (error) {
        console.error('Error fetching Google Analytics tag:', error);
      }
    };

    fetchAndInjectGTag();
    
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title
      });
    }
  }, [location.pathname, location.search]);

  return null; 
};

export default GoogleAnalytics;