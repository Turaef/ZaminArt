import React, { useState, useEffect } from 'react';

const NaqshlikGallery = () => {
  const [naqshlikImages, setNaqshlikImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Custom titles and descriptions for naqshlik images
  const customDesigns = [
    {
      title: 'Imperial Klassika',
      description: 'Qirollik saroyidagi murakkab markaziy naqsh — hashamatli interyerlar uchun.',
    },
    {
      title: 'Sharqona Guldasta',
      description: 'Ananaviy gullar bilan toldirilgan dizayn — klassik va zamonaviy uygunlik.',
    },
    {
      title: 'Sokin Marmar',
      description: 'Tabiiy marmar korinishidagi silliq va zamonaviy kafel dizayni.',
    },
    {
      title: 'Saray Bezaklari',
      description: 'Oltin naqshlar va geometrik uygunlik — mehmonxonalar uchun ideal tanlov.',
    },
    {
      title: 'Gulzor Polati',
      description: 'Tabiat ilhomi bilan bezatilgan, gullar bilan uygun yondashuv.',
    },
    {
      title: 'Zamonaviy Oymakorlik',
      description: 'Oq va qora oymakorlik sanatidan ilhomlangan mukammal naqsh.',
    },
    {
      title: 'Oltin Doira',
      description: 'Zamonaviy interyerlar uchun markaziy simmetrik bezak.',
    },
    {
      title: 'Vintage Gilam',
      description: 'Qadimiy gilam naqshlariga oxshash minimalist estetik korinish.',
    },
    {
      title: 'Bezakli Panel',
      description: 'Eng keng pol yuzalar uchun mos murakkab simmetrik naqshlar.',
    },
    {
      title: 'Qora Qoplamadagi Oltin',
      description: 'Qora fonda oltin naqshlar bilan bezatilgan premium dizayn.',
    },
  ];
  
  useEffect(() => {
    // In Vite, we can use import.meta.glob to dynamically import images
    const loadImages = async () => {
      try {
        // This will work with Vite - updated to use n1.png to n10.png pattern
        const imageModules = import.meta.glob('/src/assets/images/naqshlik/n*.png');
        
        const loadedImages = await Promise.all(
          Object.entries(imageModules).map(async ([path, loader], index) => {
            const module = await loader();
            // Extract filename from path
            const filename = path.split('/').pop().replace('.png', '');
            
            // Use custom design info if available
            const designInfo = customDesigns[index] || {
              title: `Naqshlik model - ${index + 1}`,
              description: "Zamonaviy dizayn yondashuvi"
            };
            
            return {
              id: index + 1,
              path: module.default,
              title: designInfo.title,
              description: designInfo.description
            };
          })
        );
        
        setNaqshlikImages(loadedImages);
      } catch (error) {
        console.error("Error loading naqshlik images:", error);
        
        // Fallback with sample images if dynamic import fails
        const sampleImages = Array.from({ length: 10 }, (_, index) => {
          // Use custom design info
          const designInfo = customDesigns[index] || {
            title: `Naqshlik model - ${index + 1}`,
            description: "Zamonaviy dizayn yondashuvi"
          };
          
          return {
            id: index + 1,
            path: `/images/naqshlik/n${index + 1}.png`,  // Updated fallback path
            title: designInfo.title,
            description: designInfo.description
          };
        });
        
        setNaqshlikImages(sampleImages);
      }
    };
    
    loadImages();
  }, []);
  
  // Handle opening the modal
  const openModal = (image) => {
    setSelectedImage(image);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Handle closing the modal
  const closeModal = () => {
    setSelectedImage(null);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div>
      {/* Grid layout for thumbnails */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {naqshlikImages.map((image) => (
          <div 
            key={image.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            onClick={() => openModal(image)}
          >
            <div className="h-64 overflow-hidden">
              <img 
                src={image.path} 
                alt={image.title}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{image.title}</h3>
              <p className="text-gray-600 text-sm">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal for fullscreen preview */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 md:p-6 fade-in"
          onClick={closeModal}
        >
          <div 
            className="flex flex-col items-center max-w-[90vw] max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl animate-modal-open"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full flex items-center justify-center bg-gray-100 p-4">
              <img 
                src={selectedImage.path} 
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg mx-auto"
              />
              <button 
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-200 hover:scale-105"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 text-center w-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{selectedImage.title}</h3>
              <p className="text-gray-600 mx-auto max-w-2xl">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NaqshlikGallery; 