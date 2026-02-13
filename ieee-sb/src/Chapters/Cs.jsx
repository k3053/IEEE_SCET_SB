import React from "react";
import { motion } from "framer-motion";
import CS_logo from "../assets/CS_logo.jpg";

const csMembersData = [
  {
    name: "Aryan Sariya",
    role: "Chair - IEEE CS Chapter",
    department: "Computer Engineering",
    image: "/src/assets/SB_logo.png",
  },
  {
    name: "Avani Deshpande",
    role: "Vice Chair - IEEE CS Chapter",
    department: "Electronics & Communication",
    image: "/src/assets/SB_logo.png",
  },
  {
    name: "Jainim Jariwala",
    role: "Secretary - IEEE CS Chapter",
    department: "Computer Engineering",
    image: "/src/assets/SB_logo.png",
  },
  {
    name: "Miqdad Indori",
    role: "Treasurer - IEEE CS Chapter",
    department: "Artificial Intelligence & Data Science",
    image: "/src/assets/SB_logo.png",
  },
];

const Cs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white py-24 px-6">

      {/* ===== Header Section ===== */}
      <div className="text-center mb-20">

        <motion.img
          src={CS_logo}
          alt="CS Logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="w-36 md:w-44 mx-auto mb-6 drop-shadow-lg"
        />

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-blue-800"
        >
          IEEE Computer Society Chapter
        </motion.h1>

        <p className="text-gray-600 mt-4 text-lg tracking-wide">
          Core Committee 2025–26
        </p>

        <div className="w-28 h-1 bg-blue-700 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* ===== Members Grid ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 justify-items-center">
        {csMembersData.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.04 }}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl 
            transition-all duration-300 w-80"
          >
            {/* Accent Bar */}
            <div className="h-2 bg-blue-700 rounded-t-2xl"></div>

            <div className="p-10 text-center">

              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 mx-auto object-cover rounded-lg mb-6 
                transition duration-300 grayscale group-hover:grayscale-0"
              />

              <h2 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h2>

              <p className="text-blue-700 font-medium mt-2 text-sm uppercase tracking-wide">
                {member.role}
              </p>

              <div className="mt-4 inline-block bg-blue-50 text-blue-700 text-xs px-4 py-2 rounded-full">
                {member.department}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cs;
