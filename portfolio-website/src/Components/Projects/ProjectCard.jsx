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
  <div className="group bg-white p-8 rounded-lg shadow-md flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
    <div className="w-full aspect-video mb-6 overflow-hidden rounded-lg relative bg-gray-100">
      {youtubeId ? (
        <MediaDisplay 
          youtubeVideoId={youtubeId}
          imageUrl={imageUrl}
          title={`${title} demo`}
          className="rounded-lg"
          imageClassName={imageClassName}
        />
      ) : (
        <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-105">
          <MediaDisplay 
            youtubeVideoId={youtubeId}
            imageUrl={imageUrl}
            title={`${title} demo`}
            className="rounded-lg"
            imageClassName={imageClassName}
          />
        </div>
      )}
    </div>
    <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 group-hover:text-blue-600">{title}</h3>
    <p className="text-gray-600 mb-6 flex-grow transition-colors duration-300 group-hover:text-gray-700">{description}</p>
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-100 hover:text-blue-700 hover:scale-105"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className={`grid ${websiteLink ? (githubLink ? 'grid-cols-2' : 'grid-cols-1') : 'grid-cols-1'} gap-4`}>
        {githubLink && (
          <a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105 hover:shadow-lg"
          >
            <Github size={20} />
            View GitHub
          </a>
        )}
        {websiteLink && (
          <a 
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
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
