import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Import the obstract image directly from assets
import abstrackImage from '../assets/hero/obstract.png';
import naqshlikImage from '../assets/hero/naqshlar.png';

const ModelSelector = () => {
  const [modelImages, setModelImages] = useState({
    '3d': [],
    'abstrack': [],
    'naqshlik': []
  });

  useEffect(() => {
    // Function to get all images from a specific folder
    const getImagesFromFolder = async (folderName) => {
      try {
        // In a real environment, we would dynamically fetch images from the server
        // For now, we'll simulate this by assuming specific image names
        // You'll need to place actual images in these folders:
        // public/images/3d, public/images/abstrack, public/images/naqshlik
        
        // Assuming there are 3 images in each folder named 1.jpg, 2.jpg, 3.jpg
        const imageCount = 3;
        return Array.from({ length: imageCount }, (_, i) => ({
          id: i + 1,
          path: `/images/${folderName}/${i + 1}.jpg`,
          alt: `${folderName} model ${i + 1}`
        }));
      } catch (error) {
        console.error(`Error loading images from ${folderName} folder:`, error);
        return [];
      }
    };

    // Get images for each model type
    const loadAllImages = async () => {
      const threeDImages = await getImagesFromFolder('3d');
      const abstrackImages = await getImagesFromFolder('abstrack');
      const naqshlikImages = await getImagesFromFolder('naqshlik');
      
      setModelImages({
        '3d': threeDImages,
        'abstrack': abstrackImages,
        'naqshlik': naqshlikImages
      });
    };

    loadAllImages();
  }, []);

  const models = [
    {
      id: '3d',
      title: '3D',
      description: 'Zamonaviy 3D pollar - xonangiz uchun eng yaxshi yechim',
    },
    {
      id: 'abstrack',
      title: 'Abstrack',
      description: 'Abstrakt dizaynlar bilan xonangizga zamonaviy ko\'rinish bering',
    },
    {
      id: 'naqshlik',
      title: 'Naqshlik',
      description: 'An\'anaviy naqshlar bilan qulay va chiroyli pollar',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Function to get a random image for each model
  const getModelImage = (modelId) => {
    const images = modelImages[modelId];
    if (images && images.length > 0) {
      // Get a random image from the available images
      const randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex].path;
    }
    // Fallback to placeholder if no images are available
    return `https://via.placeholder.com/400x300/e2e8f0/64748b?text=${modelId}`;
  };

  return (
    <section id="models" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Modelni tanlash
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Har qanday xona uchun mos keladigan pollar. O'zingizga yoqqan dizaynni tanlang va biz sizga yordam beramiz.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {models.map((model) => (
            <motion.div key={model.id} variants={item}>
              <Link to={`/${model.id}`}>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 h-full">
                  <div className="h-48 overflow-hidden">
                    {model.id === '3d' ? (
                      <img 
                        src="/3D.png" 
                        alt="3D model" 
                        className="w-full h-full object-cover rounded-t-2xl shadow-md transition duration-500 ease-in-out transform hover:scale-110"
                      />
                    ) : model.id === 'abstrack' ? (
                      <img 
                        src={abstrackImage} 
                        alt="Abstract design" 
                        className="w-full h-48 object-cover rounded-t-lg transition duration-500 ease-in-out transform hover:scale-110"
                      />
                    ) : model.id === 'naqshlik' ? (
                      <img 
                        src={naqshlikImage} 
                        alt="Naqshli pol dizayni" 
                        className="w-full h-[200px] object-cover rounded-t-lg transition duration-500 ease-in-out transform hover:scale-110"
                      />
                    ) : (
                      <img 
                        src={getModelImage(model.id)} 
                        alt={model.title} 
                        className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-110"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://via.placeholder.com/400x300/e2e8f0/64748b?text=${model.id}`;
                        }}
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{model.title}</h3>
                    <p className="text-gray-600 mb-4">{model.description}</p>
                    <div className="flex justify-end">
                      <span className="text-accent font-medium flex items-center">
                        Batafsil
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModelSelector; 