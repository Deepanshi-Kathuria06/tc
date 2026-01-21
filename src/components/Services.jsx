import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Building2, 
  Palette,
  Plus,
  ChevronRight,
  Sparkles,
  Layers,
  Eye
} from 'lucide-react';

// Import your images (update these paths with your actual images)
import residential from "../assets/v2.mp4";
import residential1 from "../assets/v2.mp4"; //
import residential2 from "../assets/v2.mp4"; // 

const services = [
  {
    title: "Architecture",
    description:
      "We develop concepts for structures and buildings. We plan and detail everything from ground up, including structure, facades, services, and internal spaces.",
    media: residential,
    type: "video",
    icon: <Home className="w-6 h-6" />,
    features: [
      "Concept Development",
      "Building Planning",
      "Facade Design",
      "Technical Drawings",
    ],
    color: "#c6a46a",
  },
  {
    title: "Interiors",
    description:
      "We conceptualise and detail interior spaces within a building, after understanding the requirements and aspirations of the end user.",
    media: residential1,
    type: "video",
    icon: <Building2 className="w-6 h-6" />,
    features: [
      "Space Planning",
      "Furniture Selection",
      "Material Palette",
      "Interior Styling",
    ],
    color: "#8B7355",
  },
  {
    title: "Product",
    description:
      "Be it a light fixture, a rug, or a piece of furniture, we design and curate products that enhance the character of a space. We also explore digital products for the design world.",
    media: residential2,
    type: "video",
    icon: <Palette className="w-6 h-6" />,
    features: [
      "Furniture Design",
      "Lighting Design",
      "Decor Curation",
      "Digital Concepts",
    ],
    color: "#A8926F",
  },

  {
    title: "Turn-Key",
    description:
      "We provide execution and construction management services, ensuring a seamless journey from planning a space to getting it built, delivered, and styled.",
    media: residential,
    type: "video",
    icon: <Layers className="w-6 h-6" />,
    features: [
      "Project Execution",
      "Vendor Coordination",
      "Site Supervision",
      "Final Handover",
    ],
    color: "#7E6A4F",
  },
  {
    title: "Visualization",
    description:
      "We create detailed graphics and renderings using advanced software, helping you better understand and experience the design before execution.",
    media: residential,
    type: "video",
    icon: <Eye className="w-6 h-6" />,
    features: [
      "3D Renders",
      "Interior Visuals",
      "Exterior Views",
      "Design Walkthroughs",
    ],
    color: "#6F5D45",
  },


];

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-10 overflow-hidden ">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c6a46a]/20 via-[#c6a46a]/40 to-[#c6a46a]/20"></div>
      <div className="absolute top-40 right-0 w-64 h-64 rounded-full bg-[#c6a46a]/5 -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 rounded-full bg-[#8B7355]/5 translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated Heading Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 max-w-4xl"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-[#c6a46a]" />
            <span className="text-[#c6a46a] text-sm font-medium tracking-wider uppercase">
              Our Expertise
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-light text-gray-900 leading-tight">
            <span className="block">Services</span>
            <span className="text-[#c6a46a] font-normal">Crafted with</span>
            <span className="block">Precision & Passion</span>
          </h2>
          
          <p className="mt-8 text-xl text-gray-600 max-w-2xl leading-relaxed">
            A thoughtful approach to designing spaces that feel refined, functional, 
            and enduring. Each project tells a unique story through meticulous attention to detail.
          </p>
        </motion.div>

        {/* Interactive Horizontal Service Cards */}
        <div className="relative">
          {/* Service Selector - Horizontal Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-5">
            {services.map((service, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveService(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                  activeService === index 
                    ? 'bg-[#c6a46a] text-white shadow-lg shadow-[#c6a46a]/30' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg cursor-pointer'
                }`}
              >
                <div className={`p-2 rounded-lg ${
                  activeService === index ? 'bg-white/20' : 'bg-[#c6a46a]/10'
                }`}>
                  {service.icon}
                </div>
                <span className="text-lg font-medium">{service.title}</span>
                {activeService === index && (
                  <ChevronRight className="w-5 h-5 animate-pulse" />
                )}
              </motion.button>
            ))}
          </div>

          {/* Main Interactive Display */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Service Navigation Dots */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-1 z-20 flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeService === index 
                      ? 'bg-[#c6a46a] w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Service Content */}
            <div className="flex flex-col lg:flex-row min-h-[600px]">
              {/* Media Section */}
              <div className="lg:w-2/3 relative overflow-hidden group">
                <div className="relative h-96 lg:h-full">
                 <motion.div
  key={activeService}
  initial={{ opacity: 0, scale: 1.1 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="absolute inset-0"
>
  {services[activeService].type === "video" ? (
    <video
      src={services[activeService].media}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    />
  ) : (
    <img
      src={services[activeService].media}
      alt={services[activeService].title}
      className="w-full h-full object-cover"
    />
  )}

  {/* Overlay Gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent"></div>
</motion.div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/3 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50/50">
                <motion.div
                  key={activeService + "content"}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {/* Service Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl" style={{ backgroundColor: services[activeService].color + '20' }}>
                      {services[activeService].icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-light text-gray-900">
                        {services[activeService].title}
                      </h3>
                      <div className="mt-2 h-px w-16 bg-[#c6a46a]"></div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {services[activeService].description}
                  </p>

                  {/* Features List */}
                  <div className="mb-10">
                    <div className="flex items-center gap-2 mb-4">
                      <Layers className="w-5 h-5 text-[#c6a46a]" />
                      <h4 className="text-gray-800 font-medium">What We Offer</h4>
                    </div>
                    <ul className="grid grid-cols-2 gap-3">
                      {services[activeService].features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <Plus className="w-4 h-4 text-[#c6a46a]" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center justify-center w-full px-8 py-4 overflow-hidden font-medium text-white bg-gray-900 rounded-xl hover:bg-[#c6a46a] transition-all duration-300"
                  >
                    <span className="relative z-10">Start Your Project</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#c6a46a] to-[#8B7355] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <ChevronRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
        
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;