import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function EcoPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero section - simplified */}
      <section className="pt-6 pb-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-6">
            <Link 
              to="/" 
              className="inline-block bg-white flex items-center py-2 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <div className="bg-accent/10 rounded-full p-1 mr-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 text-accent group-hover:-translate-x-1 transition-transform duration-200" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
              <span className="font-medium text-gray-700 group-hover:text-accent transition-colors duration-200">
                Bosh sahifaga qaytish
              </span>
            </Link>
          </div>
          
          {/* Title section - removed 3D Modellar section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Eko Dizayn
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Tabiiy materiallardan tayyorlangan ekologik toza mahsulotlarimiz bilan tanishing.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main content - optimized for performance */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Using more efficient rendering with native CSS */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="h-56 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Eko mahsulot {item}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">Eko {item}</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Tabiiy materiallardan tayyorlangan ekologik toza mahsulot
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to action - simplified animations */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-accent/10 rounded-2xl p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                  Eko dizayn bo'yicha maslahat olishni xohlaysizmi?
                </h2>
                <p className="text-gray-600 mb-6 md:mb-0">
                  Bizning mutaxassislarimiz sizga yordam berishga tayyor. Hoziroq bog'laning!
                </p>
              </div>
              <a 
                href="tel:+998909433444" 
                className="bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 md:px-8 rounded-xl shadow-md hover:shadow-lg transition duration-200 ease-in-out w-full md:w-auto text-center"
              >
                <span className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +998 90 943 3444
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 