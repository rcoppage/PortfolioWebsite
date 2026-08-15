const MediaDisplay = ({ 
  youtubeVideoId, 
  imageUrl, 
  alt = 'Media content', 
  title,
  className = ''
}) => {
  if (youtubeVideoId) {
    return (
      <iframe
        className={`absolute inset-0 w-full h-full ${className}`}
        src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0`}
        title={title || "YouTube video player"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    );
  }

  if (imageUrl) {
    return (
      <div className={`w-full h-full flex justify-center items-center p-8 ${className}`}>
        <img 
          src={imageUrl} 
          alt={alt} 
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return null;
};

export default MediaDisplay;
