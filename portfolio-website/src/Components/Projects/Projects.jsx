import React from 'react';
import ProjectCard from './ProjectCard';
import ReactLogo from '/assets/reactlogo.png';
import CanvasLogo from '/assets/CanvasLogo.png'
import PythonLogo from '/assets/PythonLogo.png';

const Projects = () => {
  const projects = [
    {
      title: "Budgetly",
      description: `Budgetly is a comprehensive personal finance platform that transforms traditional budgeting with 
      intelligent analytics and AI-powered insights. Built on the MERN stack with Firebase for secure authentication, 
      it offers goal-based savings calculators, customizable budget templates, AI meal planning based on dietary preferences 
      and budget constraints, and machine learning stock recommendations using PyTorch. Developed by our team inspired by 
      our own financial challenges during college, Budgetly goes beyond simple expense tracking to provide actionable 
      financial guidance through an integrated ecosystem hosted on AWS via MongoAtlas, with real-time updates 
      via WebSocket implementation.`,
      tags: ["MongoDB Atlas", "Firebase", "PyTorch", "React", "Node", "Express", "Python", "JavaScript"],
      youtubeId: "GPAKiE4Bozk",
      githubLink: "https://github.com/rcoppage/Hacklytics2025",
      websiteLink: "https://devpost.com/software/pocketwise"
    },
    {
      title: "DayWeave (In Development)",
      description: `Dayweave is a smart scheduling platform that integrates Python with Canvas to automatically 
      generate a personalized calendar. Using Firebase for secure authentication, MongoDB for user data, and a 
      React-based frontend, Dayweave provides a seamless experience. It allows users to add assignments, automatically 
      schedule time for them, and adjusts weekly based on user feedback to ensure an optimized workload.`,
      tags: ["Python", "Firebase", "MongoDB", "React", "Node.js", "JavaScript", "CSS"],
      imageClassName: "w-64 h-64", // Custom image size
      imageUrl: "/assets/CanvasLogo.png",
      githubLink: "https://github.com/DayWeave/DayWeave"
      // No websiteLink for this project, so it will only show GitHub button
    },
    {
      title: "RedireX",
      description: `RedireX is a dynamic link redirection platform designed to facilitate seamless 
      website migrations. The backend is on Google Cloud, and the platform is built with React for the web interface and powered by Python for scraping 
      and redirection, RedireX efficiently extracts old URLs from a website and redirects them to the corresponding 
      new URLs. This ensures minimal disruption, preserves SEO rankings, and enhances user experience during domain 
      changes or site restructures. RedireX automates the redirection process with precision, making website transitions 
      effortless and efficient.`,
      tags: ["Python", "Google Cloud", "React", "JavaScript", "CSS", "HTML"],
      imageClassName: "w-48 h-48", // Custom image size
      imageUrl: "/assets/PythonLogo.png",
      githubLink: "https://github.com/itsdylon/redirx",
      websiteLink: "https://redirx-iota.vercel.app/"
    },
    {
      title: "Portfolio Website",
      description: `This very website you're exploring! Built with React, 
      leveraging modern JavaScript and styled with CSS for a clean, responsive design. `,
      tags: ["React", "Node.js", "JavaScript", "CSS", "HTML"],
      imageUrl: "/assets/reactlogo.png",
      imageClassName: "w-64 h-64", // Custom image size
      githubLink: "https://github.com/rcoppage/PortfolioWebsite"
      // No websiteLink for this project, so it will only show GitHub button
    },
    {
      title: "WanderSync",
      description: `WanderSync is a collaborative travel management application developed using Android Studio,
       Java, and Firebase. The app features real-time trip synchronization, secure user authentication, and comprehensive 
       travel planning tools. Key features include interactive itinerary creation, accommodation booking management, 
       dining reservation tracking, and a unique travel community platform where users can share their experiences. 
       Implemented using MVVM architecture pattern for enhanced scalability and testability, while utilizing Firebase 
       for seamless real-time data synchronization and user authentication.`,
      tags: ["Java", "Android Studio", "Firebase"],
      youtubeId: "NedWm73jRhI",
      githubLink: "https://github.com/tmalayvong/CS2340C_Team51",
      websiteLink: "https://tmalayvong.github.io/CS2340C_Team51/"
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