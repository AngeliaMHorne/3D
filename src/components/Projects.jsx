import React, { lazy } from "react";
import Contact from "./Contact";

const Works = lazy(() => import("./Works"));
const VideoGallery = lazy(() => import("./VideoGallery"));
const ImageGallery = lazy(() => import("./ImageGallery"));
const ThreeDGallery = lazy(() => import("./ThreeDGallery"));

const Projects = () => {
  return (
    <div className="bg-cover bg-fixed bg-main">
      <Works />
      <VideoGallery />
      <ThreeDGallery />
      <ImageGallery />
      <Contact />
    </div>
  );
};

export default Projects;
