import React from 'react';
import headshot from '../assets/Headshot.jpg';

const About = () => (
  <section id="about" className="py-20">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <div className="w-48 h-48 mx-auto md:mx-0 mb-6 rounded-full overflow-hidden bg-gray-200">
              <img
                src={headshot}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-600">
              I am a Junior Computer Science student at Georgia Tech, specializing in Intelligence and Devices. 
              As a skilled software developer, I have hands-on experience in Java, Python, and other programming languages, 
              with a strong foundation in problem-solving and software design principles. I thrive in collaborative team environments,
              leveraging my critical thinking skills to tackle complex challenges and deliver impactful solutions.
              I am currently seeking a software engineering internship where I can further refine my technical expertise, 
              contribute to cutting-edge projects, and collaborate with a dynamic team to drive innovation.
            </p>
          </div>
        </div>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 px-3 py-1 rounded">Java</span>
                  <span className="bg-gray-100 px-3 py-1 rounded">C#</span>
                  <span className="bg-gray-100 px-3 py-1 rounded">JavaScript</span>
                  <span className="bg-gray-100 px-3 py-1 rounded">Python</span>
                  <span className="bg-gray-100 px-3 py-1 rounded">HTML</span>
                  <span className="bg-gray-100 px-3 py-1 rounded">CSS</span>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Technologies & Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 px-3 py-1 rounded">React</span>
                  <span className="bg-gray-100 px-3 py-1 rounded">Node.js</span>
                  <span className="bg-gray-100 px-3 py-1 rounded">Firebase</span>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Development Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 px-3 py-1 rounded">Android Studio</span>
                  <span className="bg-gray-100 px-3 py-1 rounded">Unity</span>
                  <span className="bg-gray-100 px-3 py-1 rounded">IntelliJ</span>
                  <span className="bg-gray-100 px-3 py-1 rounded">Visual Studio Code</span>
                  <span className="bg-gray-100 px-3 py-1 rounded">Visual Studio</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
          <h3 className="text-xl font-semibold mb-4">Relevant Coursework</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-100 p-4 rounded shadow-sm">
              <h4 className="font-medium">Linear Algebra</h4>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow-sm">
              <h4 className="font-medium">Intro to Artificial Intelligence</h4>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow-sm">
              <h4 className="font-medium">Data Structures</h4>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow-sm">
              <h4 className="font-medium">Object and Design</h4>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow-sm">
              <h4 className="font-medium">Computer Organization and Programming</h4>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow-sm">
              <h4 className="font-medium">Perception and Robotics</h4>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;