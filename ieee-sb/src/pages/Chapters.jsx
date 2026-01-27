import React, { useState } from 'react';
import Card from '../components/Card';

const chapters = [
  { name: "Computer Society (CS)", color: "#f43f5e", details: "Dive into the world of software development, Artificial Intelligence, and computing innovations. Perfect for coders and developers looking to stay ahead of the curve.", logo: "CS logo.jpg" },
  { name: "Women in Engineering (WIE)", color: "#3b82f6", details: "A powerful platform promoting inclusion and leadership. Open to all genders, WIE empowers students through initiatives like 'She Connects' and leadership summits.", logo: "WIE logo.jpg" },
  { name: "Vehicular Technology Society (VTS)", color: "#22c55e", details: "Dedicated to the future of mobility, including autonomous systems, electric vehicles (EVs), and intelligent transportation technologies. Recently, our VTS chapter secured US $1,000 in funding to support student activities.", logo: "VTS logo.jpg" },
  { name: "Signal Processing Society (SPS)", color: "#a855f7", details: "Explore the cutting edge of AI, robotics, and advanced signal/image processing. Our chapter frequently collaborates on events like the 'DeepMed' seasonal school.", logo: "SPS logo.jpg" },
  { name: "Special Interest Group on Humanitarian Technology (SIGHT)", color: "#f59e0b", details: "Leverage technology for social good. SIGHT focuses on solving real-world humanitarian challenges, recently receiving US $250 in funding for impactful community projects.", logo: "SIGHT logo.jpg" },
];

const Chapters = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold">IEEE SCET SB Chapters</h1>
      <div className="flex flex-col gap-4 mt-6">
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