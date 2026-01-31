import React from "react";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import ContactFormAndMap from "../components/ContactForm";

const ContactSection = () => {
  return (
    <section className="w-full relative overflow-hidden">
      {/* TOP DARK BLOCK */}
      <div className="w-full bg-[#1a3737] h-[220px] sm:h-[260px] lg:h-[280px]">
        <div className="max-w-6xl mx-auto h-full px-6 lg:px-12 flex items-center justify-center lg:justify-start">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      {/* BOTTOM WHITE SECTION */}
      <div className="w-full bg-white pt-8 pb-16 lg:pt-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* IMAGE — FIRST ON MOBILE */}
            <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 -mt-24 sm:-mt-16 lg:mt-0">
              <div
                className="
                  w-[260px] h-[420px]
                  sm:w-[320px] sm:h-[460px]
                  lg:w-[400px] lg:h-[540px]
                  lg:absolute lg:-top-40 lg:right-0
                "
              >
                <div className="w-full h-full overflow-hidden rounded-t-[180px] lg:rounded-t-[400px] rounded-b-2xl bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Architectural interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* CONTACT INFORMATION */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h2>

              <p className="text-gray-600 mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0">
                We’d love to hear about your project. Reach out to us for
                consultations, collaborations, or any design-related inquiries.
              </p>

              {/* ICONS */}
              <div className="grid grid-cols-2 gap-10 text-center">
                {/* Phone */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#1a3737] flex items-center justify-center mb-4">
                    <FiPhone className="text-white text-xl" />
                  </div>
                  <p className="font-semibold text-gray-900">+91 8527767960</p>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#1a3737] flex items-center justify-center mb-4">
                    <FiMail className="text-white text-xl" />
                  </div>
                  <p className="font-semibold text-gray-900 break-all">
                    anmolsingh051@gmail.com
                  </p>
                </div>

                {/* Address */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#1a3737] flex items-center justify-center mb-4">
                    <FiMapPin className="text-white text-xl" />
                  </div>
                  <p className="font-semibold text-gray-900 max-w-xs text-center">
                    12 Prithviraj, Khan Market, New Delhi, Lok Nayak Bhawan,
                    110003
                  </p>
                </div>

                {/* Working Hours */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#1a3737] flex items-center justify-center mb-4">
                    <FiClock className="text-white text-xl" />
                  </div>
                  <p className="font-semibold text-gray-900">
                    Mon–Sun: 10AM – 7:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactFormAndMap />
    </section>
  );
};

export default ContactSection;
