import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: `I am delighted to be able to share our appreciation for the office interior design work and our wonderful experience in working with Sarah and her team at Essajees Atelier.`,
    name: "Soumya Rajan",
    role: "FOUNDER, WATERFIELD",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
  },
  {
    text: `Working with the team was a seamless experience. Their attention to detail and deep understanding of space resulted in an interior that feels refined, functional, and timeless.`,
    name: "Ankit Mehra",
    role: "DIRECTOR",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80",
  },
  {
    text: `The design feels calm, intentional, and beautifully balanced. Every detail feels considered and executed with care.`,
    name: "Ritika Sharma",
    role: "MANAGING PARTNER",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&auto=format&fit=crop&q=80",
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const next = () => {
    setDirection(1);
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="bg-white py-10 relative overflow-hidden">
      {/* Desktop arrows */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-10 top-1/2 -translate-y-1/2
                   w-12 h-12 border border-[#c6a46a] text-[#c6a46a]
                   items-start justify-center text-4xl
                   hover:bg-[#c6a46a] hover:text-white transition z-20"
      >
        &#8249;
      </button>

      <button
        onClick={next}
        className="hidden md:flex absolute right-10 top-1/2 -translate-y-1/2
                   w-12 h-12 border border-[#c6a46a] text-[#c6a46a]
                   items-start justify-center text-4xl
                   hover:bg-[#c6a46a] hover:text-white transition z-20"
      >
        &#8250;
      </button>

      <div className="max-w-6xl mx-auto px-6 text-center relative">

        {/* Top Line */}
        <div className="h-px w-full bg-[#c6a46a]/60 mb-24"></div>

        {/* Heading */}
        <h2 className="text-[#c6a46a] text-4xl md:text-5xl font-light">
          Testimonials
        </h2>

        {/* Slider */}
        <div className="relative mt-20 max-w-4xl mx-auto min-h-[300px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="pointer-events-auto">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {testimonials[current].text}
                </p>

                {/* Profile */}
                <div className="mt-16 flex flex-col items-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden mb-4 border border-[#c6a46a]/40">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>

                  <p className="text-[#c6a46a] text-xl font-light">
                    {testimonials[current].name}
                  </p>

                  <p className="mt-2 text-sm tracking-widest text-gray-600">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile buttons */}
        <div className="mt-12 flex justify-center gap-10 md:hidden relative z-30">
          <button
            onClick={prev}
            className="w-11 h-11 border border-[#c6a46a] text-[#c6a46a]
                       flex items-start justify-center text-3xl
                       hover:bg-[#c6a46a] hover:text-white transition"
          >
            &#8249;
          </button>

          <button
            onClick={next}
            className="w-11 h-11 border border-[#c6a46a] text-[#c6a46a]
                       flex items-start justify-center text-3xl
                       hover:bg-[#c6a46a] hover:text-white transition"
          >
            &#8250;
          </button>
        </div>

        {/* Bottom Line */}
        <div className="h-px w-full bg-[#c6a46a]/60 mt-24"></div>

      </div>
    </section>
  );
};

export default Testimonials;
