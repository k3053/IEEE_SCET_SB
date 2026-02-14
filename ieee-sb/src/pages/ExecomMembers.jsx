import React from "react";
import E1 from "../assets/Members/Execom/E1.jpg";
import E2 from "../assets/Members/Execom/E2.jpg";
import E3 from "../assets/Members/Execom/E3.jpg";
import E4 from "../assets/Members/Execom/E4.jpg";
import E5 from "../assets/Members/Execom/E5.jpg";
import E6 from "../assets/Members/Execom/E6.jpg";
import E7 from "../assets/Members/Execom/E7.jpg";
import E8 from "../assets/Members/Execom/E8.jpg";
import E9 from "../assets/Members/Execom/E9.jpg";

const execomData = [
  { 
    name: "Masoom Parekh", 
    role: "Chair IEEE SCET SB", 
    department: "Computer Engineering", 
    image: E1 
  },
  { 
    name: "Ved Kapadia", 
    role: "Vice Chair IEEE SCET SB", 
    department: "Electronics & Communication", 
    image: E2 
  },
  { 
    name: "Aryan Sariya", 
    role: "Joint Vice Chair IEEE SCET SB", 
    department: "Computer Engineering", 
    image: E3 
  },
  { 
    name: "Anushka Goyal", 
    role: "Secretary IEEE SCET SB", 
    department: "Electronics & Communication", 
    image: E4 
  },
  { 
    name: "Dev Patel", 
    role: "Joint Secretary IEEE SCET SB", 
    department: "Computer Engineering", 
    image: E5 
  },
  { 
    name: "Vir Gupta", 
    role: "Treasurer IEEE SCET SB", 
    department: "Computer Engineering", 
    image: E6 
  },
  { 
    name: "Dhwanil Doshi", 
    role: "Membership Development Chair IEEE SCET SB", 
    department: "Electronics & Communication", 
    image: E7 
  },
  { 
    name: "Chharvvi Batra", 
    role: "Graphics Lead IEEE SCET SB", 
    department: "Electronics & Communication", 
    image: E8 
  },
  { 
    name: "Bhavya Ladumor", 
    role: "Technical Lead IEEE SCET SB", 
    department: "Information Technology", 
    image: E9 
  },
];

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
        {execomData.map((member, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-md 
            hover:shadow-2xl hover:-translate-y-2 
            transition-all duration-300 w-80 overflow-hidden"
          >
            {/* Accent Bar */}
            <div className="h-2 bg-blue-600"></div>

            <div className="p-10 text-center">

              {/* Rounded Professional Image */}
              <div className="relative w-44 h-44 mx-auto mb-8 rounded-2xl overflow-hidden">

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover 
                  transition duration-500 ease-in-out 
                  group-hover:scale-110"
                />

                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-black/10 
                  opacity-0 group-hover:opacity-100 
                  transition duration-500">
                </div>

              </div>

              {/* Name */}
              <h2 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h2>

              {/* Role */}
              <p className="text-blue-600 font-medium mt-3 text-sm uppercase tracking-wide">
                {member.role}
              </p>

              {/* Department Badge */}
              <div className="mt-5 inline-block bg-gray-100 text-gray-600 text-xs px-4 py-2 rounded-full">
                {member.department}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExecomMembers;
