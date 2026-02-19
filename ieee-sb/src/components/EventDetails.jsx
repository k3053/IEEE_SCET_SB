import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { eventsData } from "../data/eventsData";
import { getEventById } from "../utils/eventUtils";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = getEventById(eventsData, id);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-4">
            Event Not Found
          </h1>
          <button
            onClick={() => navigate("/events")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">

        {/* Image */}
        {event.image && (
          <motion.img
            src={event.image}
            alt={event.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-80 object-cover rounded-3xl shadow-lg mb-8"
          />
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-700 mb-4"
        >
          {event.title}
        </motion.h1>

        {/* Tagline */}
        {event.tagline && (
          <p className="text-gray-600 italic mb-6">
            {event.tagline}
          </p>
        )}

        {/* Meta Info */}
        <div className="flex flex-wrap gap-3 mb-6">
          {event.department && (
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              {event.department}
            </span>
          )}

          {event.section && (
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm capitalize">
              {event.section}
            </span>
          )}

          {event.date && (
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              📅 {event.date}
            </span>
          )}

          {event.time && (
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              ⏰ {event.time}
            </span>
          )}

          {event.venue && (
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              📍 {event.venue}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed text-lg">
          {event.description}
        </p>

        {/* Back Button */}
        <div className="mt-10">
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            ← Go Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default EventDetails;
