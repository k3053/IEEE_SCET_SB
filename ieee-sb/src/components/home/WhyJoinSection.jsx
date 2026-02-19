import React from "react";
import { motion } from "framer-motion";

const WhyJoinSection = () => {
  const cards = [
    {
      icon: "🚀",
      title: "Technical Growth",
      desc: "Participate in workshops, hackathons, coding competitions, and hands-on technical events to enhance your practical skills.",
    },
    {
      icon: "🌍",
      title: "Global Exposure",
      desc: "Connect with a worldwide IEEE network of professionals and students.",
    },
    {
      icon: "🏆",
      title: "Leadership & Recognition",
      desc: "Develop leadership skills and gain recognition that strengthens your resume.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          Why You Should Join IEEE SCET SB!
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-16">
          Become part of a global technical community that empowers innovation and builds leadership skills.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
