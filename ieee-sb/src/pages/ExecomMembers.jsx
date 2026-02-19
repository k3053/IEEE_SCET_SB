import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { execomData } from "../data/ExecomeMembersData";

const ExecomMembers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white py-24 px-6">

      {/* Page Heading */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          IEEE SCET SB Executive Committee
        </h1>
        <div className="w-28 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 justify-items-center">
        {execomData.map((member, index) => {

          const CardContent = (
            <div className="group bg-white rounded-2xl shadow-md 
              hover:shadow-2xl hover:-translate-y-2 
              transition-all duration-300 w-80 overflow-hidden cursor-pointer">

              <div className="h-2 bg-blue-600"></div>

              <div className="p-10 text-center">

                {/* Image */}
                <div className="relative w-44 h-44 mx-auto mb-8 rounded-2xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover 
                      transition duration-500 ease-in-out 
                      group-hover:scale-110"
                  />

                  {/* Show overlay ONLY if linkedin exists */}
                  {member.linkedin && (
                    <div
                      className="absolute inset-0 bg-black/30 
                                opacity-0 group-hover:opacity-100 
                                transition duration-300"
                    >
                      <FaLinkedin
                        className="absolute bottom-3 right-3 text-white text-3xl 
                                  opacity-0 group-hover:opacity-100 
                                  transition duration-300"
                      />
                    </div>
                  )}
                </div>

                <h2 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h2>

                <p className="text-blue-600 font-medium mt-3 text-sm uppercase tracking-wide">
                  {member.role}
                </p>

                <div className="mt-5 inline-block bg-gray-100 text-gray-600 text-xs px-4 py-2 rounded-full">
                  {member.department}
                </div>

              </div>
            </div>
          );

          // If LinkedIn exists → wrap in anchor
          return member.linkedin ? (
            <a
              key={index}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CardContent}
            </a>
          ) : (
            <div key={index}>
              {CardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExecomMembers;