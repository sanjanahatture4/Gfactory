// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <div style={styles.leftSection}>
        <span style={styles.brand}>G Factory</span>
        <nav style={styles.navigation}>
          <a href="/" style={styles.link}>HOME</a>
          <a href="/shop" style={styles.link}>SHOP</a>
          {/* Add dropdown button here */}
          <a href="/about" style={styles.link}>ABOUT US</a>
        </nav>
      </div>
      <div style={styles.rightSection}>
        <div style={styles.searchLogin}>
          <input type="text" placeholder="Search" style={styles.searchInput} />
          <a href="/login" style={styles.link}>Login</a>
        </div>
        <div style={styles.cart}>
          <a href="/cart" style={styles.link}>Cart</a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  brand: {
    fontSize: '1.5rem',
    marginRight: '20px',
    fontWeight: 'bold',
  },
  navigation: {
    display: 'flex',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '15px', // Added spacing between links
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },
  searchLogin: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
  },
  searchInput: {
    padding: '5px',
    marginRight: '10px',
  },
  cart: {
    marginLeft: '20px',
  },
};

export default Navbar;

