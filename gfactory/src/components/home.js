// Home.js
import React, { useState } from 'react';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 3; // Change this to the total number of images in your slider

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage === totalImages ? 1 : prevImage + 1));
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage === 1 ? totalImages : prevImage - 1));
  };

  const styles = {
    sliderContainer: {
      maxWidth: '100%',
      overflow: 'hidden',
      position: 'relative',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      margin: '20px 0',
      paddingBottom: '60%', // Fixed aspect ratio (adjust as needed)
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '10px',
      transition: 'transform 0.5s ease-in-out',
    },
    controls: {
      position: 'absolute',
      top: '50%',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      transform: 'translateY(-50%)',
    },
    arrow: {
      fontSize: '2rem',
      color: '#fff',
      cursor: 'pointer',
      background: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '50%',
      padding: '10px',
      transition: 'background 0.3s',
    },
  };

  return (
    <div>
      <h2>Welcome to G Factory</h2>
      <div style={styles.sliderContainer}>
        <img
          src={`image${currentImage}.jpg`} // Adjust the image path based on your file naming
          alt={`Product ${currentImage}`}
          style={styles.image}
        />
        <div style={styles.controls}>
          <div style={styles.arrow} onClick={handlePrev}>&lt;</div>
          <div style={styles.arrow} onClick={handleNext}>&gt;</div>
        </div>
      </div>
      {/* Add other content as needed */}
    </div>
  );
};

export default Home;


