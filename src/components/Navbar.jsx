import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
            <Link to="/" className="text-center block">
              <h1
                className="text-xl sm:text-2xl md:text-3xl text-[#c6a46a]"
                style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic" }}
              >
                TC Design Studio
              </h1>
            </Link>
          </div>

          {/* Desktop Left Menu */}
          <ul className="hidden md:flex items-center gap-10 text-sm tracking-widest text-[#c6a46a]">
            <li><Link to="/" className="hover:opacity-70">HOME</Link></li>
            <li><Link to="/about" className="hover:opacity-70">ABOUT</Link></li>
            <li><Link to="/contact" className="hover:opacity-70">CONTACT</Link></li>
          </ul>

          {/* Desktop Right Menu */}
          <ul className="hidden md:flex items-center gap-10 text-sm tracking-widest text-[#c6a46a]">
            <li>
              <Link to="/project" className="hover:opacity-70">
                PAST PROJECTS
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden fixed inset-0 top-20 bg-white border-t border-[#e6e1d8] z-40">
            <ul className="flex flex-col items-center gap-6 py-10 text-sm tracking-widest text-[#c6a46a] overflow-y-auto">
              <li><Link to="/" onClick={() => setOpen(false)}>HOME</Link></li>
              <li><Link to="/about" onClick={() => setOpen(false)}>ABOUT</Link></li>
              <li><Link to="/project" onClick={() => setOpen(false)}>PAST PROJECTS</Link></li>
              <li><Link to="/contact" onClick={() => setOpen(false)}>CONTACT</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
