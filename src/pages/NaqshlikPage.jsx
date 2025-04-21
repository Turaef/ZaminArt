import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import NaqshlikGallery from '../components/NaqshlikGallery'
import Benefits from '../components/Benefits'

export default function NaqshlikPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero section - immediately visible without scrolling */}
      <section className="pt-6 pb-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-6">
            <div className="inline-block">
              <Link 
                to="/" 
                className="bg-white flex items-center py-2 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-200 group"
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
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Naqshlik Modellar
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Milliy va zamonaviy naqshlar bilan yaratilgan pollar. 
              Xonadoningizga ajoyib va betakror ko'rinish bering.
            </p>
          </div>
        </div>
      </section>
        
      {/* Gallery section */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <NaqshlikGallery />
        </div>
      </section>
      
      <Benefits />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-accent/10 rounded-2xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                Naqshlik pollar haqida maslahat olishni xohlaysizmi?
              </h2>
              <p className="text-gray-600 mb-6 md:mb-0 text-sm md:text-base">
                Bizning mutaxassislarimiz sizga yordam berishga tayyor. Hoziroq bog'laning!
              </p>
            </div>
            <a 
              href="tel:+998909433444" 
              className="bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 md:px-8 rounded-xl shadow-md hover:shadow-lg transition duration-200 ease-in-out whitespace-nowrap flex items-center w-full md:w-auto justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +998 90 943 3444
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 