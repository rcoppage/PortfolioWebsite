import React from 'react';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="bg-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;