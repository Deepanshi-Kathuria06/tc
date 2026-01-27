import React from "react";
import TeamSection from "../components/TeamSection";
import img1 from "../assets/img1.jpeg";

// Temporary left image
const aboutImage = img1;

/* Quote SVG Component */
const QuoteSVG = ({ className }) => (
  <svg
    preserveAspectRatio="none"
    viewBox="30.5 43.999 139 112"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <g fill="currentColor">
      <path d="M84.463 44.235c2.428 4.024 4.786 8.047 7.352 12.348-1.179.694-2.358 1.457-3.537 2.081-9.294 5.411-18.242 11.169-25.525 19.355-7.422 8.325-11.028 18.037-12.069 29.344.971 0 1.942-.069 2.913 0 5.757.416 11.653.139 17.202 1.457 13.109 3.052 18.103 13.111 17.202 25.39-.902 11.724-10.612 21.159-22.126 21.713-8.462.416-16.577-.763-23.236-6.59-6.034-5.272-8.74-12.418-10.474-19.979-4.995-22.337 1.456-41.414 16.577-57.994 7.63-8.325 16.508-15.123 26.08-21.02 3.121-1.942 6.104-4.024 9.225-6.105h.416z" />
      <path d="M162.148 44c2.428 4.024 4.786 8.047 7.352 12.348-1.179.694-2.358 1.457-3.537 2.081-9.294 5.411-18.242 11.169-25.525 19.355-7.422 8.325-11.028 18.037-12.069 29.344.971 0 1.942-.069 2.913 0 5.757.416 11.653.139 17.202 1.457 13.109 3.052 18.103 13.111 17.202 25.39-.902 11.724-10.612 21.159-22.126 21.713-8.462.416-16.577-.763-23.236-6.59-6.034-5.272-8.740-12.418-10.474-19.979-4.994-22.338 1.457-41.415 16.577-57.995 7.63-8.325 16.508-15.123 26.08-21.02 3.121-1.942 6.104-4.024 9.225-6.105l.416.001z" />
    </g>
  </svg>
);

const AboutSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2 className="text-center lg:text-right text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-14 lg:mb-20 lg:mx-40">
          How does that work
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-14 lg:gap-24 items-start">

          {/* LEFT — IMAGE */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Studio process"
              className="w-full h-[360px] sm:h-[420px] md:h-[520px] lg:h-[600px] object-cover"
            />
          </div>

          {/* RIGHT — CONTENT */}
          <div className="relative max-w-xl mx-auto lg:max-w-none">

            {/* Top Quote */}
            <QuoteSVG className="w-14 h-14 md:w-20 md:h-20 text-[#c6a46a] mb-6" />

            <p className="text-base sm:text-lg leading-relaxed text-black mb-6 font-serif">
              Our mission is to create spaces and products that people love,
              as simple as that.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-[#c6a46a] italic mb-5 font-serif">
              And we love what we do.
            </p>

            <div className="space-y-1 mb-4">
              <p className="text-base sm:text-lg italic font-serif text-black">
                We want to create work
              </p>

              <p className="text-base sm:text-lg font-serif text-black">
                <span className="font-semibold">that</span>{" "}
                <span className="italic">inspires us</span>
              </p>

              <p className="text-base sm:text-lg font-serif text-black">
                <span className="font-semibold">that</span>{" "}
                <span className="italic">
                  reflects our values and passions as designers
                </span>
              </p>

              <p className="text-base sm:text-lg font-serif text-black">
                <span className="font-semibold">that</span>{" "}
                <span className="italic">
                  stands out and stands for something
                </span>
              </p>

              <p className="text-base sm:text-lg italic font-serif text-black">
                that inspires our community
              </p>
            </div>

            <p className="text-sm sm:text-base leading-7 text-gray-700 mb-4 font-serif">
              So, we try to shape spaces full of character using materials full of
              personality. We fill spaces with carefully curated artworks and
              artefacts, always distinctive and often playful, rich with memories
              and stories.
            </p>

            <p className="text-sm sm:text-base leading-7 text-gray-700 mb-4 font-serif">
              Research, experimentation, and playfulness are essential components
              of our practice and vital for the development from conception to the
              final product.
            </p>

            <p className="text-sm sm:text-base leading-7 text-gray-700 mb-8 font-serif">
              We are small and flexible, yet experienced, and work closely with
              our clients throughout the design process.
            </p>

            <p className="text-base sm:text-lg font-medium text-black">
              We love to collaborate with ambitious people and brands. Let’s build.
            </p>

            {/* Bottom Quote */}
            <div className="flex justify-end mt-10">
              <QuoteSVG className="w-14 h-14 md:w-20 md:h-20 text-[#c6a46a] rotate-180" />
            </div>

          </div>
        </div>
      </div>

      {/* Team Section */}
      <TeamSection />
    </section>
  );
};

export default AboutSection;  