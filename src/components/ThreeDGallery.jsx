import React, { useState, useEffect } from 'react';

const ThreeDGallery = () => {
  const [threeDImages, setThreeDImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Custom titles and descriptions for the 3D designs
  const customDesigns = [
    {
      title: "Sokin okean dunyosi",
      description: "Tabiat bilan uyg'unlikda yaratilgan tinchlantiruvchi 3D pol – suv osti dunyosining sehrini xonangizga olib kiradi."
    },
    {
      title: "Shisha toshlar jilosi",
      description: "Ko'zni qamashtiruvchi tiniq toshlardan ilhomlangan pol dizayni – zamonaviylik va nafislik uyg'unligi."
    },
    {
      title: "Yorqin galaktik spirallar",
      description: "Kengliklar ilhomi. Sehrli oltin chiziqlar kosmik effekt yaratadi va zamonaviy interyerni to'ldiradi."
    },
    {
      title: "Kristall muvozanat",
      description: "Muz va kristall shakllar bilan bezatilgan dizayn – har bir qadamda soflik va yengillik hissi beradi."
    },
    {
      title: "Chuqurlik illuziyasi",
      description: "3D effektli tubsiz aylana — tasavvurni hayratda qoldiruvchi va mehmonlaringizni o'ziga rom qiluvchi san'at."
    },
    {
      title: "Tungi yaltir toshlar",
      description: "Yorug'likda porlaydigan marmar naqshlar, interyeringizga shinam, sirli muhit baxsh etadi."
    },
    {
      title: "Hayot ummoni",
      description: "Jonli suzayotgan baliqlar va dengiz tubidagi sahna sizga sokinlik va romantik kayfiyat ulashadi."
    },
    {
      title: "Ko'hna g'or toshlari",
      description: "3D toshli naqshlar qadimiy va zamonaviy uslublarni o'zida uyg'unlashtiradi. Mustahkamlik va nafislik timsoli."
    },
    {
      title: "Oltin taranglik markazi",
      description: "Ichki muvozanatni topishga undovchi simmetrik 3D naqsh. Qulaylikni estetik go'zallik bilan birlashtiradi."
    },
    {
      title: "Oceanik mo'jiza",
      description: "Okean tubini yodga soluvchi chuqurliklar — maxsus harorat va yorug'lik bilan jonlantirilgan effekt."
    }
  ];
  
  useEffect(() => {
    // In Vite, we can use import.meta.glob to dynamically import images
    const loadImages = async () => {
      try {
        // This will work with Vite
        const imageModules = import.meta.glob('/src/assets/images/3d/*.png');
        
        const loadedImages = await Promise.all(
          Object.entries(imageModules).map(async ([path, loader], index) => {
            const module = await loader();
            // Extract filename from path
            const filename = path.split('/').pop().replace('.png', '');
            
            // Use custom design info if available, otherwise fall back to defaults
            const designInfo = customDesigns[index] || {
              title: `3D dizayn - ${index + 1}`,
              description: "Zamonaviy 3D pol dizayni"
            };
            
            return {
              id: index + 1,
              path: module.default,
              title: designInfo.title,
              description: designInfo.description
            };
          })
        );
        
        setThreeDImages(loadedImages);
      } catch (error) {
        console.error("Error loading 3D images:", error);
        
        // Fallback with sample images if dynamic import fails
        const sampleImages = Array.from({ length: customDesigns.length }, (_, index) => {
          // Use custom design info even for fallback images
          const designInfo = customDesigns[index] || {
            title: `3D dizayn - ${index + 1}`,
            description: "Zamonaviy 3D pol dizayni"
          };
          
          return {
            id: index + 1,
            path: `/images/3d/${index + 1}.png`,  // Fallback to public directory
            title: designInfo.title,
            description: designInfo.description
          };
        });
        
        setThreeDImages(sampleImages);
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
        {threeDImages.map((image) => (
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

export default ThreeDGallery; 