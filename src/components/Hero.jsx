import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToModels = () => {
    const modelsSection = document.getElementById('models');
    if (modelsSection) {
      modelsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Adding animation classes after component mounts
    const title = document.getElementById('hero-title');
    const subtitle = document.getElementById('hero-subtitle');
    const button = document.getElementById('hero-button');
    
    setTimeout(() => {
      title.classList.add('opacity-100', 'translate-y-0');
    }, 300);
    
    setTimeout(() => {
      subtitle.classList.add('opacity-100', 'translate-y-0');
    }, 600);
    
    setTimeout(() => {
      button.classList.add('opacity-100', 'translate-y-0');
    }, 900);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 
            id="hero-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg opacity-0 -translate-y-8 transition-all duration-700"
          >
            Naqshli pol — bir qarashda sevgi!
          </h1>
          <p 
            id="hero-subtitle"
            className="text-lg sm:text-xl md:text-2xl text-white mb-8 drop-shadow-md max-w-3xl mx-auto opacity-0 -translate-y-8 transition-all duration-700"
          >
            Go'zallik, chidamlilik va shaxsiy uslub.
          </p>
          <button 
            id="hero-button"
            onClick={scrollToModels}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-0 -translate-y-8 transition-all duration-700"
          >
            Go'zallikni tanlang
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 