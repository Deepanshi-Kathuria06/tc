import React from "react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="w-full bg-[#CCBA78] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">

          {/* Left Content */}
          <div className="max-w-xl">
            <span className="text-xs tracking-[0.35em] text-black uppercase">
              Contact Us
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-light text-black leading-snug">
              Let’s design a space that reflects who you are
            </h2>

            <p className="mt-5 text-sm text-black/70 leading-relaxed">
              Whether you are planning a new home, a renovation, or a commercial
              space, our team is here to guide you through every step with
              clarity, creativity, and care.
            </p>
          </div>

          {/* Right CTA Button */}
          <div className="flex-shrink-0">
            <Link
              to="/contact"
              className="
                inline-flex items-center justify-center
                px-12 py-4
                border border-black
                text-sm tracking-widest uppercase
                text-black
                transition-all duration-300
                hover:bg-black
                hover:text-[#CCBA78]
              "
            >
              Get In Touch
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
