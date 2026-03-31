import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { eventsData } from "../../data/eventsData";
import { getHighlightEvents } from "../../utils/eventUtils";

const HighlightsSection = () => {
  const navigate = useNavigate();

  const highlightEvents = getHighlightEvents(eventsData);

  // 🔥 Parent container animation (stagger effect)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // 🔥 Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // 🔥 Title animation
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Title */}
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-700 mb-16"
        >
          Our Highlights
        </motion.h2>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {highlightEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.04 }}
              onClick={() => navigate(`/event/${event.id}`)}
              className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <motion.img
                  src={event.image}
                  alt={event.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-52 object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <p className="text-sm text-blue-600 mb-2">
                  {event.date}
                </p>

                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {event.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {event.description.length > 100
                    ? event.description.substring(0, 100) + "..."
                    : event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HighlightsSection;