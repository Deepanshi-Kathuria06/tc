import React from "react";
import ProjectCard from "../components/ProjectCard";
import image1 from "../assets/img1.jpeg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.jpg";

const projects = [
  {
    title: "Modern Villa Interior",
    location: "Gurgaon",
    image: image1,
    slug: "modern-villa-interior",
  },
  {
    title: "Luxury Apartment Design",
    location: "Delhi",
    image:image2,
    slug: "luxury-apartment-design",
  },
  {
    title: "Boutique Office Interior",
    location: "Noida",
    image: image3,
    slug: "boutique-office-interior",
  },
  {
    title: "Contemporary Living Room",
    location: "Mumbai",
    image: image4,
    slug: "contemporary-living-room",
  },
  {
    title: "Minimal Bedroom Design",
    location: "Bangalore",
    image: image5,
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
