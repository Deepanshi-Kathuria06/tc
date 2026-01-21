import React from "react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Anmol Singh",
    role: "Design Director",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&auto=format&fit=crop&q=80",
    styles: {
      container: "md:mr-auto md:text-left",
      imageWrap: "md:mr-auto",
      nameStripWrap: "md:flex md:justify-start",
      nameStripMargin: "md:-mt-[80px] md:mx-60",
      bioText:
        "mt-6 md:mt-10 max-w-[520px] mx-auto text-[15px] leading-7 text-justify text-black font-serif",
    },
    bio: [
      "Anmol Singh leads the studio’s design direction, bringing clarity, structure, and thoughtful execution to every project. With hands-on experience across commercial spaces including Camelies, Aralias DLF, Bikaner and several other developments, his work reflects a strong understanding of spatial planning, materiality, and functional design. Focused on collaboration and detail, he plays a key role in shaping environments that are coherent, efficient, and aligned with the client’s vision.",
    ],
  },

  {
    name: "Sanjay Shah",
    role: "Associate Architect",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&auto=format&fit=crop&q=80",
    styles: {
      container: "md:ml-auto md:text-right",
      imageWrap: "md:ml-auto",
      nameStripWrap: "md:flex md:justify-end",
      nameStripMargin: "md:-mt-[80px] md:mx-60",
      bioText:
        "mt-6 md:mt-10 max-w-[520px] mx-auto text-[15px] leading-7 text-justify text-black font-serif",
    },
    bio: [
      "Sanjay Shah is an Associate Architect with over 25 years of professional experience, having worked across schools, colleges, and resort projects. His long-standing practice has shaped a methodical and disciplined approach to architecture, with a strong focus on functionality, durability, and contextual responsiveness. At the studio, he supports projects with technical expertise and strategic insight, ensuring design intent is carried through every stage of development.",
    ],
  },

  {
    name: "Vaibhav Dwivedi",
    role: "Associate Architect",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&auto=format&fit=crop&q=80",
    styles: {
      container: "md:mr-auto md:text-left",
      imageWrap: "md:mr-auto",
      nameStripWrap: "md:flex md:justify-start",
      nameStripMargin: "md:-mt-[80px] md:mx-60",
      bioText:
        "mt-6 md:mt-10 max-w-[520px] mx-auto text-[15px] leading-7 text-justify text-black font-serif",
    },
    bio: [
      "Vaibhav Dwivedi brings a broad design perspective to the studio, with experience spanning resorts, cafés, and residential spaces. His work focuses on creating environments that feel welcoming, well-considered, and closely connected to how people use and experience a space. He plays an active role in guiding projects from concept to completion, ensuring clarity, consistency, and care throughout the process.",
    ],
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold text-black mb-24"
        >
          The Minds Behind the Studio
        </motion.h2>

        {/* Team Members */}
        <div className="space-y-28 md:-space-y-[150px]">
          {team.map((member, index) => (
            <div
              key={index}
              className={`max-w-2xl mx-auto md:mx-0 text-center md:text-inherit ${member.styles.container}`}
            >
              {/* Image */}
              <div
                className={`mx-auto md:mx-0 w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden ${member.styles.imageWrap}`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name Strip */}
              <div
                className={`mt-4 md:mt-0 ${member.styles.nameStripWrap} ${member.styles.nameStripMargin}`}
              >
                <div className="bg-black text-white px-6 py-3 inline-block">
                  <p className="text-lg font-medium">{member.name}</p>
                  <p className="text-sm italic">{member.role}</p>
                </div>
              </div>

              {/* Bio */}
              <div className={member.styles.bioText}>
                <p>{member.bio[0]}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
