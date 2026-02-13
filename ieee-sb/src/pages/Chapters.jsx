import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import CS_logo from "../assets/CS_logo.jpg";
import WIE_logo from "../assets/WIE_logo.jpg";
import VTS_logo from "../assets/VTS_logo.jpg";
import SPS_logo from "../assets/SPS_logo.jpg";
import SIGHT_logo from "../assets/SIGHT_logo.jpg";

const chapters = [
  {
    name: "Computer Society (CS)",
    color: "#f43f5e",
    details:
      "Dive into the world of software development, Artificial Intelligence, and computing innovations.",
    logo: CS_logo,
    link: "/chapters/cs",
  },
  {
    name: "Women in Engineering (WIE)",
    color: "#a855f7",
    details:
      "Promoting inclusion and leadership through technical initiatives and mentoring.",
    logo: WIE_logo,
    link: "/chapters/wie",
  },
  {
    name: "Vehicular Technology Society (VTS)",
    color: "#22c55e",
    details:
      "Focused on autonomous systems, EVs, and intelligent transportation technologies.",
    logo: VTS_logo,
    link: "/chapters/vts",
  },
  {
    name: "Signal Processing Society (SPS)",
    color: "#3b82f6",
    details:
      "Explore AI, robotics, and advanced signal & image processing.",
    logo: SPS_logo,
    link: "/chapters/sps",
  },
  {
    name: "SIGHT",
    color: "#f59e0b",
    details:
      "Leveraging technology to solve humanitarian challenges.",
    logo: SIGHT_logo,
    link: "/chapters/sight",
  },
];

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
        {chapters.map((chapter, index) => (
          <motion.div
            key={index}
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
