import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TEXT = `Spaces hold stories. Our role is to shape them with care, clarity, and intention. Design that feels thoughtful, personal, and enduring.`;

const ScrollHighlightText = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });

  // 🔥 Split text into words and keep words together
  const words = useMemo(() => TEXT.split(" "), []);
  const totalWords = words.length;

  return (
    <section
      ref={ref}
      className="relative bg-[#1a3737] py-28 md:py-40"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div
          className="
            text-[20px] sm:text-[40px] md:text-[50px] lg:text-[64px]
            leading-tight
            font-['Dream_Avenue']
            flex flex-wrap justify-center
          "
        >
          {words.map((word, wordIndex) => {
            const start = wordIndex / totalWords;
            const end = (wordIndex + 1) / totalWords;

            // 🔥 Smooth interpolation window
            const color = useTransform(
              scrollYProgress,
              [start - 0.02, start, end + 0.02],
              ["#d8cfbf", "#8f7a52", "#8f7a52"]
            );

            return (
              <motion.span
                key={wordIndex}
                style={{ color }}
                className="inline-block mr-[0.3em] whitespace-nowrap"
              >
                {word.split("").map((char, charIndex) => {
                  const charStart = (wordIndex + charIndex / word.length) / totalWords;
                  const charEnd = (wordIndex + (charIndex + 1) / word.length) / totalWords;

                  const charColor = useTransform(
                    scrollYProgress,
                    [charStart - 0.02, charStart, charEnd + 0.02],
                    ["#d8cfbf", "#8f7a52", "#8f7a52"]
                  );

                  return (
                    <motion.span
                      key={`${wordIndex}-${charIndex}`}
                      style={{ color: charColor }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  );
                })}
                {wordIndex < words.length - 1 && " "}
              </motion.span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScrollHighlightText;