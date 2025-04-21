import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import Benefits from '../components/Benefits';
import Contact from '../components/Contact';

export default function ClassicPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link to="/" className="text-accent hover:underline flex items-center group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Bosh sahifaga qaytish
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Klassik Pollar Kollektsiyasi
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bizning klassik pollar kollektsiyamiz an'anaviy va vaqt sinovidan o'tgan dizayn bilan ajralib turadi.
              Har qanday interyer uchun ideal va uzoq muddat xizmat qiluvchi sifatli materiallar bilan.
            </p>
          </motion.div>
        </div>
      </section>
      
      <Gallery model="classic" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <div className="bg-accent/10 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Klassik pollar bo'yicha konsultatsiya olishni xohlaysizmi?
              </h2>
              <p className="text-gray-600 mb-6 md:mb-0">
                Bizning mutaxassislarimiz sizga yordam berishga tayyor. Hoziroq bog'laning!
              </p>
            </div>
            <a 
              href="tel:+998XXXXXXXXX" 
              className="bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 whitespace-nowrap"
            >
              Qo'ng'iroq qilish
            </a>
          </div>
        </div>
      </motion.div>
      
      <Benefits />
      <Contact />
    </div>
  );
} 