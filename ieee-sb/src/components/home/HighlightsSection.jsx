import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { eventsData } from "../../data/eventsData";
import { getHighlightEvents } from "../../utils/eventUtils";

const HighlightsSection = () => {
  const navigate = useNavigate();

  // ✅ Get only upcoming highlighted events (sorted by priority)
const highlightEvents = getHighlightEvents(eventsData);


  return (
    <section className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-700 mb-16"
        >
          Our Highlights
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {highlightEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
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
        </div>

      </div>
    </section>
  );
};

export default HighlightsSection;
