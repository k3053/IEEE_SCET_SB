import React from "react";
import { useNavigate } from "react-router-dom";
import { eventsData } from "../data/eventsData";
import {
  getUpcomingEvents,
  getPastEvents,
} from "../utils/eventUtils";

const UpcomingEvents = () => {
  const navigate = useNavigate();

  const upcomingEvents = getUpcomingEvents(eventsData);
  const pastEvents = getPastEvents(eventsData); // newest → oldest

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

  const getStyle = (section) =>
    sectionStyles[section?.toLowerCase()] ||
    sectionStyles["technical"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-24 px-6 md:px-20">

      {/* ================= UPCOMING EVENTS ================= */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Upcoming Events
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {upcomingEvents.length === 0 ? (
        <div className="text-center text-gray-500 text-lg mb-24">
          No upcoming events at the moment.
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mb-32">
          {upcomingEvents.map((event) => {
            const style = getStyle(event.section);

            return (
              <div
                key={event.id}
                onClick={() => navigate(`/event/${event.id}`)}
                className={`cursor-pointer bg-white rounded-3xl shadow-lg border border-gray-100 p-8 
                  transition-all duration-500 ease-in-out 
                  hover:scale-105 hover:-translate-y-2 ${style.shadow}`}
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
                <h2 className={`text-xl font-bold mb-2 ${style.title}`}>
                  {event.title}
                </h2>

                {/* Tagline */}
                {event.tagline && (
                  <p className="italic text-gray-600 text-sm mb-2">
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
            );
          })}
        </div>
      )}

      {/* ================= PAST EVENTS ================= */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Past Events
        </h1>
        <div className="w-24 h-1 bg-gray-400 mx-auto mt-4 rounded-full"></div>
      </div>

      {pastEvents.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          No past events available.
        </div>
      ) : (
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-gray-300 h-full rounded-full"></div>

          {pastEvents.map((event, index) => {
            const style = getStyle(event.section);

            return (
              <div
                key={event.id}
                className={`relative mb-24 flex items-center w-full ${index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                  } justify-center`}
              >
                {/* Card */}
                <div
                  onClick={() => navigate(`/event/${event.id}`)}
                  className={`relative w-full md:w-5/12 bg-white rounded-3xl border border-gray-100 p-8 cursor-pointer
                    shadow-lg transition-all duration-500 ease-in-out
                    hover:scale-105 hover:-translate-y-2 ${style.shadow}`}
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
                    className={`text-xl font-bold mb-2 ${style.title}`}
                  >
                    {event.title}
                  </h2>

                  {/* Tagline */}
                  {event.tagline && (
                    <p className="italic text-gray-600 text-sm mb-2">
                      {event.tagline}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-gray-600 text-sm">
                    {event.description?.length > 100
                      ? event.description.substring(0, 100) + "..."
                      : event.description}
                  </p>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 bg-gray-700 rounded-full border-4 border-white shadow-md"></div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
