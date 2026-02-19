import React from "react";
import { motion } from "framer-motion";
import { 
  FaUserTie, 
  FaGlobeAsia, 
  FaRocket, 
  FaUsers, 
  FaAward 
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const LeadershipExposureSection = () => {
  const leadershipPoints = [
    {
      icon: <FaUserTie />,
      title: "Executive Leadership Roles",
      desc: "Serve as Chair, Vice Chair, Secretary, Treasurer, or Committee Head and lead impactful initiatives within the Student Branch.",
    },
    {
      icon: <FaUsers />,
      title: "IEEE Gujarat Section Representation",
      desc: "Represent SCET at the Section level as SSR (Section Student Representative) and influence regional IEEE activities.",
    },
    {
      icon: <FaGlobeAsia />,
      title: "National & International Congresses",
      desc: "Participate in AISYWLC, seasonal schools, global conferences like ICASSP, and represent your branch on national platforms.",
    },
    {
      icon: <FaRocket />,
      title: "Global Hackathons & Competitions",
      desc: "Compete in events like NASA Space Apps Challenge, Datathons, and IEEE innovation competitions.",
    },
    {
      icon: <FaAward />,
      title: "Awards & Global Recognition",
      desc: "Earn volunteer awards, leadership recognition, and travel grants that strengthen your academic and professional profile.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-white via-blue-50 to-white">
      
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
          Leadership & Global Exposure
        </h2>
        <div className="w-24 h-1 bg-blue-700 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
          IEEE is not just about attending events — it’s about leading them.
          Develop leadership skills, represent your branch globally, and
          build a profile that stands out.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {leadershipPoints.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.04 }}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300"
          >
            <div className="text-blue-700 text-3xl mb-4">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Motivational Highlight */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mt-16"
      >
        <p className="text-2xl font-semibold text-blue-800">
          Don’t just be a member. Be a Leader.
        </p>
      </motion.div>
    </section>
  );
};

export default LeadershipExposureSection;
