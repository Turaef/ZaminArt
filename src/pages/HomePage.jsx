import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Benefits from '../components/Benefits';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="relative overflow-hidden bg-gray-50 py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10 md:mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Uyingiz uchun eng sifatli eshik va mebellar
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zamonaviy va mustahkam eshiklar, qulay mebellar bilan uyingizni yangi darajaga ko'taring
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <ProductCard 
              title="Zamonaviy Eshiklar" 
              description="Eng sifatli zamonaviy dizayndagi eshiklar" 
              link="/eshik"
              image="/images/door.jpg" 
            />
            <ProductCard 
              title="Qulay Mebellar" 
              description="Uyingiz uchun eng sifatli mebel kollektsiyasi" 
              link="/mebell"
              image="/images/furniture.jpg" 
            />
          </motion.div>
        </div>
      </section>
      
      <Benefits />
      <Contact />
    </div>
  );
}

function ProductCard({ title, description, link, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
      </div>
      <div className="p-6 relative">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center font-semibold text-accent group-hover:underline"
        >
          Ko'rish
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
} 