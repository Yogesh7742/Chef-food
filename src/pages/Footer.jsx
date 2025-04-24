// Footer.js
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">
                  Swiggy Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/bug-bounty"
                  className="text-gray-400 hover:text-white"
                >
                  Bug Bounty
                </Link>
              </li>
              <li>
                <Link
                  to="/swiggy-one"
                  className="text-gray-400 hover:text-white"
                >
                  Swiggy One
                </Link>
              </li>
              <li>
                <Link
                  to="/corporate"
                  className="text-gray-400 hover:text-white"
                >
                  Swiggy Corporate
                </Link>
              </li>
              <li>
                <Link
                  to="/instamart"
                  className="text-gray-400 hover:text-white"
                >
                  Swiggy Instamart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">CONTACT</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-400 hover:text-white">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-gray-400 hover:text-white">
                  Partner with us
                </Link>
              </li>
              <li>
                <Link to="/ride" className="text-gray-400 hover:text-white">
                  Ride with us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-gray-400 hover:text-white">
                  Refund & Cancellation
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/offer-terms"
                  className="text-gray-400 hover:text-white"
                >
                  Offer Terms
                </Link>
              </li>
              <li>
                <Link to="/phishing" className="text-gray-400 hover:text-white">
                  Phishing & Fraud
                </Link>
              </li>
            </ul>
          </div>

          {/* We Deliver To Column */}
          <div className="col-span-2">
            <h3 className="text-lg font-bold mb-4">WE DELIVER TO</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/city/abohar"
                      className="text-gray-400 hover:text-white"
                    >
                      Abohar
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/city/adilabad"
                      className="text-gray-400 hover:text-white"
                    >
                      Adilabad
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/city/adoni"
                      className="text-gray-400 hover:text-white"
                    >
                      Adoni
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/city/agartala"
                      className="text-gray-400 hover:text-white"
                    >
                      Agartala
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/city/agra"
                      className="text-gray-400 hover:text-white"
                    >
                      Agra
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/city/ahmedabad"
                      className="text-gray-400 hover:text-white"
                    >
                      Ahmedabad
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/city/ahmednagar"
                      className="text-gray-400 hover:text-white"
                    >
                      Ahmednagar
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/city/aizawl"
                      className="text-gray-400 hover:text-white"
                    >
                      Aizawl
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/city/ajmer"
                      className="text-gray-400 hover:text-white"
                    >
                      Ajmer
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/city/akola"
                      className="text-gray-400 hover:text-white"
                    >
                      Akola
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/city/alappuzha"
                      className="text-gray-400 hover:text-white"
                    >
                      Alappuzha
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/city/aligarh"
                      className="text-gray-400 hover:text-white"
                    >
                      Aligarh
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/city/allahabad"
                      className="text-gray-400 hover:text-white"
                    >
                      Allahabad
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/city/alwar"
                      className="text-gray-400 hover:text-white"
                    >
                      Alwar
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/city/ambala"
                      className="text-gray-400 hover:text-white"
                    >
                      Ambala
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Logo and Social Media */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Swiggy Logo */}
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <div className="bg-white p-2 rounded">
                  <Link to="/" className="relative">
                    <img
                      src="/Food-Logo.png"
                      alt="FoodieHub Logo"
                      className="h-24 md:h-28 -mt-6 -mb-6"
                    />
                  </Link>
                </div>
                <span className="ml-2 text-2xl font-bold italic">CHEF FOOD</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>

            {/* App Store Badges */}
            <div className="mt-6 md:mt-0 flex space-x-4">
              <a href="#">
                <img
                  src="/Google_Play.webp"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>© 2025 <span className="text-red-500">Chef</span> <span className="text-yellow-400">Food</span> by John Doe</p>
          <p className="mt-2">This is a clone for educational purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
