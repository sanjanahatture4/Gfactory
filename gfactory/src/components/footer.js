// Footer.js
import React from 'react';

const Footer = () => {
  const styles = {
    container: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
    },
    logo: {
      width: '80px', // Adjust the width of the logo as needed
    },
    shopName: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginTop: '10px',
    },
    section: {
      marginTop: '20px',
    },
    heading: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      margin: '0 10px',
    },
    input: {
      padding: '10px',
      width: '80%',
      marginRight: '10px',
    },
    subscribeButton: {
      padding: '10px 20px',
      backgroundColor: '#f00', // Change to your desired color
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    address: {
      marginTop: '20px',
    },
    contactInfo: {
      marginTop: '10px',
    },
    socialIcons: {
      marginTop: '20px',
    },
    icon: {
      fontSize: '1.5rem',
      color: '#fff',
      margin: '0 10px',
    },
  };

  return (
    <div style={styles.container}>
      <img src="path/to/logo.png" alt="Shop Logo" style={styles.logo} />
      <p style={styles.shopName}>G Factory</p>

      <div style={styles.section}>
        <h3 style={styles.heading}>Quick Links</h3>
        <a href="/" style={styles.link}>Home</a>
        <a href="/about" style={styles.link}>About Us</a>
        <a href="/social" style={styles.link}>Social Media</a>
        {/* Add more links as needed */}
      </div>

      <div style={styles.section}>
        <h3 style={styles.heading}>Shop Categories</h3>
        <a href="/shop" style={styles.link}>Bestseller</a>
        <a href="/shop" style={styles.link}>Recommended</a>
        <a href="/shop" style={styles.link}>Smartwatch</a>
        <a href="/shop" style={styles.link}>Jacket</a>
        <a href="/shop" style={styles.link}>Airpods</a>
        {/* Add more categories as needed */}
      </div>

      <div style={styles.section}>
        <h3 style={styles.heading}>Subscribe for Latest Updates & Offers</h3>
        <input type="text" placeholder="Enter Phone Number" style={styles.input} />
        <button style={styles.subscribeButton}>Subscribe</button>
      </div>

      <div style={styles.address}>
        <p>Visit our store</p>
        <p>near Ghume Floor Mill, Loni Kalbhor, Pune, Maharashtra 412201</p>
      </div>

      <div style={styles.contactInfo}>
        <p>mail: xyz@gmail.com</p>
        <p>phone: 123456789</p>
      </div>

      <div style={styles.socialIcons}>
        <p>Follow us here</p>
        <a href="#" style={styles.icon}><i className="fab fa-instagram"></i></a>
        {/* Add more social icons as needed */}
      </div>
    </div>
  );
};

export default Footer;




