import React from 'react';
import { eventsData } from '../data/eventsData';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams();
  const event = eventsData.find(e => e.id === parseInt(id));

  if (!event) return <p>Event not found!</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <img src={event.image} alt={event.title} className="w-full" />
      <h1 className="text-3xl font-bold my-4">{event.title}</h1>
      <p className="text-gray-700">{event.description}</p>
      <div className="mt-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{event.department}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ml-2">{event.section}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ml-2">{event.date}</span>
      </div>
    </div>
  );
};

export default EventDetails;
