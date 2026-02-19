import React from "react";
import { useParams } from "react-router-dom";
import { eventsData } from "../data/eventsData";

const EventDetails = () => {
  const { id } = useParams();

  const event = eventsData.find(
    (e) => e.id === Number(id)
  );

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-semibold">
          Event Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        
        {/* Image */}
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-80 object-cover"
        />

        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {event.title}
          </h1>

          <p className="text-blue-600 italic mb-6">
            {event.tagline}
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700 mb-6">
            <p><strong>📅 Date:</strong> {event.date}</p>
            <p><strong>⏰ Time:</strong> {event.time}</p>
            <p><strong>📍 Venue:</strong> {event.venue}</p>
            <p><strong>🏢 Department:</strong> {event.department}</p>
            <p><strong>📂 Section:</strong> {event.section}</p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
