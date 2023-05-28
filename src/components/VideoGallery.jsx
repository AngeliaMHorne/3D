import React, { useState, useRef } from "react";
import { DefaultPlayer as Video } from "react-html5video";
import { videoData } from "./videoData";

const VideoGallery = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const videoRef = useRef(null);

  const handleVideoClick = (videoUri) => {
    setCurrentVideo(videoUri);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  return (
    <div>
      <h3 className='text-center text-white font-bold text-[24px]'>Video Gallery</h3>
      <div className="video-container rounded-2xl relative py-5 flex justify-center items-center mx-auto xl:flex-1">
        <video
          style={{ width: "65%", borderRadius: '20px' }}
          autoPlay
          controls
          controlsList="nodownload"
          poster={currentVideo ? null : videoData[0].poster}
          ref={videoRef}
          onEnded={() => setCurrentVideo(null)}
        >
          {currentVideo && <source src={currentVideo} type="video/mp4" />}
        </video>
      </div>
      <div
        className="thumbnails py-5 rounded-2xl relative flex justify-center items-center mx-auto xl:flex-1"
        style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "65%" }}
      >
        {videoData.map((item) => (
          <img
            key={item.id}
            src={item.poster}
            alt="Thumbnail"
            style={{ cursor: "pointer", gap: 5, width: "25%", borderRadius: '20px' }}
            onClick={() => handleVideoClick(item.videoUri)}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
