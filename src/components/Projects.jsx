import React, { lazy } from "react";

const Works = lazy(() => import("./Works"));
const VideoGallery = lazy(() => import("./VideoGallery"));
const ImageGallery = lazy(() => import("./ImageGallery"));
const ThreeDGallery = lazy(() => import("./ThreeDGallery"));

const Projects = () => {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "relative", zIndex: "1" }}>
        <div>
          <Works />
          <VideoGallery />
          <div className="mb-[220px]">
            <ThreeDGallery />
          </div>
        </div>
        <div className="mb-[220px]">
          <ImageGallery />
        </div>
      </div>
    </div>
  );
};

export default Projects;
