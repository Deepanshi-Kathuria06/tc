import React, { useState } from "react";
import { FiMail, FiUser, FiPhone, FiMessageSquare } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_WEB_APP_URL";

const ContactFormAndMap = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Full name is required";
        break;

      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Enter a valid email address";
        break;

      case "phone":
        if (!value) error = "Phone number is required";
        else if (!/^\d{10}$/.test(value))
          error = "Phone number must be exactly 10 digits";
        break;

      case "projectType":
        if (!value) error = "Please select a project type";
        break;

      case "message":
        if (!value.trim()) error = "Message is required";
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone: digits only, max 10 (NO validation here)
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Live validation for all except phone
    if (name !== "phone") validateField(name, value);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;

    Object.entries(formData).forEach(([key, value]) => {
      const err = validateField(key, value);
      if (err) hasError = true;
    });

    if (hasError) return;

    try {
      setLoading(true);

      await fetch(
        "https://script.google.com/macros/s/AKfycbyOhQhKTgsHXkkO67FxUNmnkrrmRmCLBysrWcSAJv_vwGCRuc0_1fjHx7KZaUgoNZWZGw/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        },
      );

      alert("Thank you! We'll get back to you shortly.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });

      setErrors({});
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* FORM */}
          <div className="bg-[#2f3f44] rounded-2xl p-8 lg:p-10 text-white">
            <h3 className="text-2xl font-semibold mb-4">Get In Touch!</h3>

            <p className="text-white/70 mb-8 text-sm leading-relaxed">
              Share your requirements and our team will connect with you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* NAME */}
              <Input
                icon={FiUser}
                name="name"
                placeholder="Full Name"
                value={formData.name}
                error={errors.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {/* EMAIL */}
              <Input
                icon={FiMail}
                name="email"
                placeholder="Email Address"
                value={formData.email}
                error={errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {/* PHONE */}
              <Input
                icon={FiPhone}
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                error={errors.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                inputMode="numeric"
              />

              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                onBlur={handleBlur}
                className="
    w-full px-4 py-3 rounded-full
    bg-transparent
    border border-white/30
    text-white
    focus:outline-none focus:border-white
    appearance-none
  "
              >
                <option value="" className="text-gray-400 bg-[#1a3737]">
                  Select project type
                </option>

                <option value="Residential" className="text-gray-900 bg-white">
                  Residential
                </option>

                <option value="Commercial" className="text-gray-900 bg-white">
                  Commercial
                </option>

                <option value="Interior" className="text-gray-900 bg-white">
                  Interior
                </option>
              </select>

              {errors.projectType && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.projectType}
                </p>
              )}

              {/* MESSAGE */}
              <div>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Vision"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/30 text-white focus:outline-none resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-full bg-[#c6a46a] text-[#1a3737] font-medium hover:opacity-90 transition"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>

          {/* MAP + SOCIAL */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Location</h3>

            {/* MAP WRAPPER */}
            <div className="w-full aspect-square rounded-2xl overflow-hidden border border-gray-200">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=12%20Prithviraj%20Market%20Khan%20Market%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            {/* SOCIAL ICONS */}
          </div>
        </div>
      </div>
    </section>
  );
};

const Input = ({ icon: Icon, error, ...props }) => (
  <div>
    <div className="relative">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" />
      <input
        {...props}
        className="w-full pl-12 pr-4 py-3 rounded-full bg-transparent border border-white/30 text-white placeholder-white/50 focus:outline-none"
      />
    </div>
    {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
  </div>
);

export default ContactFormAndMap;
