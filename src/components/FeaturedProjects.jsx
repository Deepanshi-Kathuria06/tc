// components/FeaturedProjects.jsx
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import {Link} from 'react-router-dom';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Minimalist Urban Apartment",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shape: "clip-path-house-top"
    },
    {
      id: 2,
      title: "Luxury Penthouse Suite",
      category: "Luxury",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shape: "clip-path-zigzag"
    },
    {
      id: 3,
      title: "Modern Family Villa",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shape: "clip-path-roof"
    },
    {
      id: 4,
      title: "Corporate Headquarters",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shape: "clip-path-arch"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 fade-in-up opacity-0 translate-y-8 transition-all duration-700">
          <span className="text-[#c6a46a] font-semibold tracking-widest text-xs md:text-sm uppercase mb-2 md:mb-4 block">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-gray-800 mb-4 md:mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Each project tells a unique story, crafted with precision and passion 
            to create spaces that inspire and delight.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group px-6 cursor-pointer fade-in-up opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`h-90 sm:h-56 md:h-64 overflow-hidden mb-4 md:mb-6 ${project.shape} group-hover:shadow-xl transition-shadow duration-500`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="text-center">
                <span className="text-[#c6a46a] text-xs md:text-sm font-medium tracking-widest uppercase">
                  {project.category}
                </span>
                <h3 className="text-lg sm:text-xl font-playfair text-gray-800 mt-2 mb-3 md:mb-4 group-hover:text-[#c6a46a] transition-colors duration-300">
                  {project.title}
                </h3>
                <button className="inline-flex items-center text-gray-600 cursor-pointer hover:text-[#c6a46a] transition-colors duration-300 group">
                  {/* <span className="text-sm font-medium tracking-wide  ">View Project</span> */}
                 
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 md:mt-12 fade-in-up opacity-0 translate-y-8 transition-all  duration-700 delay-500">
          <Link to="/project">
          <button className="px-8 py-3 border border-[#c6a46a] text-[#c6a46a] cursor-pointer text-sm font-medium tracking-wider uppercase hover:bg-[#c6a46a] hover:text-white transition-all duration-300">
            View All Projects
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;