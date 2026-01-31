import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from "react-router-dom";
import { 
  Home, 
  Building2, 
  Palette,
  Plus,
  ChevronRight,
  Sparkles,
  Layers,
  Eye,
  ChevronLeft,
  ChevronRight as RightArrow,
  ChevronLeft as LeftArrow
} from 'lucide-react';

// Import your images (update these paths with your actual images)
import residential from "../assets/v2.mp4";
import residential1 from "../assets/v2.mp4";
import residential2 from "../assets/v2.mp4";

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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const [showDragHint, setShowDragHint] = useState(true);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);
  const dragHintTimeoutRef = useRef(null);

  const minSwipeDistance = 30; // Reduced for better mobile sensitivity

  const nextSlide = () => {
    setActiveService((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveService((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setActiveService(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Handle mouse/touch drag events
  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragDistance(0);
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    setDragStartX(clientX);
    setIsAutoPlaying(false);
    
    // Clear auto-play timeout
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const distance = clientX - dragStartX;
    setDragDistance(distance);
    
    // Hide drag hint on first drag
    if (Math.abs(distance) > 5 && showDragHint) {
      setShowDragHint(false);
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Determine swipe direction
    if (Math.abs(dragDistance) > minSwipeDistance) {
      if (dragDistance > 0) {
        prevSlide(); // Swipe right
      } else {
        nextSlide(); // Swipe left
      }
    }
    
    setDragDistance(0);
    
    // Restart auto-play
    setIsAutoPlaying(true);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, activeService]);

  // Hide drag hint after 5 seconds
  useEffect(() => {
    dragHintTimeoutRef.current = setTimeout(() => {
      setShowDragHint(false);
    }, 5000);

    return () => {
      if (dragHintTimeoutRef.current) {
        clearTimeout(dragHintTimeoutRef.current);
      }
    };
  }, []);

  // Reset drag hint when user interacts
  const handleInteraction = () => {
    if (dragHintTimeoutRef.current) {
      clearTimeout(dragHintTimeoutRef.current);
    }
    setShowDragHint(false);
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-10 overflow-hidden">
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

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel with Drag Support */}
          <div 
            ref={carouselRef}
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            onClick={handleInteraction}
          >
            {/* Drag Hint for Mobile */}
            {showDragHint && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute top-4 left-1/2 -translate-x-1/2 z-30 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm flex items-center gap-2"
              >
                {/* <span className="animate-pulse">← Swipe →</span> */}
              </motion.div>
            )}

            {/* Drag Overlay Animation */}
            {isDragging && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
              >
                <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl">
                  <LeftArrow className={`w-6 h-6 ${dragDistance > 0 ? 'text-[#c6a46a]' : 'text-gray-400'}`} />
                  {/* <span className="text-gray-700 font-medium">Drag to navigate</span> */}
                  <RightArrow className={`w-6 h-6 ${dragDistance < 0 ? 'text-[#c6a46a]' : 'text-gray-400'}`} />
                </div>
              </motion.div>
            )}

            {/* Slide Counter */}
            <div className="absolute top-6 right-6 z-20 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-gray-700">
              {activeService + 1} / {services.length}
            </div>

            {/* Desktop Navigation Arrows */}
            {/* <div className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all group"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:text-[#c6a46a] transition-colors" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all group"
              >
                <ChevronRight className="w-6 h-6 text-gray-800 group-hover:text-[#c6a46a] transition-colors" />
              </motion.button>
            </div> */}

            {/* Carousel Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: dragDistance }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }
                }}
                exit={{ opacity: 0, x: dragDistance > 0 ? 100 : -100 }}
                transition={{ duration: 0.3 }}
                style={{
                  transform: isDragging ? `translateX(${dragDistance}px)` : 'none',
                  cursor: isDragging ? 'grabbing' : 'grab'
                }}
                className="flex flex-col lg:flex-row min-h-[600px] select-none"
              >
                {/* Media Section */}
                <div className="lg:w-2/3 relative overflow-hidden">
                  <div className="relative h-96 lg:h-full">
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
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/3 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50/50">
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
                  <NavLink to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative inline-flex items-center justify-center w-full px-8 py-4 overflow-hidden font-medium text-white bg-gray-900 rounded-xl hover:bg-[#c6a46a] transition-all duration-300"
                    >
                      <span className="relative z-10">Start Your Project</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#c6a46a] to-[#8B7355] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <ChevronRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </motion.button>
                  </NavLink>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation Dots */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-5 z-20 flex gap-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeService === index 
                      ? 'w-8 bg-[#c6a46a]' 
                      : 'w-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Service Indicators - Bottom */}
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex flex-col items-center gap-2 transition-all px-3 py-2 rounded-lg ${
                  activeService === index 
                    ? 'text-[#c6a46a] bg-[#c6a46a]/5' 
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }`}
              >
                <div className={`p-2 rounded-lg transition-all ${
                  activeService === index 
                    ? 'bg-[#c6a46a]/10' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}>
                  {service.icon}
                </div>
                <span className="text-sm font-medium whitespace-nowrap">{service.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-4xl font-light text-[#c6a46a] mb-2">150+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-4xl font-light text-[#c6a46a] mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-4xl font-light text-[#c6a46a] mb-2">15</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-4xl font-light text-[#c6a46a] mb-2">50+</div>
            <div className="text-gray-600">Awards Won</div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Services;