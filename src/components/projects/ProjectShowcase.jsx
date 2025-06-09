"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const ProjectShowcase = ({ projects }) => {
  return (
    <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4"
      >
        <h1 className="text-accent font-semibold text-center text-4xl capitalize">
          My Projects
        </h1>
        <p className="text-center font-light text-sm xs:text-base">
          Explore a collection of innovative projects spanning AR/VR development, 
          full-stack applications, and cutting-edge technology solutions. Each project 
          represents a unique challenge solved through creative problem-solving and 
          technical expertise.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:mx-0 space-y-6 md:space-y-8 flex flex-col items-center"
      >
        {projects.map((project, index) => {
          return (
            <ProjectLayout
              key={index}
              name={project.title}
              description={project.description}
              date={project.completionDate}
              demoLink={project.demoLink}
            />
          );
        })}
      </motion.div>
    </article>
  );
};

export default ProjectShowcase;