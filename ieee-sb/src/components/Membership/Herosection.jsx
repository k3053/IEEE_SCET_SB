import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">

      {/* ================= HERO SECTION ================= */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="text-center py-28 px-6 md:px-20 max-w-5xl mx-auto space-y-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Your Gateway to a Global Community of Innovators
        </h1>

        <p className="text-xl text-blue-700 font-medium">
          Connect. Collaborate. Innovate.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Join IEEE SCET Student Branch and become part of a global network of 
          <span className="font-semibold"> 500,000+ professionals across 160+ countries</span>. 
          Unlock funding opportunities, leadership roles, international exposure, 
          and access to world-class technical resources.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center pt-4">
          <button className="bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition duration-300 shadow-md">
            Join Now
          </button>

          <button className="border border-blue-700 text-blue-700 px-8 py-3 rounded-full hover:bg-blue-700 hover:text-white transition duration-300">
            Contact Us
          </button>
        </div>
      </motion.section>

    </div>
  );
};

export default HeroSection;
