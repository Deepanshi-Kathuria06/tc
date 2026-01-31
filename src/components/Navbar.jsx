import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#9c7c3d] font-semibold border-b border-[#9c7c3d]"
      : "text-[#c6a46a] hover:opacity-70";

  const handleNavClick = () => {
    // Close menu AFTER navigation frame
    requestAnimationFrame(() => {
      setOpen(false);
    });
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
              className="md:hidden text-[#c6a46a] z-[60]"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
              </svg>
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
              <li><NavLink to="/" className={navLinkClass}>HOME</NavLink></li>
              <li><NavLink to="/about" className={navLinkClass}>ABOUT</NavLink></li>
              <li><NavLink to="/contact" className={navLinkClass}>CONTACT</NavLink></li>
            </ul>

            {/* Desktop Right */}
            <ul className="hidden md:flex items-center gap-10 text-sm tracking-widest">
              <li><NavLink to="/project" className={navLinkClass}>GALLERY</NavLink></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 top-20 bg-white z-40 md:hidden">
          <ul className="flex flex-col items-center gap-6 py-10 text-sm tracking-widest">
            <li><NavLink to="/" onClick={handleNavClick} className={navLinkClass}>HOME</NavLink></li>
            <li><NavLink to="/about" onClick={handleNavClick} className={navLinkClass}>ABOUT</NavLink></li>
            <li><NavLink to="/project" onClick={handleNavClick} className={navLinkClass}>GALLERY</NavLink></li>
            <li><NavLink to="/contact" onClick={handleNavClick} className={navLinkClass}>CONTACT</NavLink></li>
          </ul>
        </div>
      )}

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
