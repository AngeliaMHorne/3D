import React, { useState, useEffect } from "react";
import { imageData } from "./ThreeDData";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const ThreeDImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(imageData[0].poster);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [numColumns, setNumColumns] = useState(4); // Initial number of columns

  const handleImageClick = (imageUri) => {
    setSelectedImage(imageUri);
    setIsLightboxOpen(true);
  };

  useEffect(() => {
    // Update the number of columns based on the window width
    const updateNumColumns = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1200) {
        setNumColumns(4);
      } else if (windowWidth >= 992) {
        setNumColumns(3);
      } else if (windowWidth >= 768) {
        setNumColumns(2);
      } else {
        setNumColumns(1);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", updateNumColumns);

    // Call the update function initially
    updateNumColumns();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateNumColumns);
    };
  }, []);

  const getColumnSpan = (itemIndex) => {
    if (itemIndex % numColumns === 0 && itemIndex !== 0) {
      return `span ${numColumns}`;
    }
    return "span 1";
  };

  return (
    <>
      <h2 className={styles.sectionHeadText}>3D Image Gallery</h2>
      <div className="thumbnails w-full relative py-5 flex justify-center items-center mx-auto xl:flex-1">
        {imageData.map((item, index) => (
          <div
            key={item.id}
            className="thumbnail"
            style={{ gridColumn: getColumnSpan(index) }}
            onClick={() => handleImageClick(item.poster)}
          >
            <img
              src={item.poster}
              alt="Thumbnail"
              className="thumbnail-image"
            />
          </div>
        ))}
      </div>

      {isLightboxOpen && (
        <motion.div
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="lightbox-container">
            <img
              src={selectedImage}
              alt="Lightbox"
              className="lightbox-image"
            />
          </div>
        </motion.div>
      )}

      <style jsx>{`
        .thumbnails {
          display: grid;
          grid-template-columns: repeat(${numColumns}, minmax(0, 1fr));
          gap: 10px;
        }

        .thumbnail {
          cursor: pointer;
          display: flex;
          justify-content: center;
          overflow: hidden;
          width: 100%;
          height: 100%;
        }

        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }

        .lightbox-container {
          max-width: 80%;
          max-height: 80%;
        }

        .lightbox-image {
          width: 100%;
          height: auto;
          max-width: 100%;
          max-height: 100%;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </>
  );
};

export default SectionWrapper(ThreeDImageGallery, "");
