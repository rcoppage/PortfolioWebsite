import React from 'react';
import { Github, Globe } from 'lucide-react';
import MediaDisplay from './MediaDisplay';

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  youtubeId, 
  imageUrl, 
  imageClassName = '', // Accept imageClassName prop
  githubLink, 
  websiteLink 
}) => (
  <div className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full">
    <div className="w-full aspect-video mb-6">
      <MediaDisplay 
        youtubeVideoId={youtubeId}
        imageUrl={imageUrl}
        title={`${title} demo`}
        className="rounded-lg"
        imageClassName={imageClassName} // Pass it to MediaDisplay
      />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600 mb-6 flex-grow">{description}</p>
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
            {tag}
          </span>
        ))}
      </div>
      <div className={`grid ${websiteLink ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
        <a 
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Github size={20} />
          View GitHub
        </a>
        {websiteLink && (
          <a 
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Globe size={20} />
            View Website
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
