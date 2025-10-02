import React, { useEffect, useState } from 'react';
import banner from '../assets/banner.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen pt-16 flex items-center bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`, // Apply the background image
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center">
          <h1 
            className={`text-5xl font-bold mb-6 text-white transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Hi, I'm Robert Coppage
          </h1>
          <p 
            className={`text-xl text-gray-200 mb-8 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            AI Researcher | Applications Engineer
          </p>
          <a
            href="#projects"
            className={`inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.6s' }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
