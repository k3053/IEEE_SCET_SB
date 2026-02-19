import React from "react";
import { motion } from "framer-motion";
import { 
  FaUserPlus, 
  FaIdCard, 
  FaUniversity, 
  FaCheckCircle 
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const HowToJoinSection = () => {

  const steps = [
    {
      icon: <FaUserPlus />,
      title: "Step 1: Create an IEEE Account",
      desc: "Visit the official IEEE website and create your personal IEEE account using your email ID."
    },
    {
      icon: <FaIdCard />,
      title: "Step 2: Choose Student Membership",
      desc: "Select IEEE Student Membership and add relevant societies like CS, SPS, VTS, WIE, or SIGHT."
    },
    {
      icon: <FaUniversity />,
      title: "Step 3: Select SCET Student Branch",
      desc: "While registering, choose Sarvajanik College of Engineering & Technology (SCET) Student Branch."
    },
    {
      icon: <FaCheckCircle />,
      title: "Step 4: Confirmation & Activation",
      desc: "Complete payment (if applicable), receive your IEEE Member ID, and start participating in events, grants, and leadership opportunities."
    },
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-white">

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-800">
          How To Join IEEE SCET SB
        </h2>
        <div className="w-24 h-1 bg-blue-700 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
          Becoming a member is simple. Follow these steps and unlock global opportunities.
        </p>
      </motion.div>

      {/* Steps Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.04 }}
            className="bg-blue-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300"
          >
            <div className="text-blue-700 text-3xl mb-4">
              {step.icon}
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {step.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Important Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mt-16"
      >
        <p className="text-gray-700 mb-6">
          💡 Student membership fees are subsidized and vary based on region and societies selected.
        </p>

        <a
          href="https://www.ieee.org/membership/join/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition duration-300 shadow-md"
        >
          Join IEEE Now
        </a>
      </motion.div>

    </section>
  );
};

export default HowToJoinSection;
