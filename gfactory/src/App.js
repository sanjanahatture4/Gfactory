// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import AboutUs from './components/aboutus'; 
import Social from './components/social'; 
import Home from './components/home';
import Footer from './components/footer';
import Shop from './components/shop';
import Login from './components/login';


 
const App = () => {
  return (
    <Router>
     <div>
        
         <Header />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/shop" element={<Shop/>} />
           
           <Route path="/about" element={<AboutUs />} />
           <Route path="/social" element={<Social />} />
           <Route path="/login" element={<Login />} />
           
         </Routes>
         <Footer />
       
     </div>
      
    </Router>
  );
};

export default App;


