import React from "react";
import { motion } from "framer-motion";
import { FaDollarSign, FaPlane, FaTrophy, FaUniversity } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const FundingSection = () => {
  const proofs = [
    {
      icon: <FaPlane />,
      title: "100% Travel Grant – ICASSP 2025",
      desc: "Khushboo Jha received a full international travel grant to attend the world’s largest Signal Processing conference.",
    },
    {
      icon: <FaUniversity />,
      title: "100% Registration Waiver – AISYWLC",
      desc: "Anika Mehta secured a full registration fee waiver for the IEEE National Congress.",
    },
    {
      icon: <FaDollarSign />,
      title: "$1,000+ Chapter Funding",
      desc: "VTS secured US $1,000 and SIGHT received US $250 funding for student-driven technical projects.",
    },
    {
      icon: <FaTrophy />,
      title: "Hackathon & Datathon Prizes",
      desc: "Members secured 1st Prize in IEEE Sampark Datathon and top ranks in NASA Space Apps Challenge.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-white to-blue-50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-800">
          Funding, Grants & Global Recognition
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
          IEEE SCET SB is not just about events — it’s about opportunities.
          Our members consistently secure international grants, funding,
          and national-level recognitions.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {proofs.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-blue-600 text-3xl">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Strong Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mt-16"
      >
        <p className="text-xl font-semibold text-blue-700">
          If our members can secure global funding — so can you.
        </p>
      </motion.div>
    </section>
  );
};

export default FundingSection;
