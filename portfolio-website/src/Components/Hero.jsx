import { useEffect, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import banner from '../assets/banner.jpg';

const proofPoints = [
  ['3,000+', 'employees using internal AI'],
  ['Millions', 'of patients served by products'],
  ['Intern → SWE II', 'progression at Waystar'],
  ['Dec 2026', 'Georgia Tech graduation'],
];

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
      <div className="absolute inset-0 bg-slate-950/75"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-blue-300 font-semibold tracking-[0.18em] uppercase text-sm mb-5">Software Engineer II · AI Systems · Full Stack</p>
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            I build AI products that hold up in production.
          </h1>
          <p 
            className={`text-xl text-gray-200 mb-8 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Reece Coppage · Software Engineer at Waystar
          </p>
          <p className={`max-w-2xl mx-auto text-lg text-gray-200 mb-9 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '0.55s' }}>
            I lead production chatbot infrastructure, ship healthcare products at scale, and turn complex systems into reliable tools for patients and engineers.
          </p>
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '0.7s' }}>
          <a
            href="#experience"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See my impact <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a href="/Reece_Coppage_Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/60 text-white px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-950 transition-all duration-300">
            <Download size={18} aria-hidden="true" /> Open résumé
          </a>
          </div>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-px mt-14 overflow-hidden rounded-xl border border-white/15 bg-white/15 text-left">
            {proofPoints.map(([value, label]) => (
              <div key={label} className="flex flex-col bg-slate-950/60 backdrop-blur-sm px-4 py-4 sm:px-5">
                <dt className="order-2 text-sm text-slate-300 mt-1">{label}</dt>
                <dd className="order-1 text-2xl font-bold text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;
