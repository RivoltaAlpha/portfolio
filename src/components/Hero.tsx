import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "/images/DSC_2053.JPG",
  "https://i.postimg.cc/fbJ7t0cd/IMG-7299.jpg",
  "/images/DSC_1797.JPG",
  "/images/DSC_0904.JPG",
  "/images/IMG_7337.JPG",
  "/images/IMG_7384.JPG",
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
    <div className='mr-[100px] justify-evenly items-center'>
      <section className="py-10 flex items-center">
        <div className="container mx-auto mr-[300px] text-center">
          <h1 className="text-5xl font-bold mb-4">Hey there,</h1>
          <h2 className="text-8xl font-bold mb-4">
            I am <span className="text-cards">Mwaniki Tifany</span>
          </h2>
          <p className="mb-8 text-gray-400">I'm a Software Engineer and a Data Analyst.</p>
          <button className="bg-purple-600 hover:bg-purple-300 hover:text-black font-bold py-3 px-6 rounded-lg text-sm">
            My Resume
          </button>
        </div>
        <div className="relative w-[1000px] h-[500px] mr-20">
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
      </section>
    </div>
  );
};