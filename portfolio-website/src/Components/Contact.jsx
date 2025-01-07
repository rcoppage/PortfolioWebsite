import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="py-20">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
      <div className="max-w-xl mx-auto">
        <div className="flex justify-center space-x-8 mb-8">
          {/* TODO: Replace with your social media links */}
          <a href="https://github.com/your-username" className="hover:text-blue-600">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/your-profile" className="hover:text-blue-600">
            <Linkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-blue-600">
            <Mail size={24} />
          </a>
        </div>
        {/* TODO: Add your form handling logic */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {/* Form fields... */}
        </form>
      </div>
    </div>
  </section>
);

export default Contact;