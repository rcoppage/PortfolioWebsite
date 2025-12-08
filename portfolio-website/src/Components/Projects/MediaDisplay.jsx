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
      <iframe
        className={`absolute top-0 left-0 w-full h-full ${className}`}
        src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0`}
        title={title || "YouTube video player"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
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
