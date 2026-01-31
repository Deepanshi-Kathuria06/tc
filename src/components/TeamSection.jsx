import React from "react";
import { motion } from "framer-motion";

import anmol from "../assets/anmol.jpeg";
import Sanjay from "../assets/Sanjay.jpeg";
import Vaibhav from "../assets/vaibhav.jpeg";

const team = [
  {
    name: "Anmol Singh",
    role: "Design Director",
    image: anmol,
    bio:
      "Leads the studio’s design direction, shaping spaces with clarity, structure, and thoughtful execution across residential and commercial projects.",
  },
  {
    name: "Sanjay Shah",
    role: "Associate Architect",
    image: Sanjay,
    bio:
      "With over 25 years of experience, Sanjay supports projects through technical depth, discipline, and a strong understanding of context.",
  },
  {
    name: "Vaibhav Dwivedi",
    role: "Associate Architect",
    image: Vaibhav,
    bio:
      "Works across residential, hospitality, and commercial spaces, focusing on intuitive layouts and human-centric design solutions.",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold text-black mb-20"
        >
          Meet the People Behind the Studio
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden border border-gray-200"
            >

              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="
                  w-full h-[420px] object-cover
                  transition-transform duration-700
                  group-hover:scale-105
                "
              />

              {/* Default Name Strip (VISIBLE ALWAYS) */}
              <div
                className="
                  absolute bottom-0 left-0 right-0
                  bg-black/60
                  px-6 py-4
                  transition-opacity duration-300
                  group-hover:opacity-0
                "
              >
                <h3 className="text-lg font-medium text-white">
                  {member.name}
                </h3>
              </div>

              {/* Hover Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-[#f7f3ec]/95
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                "
              />

              {/* Hover Content */}
              <div
                className="
                  absolute inset-0
                  p-6
                  flex flex-col justify-end
                  translate-y-10
                  group-hover:translate-y-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all duration-500
                "
              >
                <h3 className="text-xl font-medium text-black">
                  {member.name}
                </h3>

                <p className="text-sm italic text-[#9c7c3d] mb-3">
                  {member.role}
                </p>

                <p className="text-sm leading-6 text-gray-700 font-serif">
                  {member.bio}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;