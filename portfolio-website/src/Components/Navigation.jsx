import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['About', 'about'],
  ['Contact', 'contact'],
];

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

    const handleNavClick = (event, targetId) => {
      event.preventDefault();
      setIsMenuOpen(false);
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-xl font-bold tracking-tight transition-colors duration-300 hover:text-blue-600" onClick={(event) => handleNavClick(event, 'home')}>
              Reece Coppage<span className="text-blue-600">.</span>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(([label, id]) => (
                <a key={id} href={`#${id}`} className="relative group text-sm font-medium transition-colors duration-300 hover:text-blue-600" onClick={(event) => handleNavClick(event, id)}>
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a href="/Reece_Coppage_Resume.pdf" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors" target="_blank" rel="noreferrer">Résumé</a>
            </div>
  
            {/* Mobile Navigation Button */}
            <button 
              type="button"
              className="md:hidden p-2 rounded-lg transition-colors duration-300 hover:bg-gray-100" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <div className="transition-transform duration-300">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
  
          {/* Mobile Menu */}
          <div id="mobile-navigation" className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`} aria-hidden={!isMenuOpen}>
            <div className="flex flex-col space-y-4 px-2 pb-4 pt-2">
              {navItems.map(([label, id]) => (
                <a key={id} href={`#${id}`} tabIndex={isMenuOpen ? 0 : -1} className="block py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600" onClick={(event) => handleNavClick(event, id)}>{label}</a>
              ))}
              <a href="/Reece_Coppage_Resume.pdf" target="_blank" rel="noreferrer" tabIndex={isMenuOpen ? 0 : -1} className="block py-2 px-4 font-semibold text-blue-700">Open Résumé</a>
            </div>
          </div>
        </div>
      </nav>
    );
  };

export default Navigation;
