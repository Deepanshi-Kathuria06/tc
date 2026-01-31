import React, { useState } from "react";
import { FiMail, FiUser, FiPhone } from "react-icons/fi";

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
  const [success, setSuccess] = useState(false);

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
        if (!/^\d{10}$/.test(value))
          error = "Phone number must be 10 digits";
        break;
      case "projectType":
        if (!value) error = "Select a project type";
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

    if (name === "phone") {
      if (!/^\d*$/.test(value) || value.length > 10) return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name !== "phone") validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;
    Object.entries(formData).forEach(([k, v]) => {
      if (validateField(k, v)) hasError = true;
    });
    if (hasError) return;

    try {
      setLoading(true);

      await fetch(
        "https://script.google.com/macros/s/AKfycbyOhQhKTgsHXkkO67FxUNmnkrrmRmCLBysrWcSAJv_vwGCRuc0_1fjHx7KZaUgoNZWZGw/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
      setErrors({});
      setTimeout(() => setSuccess(false), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#f9f9f7]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">

        {/* FORM CARD */}
        <div className="bg-[#1f2f32] rounded-3xl p-10 shadow-xl">
          <h2 className="text-3xl font-semibold text-[#c6a46a] mb-2">
            Get In Touch
          </h2>
          <p className="text-white/70 mb-10">
            Tell us about your project and we’ll reach out shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Field
              icon={FiUser}
              name="name"
              placeholder="Full Name"
              value={formData.name}
              error={errors.name}
              onChange={handleChange}
            />

            <Field
              icon={FiMail}
              name="email"
              placeholder="Email Address"
              value={formData.email}
              error={errors.email}
              onChange={handleChange}
            />

            <Field
              icon={FiPhone}
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              error={errors.phone}
              onChange={handleChange}
            />

            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl bg-[#24383c] border border-white/10 text-white focus:border-[#c6a46a] focus:outline-none"
            >
              <option value="">Project Type</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Interior</option>
            </select>
            {errors.projectType && (
              <p className="text-xs text-red-400">{errors.projectType}</p>
            )}

            <textarea
              name="message"
              rows="4"
              placeholder="Your Vision"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl bg-[#24383c] border border-white/10 text-white focus:border-[#c6a46a] focus:outline-none"
            />
            {errors.message && (
              <p className="text-xs text-red-400">{errors.message}</p>
            )}

            {success && (
              <div className="bg-[#c6a46a] border border-green-400/40 text-white-300 px-4 py-3 rounded-xl text-sm">
                Message sent successfully. We’ll be in touch.
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-[#c6a46a] text-[#1a3737] font-medium tracking-wide hover:opacity-90 transition"
            >
              {loading ? "Submitting..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* MAP */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Our Location</h3>
          <div className="rounded-3xl overflow-hidden shadow-lg aspect-square">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=12%20Prithviraj%20Market%20Khan%20Market%20New%20Delhi&z=15&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

const Field = ({ icon: Icon, error, ...props }) => (
  <div>
    <div className="relative">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
      <input
        {...props}
        className="w-full pl-12 pr-5 py-4 rounded-xl bg-[#24383c] border border-white/10 text-white placeholder-white/40 focus:border-[#c6a46a] focus:outline-none"
      />
    </div>
    {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
  </div>
);

export default ContactFormAndMap;
