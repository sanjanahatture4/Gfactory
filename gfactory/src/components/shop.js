// Shop.js
import React, { useState } from 'react';


const Shop = () => {
  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      padding: '20px',
    },
    categoryTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    card: {
      width: '300px',
      margin: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '10px',
      textAlign: 'center',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '5px',
    },
    title: {
      marginTop: '10px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    price: {
      marginTop: '10px',
      color: '#f00',
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    discount: {
      color: '#00f',
      fontSize: '1rem',
      marginTop: '5px',
    },
    options: {
      marginTop: '10px',
      fontSize: '1rem',
    },
    addToCartButton: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px',
        fontSize: '1rem',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      },
  };
 

  const products = [
    {
        id: 1,
        image: 'path/to/smartwatch_product1.jpg',
        title: 'Z55 ULTRA [ WATCH + AIRPOD PRO]',
        price: '₹900',
        discount: '61% OFF',
        options: 'Ultra watch model no.Z55 ultra and AirPod pro Calling wallpaper available',
      },
      {
        id: 2,
        image: 'path/to/smartwatch_product2.jpg',
        title: 'FOSSIL GEN 6',
        price: '₹1799',
        discount: '49% OFF',
        options: '❣️✅ *FOSSIL GEN 6 - 2022 EDITION* ... (product details continued)',
      },
      {
        id: 3,
        image: 'path/to/smartwatch_product3.jpg',
        title: 'ULTRA WATCH',
        price: '₹800',
        discount: '60% OFF',
        options: '𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐩𝐫𝐨𝐝𝐮𝐜𝐭 :- i8 ULTRA MAX... (product details continued)',
      },
      {
        id: 4,
        image: 'path/to/smartwatch_product4.jpg',
        title: 'ULTRA SERIES 9 [ROUND]',
        price: '₹2250',
        discount: '44% OFF',
        options: '*APPLE WATCH ULTRA ROUND AMOLED EDITION GPS🛰️+COMPASS 🧭 1:1 BT CALLING 2023:* ... (product details continued)',
      },
      {
        id: 5,
        image: 'path/to/smartwatch_product5.jpg',
        title: 'HW7 MAX [ SERIES 7]',
        price: '₹1999',
        discount: '60% OFF',
        options: '*PRESENTING YOU. THE MOST STYLISH WATCH EVER* ... (product details continued)',
      },
      {
        id: 6,
        image: 'path/to/smartwatch_product6.jpg',
        title: 'I8 PRO MAX',
        price: '₹600',
        discount: '40% OFF',
        options: '𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐩𝐫𝐨𝐝𝐮𝐜𝐭 :- i8 Pro Max Chain Edition ... (product details continued)',
      },
      {
        id: 7,
        image: 'path/to/smartwatch_product7.jpg',
        title: 'FOSSIL GEN 8',
        price: '₹1200',
        discount: '66% OFF',
        options: '* NEW ARRIVAL FOSSIL GEN 8 *1:1 DIAMOND 💎 DESIGN WITH ON OFF LOGO* ... (product details continued)',
      },
      {
        id: 8,
        image: 'path/to/smartwatch_product8.jpg',
        title: 'I8 ULTRA MAX + AIRPOD PRO',
        price: '₹600',
        discount: '74% OFF',
        options: 'Ultra watch and AirPod pro Calling wallpaper available',
      },
      {
        id: 9,
        image: 'path/to/smartwatch_product9.jpg',
        title: 'FOSSIL GEN 9',
        price: '₹1250',
        discount: '75% OFF',
        options: 'NEW ARRIVAL FOSSIL GEN 9 *1:1 DIAMOND 💎 DESIGN WITH ON OFF LOGO* ... (product details continued)',
      },
  ];
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding an item to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  return (
    <div>
      <div style={styles.categoryTitle}>Categories</div>
      <div style={styles.subtitle}>Smartwatches</div>
      <div style={styles.container}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.title} style={styles.image} />
            <div style={styles.title}>{product.title}</div>
            <div style={styles.price}>{product.price}</div>
            <div style={styles.discount}>{product.discount}</div>
            <div style={styles.options}>{product.options}</div>
            
            {/* Add to Cart button */}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;


