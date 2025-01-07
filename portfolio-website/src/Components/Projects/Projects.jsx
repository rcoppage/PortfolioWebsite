import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "WanderSync",
      description: "WanderSync is a collaborative travel management application developed using Android Studio, Java, and Firebase. The app features real-time trip synchronization, secure user authentication, and comprehensive travel planning tools. Key features include interactive itinerary creation, accommodation booking management, dining reservation tracking, and a unique travel community platform where users can share their experiences. Implemented using MVVM architecture pattern for enhanced scalability and testability, while utilizing Firebase for seamless real-time data synchronization and user authentication.",
      tags: ["Java", "Android Studio", "Firebase"],
      youtubeId: "NedWm73jRhI",
      githubLink: "https://github.com/tmalayvong/CS2340C_Team51",
      websiteLink: "https://tmalayvong.github.io/CS2340C_Team51/"
    },
    {
      title: "Portfolio Website",
      description: "This very website you're exploring! Built with React, leveraging modern JavaScript and styled with CSS for a clean, responsive design.",
      tags: ["React", "Node.js", "JavaScript", "CSS"],
      youtubeId: "video-id",
      githubLink: "https://github.com/rcoppage/PortfolioWebsite"
      // No websiteLink for this project, so it will only show GitHub button
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;