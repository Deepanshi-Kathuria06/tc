import { useRef } from "react";
import React from 'react';

const ProjectCard = ({ project }) => {
  const ref = useRef(null);

  const { image, title, location } = project;

  return (
    <div ref={ref} className="w-full">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-[420px] object-cover"
        />
      </div>

      <p className="mt-6 text-xs tracking-widest text-gray-500">
        {location}
      </p>

      <h3 className="mt-2 text-[#c6a46a] text-2xl font-light">
        {title}
      </h3>

      <div className="mt-6 h-px bg-[#c6a46a]/40 w-full"></div>
    </div>
  );
};

export default ProjectCard;
