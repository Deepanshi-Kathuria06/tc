import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  MessageSquare,
} from "lucide-react";
// import Navbar from "../components/Navbar";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [phoneError, setPhoneError] = useState("");

  /* ---------------- HANDLE CHANGE ---------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const cleaned = value.replace(/\D/g, "");
      setFormData({ ...formData, phone: cleaned });

      if (cleaned.length < 10 || cleaned.length > 15) {
        setPhoneError("Enter a valid phone number (10–15 digits)");
      } else {
        setPhoneError("");
      }
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  /* ---------------- HANDLE SUBMIT ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phoneError) {
      alert("Please enter a valid phone number");
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyOhQhKTgsHXkkO67FxUNmnkrrmRmCLBysrWcSAJv_vwGCRuc0_1fjHx7KZaUgoNZWZGw/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });

      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      alert("Submission failed. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    "Residential Interior",
    "Commercial Space",
    "Styling & Curation",
    "Full Renovation",
    "Consultation",
  ];

  return (
    <section className="relative bg-white py-0 overflow-hidden">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light text-black mb-8">
            <span className="inline-block relative">
              Contact
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 w-full h-px bg-[#c6a46a] origin-left"
              />
            </span>
            <span className="block text-[#c6a46a]">Us</span>
          </h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            Begin your design journey with us. Share your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* LEFT CONTACT CARDS */}
          <motion.div className="lg:col-span-1">
            <div className="sticky top-24 space-y-12">
              {[
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Visit Our Studio",
                  info: "12 Prithviraj Market\nKhan Market\nNew Delhi",
                  action: "Get Directions →",
                  onClick: () =>
                    window.open(
                      "https://www.google.com/maps?q=12+Prithviraj+Market+Khan+Market+New+Delhi",
                      "_blank"
                    ),
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Call Us",
                  info: "+1 (555) 123-4567",
                  action: "Call Now →",
                  onClick: () => (window.location.href = "tel:+15551234567"),
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email Us",
                  info: "hello@interiordesign.com",
                  action: "Send Email →",
                  onClick: () =>
                    (window.location.href =
                      "mailto:hello@interiordesign.com?subject=New Project Inquiry"),
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Working Hours",
                  info: "Mon–Sun: 10AM – 7:30PM",
                  action: "Schedule Call →",
                  onClick: () =>
                    window.open(
                      "https://wa.me/15551234567?text=Hi%20I%20want%20to%20schedule%20a%20call",
                      "_blank"
                    ),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  onClick={item.onClick}
                  whileHover={{ x: 10 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-start gap-4 p-6 bg-white border border-black/10 rounded-2xl hover:shadow-lg">
                    <div className="p-3 rounded-xl bg-[#c6a46a]/10 text-[#c6a46a]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-black font-medium mb-2">
                        {item.title}
                      </h3>
                      <p className="text-black/60 text-sm whitespace-pre-line">
                        {item.info}
                      </p>
                      <span className="text-[#c6a46a] text-sm">
                        {item.action}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div className="lg:col-span-2">
            <div className="bg-white border border-black/10 rounded-3xl p-8 md:p-12 shadow-lg">
              {isSubmitted && (
                <div className="mb-6 flex items-center gap-3 bg-[#c6a46a]/10 p-4 rounded-xl">
                  <CheckCircle className="text-[#c6a46a]" />
                  <span>Message sent successfully!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-6 py-4 border rounded-xl"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-6 py-4 border rounded-xl"
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className={`w-full px-6 py-4 border rounded-xl ${
                    phoneError ? "border-red-500" : ""
                  }`}
                />
                {phoneError && (
                  <p className="text-sm text-red-500">{phoneError}</p>
                )}

                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border rounded-xl"
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your project..."
                  required
                  className="w-full px-6 py-4 border rounded-xl"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-black text-white rounded-xl"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;