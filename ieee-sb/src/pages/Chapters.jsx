import React from 'react';

const Chapters = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold">IEEE SCET SB Chapters</h1>
      <ul className="list-disc ml-10 mt-4">
        <li>Computer Society (CS)</li>
        <li>Women in Engineering (WIE)</li>
        <li>Vehicular Technology Society (VTS)</li>
        <li>Signal Processing Society (SPS)</li>
        <li>Special Interest Group on Humanitarian Technology (SIGHT)</li>

        {/* Add more chapters */}
      </ul>
    </div>
  );
};

export default Chapters;
