import React from "react";

const execomData = [
  {
    name: "Masoom Parekh",
    role: "Chair IEEE SCET SB",
    department: "Computer Engineering",
    image: "/src/assets/SB_logo.png",
  },
  {
    name: "Ved Kapadia",
    role: "Vice Chair IEEE SCET SB",
    department: "Electronics & Communication",
    image: "/src/assets/SB_logo.png",
  },
  {
    name: "Aryan Sariya",
    role: "Joint Vice Chair IEEE SCET SB",
    department: "Computer Engineering",
    image: "/src/assets/SB_logo.png",
  },
  {
    name: "Anushka Goyal",
    role: "Secretary IEEE SCET SB",
    department: "Electronics & Communication",
    image: "/src/assets/SB_logo.png",
  },
  {
    name: "Dev Patel",
    role: "Joint Secretary IEEE SCET SB",
    department: "Computer Engineering",
    image: "/src/assets/SB_logo.png",
  },
  {
    name: "Vir Gupta",
    role: "Treasurer IEEE SCET SB",
    department: "Computer Engineering",
    image: "/src/assets/SB_logo.png",
  },
  {
    name: "Dhwanil Doshi",
    role: "Membership Development Chair IEEE SCET SB",
    department: "Electronics & Communication",
    image: "/src/assets/SB_logo.png",
  },
  {
    name: "Chharvvi Batra",
    role: "Graphics Lead IEEE SCET SB",
    department: "Electronics & Communication",
    image: "/src/assets/SB_logo.png",
  },
  {
    name: "Bhavya Ladumor",
    role: "Technical Lead IEEE SCET SB",
    department: "Electronics & Communication",
    image: "/src/assets/SB_logo.png",
  },
];

const ExecomMembers = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      
      {/* Page Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-800">
          IEEE SCET SB Executive Committee
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        {execomData.map((member, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl shadow-sm hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 w-80"
          >
            {/* Blue Accent Bar */}
            <div className="h-2 bg-blue-600 rounded-t-xl"></div>

            <div className="p-8 text-center">
              
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 mx-auto object-cover rounded-md mb-6 
                transition duration-300 grayscale group-hover:grayscale-0"
              />

              {/* Name */}
              <h2 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h2>

              {/* Role */}
              <p className="text-blue-600 font-medium mt-2 text-sm uppercase tracking-wide">
                {member.role}
              </p>

              {/* Department Badge */}
              <div className="mt-4 inline-block bg-gray-100 text-gray-600 text-xs px-4 py-2 rounded-full">
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
