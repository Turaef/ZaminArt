import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import Benefits from '../components/Benefits';
import Contact from '../components/Contact';

export default function EshikPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="mb-8">
          <Link 
            to="/" 
            className="text-accent hover:text-accent-dark inline-flex items-center transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Bosh sahifaga qaytish
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Zamonaviy va Mustahkam Eshiklar
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Bizning eshiklarimiz zamonaviy dizayn va yuqori darajadagi sifatga ega. 
            Uyingizga nafis go'zallik va ishonchli himoya qo'shishingiz mumkin. 
            Har qanday uslub va interyerga mos keladigan turli xil variantlarni taklif etamiz.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Gallery category="eshik" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 p-8 bg-gray-50 rounded-2xl shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Eshik tanlashda yordam kerakmi?</h2>
          <p className="text-gray-600 mb-5">
            Bizning mutaxassislarimiz sizga eng mos variantni topishda yordam berishadi. 
            Qo'ng'iroq qiling va barcha savollaringizga javob oling.
          </p>
          <a 
            href="tel:+998901234567" 
            className="inline-flex items-center px-5 py-3 bg-accent hover:bg-accent-dark text-white rounded-lg transition-colors font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Biz bilan bog'laning
          </a>
        </motion.div>
      </div>
      
      <Benefits />
      <Contact />
    </div>
  );
} 