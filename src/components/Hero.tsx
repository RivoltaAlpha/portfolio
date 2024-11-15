import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "/images/DSC_2053.JPG",
  "/images/DSC_1797.JPG",
  "/images/DSC_0904.JPG",
  "/images/IMG_7337.JPG",
  "/images/techladies.jpg"
];

export const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between py-10 px-4 md:px-20 space-y-8 md:space-y-0">
      {/* Text Section */}
      <div className="text-center md:text-left lg:ml-20 md:max-w-lg">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Hey there...</h1>
        <h2 className="text-4xl md:text-8xl font-bold mb-4">
          I'm <span className="text-cards">Mwaniki Tifany Nyawira</span>
        </h2>
        <p className="mb-8 text-gray-400 text-sm md:text-base">
          A Software Engineer and a Data Analyst.
        </p>
        <a
          href="/TIFANY_Resume.pdf"
          download="TIFANY_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-300 hover:text-black font-bold py-3 px-6 rounded-lg text-sm md:text-base">
          My Resume
        </a>
      </div>


      {/* Image Carousel Section */}
      <div className="relative w-full md:w-[700px] lg:w-[1000px] h-[300px] md:h-[500px]">
        <img
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          className="w-full h-full object-cover rounded-lg"
        />
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};
