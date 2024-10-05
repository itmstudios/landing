"use client"
import React from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import styles from "./styles.module.css";

interface PanoramaViewerProps {
  className?: string; 
}

const PanoramaViewer: React.FC<PanoramaViewerProps> = ({ className }) => {
  return (
    <div className={styles.root}>
      <ReactPhotoSphereViewer
        src={"/assets/tour360/3.JPG"}
        height={"100%"}
        width={"100%"}
        littlePlanet={false}
      />
    </div>
  );
};

export default PanoramaViewer;
