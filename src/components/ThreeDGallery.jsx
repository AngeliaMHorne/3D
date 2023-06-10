import React, { useState, useEffect, useRef } from "react";
import { imageData } from "./ThreeDData";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import mymark from "../assets/imagegal/watermark.png";

const ThreeDGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [numColumns, setNumColumns] = useState(4); // Initial number of columns
  const minColumns = 2;
  const maxColumns = 6;
  const [galleryData, setGalleryData] = useState([]);
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);
  const lightboxImageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageClick = (id) => {
    const image = imageData.find((item) => item.id === id);
    setSelectedImage(image.imageUri);
    setIsLoading(true);
    preloadImage(image.imageUri);
    setIsLightboxOpen(true);
    disableScrolling();
  };

  const disableScrolling = () => {
    document.body.style.overflow = "hidden";
    setIsScrollDisabled(true);
  };

  const enableScrolling = () => {
    document.body.style.overflow = "";
    setIsScrollDisabled(false);
  };

  const preventDefaultScroll = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const handleResize = () => {
      const containerWidth =
        document.getElementById("gallery-container").offsetWidth;
      const columns = Math.max(
        minColumns,
        Math.min(Math.floor(containerWidth / 150), maxColumns)
      ); // Adjust the width of each column here
      setNumColumns(columns);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [minColumns, maxColumns]);

  useEffect(() => {
    const rearrangeGalleryData = () => {
      const data = Array.from({ length: numColumns }, () => []);
      imageData.forEach((item, index) => {
        const columnIndex = index % numColumns;
        data[columnIndex].push(item);
      });
      setGalleryData(data);
    };

    rearrangeGalleryData();
  }, [numColumns]);

  useEffect(() => {
    if (isLightboxOpen) {
      disableScrolling();
    } else {
      enableScrolling();
    }
  }, [isLightboxOpen]);

  const preloadImage = (imageUri) => {
    const image = new Image();
    image.src = imageUri;
    image.onload = () => {
      setIsLoading(false);
    };
  };

  const calculateImageDimensions = () => {
    if (lightboxImageRef.current) {
      const lightboxContainer = lightboxImageRef.current.parentNode;
      const containerWidth = lightboxContainer.offsetWidth;
      const containerHeight = lightboxContainer.offsetHeight;
      const image = lightboxImageRef.current;

      if (
        containerWidth / containerHeight >
        image.naturalWidth / image.naturalHeight
      ) {
        // Width is the limiting factor
        image.style.width = "auto";
        image.style.height = "100%";
      } else {
        // Height is the limiting factor
        image.style.width = "100%";
        image.style.height = "auto";
      }
    }
  };

  const watermarkText = "Copyright © 2023 Angelia Horne";

  const openLightbox = (imageUri) => {
    setSelectedImage(imageUri);
    setIsLightboxOpen(true);
  };

  const handleImageContextMenu = (event) => {
    event.preventDefault();
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsLightboxOpen(false);
  };

  return (
    <div>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>~3D Gallery~</h2>
      </motion.div>
      <div
        id="gallery-container"
        className="gallery-container bg-tertiary absolute rounded-2xl relative p-2"
      >
        <div className="thumbnails justify-between w-full relative p-2 flex justify-center items-start xl:flex-1">
          {galleryData.map((column, columnIndex) => (
            <div key={columnIndex} className="column">
              {column.map((item) => (
                <div
                  key={item.id}
                  className="thumbnail justify-center items-center"
                  onClick={() => handleImageClick(item.id)}
                >
                  <img
                    src={item.poster}
                    alt="Thumbnail" //300px width
                    className="thumbnail-image object-fit hover:scale-105 ease-in-out duration-20 rounded-[20px] w-[full] h-auto px-2 py-2 flex justify-evenly items-center flex-col cursor-pointer"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {isLightboxOpen && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <div className="lightbox-container">
              {isLoading ? (
                <div>Loading...</div>
              ) : (
                <>
                  <img
                    src={selectedImage}
                    alt="Lightbox"
                    className="lightbox-image" //largest 1200px
                    ref={lightboxImageRef}
                    onLoad={calculateImageDimensions}
                    onContextMenu={handleImageContextMenu}
                  />
                  <div className="watermark-container">
                    {/* <img src={mymark} alt="Logo" className="watermark-logo" /> */}
                    <div className="watermark-text">{watermarkText}</div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(ThreeDGallery, "");
