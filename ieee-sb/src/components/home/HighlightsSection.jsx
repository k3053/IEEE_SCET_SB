import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { eventsData } from "../../data/eventsData";

const HighlightsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-16">
          Our Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {eventsData.slice(0, 3).map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ scale: 1.03 }}
              onClick={() => navigate(`/event/${event.id}`)}
              className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6 text-left">
                <p className="text-sm text-blue-600 mb-2">
                  {event.date}
                </p>

                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {event.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {event.description.substring(0, 100)}...
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
