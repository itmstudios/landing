import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  width?: string;
  height?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, width = "720", height = "440" }) => {
  if (!videoId) {
    return <p>Invalid video ID</p>;
  }

  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default YouTubeEmbed;
