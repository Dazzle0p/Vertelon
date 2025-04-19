import React from "react";
import test from "../assets/testimonial_profile_7senses.png";

const teamMembers = [
  {
    name: "Shubham Raj",
    title: "Founder & CEO",
    image: test,
  },
  {
    name: "Sanskar Mishra",
    title: "Designing & Marketing Expert",
    image: test,
  },
  {
    name: "Utkarsh Jha",
    title: "Website Developer",
    image: test,
  },
  {
    name: "Harsh Baghel",
    title: "Website Developer",
    image: test,
  },
  {
    name: "Shardul Vikram",
    title: "App Developer",
    image: test,
  },
  {
    name: "Vijayant Priyadarshi",
    title: "App Developer",
    image: test,
  },
  {
    name: "Satyam Devraj",
    title: "AI Developer",
    image: test,
  },
];

export default function TeamMembers() {
  return (
    <div className="min-h-screen bg-green-100 py-10 px-4">
      <h1 className="text-center text-3xl font-bold mb-8">Our Team</h1>

      {/* Centered first member */}
      <div className="flex justify-center mb-6">
        <div
          className="bg-[#ACEBE2] text-center p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-2  hover:bg-[#a0e8db] hover:border-[#00838d]  w-full sm:w-1/2"
          data-aos="fade-in"
          data-aos-duration="800"
          data-aos-offset="200"
        >
          <img
            src={teamMembers[0].image}
            alt={teamMembers[0].name}
            className="w-[180px] h-[180px] rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="text-lg font-bold">{teamMembers[0].name}</h2>
          <p className="text-sm">{teamMembers[0].title}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {teamMembers.slice(1).map((member, index) => (
          <div
            key={index + 1}
            className="bg-[#ACEBE2] text-center p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-2  hover:bg-[#a0e8db] hover:border-[#00838d] transition-colors duration-200"
            data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
            data-aos-duration="800"
            data-aos-offset="200"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-[180px] h-[180px] rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-xl font-bold">{member.name}</h2>
            <p className="text-sm text-gray-700">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
