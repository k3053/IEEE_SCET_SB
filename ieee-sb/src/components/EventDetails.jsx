import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { eventsData } from "../data/eventsData";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = eventsData.find(
    (e) => e.id === Number(id)
  );

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50 px-6">
        <h1 className="text-3xl font-semibold text-gray-700">
          Event Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* ================= Main Layout ================= */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* ================= LEFT: Poster ================= */}
          {event.image && (
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full max-w-md lg:max-w-lg h-auto object-contain rounded-2xl shadow-2xl border border-gray-200 bg-white"
              />
            </motion.div>
          )}

          {/* ================= RIGHT: Content ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Title */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-3 leading-tight">
                {event.title}
              </h1>

              {event.tagline && (
                <p className="text-lg italic text-gray-600">
                  {event.tagline}
                </p>
              )}
            </div>

            {/* Event Info */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
              <div className="grid sm:grid-cols-2 gap-4 text-gray-700">

                <p><strong>📅 Date:</strong> {event.date}</p>
                <p><strong>⏰ Time:</strong> {event.time}</p>
                <p><strong>📍 Venue:</strong> {event.venue}</p>
                <p><strong>🏢 Department:</strong> {event.department}</p>
                <p><strong>📂 Section:</strong> {event.section}</p>

              </div>
            </div>

            {/* Description */}
            {event.description && (
              <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  About the Event
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {event.description}
                </p>
              </div>
            )}

            {/* Back Button */}
            <div>
              <button
                onClick={() => navigate(-1)}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300"
              >
                ← Go Back
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default EventDetails;
