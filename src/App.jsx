// src/App.jsx

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages & Components
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Header from "./components/Header";
// import SignUp from "./components/Auth/SignUp"; // Uncomment if needed
// import Login from "./components/Auth/Login"; // Uncomment if needed
// import ProtectedRoute from "./components/ProtectedRoute"; // Uncomment if needed
// import { auth } from "./firebase"; // Uncomment if using Firebase
// import { onAuthStateChanged } from "firebase/auth"; // Uncomment if using Firebase

const App = () => {
  // Cart State
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (indexOrAll) => {
    if (indexOrAll === "ALL") {
      setCartItems([]);
    } else {
      setCartItems((prevItems) =>
        prevItems.filter((_, i) => i !== indexOrAll)
      );
    }
  };

  return (
    <Router>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />

        {/* Uncomment if auth is added */}
        {/* <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
