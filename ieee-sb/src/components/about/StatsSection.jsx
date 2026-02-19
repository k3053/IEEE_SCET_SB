import { motion } from "framer-motion";
import CountUp from "./CountUp";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const StatsSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.8 }}
      className="grid md:grid-cols-3 gap-6 text-center"
    >
      <div className="bg-white shadow-lg p-8 rounded-2xl">
        <CountUp end={400000} />
        <p className="mt-2 text-gray-600 font-medium">Members Worldwide</p>
      </div>

      <div className="bg-white shadow-lg p-8 rounded-2xl">
        <CountUp end={1900} />
        <p className="mt-2 text-gray-600 font-medium">Conferences Annually</p>
      </div>

      <div className="bg-white shadow-lg p-8 rounded-2xl">
        <CountUp end={1200} />
        <p className="mt-2 text-gray-600 font-medium">Active Standards</p>
      </div>
    </motion.section>
  );
};

export default StatsSection;
