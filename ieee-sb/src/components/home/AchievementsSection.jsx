import React from "react";
import { motion } from "framer-motion";

const achievements = [
  { number: 1500, suffix: "+", label: "Active Members" },
  { number: 50, suffix: "+", label: "Technical Events Conducted" },
  { number: 20, suffix: "+", label: "Industry Collaborations" },
  { number: 10, suffix: "+", label: "National Recognitions" },
];

const AchievementsSection = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-blue-50">
      <div className="max-w-7xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-700 mb-16"
        >
          Our Achievements
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-10">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-10"
            >
              <h3 className="text-4xl font-bold text-blue-700 mb-4">
                {item.number}{item.suffix}
              </h3>

              <p className="text-gray-600 text-lg">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;
