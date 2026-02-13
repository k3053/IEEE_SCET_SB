import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Card = ({
  color,
  title,
  subtitle,
  details,
  logo,
  route,
  onMouseEnter,
  onMouseLeave,
  isBlurred,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}   // click press effect
      transition={{ type: "spring", stiffness: 180 }}
      className={`relative flex flex-col justify-between 
        w-full h-[320px] p-6 rounded-2xl 
        backdrop-blur-md bg-white/70 
        border border-white/40 
        cursor-pointer transition-all duration-300
        ${isBlurred ? "opacity-50 blur-sm" : "opacity-100"}
      `}
      style={{
        boxShadow: `
          0 20px 40px ${color}50,
          0 10px 20px rgba(0,0,0,0.15)
        `,
      }}
    >
      {/* Top Accent Bar */}
      <div
        className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
        style={{ backgroundColor: color }}
      />

      {/* Logo */}
      <div className="flex justify-center mt-4">
        <img
          src={logo}
          alt={subtitle}
          className="w-24 h-24 object-contain"
        />
      </div>

      {/* Title & Subtitle */}
      <div className="text-center mt-2">
        <p className="text-xs font-semibold text-gray-500">
          {title}
        </p>

        <p
          className="text-lg font-bold mt-1"
          style={{ color }}
        >
          {subtitle}
        </p>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed text-center line-clamp-4 mt-3">
        {details}
      </p>
    </motion.div>
  );
};

export default Card;
