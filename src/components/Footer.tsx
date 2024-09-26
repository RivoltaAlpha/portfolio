import React from 'react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>&copy; 2024 Your Name. All rights reserved.</div>
        <div className="flex space-x-4">
          <a href="#" aria-label="GitHub"><Github /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin /></a>
          <a href="#" aria-label="Instagram"><Instagram /></a>
          <a href="#" aria-label="Twitter"><Twitter /></a>
        </div>
      </div>
    </footer>
  );