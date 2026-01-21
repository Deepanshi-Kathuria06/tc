// components/About.jsx
import React from "react";
import { Award } from "lucide-react";
import {Link} from "react-router-dom";

const About = () => {
  const stats = [
    { value: "50+", label: "Awards Won" },
    { value: "200+", label: "Happy Clients" },
    { value: "10+", label: "Years Experience" },
    { value: "300+", label: "Projects Completed" },
  ];

  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="h-[300px] sm:h-[380px] md:h-[450px] lg:h-[520px] overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&auto=format&fit=crop&q=80"
                alt="About TC Design Studio"
                className="w-full h-full object-cover"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-4 right-4 md:-bottom-6 md:-right-6 bg-white p-4 md:p-6 shadow-xl rounded-lg max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#c6a46a] rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-800">
                    Best Interior Design
                  </p>
                  <p className="text-sm text-gray-500">Award 2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <span className="text-[#c6a46a] tracking-widest text-xs uppercase font-semibold block mb-3">
              About TC
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Designing Thoughtful Spaces with Purpose
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              TC Design Studio is driven by a belief that spaces shape how people
              live, work, and connect. Every project is approached with clarity,
              intention, and respect for both function and form.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
              Our work reflects a balance of restraint and character, creating
              environments that feel distinctive yet timeless. Each space is
              carefully considered, responding to its context while remaining
              deeply personal to those who experience it.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-md sm:max-w-none mx-auto sm:mx-0 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-[#c6a46a]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center sm:justify-start">
              <Link
  to="/project"
  className="inline-block px-8 py-3 border border-[#c6a46a] text-[#c6a46a] text-sm tracking-widest uppercase
             hover:bg-[#c6a46a] hover:text-white transition"
>
  Learn More About TC
</Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
