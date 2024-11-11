import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>mwanikitiffany&copy; 2024 . All rights reserved.</div>
        <div className="flex space-x-4">
          <a href="https://github.com/RivoltaAlpha" aria-label="GitHub"><Github /></a>
          <a href="https://www.linkedin.com/in/mwaniki-tifany" aria-label="LinkedIn"><Linkedin /></a>
          <a href="https://x.com/RivoltaAlpha" aria-label="Twitter"><Twitter /></a>
        </div>
      </div>
    </footer>
  );