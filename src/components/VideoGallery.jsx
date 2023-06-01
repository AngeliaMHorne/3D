import React, { useState, useRef, useEffect } from "react";
import { videoData } from "./videoData";
import { MdChevronLeft, MdChevronRight, MdPlayArrow } from "react-icons/md";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const VideoGallery = () => {
  const [currentVideo, setCurrentVideo] = useState(videoData[0].videoUri);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      if (isPlaying) {
        videoRef.current.play().catch((error) => {
          console.log("Failed to play the video:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [currentVideo, isPlaying]);

  const handleVideoClick = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>~Video Gallery~</h2>
      </motion.div>
      <div className="video-container bg-tertiary absolute rounded-2xl relative p-5">
        <div
          className="overlay absolute"
          style={{
            top: -10,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            zIndex: 1,
          }}
          onClick={handleVideoClick}
        >
          {!isPlaying && (
            <MdPlayArrow
              style={{ width: "60px", height: "60px" }}
              className="play-icon"
            />
          )}
        </div>
        <div className="videoplayer rounded-2xl relative flex justify-center items-center mx-auto xl:flex-1">
          <video
            style={{ width: "100%", borderRadius: "10px" }}
            //controls
            controlsList="nodownload"
            ref={videoRef}
            onEnded={() => {
              setCurrentVideo(videoData[0].videoUri);
              setIsPlaying(false);
            }}
          >
            <source src={currentVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="relative flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full p-5 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            width: "100%",
          }}
        >
          {videoData.map((item) => (
            <img
              key={item.id}
              src={item.poster}
              alt="Thumbnail"
              className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-20"
              style={{ borderRadius: "20px" }}
              onClick={() => {
                setCurrentVideo(item.videoUri);
                setIsPlaying(true);
              }}
            />
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </>
  );
};

export default SectionWrapper(VideoGallery, "");
