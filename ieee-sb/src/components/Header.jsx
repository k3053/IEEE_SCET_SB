import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SCETSBLogo from "../assets/SCET_SB_Logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Chapters", path: "/chapters" },
    { name: "Execom", path: "/execom" },
    { name: "Events", path: "/events" },
    { name: "Membership", path: "/membership" },
  ];

  return (
    <nav className="bg-blue-700/95 text-white px-6 lg:px-8 h-[80px] shadow-lg sticky top-0 z-50 backdrop-blur-md border-b border-white/20">

      <div className="max-w-7xl mx-auto h-full flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 h-full">
          <img
            src={SCETSBLogo}
            alt="IEEE SCET SB Logo"
            className="h-[65%] object-contain"
          />
          <span className="text-xl md:text-2xl font-bold tracking-wide">
            IEEE SCET
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 font-medium text-lg">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative px-1 py-2 transition-all duration-300 ${
                    isActive ? "text-yellow-300" : "text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative group">
                    <span className="group-hover:-translate-y-0.5 transition-transform duration-300 inline-block">
                      {item.name}
                    </span>

                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-300 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden lg:flex items-center space-x-5 text-xl">
          <a href="https://www.facebook.com/ieee.scet.sb/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/ieee.scet.sb/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/ieee-scet-sb/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
            <FaLinkedinIn />
          </a>
          <a href="mailto:ieeescetsb@scet.ac.in" className="hover:text-yellow-300 transition">
            <MdEmail />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-blue-700 text-white px-6 py-6 space-y-6 shadow-xl">

          {/* Mobile Nav Links */}
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-lg font-medium transition ${
                  isActive ? "text-yellow-300" : "text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Mobile Social Icons */}
          <div className="flex space-x-6 pt-4 text-xl">
            <a href="https://www.facebook.com/ieee.scet.sb/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/ieee.scet.sb/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/ieee-scet-sb/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="mailto:ieeescetsb@scet.ac.in">
              <MdEmail />
            </a>
          </div>

        </div>
      )}

    </nav>
  );
};

export default Header;
