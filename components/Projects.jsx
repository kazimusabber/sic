"use client";
import { motion } from "framer-motion";
import { projectsData } from "@/data/data";
import ProjectCard from "./ProjectCard";

const Projects = ({ showMoreProject }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, delay: 0.1 }}
      className={`row ${showMoreProject ? "mt-5" : ""}`}
    >
      {projectsData.map((project) => {
        return (
          <ProjectCard
            key={project.id}
            {...project}
            showMoreProject={showMoreProject}
          />
        );
      })}
    </motion.div>
  );
};

export default Projects;
