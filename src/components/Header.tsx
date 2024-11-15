import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-gray-900 text-white p-6">
      <nav className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img
          src="/images/DSC_2053.JPG" // Replace with your image path
          alt="Mwaniki Tifany Icon"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-2xl text-gray-300 font-bold">My Portfolio</span>
      </div>
        {/* Hamburger Menu for Small Screens */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links */}
        <div
          className={`flex flex-col md:flex-row md:space-x-6 absolute md:relative left-0 right-0 bg-gray-900 md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
            menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:visible md:opacity-100'
          }`}
        >
          <a
            href="#about"
            className="text-white hover:bg-cards py-2 px-4 rounded text-center md:text-left"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-white hover:bg-cards py-2 px-4 rounded text-center md:text-left"
          >
            Experience
          </a>
          <a
            href="/skills"
            className="text-white hover:bg-cards py-2 px-4 rounded text-center md:text-left"
          >
            Skills
          </a>
          <a
            href="/services"
            className="text-white hover:bg-cards py-2 px-4 rounded text-center md:text-left"
          >
            Services
          </a>
          <a
            href="#projects"
            className="text-white hover:bg-cards py-2 px-4 rounded text-center md:text-left"
          >
            Projects
          </a>
          <a
            href="#community"
            className="text-white hover:bg-cards py-2 px-4 rounded text-center md:text-left"
          >
            Community
          </a>
          <a
            href="#contact"
            className="text-white hover:bg-cards py-2 px-4 rounded text-center md:text-left"
          >
            Contact me
          </a>
        </div>
      </nav>
    </header>
  );
};
