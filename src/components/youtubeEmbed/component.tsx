import React from 'react';
import styles from "./styles.module.css";

interface YouTubeEmbedProps {
  videoId: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
  if (!videoId) {
    return <p>Invalid video ID</p>;
  }

  return (
    <iframe
      className={styles.root}
      src={`https://www.youtube.com/embed/${videoId}?modestbranding=1`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
};

export default YouTubeEmbed;
