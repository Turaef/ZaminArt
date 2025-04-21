import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// This is a placeholder component as we don't have the actual images yet
const Gallery = ({ model, showTitle = false }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Placeholder images with more realistic structure
  const getImagesByModel = (modelType) => {
    const count = 6;
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      src: `https://via.placeholder.com/800x600/e2e8f0/64748b?text=${modelType}+${i + 1}`,
      alt: `${modelType} model ${i + 1}`,
      title: `${modelType} model ${i + 1}`,
      description: `${modelType} poli namunasi ${i + 1}`
    }));
  };

  const images = getImagesByModel(model);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 1, y: 0 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section id="gallery" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {model === '3d' && '3D Modellar'}
              {model === 'abstrack' && 'Abstrack Modellar'}
              {model === 'naqshlik' && 'Naqshlik Modellar'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Eng yaxshi dizaynlar bizda. Yuqori sifatli va zamonaviy pollar.
            </p>
          </div>
        )}

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((image) => (
            <div
              key={image.id}
              className="cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800">{image.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.9 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition duration-300 z-10"
                onClick={closeLightbox}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery; 