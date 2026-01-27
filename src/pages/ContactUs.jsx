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
import Navbar from "../components/Navbar";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ❌ no alert here
    if (phoneError) return;

    setIsSubmitting(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyOhQhKTgsHXkkO67FxUNmnkrrmRmCLBysrWcSAJv_vwGCRuc0_1fjHx7KZaUgoNZWZGw/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        },
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
    } catch (error) {
      alert("Submission failed. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

  if (name === "phone") {
  const cleaned = value.replace(/\D/g, "");
  setFormData({ ...formData, phone: cleaned });

  if (cleaned.length > 10) {
    setPhoneError("Phone number must be exactly 10 digits");
  } else {
    setPhoneError("");
  }
  return;
}
 
    setFormData({ ...formData, [name]: value });
  };

  const projectTypes = [
    "Residential Interior",
    "Commercial Space",
    "Styling & Curation",
    "Full Renovation",
    "Consultation",
  ];

  // Floating orb data
  const floatingOrbs = [
    { top: "10%", left: "5%", size: "w-4 h-4", delay: 0 },
    { top: "20%", right: "10%", size: "w-6 h-6", delay: 0.3 },
    { top: "40%", left: "15%", size: "w-3 h-3", delay: 0.6 },
    { bottom: "20%", right: "5%", size: "w-5 h-5", delay: 0.9 },
    { bottom: "30%", left: "10%", size: "w-4 h-4", delay: 1.2 },
  ];

  return (
    <section className="relative bg-white py-0 overflow-hidden">
      {/* Floating decorative orbs */}
      {floatingOrbs.map((orb, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${orb.size} rounded-full bg-[#c6a46a]/20`}
          style={{
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
          }}
        />
      ))}

      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c6a46a]/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c6a46a]/10 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c6a46a]/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header with interactive elements */}
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

          <p className="text-xl text-black/70 max-w-2xl mx-auto leading-relaxed">
            Begin your design journey with us. Share your vision, and let's
            transform spaces into stories.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-12">
              {/* Contact Cards */}
              {[
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Visit Our Studio",
                  info: "12 Prithviraj Market\nKhan Market\nNew Delhi 10003",
                  action: "Get Directions →",
                  onClick: () =>
                    window.open(
                      "https://www.google.com/maps?q=12+Prithviraj+Market+Khan+Market+New+Delhi",
                      "_blank",
                    ),
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Call Us",
                  info: "+91 8527767960",
                  action: "Call Now →",
                  onClick: () => (window.location.href = "tel:+918527767960"),
                },

                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email Us",
                  info: "anmolsingh051@gmail.com",
                  action: "Send Email →",
                  onClick: () =>
                    (window.location.href =
                      "mailto:hello@interiordesign.com?subject=New Project Inquiry"),
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Working Hours",
                  info: "Mon-Sun: 10AM - 7:30PM",
                  action: "Schedule Call →",
                  onClick: () =>
                    window.open(
                      "https://wa.me/918527767960?text=Hi%20I%20want%20to%20schedule%20a%20call",
                      "_blank",
                    ),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  onClick={item.onClick}
                  className="group cursor-pointer"
                >
                  <div className="flex items-start gap-4 p-6 bg-white border border-black/10 rounded-2xl hover:border-[#c6a46a]/30 transition-all duration-300 hover:shadow-lg">
                    <div className="p-3 rounded-xl bg-[#c6a46a]/10 text-[#c6a46a] group-hover:bg-[#c6a46a] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-black font-medium mb-2">
                        {item.title}
                      </h3>
                      <p className="text-black/60 text-sm mb-3 whitespace-pre-line">
                        {item.info}
                      </p>
                      <span className="inline-flex items-center text-[#c6a46a] text-sm font-medium group-hover:gap-2 transition-all duration-300">
                        {item.action}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Success Stats */}
            </div>
          </motion.div>

          {/* Right Column - Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white border border-black/10 rounded-3xl p-8 mb-5 md:p-12 shadow-lg">
              {/* Form Header */}
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-3xl font-light text-black mb-2">
                    Start Your Project
                  </h3>
                  <p className="text-black/60">Fill in the details below</p>
                </div>
                <motion.div
                  animate={{ rotate: isSubmitting ? 360 : 0 }}
                  transition={{
                    duration: 2,
                    repeat: isSubmitting ? Infinity : 0,
                    ease: "linear",
                  }}
                  className="p-3 rounded-full bg-[#c6a46a]/10"
                >
                  <Send className="w-6 h-6 text-[#c6a46a]" />
                </motion.div>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-8 p-6 bg-[#c6a46a]/10 border border-[#c6a46a]/30 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-[#c6a46a]" />
                    <div>
                      <h4 className="text-black font-medium">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-black/60 text-sm">
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Interactive Form */}
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Top Row - Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      label: "Full Name",
                      name: "name",
                      type: "text",
                      placeholder: "Enter your name",
                    },
                    {
                      label: "Email Address",
                      name: "email",
                      type: "email",
                      placeholder: "you@example.com",
                    },
                  ].map((field) => (
                    <div key={field.name} className="relative">
                      <label className="block text-sm font-medium text-black mb-2">
                        {field.label}
                      </label>
                      <motion.div
                        whileFocus={{ scale: 1.01 }}
                        className="relative"
                      >
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          onFocus={() => setActiveField(field.name)}
                          onBlur={() => setActiveField(null)}
                          placeholder={field.placeholder}
                          required
                          className="w-full px-6 py-4 bg-white border border-black/20 rounded-xl text-black placeholder-black/40 focus:outline-none focus:border-[#c6a46a] focus:ring-2 focus:ring-[#c6a46a]/20 transition-all duration-300"
                        />
                        <motion.span
                          animate={{
                            scale: activeField === field.name ? 1.2 : 1,
                            rotate: activeField === field.name ? 10 : 0,
                          }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-lg"
                        >
                          {field.icon}
                        </motion.span>
                      </motion.div>
                    </div>
                  ))}
                </div>

                {/* Phone & Project Type */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-6 py-4 bg-white border border-black/20 rounded-xl text-black placeholder-black/40 focus:outline-none focus:border-[#c6a46a] focus:ring-2 focus:ring-[#c6a46a]/20 transition-all duration-300"
                    />
                    {phoneError && (
                      <p className="mt-1 text-sm text-red-500">{phoneError}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white border border-black/20 rounded-xl text-black appearance-none focus:outline-none focus:border-[#c6a46a] focus:ring-2 focus:ring-[#c6a46a]/20 transition-all duration-300"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40 pointer-events-none rotate-90" />
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Your Vision
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Tell us about your project, inspiration, and any specific requirements..."
                      required
                      className="w-full px-6 py-4 bg-white border border-black/20 rounded-xl text-black placeholder-black/40 focus:outline-none focus:border-[#c6a46a] focus:ring-2 focus:ring-[#c6a46a]/20 transition-all duration-300 resize-none"
                    />
                    <motion.div
                      animate={{
                        height: activeField === "message" ? "100%" : "0%",
                      }}
                      className="absolute inset-0 border-2 border-[#c6a46a] rounded-xl pointer-events-none"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-black/40">
                      Character count: {formData.message.length}/500
                    </span>
                    <span className="text-sm text-black/60">
                      Be as detailed as possible
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-black text-white rounded-xl font-medium text-lg hover:bg-[#c6a46a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  <motion.div
                    animate={{
                      x: isSubmitting ? "100%" : "-100%",
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: isSubmitting ? Infinity : 0,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  <span className="relative flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Privacy Note */}
                <p className="text-center text-black/50 text-sm">
                  By submitting, you agree to our privacy policy. We respect
                  your data.
                </p>
              </form>
            </div>

            {/* Quick Contact */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
