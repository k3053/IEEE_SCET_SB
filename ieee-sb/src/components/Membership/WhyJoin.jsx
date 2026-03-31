import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaMoneyBillWave, FaUserTie, FaBook } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const WhyJoinSection = () => {
  const benefits = [
    {
      icon: <FaMoneyBillWave />,
      title: "Funding & Grants",
      desc: "Access project funding, travel grants, and registration reimbursements for national and international conferences.",
    },
    {
      icon: <FaGlobe />,
      title: "Global Networking",
      desc: "Connect with 500,000+ professionals across 160+ countries including industry leaders and researchers.",
    },
    {
      icon: <FaUserTie />,
      title: "Leadership Growth",
      desc: "Hold executive positions, represent IEEE at section level, and build a powerful professional profile.",
    },
    {
      icon: <FaBook />,
      title: "Exclusive Resources",
      desc: "Get IEEE email ID, digital library access, research papers, and discounts on conferences & hardware kits.",
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
          Why Join IEEE ?
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center"
          >
            <div className="text-blue-600 text-4xl mb-4 flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyJoinSection;
