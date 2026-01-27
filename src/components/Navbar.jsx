import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#9c7c3d] font-semibold border-b border-[#9c7c3d]"
      : "text-[#c6a46a] hover:opacity-70";

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-[#e6e1d8]">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#c6a46a] z-50"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 6h18M3 12h18M3 18h18"
              />
            </svg>
          </button>

          {/* Center Logo */}
          <div className="flex-1 flex justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
            <NavLink to="/" className="text-center block" onClick={handleNavClick}>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#c6a46a]">
                TC Design Studio
              </h1>
            </NavLink>
          </div>

          {/* Desktop Left Menu */}
          <ul className="hidden md:flex items-center gap-10 text-sm tracking-widest">
            <li>
              <NavLink to="/" className={navLinkClass} onClick={handleNavClick}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass} onClick={handleNavClick}>
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass} onClick={handleNavClick}>
                CONTACT
              </NavLink>
            </li>
          </ul>

          {/* Desktop Right Menu */}
          <ul className="hidden md:flex items-center gap-10 text-sm tracking-widest">
            <li>
              <NavLink to="/project" className={navLinkClass} onClick={handleNavClick}>
                PAST PROJECTS
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden fixed inset-0 top-20 bg-white border-t border-[#e6e1d8] z-40">
            <ul className="flex flex-col items-center gap-6 py-10 text-sm tracking-widest overflow-y-auto">
              <li>
                <NavLink to="/" className={navLinkClass} onClick={handleNavClick}>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkClass} onClick={handleNavClick}>
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink to="/project" className={navLinkClass} onClick={handleNavClick}>
                  PAST PROJECTS
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={navLinkClass} onClick={handleNavClick}>
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;