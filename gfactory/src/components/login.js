// Login.js
import React, { useState } from 'react';

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  const styles = {
    overlay: {
      display: showLogin ? 'flex' : 'none',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    loginForm: {
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      width: '300px',
      textAlign: 'center',
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      cursor: 'pointer',
      color: '#333',
      fontSize: '18px',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      boxSizing: 'border-box',
    },
    checkbox: {
      textAlign: 'left',
      margin: '10px 0',
      fontSize: '14px',
    },
    submitButton: {
      background: '#4CAF50',
      color: '#fff',
      padding: '10px',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleGetOTP = () => {
    // Implement OTP logic here
    alert('OTP Sent!');
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.loginForm}>
        <div style={styles.closeButton} onClick={handleCloseLogin}>
          &#10006;
        </div>
        <div>Welcome to G Factory</div>
        <div>Login</div>
        <div style={styles.input}>
          <input type="tel" placeholder="Mobile Number" />
        </div>
        <div style={styles.checkbox}>
          <label>
            <input type="checkbox" />
            Yes, I want to receive important information & updates on my WhatsApp
          </label>
        </div>
        <div style={styles.submitButton} onClick={handleGetOTP}>
          Get OTP
        </div>
      </div>
    </div>
  );
};

export default Login;




