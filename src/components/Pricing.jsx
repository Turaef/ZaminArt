import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Pricing = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  
  const pricingFeatures = [
    "Materiallar va ishchilar",
    "Professional o'rnatish",
    "2 yil kafolat",
    "Bepul konsultatsiya",
    "Namunalar katalogi"
  ];

  const handleCallButtonClick = () => {
    setIsButtonPressed(true);
    // Reset animation after 500ms
    setTimeout(() => setIsButtonPressed(false), 500);
    // The automatic call will be initiated by the href="tel:" attribute
  };

  return (
    <AnimatedSection id="pricing" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Narxlar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sifatli pol - bu uzoq muddatli investitsiya. Biz eng yaxshi sifatni 
            hamyonbop narxlarda taklif qilamiz.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <motion.div 
            className="w-full lg:w-2/3 bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-8 bg-accent text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Standart paket</h3>
              <div className="text-5xl font-bold mb-2">
                $29.9
              </div>
              <p className="opacity-90">Barcha materiallar va o'rnatish bilan</p>
            </div>
            
            <div className="p-8">
              <ul className="space-y-4">
                {pricingFeatures.map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-6">
                  Yetkazish va o'rnatish xizmati mavjud
                </p>
                
                <motion.a 
                  href="tel:+998909433444" 
                  className={`inline-block bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform ${isButtonPressed ? 'scale-95 bg-green-700' : 'hover:scale-105'}`}
                  onClick={handleCallButtonClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95, backgroundColor: "#4a8c42" }}
                  animate={isButtonPressed ? 
                    { scale: [1, 0.95, 1.05, 1], backgroundColor: ["#7BB66D", "#4a8c42", "#7BB66D"] } : 
                    {}
                  }
                  transition={{ duration: 0.4 }}
                >
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +998 90 943 3444
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* Additional services section removed */}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Pricing; 