import React, { useState } from "react";
import contactImage from "../assets/contactUs.png"; // Ensure this path is correct

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("📨 Your message has been submitted!");
    setFormData({
      name: "",
      email: "",
      password: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen py-10 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Image */}
        <div className="md:w-1/2 w-full md:h-auto flex">
          <img
            src={contactImage}
            alt="Contact"
            className="w-full h-full object self-stretch"
          />
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-6 space-y-6"
        >
          {/* Heading inside form */}
          <h2 className="text-3xl text-black mb-4 text-center font-poppins">
            Contact Us
          </h2>

          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#f8b400] hover:border-[#f8b400] transition duration-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#f8b400] hover:border-[#f8b400] transition duration-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter a password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#f8b400] hover:border-[#f8b400] transition duration-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#f8b400] hover:border-[#f8b400] transition duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#f8b400] text-white py-2 rounded hover:bg-white hover:text-[#f8b400] border border-transparent hover:border-[#f8b400] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
