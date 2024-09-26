import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "/api/placeholder/400/500",
  "/api/placeholder/400/500",
  "/api/placeholder/400/500"
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
    <section className="py-32 flex mr-[100px] justify-evenly">
      <div className="container mx-auto mr-[800px] text-center">
        <h1 className="text-5xl font-bold mb-4">Hey there,</h1>
        <h2 className="text-4xl font-bold mb-4">
          I am <span className="text-pink-300">Mwaniki Tifany</span>
        </h2>
        <p className="mb-8 text-gray-400">I'm a Fullstack web developer.</p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg text-sm">
          My Resume
        </button>
      </div>
      <div className="relative w-[400px] h-[500px] mr-20">
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
  );
};