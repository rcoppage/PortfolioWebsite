import React from 'react';
import banner from '../assets/banner.jpg';

const Hero = () => (
  <section
    id="home"
    className="min-h-screen pt-16 flex items-center bg-cover bg-center"
    style={{
      backgroundImage: `url(${banner})`, // Apply the background image
    }}
  >
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6 text-white">Hi, I'm Robert Coppage</h1>
        <p className="text-xl text-gray-200 mb-8">AI Researcher | Applications Engineer</p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
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

export default Hero;
