import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-12 text-center transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className={`flex justify-center space-x-8 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '0.2s' }}>
            <a 
              href="https://github.com/rcoppage" 
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-110 hover:bg-gray-900 hover:text-white"
              aria-label="GitHub Profile"
            >
              <Github size={32} className="transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a 
              href="https://www.linkedin.com/in/robert-coppage-390006311/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-110 hover:bg-blue-600 hover:text-white"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={32} className="transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a 
              href="mailto:reececoppage@gmail.com"
              className="group p-4 rounded-full bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-110 hover:bg-red-500 hover:text-white"
              aria-label="Send Email"
            >
              <Mail size={32} className="transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;