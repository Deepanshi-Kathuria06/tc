import { useEffect, useRef, useState } from "react";
import React from "react";

const StatementSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-40">
      <div
        ref={ref}
        className={`
          max-w-4xl mx-auto px-6 text-center
          transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        `}
      >
        <h2 className="text-[#c6a46a] text-3xl md:text-4xl lg:text-5xl font-light leading-snug">
          Design is not meant to impress.
          <br />
          It is meant to be felt.
        </h2>

        <p className="mt-8 text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          We believe that the most enduring spaces are those that feel intuitive,
          balanced, and deeply personal. Our work focuses on clarity, proportion,
          and materials that age beautifully over time.
        </p>
      </div>
    </section>
  );
};

export default StatementSection;
