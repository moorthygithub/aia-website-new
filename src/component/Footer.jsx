import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-[#1a2332] to-[#0f172a] text-white">
  
      <div className="max-w-340 mx-auto px-4  py-16">
        
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-4">
          
       
          <div className="space-y-6">
            <h4 className="text-[#fa8017] font-bold text-xl mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#fa8017] -mb-2"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about-us' },
                { name: 'Blog', href: '/blogs' },
                { name: 'Our Passout', href: '/passed-out' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'Policies', href: '/policies' },
                { name: 'Terms and Conditions', href: '/terms-and-conditions' }
              ].map((link, idx) => (
                <li key={idx} className="group">
                  <a href={link.href} className="flex items-center gap-3 text-gray-300 hover:text-[#fa8017] transition-all duration-300 text-sm">
                    <span className="text-[#fa8017] group-hover:translate-x-1 transition-transform duration-300">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
          <div className="space-y-6">
            <h4 className="text-[#fa8017] font-bold text-xl mb-6 relative inline-block">
              Courses
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#fa8017] -mb-2"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'CFE Curriculum', href: '/cfe-curriculum' },
                { name: 'Become CFE in Just 30 Days', href: '/become-cfe-in-just-30-days' },
                { name: 'CIA Curriculum', href: '/cia-curriculum' },
                { name: 'Become CIA in Just 90 Days', href: '/become-cia-in-just-90-days' },
                { name: 'CIA Challenge Curriculum', href: '/cia-challenge-curriculum' },
                { name: 'CIA Challenge Prep Course', href: '/cia-challenge-prep-course' },
                { name: 'CAMS', href: '/cams' }
              ].map((course, idx) => (
                <li key={idx} className="group">
                  <a href={course.href} className="flex items-center gap-3 text-gray-300 hover:text-[#fa8017] transition-all duration-300 text-sm">
                    <span className="text-[#fa8017] group-hover:translate-x-1 transition-transform duration-300">›</span>
                    <span>{course.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

      
          <div className="space-y-6">
            <h4 className="text-[#fa8017] font-bold text-xl mb-6 relative inline-block">
              Location
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#fa8017] -mb-2"></span>
            </h4>
            <div className="w-full h-72 rounded-xl overflow-hidden shadow-2xl border-2 border-gray-700 hover:border-[#fa8017] transition-all duration-300">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://maps.google.com/maps?q=Academy of Internal Audit, SRS City, Sector 87, Faridabad, Haryana 121002&t=&z=10&ie=UTF8&iwloc=&output=embed" 
                frameBorder="0" 
                scrolling="no"
                className="w-full h-full"
                title="AIA Location"
              />
            </div>
          </div>

          
          <div className="space-y-6">
            <h4 className="text-[#fa8017] font-bold text-xl mb-6 relative inline-block">
              Registered Office
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#fa8017] -mb-2"></span>
            </h4>
            <div className="space-y-4">
              <p className="font-bold text-white text-lg">
                ACADEMY OF INTERNAL AUDIT
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                C826-828, Vipul Plaza, Sector-81,<br />
                Faridabad, Delhi - NCR 121002, India
              </p>
              <a href="tel:+01294174177" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#fa8017] transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Tel: 0129-417-4177</span>
              </a>
              <div className="flex gap-4 items-start bg-gray-800/50 p-4 rounded-lg">
                <svg className="w-6 h-6 text-[#fa8017] shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div className="text-sm space-y-2">
                  <a href="mailto:support@aia.in.net" className="block text-gray-300 hover:text-[#fa8017] transition-colors duration-300">
                    support@aia.in.net
                  </a>
                  <a href="mailto:contact@aia.in.net" className="block text-gray-300 hover:text-[#fa8017] transition-colors duration-300">
                    contact@aia.in.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="w-full h-px bg-linear-to-r from-transparent via-gray-700 to-transparent mb-4"></div>

        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
         
            <div>
              <h4 className="text-[#fa8017] font-bold text-xl mb-6 relative inline-block">
                Global Contact
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#fa8017] -mb-2"></span>
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
                <div className="text-center bg-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-[#fa8017] transition-all">
                  <h5 className="text-white font-bold mb-3">INDIA</h5>
                  <div className="flex justify-center gap-2 mb-3">
                    <a href="tel:+919717597197" className="bg-[#fa8017] text-white p-2 rounded-full hover:scale-110 transition-transform">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </a>
                    <a href="https://wa.me/+919311320114" target="_blank" rel="noopener" className="bg-[#25D366] text-white p-2 rounded-full hover:scale-110 transition-transform">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </a>
                  </div>
                  <div className="space-y-1 text-xs text-gray-300">
                    <a href="tel:+919717597197" className="block hover:text-[#fa8017]">+91-97175-97197</a>
                    <a href="tel:+919311320114" className="block hover:text-[#fa8017]">+91-93113-20114</a>
                  </div>
                </div>

                {/* Indonesia */}
                <div className="text-center bg-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-[#fa8017] transition-all">
                  <h5 className="text-white font-bold mb-3">INDONESIA</h5>
                  <div className="flex justify-center mb-3">
                    <a href="https://wa.me/+628117991185" target="_blank" rel="noopener" className="bg-[#25D366] text-white p-2 rounded-full hover:scale-110 transition-transform">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </a>
                  </div>
                  <a href="tel:+628117991185" className="text-xs text-gray-300 hover:text-[#fa8017]">+62-8117991185</a>
                </div>

                {/* Vietnam */}
                <div className="text-center bg-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-[#fa8017] transition-all">
                  <h5 className="text-white font-bold mb-3">VIETNAM</h5>
                  <div className="flex justify-center gap-2 mb-3">
                    <div className="bg-white p-1 rounded-full">
                      <img src="https://aia.in.net/assets/images/Zalo.webp" alt="Zalo" className="w-4 h-4" />
                    </div>
                    <a href="tel:+84911677672" className="bg-[#fa8017] text-white p-2 rounded-full hover:scale-110 transition-transform">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </a>
                    <a href="https://wa.me/+84911677672" target="_blank" rel="noopener" className="bg-[#25D366] text-white p-2 rounded-full hover:scale-110 transition-transform">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </a>
                  </div>
                  <a href="tel:+84911677672" className="text-xs text-gray-300 hover:text-[#fa8017]">+84-911677672</a>
                </div>
              </div>
            </div>

           
            <div>
              <h4 className="text-[#fa8017] font-bold text-xl mb-6 relative inline-block">
                Payment & Accreditation
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#fa8017] -mb-2"></span>
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
                <div className="space-y-2">
                  <div className="p-2">
                    <img src="https://aia.in.net/crm/public/assets/images/payment.png" alt="Payment methods" className="w-full" />
                  </div>
                  <a href="tel:+18001200255" className="block hover:scale-105 transition-transform">
                    <div className=" rounded-xl p-4">
                      <img src="https://aia.in.net/crm/public/assets/images/logo/toll free.png" alt="Toll Free" className="w-full" />
                    </div>
                  </a>
                </div>

            
                <div className="flex flex-row justify-center gap-4">
                  <a href="https://www.iao.org/India-Haryana/Academy-of-Internal-Audit" target="_blank" rel="noopener" className="group mx-auto">
                    <div className="bg-white rounded-full p-2 shadow-xl hover:shadow-[#fa8017]/30 transition-all group-hover:scale-110 border-2 border-gray-700 group-hover:border-[#fa8017]">
                      <img src="https://www.iao.org/assets/images/email/seal/iao-seal.png" alt="IAO" className="w-20 h-20" />
                    </div>
                  </a>
                  <a href="https://www.gsaaa.org/india/academy-of-internal-audit" target="_blank" rel="noopener" className="group mx-auto">
                    <div className="bg-white rounded-full p-2 shadow-xl hover:shadow-[#fa8017]/30 transition-all group-hover:scale-110 border-2 border-gray-700 group-hover:border-[#fa8017]">
                      <img src="https://aia.in.net/crm/public/assets/images/brand/GSAAA.png" alt="GSAAA" className="w-20 h-20" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black/30 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Academy of Internal Audit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}