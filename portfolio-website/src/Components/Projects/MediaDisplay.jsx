const MediaDisplay = ({ 
  youtubeVideoId, 
  imageUrl, 
  alt = 'Media content', 
  title,
  className = '',
  imageClassName = '',
  videoOptions = {}
}) => {
  if (youtubeVideoId) {
    return (
      <div className={`youtube-video-container w-full h-full ${className}`}>
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0`}
          title={title || "YouTube video player"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  if (imageUrl) {
    return (
      <div className={`image-container w-full h-full flex justify-center items-center ${className}`}>
        <img 
          src={imageUrl} 
          alt={alt} 
          className={`object-contain ${imageClassName}`} // Apply custom image class
        />
      </div>
    );
  }

  return null;
};

export default MediaDisplay;
