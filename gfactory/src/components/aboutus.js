// AboutUs.js
import React from 'react';

const AboutUs = () => {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: 'auto',
      padding: '20px',
      textAlign: 'center',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    description: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      marginBottom: '20px',
    },
    itemList: {
      listStyleType: 'none',
      padding: '0',
    },
    listItem: {
      marginBottom: '10px',
    },
    contactInfo: {
      fontSize: '1.2rem',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>About Us</h2>
      <p style={styles.description}>
        G Factory offers a wide range of men's fashion clothing, including Jeans Pants, Armani Pants, Trackpants, Shirts, T-shirts, Shoes, and all types of Footwear.
      </p>
      <p style={styles.description}>
        Explore our collection of premium accessories, such as smartwatches, earpods, watches, wallets, belts, fashionable caps, and sunglasses, all available at reasonable prices.
      </p>
      <ul style={styles.itemList}>
        <li style={styles.listItem}>All over India courier service available.</li>
        <li style={styles.listItem}>Shop is open for all days.</li>
      </ul>
      <p style={styles.contactInfo}>
        For more information, contact us at: <strong>123455456</strong>
      </p>
    </div>
  );
};

export default AboutUs;

