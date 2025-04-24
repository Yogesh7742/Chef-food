// src/App.jsx
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
// import Login from "./components/Auth/Login"; // Your Login component
// import HomePage from "./components/HomePage"; // Your actual Home Page
// import ProtectedRoute from "./components/ProtectedRoute"; // Protected route component
import { auth } from "./firebase"; // Firebase auth import
import { onAuthStateChanged } from "firebase/auth"; // Firebase auth state listener
import SignUp from "./components/Auth/SingUp";
import Home from "./pages/Home";

import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Navbar from "./components/navbar";
import About from "./pages/About";
import Footer from "./pages/Footer";
// import Footer from "./components/Footer"

const App = () => {
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });
  //   return () => unsubscribe();
  // }, []);
  // Add these states and functions at the top
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
    // <Router>
    //   <Routes>

    //     <Route path="/" element={<Home/>}/>,
    //     <Router path="/menu" element={<Menu/>} />,
    //     <Route path="/cart" element={<Cart/>} />,
    //     <Route path="contact" element={<Contact/>} />
    //     {/* Public routes - SignUp and Login
    //     // <Route path="/signup" element={<SignUp/>}/>
    //     // <Route path="/login" element={<Login />} /> */}

    //     {/* Protected routes - HomePage */}
    //     {/* <Route
    //       path="/home"  element={user ? (
    //           <ProtectedRoute>
    //             <HomePage />
    //           </ProtectedRoute>
    //         ) : ( <Navigate to="/login" />)
    //       }
    //     /> */}

    //     {/* Default route - if not logged in, redirect to login page */}
    //     {/* <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/login" />} /> */}
    //   </Routes>
    // </Router>

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
