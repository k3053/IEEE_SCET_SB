import React from 'react';

const UpcomingEvents = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold">Upcoming Events</h1>
      <ul className="list-disc ml-10 mt-4">
        <li>Event 1 - March 25, 2025</li>
        <li>Event 2 - April 10, 2025</li>
        {/* Add more events */}
      </ul>
    </div>
  );
};

export default UpcomingEvents;
