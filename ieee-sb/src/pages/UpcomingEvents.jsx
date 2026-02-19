import React from "react";
import { useNavigate } from "react-router-dom";
import { eventsData } from "../data/eventsData";

const UpcomingEvents = () => {
  const navigate = useNavigate();

  const sortedEvents = [...eventsData].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  // 🎨 Section Styling Configuration
  const sectionStyles = {
    technical: {
      title: "text-blue-600",
      shadow: "hover:shadow-blue-300",
      badge: "bg-blue-100 text-blue-600",
    },
    "non-technical": {
      title: "text-pink-600",
      shadow: "hover:shadow-pink-300",
      badge: "bg-pink-100 text-pink-600",
    },
    workshop: {
      title: "text-green-600",
      shadow: "hover:shadow-green-300",
      badge: "bg-green-100 text-green-600",
    },
    webinar: {
      title: "text-purple-600",
      shadow: "hover:shadow-purple-300",
      badge: "bg-purple-100 text-purple-600",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-24 px-6 md:px-20">
      
      {/* Title */}
      <div className="text-center mb-24">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Upcoming Events
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-blue-200 h-full rounded-full"></div>

        {sortedEvents.map((event, index) => {
          const style =
            sectionStyles[event.section] || sectionStyles["technical"];

          return (
            <div
              key={event.id}
              className={`relative mb-24 flex items-center w-full ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              } justify-center`}
            >
              {/* Card */}
              <div
                onClick={() => navigate(`/event/${event.id}`)}
                className={`
                  relative w-full md:w-5/12
                  bg-white shadow-lg rounded-3xl
                  p-8 cursor-pointer
                  transition-all duration-500 ease-in-out
                  hover:scale-105 hover:-translate-y-2
                  ${style.shadow}
                  border border-gray-100
                `}
              >
                {/* Section Badge */}
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${style.badge}`}
                >
                  {event.section}
                </span>

                {/* Date */}
                <p className="text-sm text-gray-500 mb-2">
                  {event.date}
                </p>

                {/* Title */}
                <h2
                  className={`text-2xl font-bold mb-2 transition-colors duration-300 ${style.title}`}
                >
                  {event.title}
                </h2>

                {/* Tagline */}
                {event.tagline && (
                  <p className="italic text-gray-600 mb-3 text-sm">
                    {event.tagline}
                  </p>
                )}

                {/* Venue */}
                {event.venue && (
                  <p className="text-gray-600 text-sm">
                    📍 {event.venue}
                  </p>
                )}
              </div>

              {/* Dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md animate-pulse"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingEvents;
