import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const TEXT = `Spaces hold stories. Our role is to shape them with care, clarity, and intention.
Design that feels thoughtful, personal, and enduring.`;

const ScrollHighlightText = () => {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 30%"],
  });

  // 🔥 SAFE subscription
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setProgress(v);
  });

  const words = TEXT.split(/(\s+)/);
  const totalChars = TEXT.length;
  let charIndex = 0;

  return (
    <section
      ref={ref}
      className="relative bg-[#1a3737] py-28 md:py-40"
      style={{ position: "relative" }} // Add this line
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p
          className="
            text-[30px] sm:text-[40px] md:text-[56px] lg:text-[64px]
            leading-tight
            font-['Dream_Avenue']
            flex flex-wrap
          "
        >
          {words.map((word, wordIndex) => {
            if (word.trim() === "") {
              return (
                <span key={wordIndex} className="whitespace-pre">
                  {word}
                </span>
              );
            }

            return (
              <span key={wordIndex} className="inline-flex whitespace-nowrap">
                {word.split("").map((char, i) => {
                  const start = charIndex / totalChars;
                  const end = (charIndex + 1) / totalChars;
                  const isActive = progress >= start && progress <= end;
                  charIndex++;

                  return (
                    <motion.span
                      key={i}
                      style={{
                        color: isActive ? "#8f7a52" : "#d8cfbf",
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
};

export default ScrollHighlightText;