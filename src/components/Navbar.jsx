import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Desktop nav link class
  const desktopNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-gray-800 font-semibold"
      : "text-gray-700 hover:text-[#c6a46a] transition-colors duration-300";

  // Mobile nav link class - Fixed color consistency
  const mobileNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#c6a46a] font-semibold"
      : "text-gray-800";

  const handleNavClick = () => {
    requestAnimationFrame(() => {
      setOpen(false);
    });
  };

  const toggleMenu = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setOpen(!open);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  /* Lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <>
      {/* FIXED HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-[#e6e1d8]">
        <nav className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* Mobile Toggle */}
            <button
              className="md:hidden relative w-10 h-10 z-[60] flex items-center justify-center"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <div className="relative w-6 h-6">
                <div className={`absolute top-0 left-0 w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${open ? 'rotate-45 translate-y-2.5' : ''}`} />
                <div className={`absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 rounded-full -translate-y-1/2 transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
                <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${open ? '-rotate-45 -translate-y-2.5' : ''}`} />
              </div>
            </button>

            {/* Logo */}
            <div className="flex-1 flex justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
              <NavLink to="/" onClick={handleNavClick}>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#c6a46a]">
                  TC Design Studio
                </h1>
              </NavLink>
            </div>

            {/* Desktop Left */}
            <ul className="hidden md:flex items-center gap-10 text-sm tracking-widest">
              <li>
                <NavLink to="/" className={desktopNavLinkClass}>
                  {({ isActive }) => (
                    <span className="relative pb-1">
                      HOME
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c6a46a]"></span>
                      )}
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={desktopNavLinkClass}>
                  {({ isActive }) => (
                    <span className="relative pb-1">
                      ABOUT
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c6a46a]"></span>
                      )}
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={desktopNavLinkClass}>
                  {({ isActive }) => (
                    <span className="relative pb-1">
                      CONTACT
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c6a46a]"></span>
                      )}
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>

            {/* Desktop Right */}
            <ul className="hidden md:flex items-center gap-10 text-sm tracking-widest">
              <li>
                <NavLink to="/project" className={desktopNavLinkClass}>
                  {({ isActive }) => (
                    <span className="relative pb-1">
                      GALLERY
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c6a46a]"></span>
                      )}
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU - Consistent Colors */}
      <div className={`fixed inset-0 top-20 bg-white z-40 md:hidden transition-all duration-300 transform ${open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
        <div className="h-full flex flex-col">
          <ul className="flex-1 flex flex-col justify-center items-center space-y-8">
            <li className={`transition-all duration-300 transform ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: '100ms' }}>
              <NavLink to="/" onClick={handleNavClick} className={mobileNavLinkClass}>
                <span className="text-2xl font-medium">HOME</span>
              </NavLink>
            </li>
            <li className={`transition-all duration-300 transform ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: '150ms' }}>
              <NavLink to="/about" onClick={handleNavClick} className={mobileNavLinkClass}>
                <span className="text-2xl font-medium">ABOUT</span>
              </NavLink>
            </li>
            <li className={`transition-all duration-300 transform ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              <NavLink to="/project" onClick={handleNavClick} className={mobileNavLinkClass}>
                <span className="text-2xl font-medium">GALLERY</span>
              </NavLink>
            </li>
            <li className={`transition-all duration-300 transform ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: '250ms' }}>
              <NavLink to="/contact" onClick={handleNavClick} className={mobileNavLinkClass}>
                <span className="text-2xl font-medium">CONTACT</span>
              </NavLink>
            </li>
          </ul>
          
          {/* Contact Info with Consistent Colors */}
          <div className="pb-12 text-center">
            <div className={`mx-auto mb-8 w-24 h-px bg-[#c6a46a] transition-all duration-500 ${open ? 'scale-x-100' : 'scale-x-0'}`}></div>
            <div className={`transition-all duration-300 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '300ms' }}>
              <p className="text-gray-600 text-sm mb-2">Get in touch</p>
              <p className="text-gray-800 font-medium">anmolsingh051@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop Overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/10 z-30 md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;