import { useEffect, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
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
            Hi, I&apos;m Reece Coppage
          </h1>
          <p 
            className={`text-xl text-gray-200 mb-8 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Software Engineer II building production AI systems
          </p>
          <p className={`max-w-2xl mx-auto text-lg text-gray-200 mb-9 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '0.55s' }}>
            I design AI platforms, developer tools, and healthcare products used by thousands of employees and millions of patients.
          </p>
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '0.7s' }}>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Experience <ArrowRight size={18} />
          </a>
          <a href="/Reece_Coppage_Resume.pdf" download className="inline-flex items-center gap-2 border border-white/70 text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
            <Download size={18} /> Download Résumé
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
