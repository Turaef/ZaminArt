import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import a placeholder video - in a real project, use a real video file
// We're using a placeholder comment since we don't have an actual video file
// const heroVideo = new URL('../assets/videos/hero.mp4', import.meta.url).href;

const VideoHero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Using a colored div as placeholder for video */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/80 to-accent/40"></div>
        
        {/* Video would be here in production */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4 z-10">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Naqshli pol — chiroyli va arzon yechim!
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Qishda issiq, yozda salqin. Har qanday xona uchun mos!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link 
            to="/#model-selector" 
            className="bg-accent hover:bg-white hover:text-accent text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('model-selector').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Modelni tanlash
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoHero; 