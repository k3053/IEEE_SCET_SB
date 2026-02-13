import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SCETSBLogo from "../assets/SCET_SB_Logo.jpg";

const Header = () => {
  return (
    <nav className="bg-blue-600/95 text-white px-8 h-[90px] shadow-lg sticky top-0 z-50 backdrop-blur-md border-b border-white/20">

      <div className="max-w-7xl mx-auto h-full flex justify-between items-center">

        {/* Logo + Title */}
        <Link to="/" className="flex items-center gap-4 group h-full">

          {/* Logo Wrapper */}
          <div className="h-full flex items-center">
            <img
              src={SCETSBLogo}
              alt="IEEE SCET SB Logo"
              className="h-[75%] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Title */}
          <span className="text-2xl font-bold tracking-wide">
            IEEE SCET SB
          </span>

        </Link>

        <ul className="hidden lg:flex space-x-10 font-medium text-lg">

          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Chapters", path: "/chapters" },
            { name: "Execom", path: "/execom" },
            { name: "Events", path: "/events" },
            { name: "Membership", path: "/membership" },
          ].map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative px-1 py-2 transition-all duration-300
          ${isActive ? "text-yellow-300" : "text-white"}`
                }
              >
                {({ isActive }) => (
                  <span className="relative group">

                    {/* Text */}
                    <span className="group-hover:-translate-y-0.5 transition-transform duration-300 inline-block">
                      {item.name}
                    </span>

                    {/* Animated Underline */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-300 transition-all duration-300
              ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    ></span>

                  </span>
                )}
              </NavLink>
            </li>
          ))}

        </ul>


        {/* Social Icons */}
        <div className="hidden lg:flex items-center space-x-5 text-xl">
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
