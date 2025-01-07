import React from 'react';

const About = () => (
  <section id="about" className="py-20">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <div className="w-48 h-48 mx-auto md:mx-0 mb-6 rounded-full overflow-hidden bg-gray-200">
              {/* TODO: Replace with your profile picture
                  Options:
                  1. If using public folder: src="/images/your-photo.jpg"
                  2. If importing: import profilePic from '../assets/your-photo.jpg'
                  Then use: src={profilePic}
              */}
              <img
                src="/api/placeholder/200/200"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
            {/* TODO: Update with your bio */}
            <p className="text-gray-600">
              I'm a passionate developer with expertise in modern web technologies.
              I love creating beautiful and functional applications that solve real-world problems.
            </p>
          </div>
        </div>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            {/* TODO: Update with your skills */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded">React</div>
              <div className="bg-gray-100 p-4 rounded">Node.js</div>
              <div className="bg-gray-100 p-4 rounded">TypeScript</div>
              <div className="bg-gray-100 p-4 rounded">Python</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Relevant Coursework</h3>
            {/* TODO: Update with your courses */}
            <div className="grid gap-3">
              <div className="bg-gray-50 p-4 rounded shadow-sm">
                <h4 className="font-medium">Data Structures and Algorithms</h4>
                <p className="text-sm text-gray-600">Course Code: CS201</p>
              </div>
              {/* Add more courses as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;