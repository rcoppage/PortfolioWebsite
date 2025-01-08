import React from 'react';

const MediaDisplay = ({ 
  youtubeVideoId, 
  imageUrl, 
  alt = 'Media content', 
  title,
  className = '',
  imageClassName = '',
  videoOptions = {}
}) => {
  // Default video options
  const defaultVideoOptions = {
    width: '100%',
    height: '100%',
    frameBorder: '0',
    allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
    allowFullScreen: true,
    ...videoOptions
  };

  // If YouTube video ID is provided, render YouTube embed
  if (youtubeVideoId) {
    return (
      <div className={`youtube-video-container w-full h-full ${className}`}>
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0`}
          title={title || "YouTube video player"}
          frameBorder={defaultVideoOptions.frameBorder}
          allow={defaultVideoOptions.allow}
          allowFullScreen={defaultVideoOptions.allowFullScreen}
        />
      </div>
    );
  }

  // If image URL is provided, render image
  if (imageUrl) {
    return (
      <div className={`image-container w-full h-full flex justify-center items-center ${className}`}>
        <img 
          src={imageUrl} 
          alt={alt} 
          className={`w-48 h-48 object-contain ${imageClassName}`}
        />
      </div>
    );
  }

  // If no media is provided, return null
  return null;
};

export default MediaDisplay;