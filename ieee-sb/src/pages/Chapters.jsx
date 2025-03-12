import React from 'react';

const Chapters = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold">IEEE SCET SB Chapters</h1>
      <ul className="list-disc ml-10 mt-4">
        <li>Computer Society</li>
        <li>Electronics and Communication Society</li>
        <li>Power and Energy Society</li>
        {/* Add more chapters */}
      </ul>
    </div>
  );
};

export default Chapters;
