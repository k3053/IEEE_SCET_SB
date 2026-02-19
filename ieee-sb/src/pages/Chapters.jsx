import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { chaptersData } from "../data/ChaptersData";

const Chapters = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/60 to-white py-20 px-6">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-14 text-center text-blue-700"
      >
        IEEE SCET SB Chapters
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {chaptersData.map((chapter, index) => (
          <motion.div
            key={chapter.name}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer"
            onClick={() => navigate(chapter.link)}
          >
            <Card
              color={chapter.color}
              title="IEEE SCET SB"
              subtitle={chapter.name}
              details={chapter.details}
              logo={chapter.logo}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              isBlurred={hoveredIndex !== null && hoveredIndex !== index}
            />
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
};

export default Chapters;
