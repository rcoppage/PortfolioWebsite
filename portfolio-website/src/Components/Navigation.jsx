import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, targetId) => {
      e.preventDefault();
      setIsMenuOpen(false);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-2xl font-bold transition-colors duration-300 hover:text-blue-600 cursor-pointer"
                  onClick={(e) => handleNavClick(e, 'home')}>
              Portfolio
            </span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a 
                href="#home" 
                className="relative group transition-colors duration-300 hover:text-blue-600"
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#about" 
                className="relative group transition-colors duration-300 hover:text-blue-600"
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#projects" 
                className="relative group transition-colors duration-300 hover:text-blue-600"
                onClick={(e) => handleNavClick(e, 'projects')}
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#contact" 
                className="relative group transition-colors duration-300 hover:text-blue-600"
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
  
            {/* Mobile Navigation Button */}
            <button 
              className="md:hidden p-2 rounded-lg transition-colors duration-300 hover:bg-gray-100" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="transition-transform duration-300">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
  
          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="flex flex-col space-y-4 px-2 pb-4 pt-2">
              <a 
                href="#home" 
                className="block py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:translate-x-2"
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="block py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:translate-x-2"
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About
              </a>
              <a 
                href="#projects" 
                className="block py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:translate-x-2"
                onClick={(e) => handleNavClick(e, 'projects')}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="block py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:translate-x-2"
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  };

export default Navigation;