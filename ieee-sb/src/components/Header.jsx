import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <nav className="bg-blue-600/95 text-white px-6 py-4 shadow-md sticky top-0 z-50 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo / Title */}
        <Link to="/" className="text-xl font-bold tracking-wide">
          IEEE SCET SB
        </Link>

        {/* Navigation Links */}
        <ul className="hidden lg:flex space-x-8 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-200 transition"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-200 transition"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/chapters"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-200 transition"
              }
            >
              Chapters
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/execom"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-200 transition"
              }
            >
              Execom
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-200 transition"
              }
            >
              Events
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/membership"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-200 transition"
              }
            >
              Membership
            </NavLink>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="hidden lg:flex items-center space-x-4 text-lg">
          <a
            href="https://www.facebook.com/ieee.scet.sb/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 hover:scale-110 transition-all duration-300"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/ieee.scet.sb/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 hover:scale-110 transition-all duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/company/ieee-scet-sb/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 hover:scale-110 transition-all duration-300"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="mailto:ieeescetsb@scet.ac.in"
            className="hover:text-yellow-300 hover:scale-110 transition-all duration-300"
          >
            <MdEmail />
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Header;
