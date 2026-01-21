import React from "react";
import heroImage from "../assets/home-banner-desktop.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
      
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Interior Design"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full w-full max-w-full flex items-center justify-center overflow-hidden">
        <div className="text-center px-6">
          {/* content here */}
        </div>
      </div>

    </section>
  );
};

export default Hero;
