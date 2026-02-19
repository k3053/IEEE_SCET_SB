import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { eventsData } from "../../data/eventsData";

const PastEventsSection = () => {
  const navigate = useNavigate();

  // Convert event date string to Date object safely
  const parseDate = (dateString) => {
    return new Date(dateString);
  };

  // Filter past events
  const pastEvents = eventsData.filter(
    (event) => parseDate(event.date) < new Date()
  );

  if (pastEvents.length === 0) return null;

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
          Past Events
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {pastEvents.slice(0, 3).map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              onClick={() => navigate(`/event/${event.id}`)}
              className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-8 text-left border border-gray-100"
            >
              <div className="mb-4 text-sm text-blue-600 font-medium">
                {event.date}
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {event.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {event.description.length > 120
                  ? event.description.substring(0, 120) + "..."
                  : event.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;
