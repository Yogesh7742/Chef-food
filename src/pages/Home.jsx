import React from "react";
import { NavLink } from "react-router-dom";
import FoodSlider from "../components/FoodSlider";
import Services from "../components/Services";
import FoodCollections from "../components/FoodCollections";

const Home = () => {
  const Category = {
    image: "",
  };
  return (
    <div className="font-sans bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            disableRemotePlayback
            className="w-full h-full object-cover"
            poster="/food-video-poster.jpg"
          >
            <source src="/video/video.mp4" type="video/mp4" />
            <source src="/video/food-background.webm" type="video/webm" />
            {/* Fallback image */}
            <img
              src="/eadly.avif"
              alt="Delicious food background"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </video>
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl mx-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-yellow-400">Yogesh's Foodies</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
            Fresh and delicious meals delivered at your doorstep. Browse our
            menu and order now!
          </p>
          <NavLink
            to="/menu"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 font-medium text-lg"
          >
            Explore Menu
          </NavLink>
        </div>
      </section>

      {/* Cities Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-6xl font-bold text-yellow-500 text-shadow-lg/30 mb-6">
          Menu Categories
        </h2>
        <FoodSlider />
      </div>
        <FoodCollections />
        <Services />
    </div>
  );
};

export default Home;

{
  /* <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">COMPANY</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Team</a></li>
                <li><a href="#" className="hover:text-gray-300">Careers</a></li>
                <li><a href="#" className="hover:text-gray-300">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">CONTACT</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Help & Support</a></li>
                <li><a href="#" className="hover:text-gray-300">Partner with us</a></li>
                <li><a href="#" className="hover:text-gray-300">Ride with us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">LEGAL</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-gray-300">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">FOLLOW US</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl hover:text-gray-300">📱</a>
                <a href="#" className="text-2xl hover:text-gray-300">📘</a>
                <a href="#" className="text-2xl hover:text-gray-300">📸</a>
                <a href="#" className="text-2xl hover:text-gray-300">🐦</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies.</p>
            <p className="mt-2">© 2023 Zomato Clone - All Rights Reserved</p>
          </div>
        </div>
      </footer> */
}
