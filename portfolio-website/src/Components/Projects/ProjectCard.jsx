import React from 'react';
import { Github } from 'lucide-react';

const ProjectCard = ({ title, description, tags, youtubeId, githubLink }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="w-full aspect-video mb-4">
      <iframe
        className="w-full h-full rounded"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={`${title} demo`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <span key={index} className="bg-gray-100 px-3 py-1 rounded text-sm">
          {tag}
        </span>
      ))}
    </div>
    <a 
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700"
    >
      <Github size={20} />
      View on GitHub
    </a>
  </div>
);

export default ProjectCard;