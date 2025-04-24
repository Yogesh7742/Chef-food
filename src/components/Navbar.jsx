import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ["Home", "About", "Menu", "Cart", "Contact"];

  return (
    <nav className="bg-yellow-100 shadow-md sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="relative p-2">
          <img
            src="/Food-Logo.png"
            alt="FoodieHub Logo"
            className="h-24 md:h-28 -mt-6 -mb-6"
          />
        </NavLink>

        <input
          type="text"
          placeholder="Search..."
          className="hidden md:block px-4 py-2 rounded-full border border-gray-300 w-72 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <ul className="hidden md:flex gap-6 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "nav-link-active" : ""}`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <input
            type="text"
            placeholder="Search..."
            className="mb-4 w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <ul className="flex flex-col gap-3 text-lg font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "nav-link-active" : ""}`
                  }
                  onClick={toggleMenu}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
