import React from "react";
import { motion } from "framer-motion";
import { 
  FaBookOpen, 
  FaEnvelope, 
  FaGlobe, 
  FaLaptopCode, 
  FaPercent, 
  FaMicrochip 
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ResourcesSection = () => {
  const resources = [
    {
      icon: <FaBookOpen />,
      title: "IEEE Xplore Digital Library",
      desc: "Access millions of high-impact research papers, journals, and conference publications used by researchers worldwide.",
    },
    {
      icon: <FaEnvelope />,
      title: "Official IEEE Email ID",
      desc: "Get your professional IEEE domain email (yourname@ieee.org) to enhance credibility and global recognition.",
    },
    {
      icon: <FaPercent />,
      title: "Conference Discounts",
      desc: "Receive significant discounts on international conferences, seasonal schools, and IEEE flagship events.",
    },
    {
      icon: <FaMicrochip />,
      title: "Hardware & Tech Discounts",
      desc: "Avail special pricing on hardware kits, development boards, and technical tools for your projects.",
    },
    {
      icon: <FaGlobe />,
      title: "Global Events Access",
      desc: "Participate in international summits, hackathons, leadership congresses, and global IEEE competitions.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Learning & Skill Platforms",
      desc: "Access webinars, technical courses, leadership training, and career development sessions.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-800">
          Exclusive IEEE Resources
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
          IEEE membership gives you access to world-class technical resources,
          research tools, and global platforms that accelerate your academic
          and professional growth.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {resources.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="text-blue-700 text-3xl mb-4">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Highlight Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mt-16"
      >
        <p className="text-xl font-semibold text-blue-700">
          Knowledge. Access. Opportunity. All in one membership.
        </p>
      </motion.div>
    </section>
  );
};

export default ResourcesSection;
