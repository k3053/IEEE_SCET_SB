import React, { useState } from 'react';
import { eventsData } from '../data/eventsData';
import EventCard from './EventCard';

const DepartmentSection = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const filteredEvents = selectedDepartment === "All" ? eventsData : eventsData.filter(event => event.department === selectedDepartment);

  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Filter by Department:</label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          value={selectedDepartment}
          onChange={handleDepartmentChange}
        >
          <option value="All">All</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Electronics">Electronics</option>
          {/* Add more departments as needed */}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default DepartmentSection;
