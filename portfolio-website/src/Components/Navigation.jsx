import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-2xl font-bold">Portfolio</span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-600">Home</a>
              <a href="#about" className="hover:text-blue-600">About</a>
              <a href="#projects" className="hover:text-blue-600">Projects</a>
              <a href="#contact" className="hover:text-blue-600">Contact</a>
            </div>
  
            {/* Mobile Navigation Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
  
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="flex flex-col space-y-4 px-2 pb-4">
                <a href="#home" className="hover:text-blue-600">Home</a>
                <a href="#about" className="hover:text-blue-600">About</a>
                <a href="#projects" className="hover:text-blue-600">Projects</a>
                <a href="#contact" className="hover:text-blue-600">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  };

export default Navigation;