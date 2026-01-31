import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import MailingList from "./MailingList";
import {
  FiInstagram,
  FiLinkedin,
  FiArrowUp,
  FiMapPin,
  FiMail,
} from "react-icons/fi";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { scrollYProgress } = useScroll();
  const smoothProgress = useTransform(scrollYProgress, [0.03, 0.9], [0, 1]);
  const springProgress = useSpring(smoothProgress, {
    stiffness: 100,
    damping: 30,
  });

  // Animation values
  const buildingY = useTransform(springProgress, [0, 1], [30, 0]);
  const gridOpacity = useTransform(springProgress, [0, 1], [0.1, 0.2]);

  const radius = 18;
  const circumference = 2 * Math.PI * radius;

  return (
    <>
      <footer className="relative overflow-hidden bg-gradient-to-b from-white to-[#f8f8f5] border-t border-[#e8e6df]">
        {/* Abstract building silhouette - right side */}
        <div className="absolute right-0 bottom-0 w-1/3 h-[85%] pointer-events-none opacity-5">
          {/* Building outline */}
          <svg className="w-full h-full" viewBox="0 0 400 600">
            <path
              d="M50,600 L50,300 L100,250 L100,200 L150,150 L150,100 L200,50 L200,0 L350,0 L350,150 L300,200 L300,400 L250,450 L250,600 Z"
              fill="none"
              stroke="#9c7c3d"
              strokeWidth="2"
            />
            {/* Windows grid */}
            {Array.from({ length: 5 }).map((_, i) => (
              <g key={i}>
                {Array.from({ length: 3 }).map((_, j) => (
                  <rect
                    key={j}
                    x={80 + i * 50}
                    y={400 + j * 60}
                    width="20"
                    height="30"
                    fill="#9c7c3d"
                    opacity="0.3"
                  />
                ))}
              </g>
            ))}
          </svg>
        </div>

        {/* Architectural grid overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: gridOpacity }}
        >
          {/* Horizontal lines */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to bottom, transparent 95%, rgba(156, 124, 61, 0.1) 95%)`,
              backgroundSize: "100% 40px",
            }}
          />

          {/* Vertical lines */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, transparent 95%, rgba(156, 124, 61, 0.05) 95%)`,
              backgroundSize: "40px 100%",
            }}
          />
        </motion.div>

        {/* Geometric patterns - left side */}
        <div className="absolute left-0 top-1/4 w-1/4 h-1/2 opacity-[0.03] pointer-events-none">
          <div className="relative w-full h-full">
            {/* Floor plan inspired shapes */}
            <div className="absolute top-0 left-10 w-32 h-48 border border-[#9c7c3d] rotate-12"></div>
            <div className="absolute top-20 left-20 w-24 h-32 border border-[#9c7c3d] -rotate-6"></div>
            <div className="absolute bottom-20 left-5 w-40 h-20 border border-[#9c7c3d] rotate-45"></div>

            {/* Dots for measurement points */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-[#9c7c3d]"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + Math.sin(i) * 20}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Center blueprint-inspired circles */}
        <div className="absolute left-1/2 bottom-10 -translate-x-1/2 w-64 h-64 opacity-[0.02] pointer-events-none">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-2 border-[#9c7c3d] rounded-full"></div>
            <div className="absolute inset-8 border border-[#9c7c3d] rounded-full"></div>
            <div className="absolute inset-16 border border-[#9c7c3d] rounded-full"></div>

            {/* Measurement lines */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <div
                key={angle}
                className="absolute top-1/2 left-1/2 w-32 h-px bg-[#9c7c3d]"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />

        {/* FOOTER CONTENT */}
        <div className="relative z-10">
          {/* Architectural top border with progress */}
          <div className="relative">
            {/* Base line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d6d4cf] to-transparent" />

            {/* Progress indicator */}
            <motion.div
              className="absolute left-0 top-0 h-[2px] bg-gradient-to-r from-[#9c7c3d] via-[#d4af37] to-[#9c7c3d]"
              style={{
                scaleX: springProgress,
                transformOrigin: "left",
                boxShadow: "0 0 12px rgba(156, 124, 61, 0.4)",
              }}
            />

            {/* Architectural markers */}
            <div className="absolute top-0 left-0 w-full flex justify-between px-4 md:px-6">
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-px h-4 bg-gradient-to-b from-transparent via-[#9c7c3d] to-transparent"
                  animate={{
                    height: ["16px", "24px", "16px"],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20 mb-16 md:mb-20 text-center lg:text-left">
              {/* LEFT COLUMN - Studio Info */}
              <motion.div
                className="flex flex-col items-center lg:items-start space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                {/* Studio Name with architectural underline */}
                <div className="relative mb-4">
                  <h1
                    className="text-2xl sm:text-3xl md:text-4xl text-[#9c7c3d]"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontStyle: "italic",
                      fontWeight: 600,
                    }}
                  >
                    TC DESIGN STUDIO
                  </h1>
                  <div className="absolute -bottom-2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#9c7c3d] to-transparent" />
                </div>

                {/* Contact Info */}
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-800">
                    <FiMapPin className="text-[#9c7c3d] flex-shrink-0" />
                    <div className="text-sm md:text-base leading-relaxed">
                      <p>12 Prithviraj Market</p>
                      <p>Khan Market, New Delhi 10003</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-800">
                    <FiMail className="text-[#9c7c3d] flex-shrink-0" />
                    <a
                      href="mailto:anmolsingh051@gmail.com"
                      className="text-sm md:text-base hover:text-[#9c7c3d] transition-colors duration-300 hover:underline underline-offset-4"
                    >
                      anmolsingh051@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* CENTER COLUMN - Navigation */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Section Title with architectural lines */}
                <div className="relative mb-10 md:mb-12">
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d6d4cf] to-transparent -translate-y-1/2" />
                  <h4 className="text-xs md:text-sm text-gray-600 tracking-[0.3em] relative z-10 px-4 bg-white inline-block">
                    QUICK LINKS
                  </h4>
                </div>

                {/* Navigation Links */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
                  {["HOME", "ABOUT", "PROJECT", "CONTACT"].map(
                    (label, index) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <NavLink
                          to={
                            label === "HOME" ? "/" : `/${label.toLowerCase()}`
                          }
                          onClick={scrollToTop}
                          className={({ isActive }) =>
                            `
    relative
    text-sm md:text-base font-medium
    transition-all duration-300
    flex items-center justify-center
    py-2 px-4 rounded-lg
    ${isActive ? "text-[#9c7c3d]" : "text-black hover:text-[#9c7c3d]"}
    `
                          }
                        >
                          {label}

                          {/* ACTIVE PAGE UNDERLINE ONLY */}
                          <span
                            className="
      absolute -bottom-1 left-1/4 right-1/4 h-0.5
      bg-gradient-to-r from-transparent via-[#9c7c3d] to-transparent
      opacity-0
      group-[.active]:opacity-100
    "
                          />
                        </NavLink>
                      </motion.div>
                    ),
                  )}
                </div>
              </motion.div>

              {/* RIGHT COLUMN - Social */}
              <motion.div
                className="flex flex-col items-center lg:items-end"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Section Title with architectural lines */}
                <div className="relative mb-10 md:mb-12">
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d6d4cf] to-transparent -translate-y-1/2" />
                  <h4 className="text-xs md:text-sm text-gray-600 tracking-[0.3em] relative z-10 px-4 bg-white inline-block">
                    FOLLOW US
                  </h4>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-6 md:gap-8">
                  {[
                    {
                      icon: <FiInstagram size={22} />,
                      href: "https://instagram.com",
                      label: "Instagram",
                    },
                    {
                      icon: <FiLinkedin size={22} />,
                      href: "https://linkedin.com",
                      label: "LinkedIn",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="
                        relative group
                        w-12 h-12 md:w-14 md:h-14
                        flex items-center justify-center
                        rounded-full
                        bg-gradient-to-br from-white to-[#f8f8f5]
                        border border-[#e8e6df]
                        shadow-[0_4px_12px_rgba(0,0,0,0.05)]
                        hover:shadow-[0_8px_24px_rgba(156,124,61,0.15)]
                        hover:border-[#9c7c3d]/30
                        transition-all duration-300
                      "
                      whileHover={{
                        scale: 1.1,
                        y: -4,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="text-black group-hover:text-[#9c7c3d] transition-colors duration-300">
                        {social.icon}
                      </div>

                      {/* Architectural ring effect */}
                      <div
                        className="
                        absolute inset-0 rounded-full border-2 border-[#9c7c3d]
                        opacity-0 group-hover:opacity-20
                        transition-opacity duration-500
                      "
                      />

                      {/* Tooltip */}
                      <div
                        className="
                        absolute -top-10 left-1/2 -translate-x-1/2
                        px-3 py-1.5 bg-gray-800 text-white text-xs
                        rounded opacity-0 group-hover:opacity-100
                        transition-opacity duration-300 whitespace-nowrap
                        pointer-events-none
                      "
                      >
                        {social.label}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2  rotate-45" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Mailing List Component */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-3 md:mb-4"
            >
              <MailingList />
            </motion.div> */}

            {/* Bottom copyright section */}
            <motion.div
              className="pt-1 md:pt-2 mt-1 md:mt-2 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Architectural border */}
              <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
                <div className="flex-grow max-w-20 md:max-w-32 h-px bg-gradient-to-r from-transparent via-[#d6d4cf] to-transparent" />
                <div className="mx-3 md:mx-6 w-2 h-2 rotate-45 border border-[#d6d4cf]" />
                <div className="flex-grow max-w-20 md:max-w-32 h-px bg-gradient-to-r from-transparent via-[#d6d4cf] to-transparent" />
              </div>

              <p className="text-xs md:text-sm text-gray-600 tracking-wider text-center pt-6 md:pt-8">
                © {new Date().getFullYear()} TC DESIGN STUDIO. ALL RIGHTS
                RESERVED ·{" "}
                <a
                  href="https://atraski.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-gray-700 hover:text-[#9c7c3d] 
                    transition-colors duration-300 font-medium
                    hover:underline underline-offset-4
                  "
                >
                  BUILT BY ATRASKI
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </footer>

      {/* BACK TO TOP - Architectural Floating Button */}
      <motion.button
        onClick={scrollToTop}
        className="
          fixed bottom-6 right-6 sm:bottom-8 sm:right-8 
          w-12 h-12 md:w-14 md:h-14 rounded-full 
          bg-white/95 backdrop-blur-sm
          shadow-[0_4px_24px_rgba(0,0,0,0.12)]
          border border-[#e8e6df]
          z-50
          flex items-center justify-center
          group
          overflow-hidden
        "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 8px 32px rgba(156, 124, 61, 0.2)",
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* Progress ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            stroke="#e8e6df"
            strokeWidth="1.5"
            fill="none"
          />
          <motion.circle
            cx="50%"
            cy="50%"
            r="45%"
            stroke="#9c7c3d"
            strokeWidth="2"
            fill="none"
            strokeDasharray={circumference}
            style={{ pathLength: springProgress }}
            strokeLinecap="round"
          />
        </svg>

        {/* Arrow with architectural style */}
        <motion.div
          className="relative"
          animate={{ y: isHovered ? -2 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="
            w-6 h-6 md:w-7 md:h-7
            border-2 border-[#9c7c3d]
            rounded-full
            flex items-center justify-center
            group-hover:bg-[#9c7c3d]/10
            transition-colors duration-300
          "
          >
            <FiArrowUp className="text-[#9c7c3d] text-base md:text-lg" />
          </div>
        </motion.div>

        {/* Tooltip */}
        <div
          className="
          absolute -top-12 left-1/2 -translate-x-1/2
          px-3 py-1.5 bg-gray-800 text-white text-xs
          rounded opacity-0 group-hover:opacity-100
          transition-opacity duration-300 whitespace-nowrap
          pointer-events-none
        "
        >
          Back to Top
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45" />
        </div>
      </motion.button>
    </>
  );
};

export default Footer;
