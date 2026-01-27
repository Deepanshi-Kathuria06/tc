import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import instagram from "../assets/instagram-icon.png";
import mail from "../assets/new-mail-1.png";
import linkedin from "../assets/linked-in-icon.png";

const Footer = () => {
  const location = useLocation();

  // Same color stability logic as Navbar
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#9c7c3d] font-semibold"
      : "text-gray-600 hover:text-[#c6a46a]";

  // Scroll to top on footer navigation click
  const handleFooterNavClick = (path) => {
    if (location.pathname !== path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white border-t border-[#e6e1d8]">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center md:text-left">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h1
              className="text-2xl md:text-3xl text-[#c6a46a]"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontStyle: "italic",
              }}
            >
              TC Design Studio
            </h1>

            <p className="mt-8 text-sm text-gray-600 leading-relaxed max-w-sm">
              Crafting timeless interiors that balance elegance, comfort, and
              functionality. Each space is designed to feel intentional and
              personal.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-widest text-[#c6a46a]">
              NAVIGATION
            </h4>

            <ul className="mt-1 space-y-4 text-sm">
              <li>
                <NavLink
                  to="/"
                  className={navLinkClass}
                  onClick={() => handleFooterNavClick("/")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={navLinkClass}
                  onClick={() => handleFooterNavClick("/about")}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/project"
                  className={navLinkClass}
                  onClick={() => handleFooterNavClick("/project")}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={navLinkClass}
                  onClick={() => handleFooterNavClick("/contact")}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xs tracking-widest text-[#c6a46a]">
              FOLLOW
            </h4>

            <div className="mt-6 flex items-center gap-8">
              <a href="#" className="group">
                <img
                  src={instagram}
                  alt="Instagram"
                  className="w-6 h-6 transition"
                />
              </a>

              <a href="mailto:your@email.com" className="group">
                <img
                  src={mail}
                  alt="Email"
                  className="w-8 h-8 transition"
                />
              </a>

              <a href="#" className="group">
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-6 h-6 transition"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-[#e6e1d8] text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} TC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;