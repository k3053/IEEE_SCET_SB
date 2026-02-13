import React from "react";

const EventCard = ({ event }) => {
  if (!event) return null;

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white">
      
      <img
        className="w-full h-48 object-cover"
        src={event?.image || "/placeholder.jpg"}
        alt={event?.title || "Event Image"}
      />

      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">
          {event?.title}
        </h2>

        <p className="text-gray-600 text-sm">
          {event?.description}
        </p>
      </div>

      <div className="px-6 pt-4 pb-4 flex flex-wrap gap-2">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 text-xs rounded-full">
          {event?.department}
        </span>

        <span className="bg-green-100 text-green-700 px-3 py-1 text-xs rounded-full">
          {event?.section}
        </span>

        <span className="bg-gray-200 text-gray-700 px-3 py-1 text-xs rounded-full">
          {event?.date}
        </span>
      </div>
    </div>
  );
};

export default EventCard;
