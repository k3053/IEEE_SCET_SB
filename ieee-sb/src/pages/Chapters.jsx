import React, { useState } from 'react';
import Card from '../components/Card';

const chapters = [
  {
    name: "Computer Society (CS)",
    color: "#f43f5e",
    details: "Dive into the world of software development, Artificial Intelligence, and computing innovations. Perfect for coders and developers looking to stay ahead of the curve.",
    logo: "CS_logo.jpg"
  },
  {
    name: "Women in Engineering (WIE)",
    color: "#3b82f6",
    details: "A powerful platform promoting inclusion and leadership. Open to all genders, WIE empowers students through initiatives like 'She Connects' and leadership summits.",
    logo: "WIE_logo.jpg"
  },
  {
    name: "Vehicular Technology Society (VTS)",
    color: "#22c55e",
    details: "Dedicated to the future of mobility, including autonomous systems, electric vehicles (EVs), and intelligent transportation technologies.",
    logo: "VTS_logo.jpg"
  },
  {
    name: "Signal Processing Society (SPS)",
    color: "#a855f7",
    details: "Explore the cutting edge of AI, robotics, and advanced signal/image processing.",
    logo: "SPS_logo.jpg"
  },
  {
    name: "Special Interest Group on Humanitarian Technology (SIGHT)",
    color: "#f59e0b",
    details: "Leverage technology for social good. SIGHT focuses on solving real-world humanitarian challenges.",
    logo: "SIGHT_logo.jpg"
  },
];

const Chapters = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-8">
        IEEE SCET SB Chapters
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {chapters.map((chapter, index) => (
          <Card
            key={index}
            color={chapter.color}
            title="IEEE SCET SB"
            subtitle={chapter.name}
            details={chapter.details}
            logo={chapter.logo}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            isBlurred={hoveredIndex !== null && hoveredIndex !== index}
          />
        ))}
      </div>
    </div>
  );
};

export default Chapters;
