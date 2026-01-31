import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import image1 from "../assets/img1.jpeg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.jpg";
import Drawing3 from "../assets/Drawing3.jpg";
import Drawing1 from "../assets/Drawing1.jpg";
import Drawing2 from "../assets/Drawing2.jpg";

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
    image: image2,
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
  {
    title: "Drawing Room – Angle 1",
    location: "Delhi",
    image: Drawing1,
    slug: "drawing-room-angle-1",
  },
  {
    title: "Drawing Room – Angle 2",
    location: "Delhi",
    image: Drawing2,
    slug: "drawing-room-angle-2",
  },
  {
    title: "Drawing Room – Angle 3",
    location: "Delhi",
    image: Drawing3,
    slug: "drawing-room-angle-3",
  },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className="bg-white px-6 md:px-16 lg:px-24 py-10">
        {/* Heading */}
        <div className="mb-10 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-black">
            Gallery
          </h1>
          <p className="text-gray-500 mt-3">
            A curated selection of completed interior projects.
          </p>
        </div>

        {/* Architectural Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(project.image)}
              className="relative mb-6 overflow-hidden rounded-2xl cursor-pointer group break-inside-avoid-column"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-playfair font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-80">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Preview Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/60"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl font-light z-50"
          >
            ✕
          </button>

          {/* Image */}
          <img
            src={selectedImage}
            alt="Project Preview"
            className="max-w-[88%] max-h-[88%] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Projects;
