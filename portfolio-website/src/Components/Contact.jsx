import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-12 text-center transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className={`flex justify-center space-x-8 mb-12 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '0.2s' }}>
            <a 
              href="https://github.com/rcoppage" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-110 hover:bg-gray-900 hover:text-white"
            >
              <Github size={32} className="transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a 
              href="https://www.linkedin.com/in/robert-coppage-390006311/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-110 hover:bg-blue-600 hover:text-white"
            >
              <Linkedin size={32} className="transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a 
              href="mailto:reececoppage@gmail.com"
              className="group p-4 rounded-full bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-110 hover:bg-red-500 hover:text-white"
            >
              <Mail size={32} className="transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>
          
          <form 
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} 
            style={{ transitionDelay: '0.4s' }}
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group"
            >
              <Send size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;