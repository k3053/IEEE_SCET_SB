import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaRocket } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const FinalCTASection = () => {
  return (
    <section className="py-28 px-6 md:px-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center space-y-10"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Join The Movement. Lead The Future.
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
          From international travel grants and $1,000+ funding opportunities  
          to leadership positions and global networking — IEEE SCET Student Branch  
          is your launchpad to innovation, impact, and excellence.
        </p>

        {/* Location + Contact */}
        <div className="space-y-2 text-blue-200 text-sm md:text-base">
          <p>📍 Visit Us: SCET Admin Block</p>
          <p>🌐 Stay Updated: Follow us on LinkedIn</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center pt-6">

          <a
            href="https://www.ieee.org/membership/join/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 shadow-lg flex items-center justify-center gap-2"
          >
            <FaRocket />
            Become a Member
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-800 transition duration-300 flex items-center justify-center gap-2"
          >
            <FaLinkedin />
            Follow on LinkedIn
          </a>

        </div>

      </motion.div>
    </section>
  );
};

export default FinalCTASection;
