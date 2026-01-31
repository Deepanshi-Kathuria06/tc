import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TEXT = `Spaces hold stories. Our role is to shape them with care, clarity, and intention.
Design that feels thoughtful, personal, and enduring.`;

const ScrollHighlightText = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });

  // 🔥 Split text into characters ONCE
  const characters = useMemo(() => TEXT.split(""), []);
  const total = characters.length;

  return (
    <section
      ref={ref}
      className="relative bg-[#1a3737] py-28 md:py-40"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <p
          className="
            text-[20px] sm:text-[40px] md:text-[50px] lg:text-[64px]
            leading-tight
            font-['Dream_Avenue']
            flex flex-wrap
          "
        >
          {characters.map((char, index) => {
            const start = index / total;
            const end = (index + 1) / total;

            // 🔥 Smooth interpolation window
            const color = useTransform(
              scrollYProgress,
              [start - 0.02, start, end + 0.02],
              ["#d8cfbf", "#8f7a52", "#8f7a52"]
            );

            return (
              <motion.span
                key={index}
                style={{ color }}
                className="whitespace-pre"
              >
                {char}
              </motion.span>
            );
          })}
        </p>
      </div>
    </section>
  );
};

export default ScrollHighlightText;
