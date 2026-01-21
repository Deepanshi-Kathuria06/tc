import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Modern Villa Interior",
    location: "Gurgaon",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop&q=80",
    slug: "modern-villa-interior",
  },
  {
    title: "Luxury Apartment Design",
    location: "Delhi",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80",
    slug: "luxury-apartment-design",
  },
  {
    title: "Boutique Office Interior",
    location: "Noida",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&auto=format&fit=crop&q=80",
    slug: "boutique-office-interior",
  },
  {
    title: "Contemporary Living Room",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&auto=format&fit=crop&q=80",
    slug: "contemporary-living-room",
  },
  {
    title: "Minimal Bedroom Design",
    location: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&auto=format&fit=crop&q=80",
    slug: "minimal-bedroom-design",
  },
];

const Projects = () => {
  return (
    <section className="bg-white px-6 md:px-16 lg:px-24  py-5">
      
      {/* Heading */}
      <div className="mb-5 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-playfair font-bold text-black">
          Past Projects
        </h1>
        <p className="text-gray-500 mt-3">
          A curated selection of completed interior projects.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

    </section>
  );
};

export default Projects;
