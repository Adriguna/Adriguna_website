import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -10,
      }}
      className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* Project Image */}
      <div className="relative h-[280px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80"></div>

        {/* Live Buttons */}
        <div className="absolute right-5 top-5 flex gap-3 opacity-0 transition duration-300 group-hover:opacity-100">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white/10 p-3 backdrop-blur-lg hover:bg-blue-600"
          >
            <FaGithub />
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white/10 p-3 backdrop-blur-lg hover:bg-blue-600"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <p className="text-blue-400 text-sm" style={{padding: '5px'}}>
          {project.subtitle}
        </p>

        <h3 className="mt-2 text-3xl font-bold text-white" style={{padding: '5px'}}>
          {project.title}
        </h3>

        <p className="mt-5 leading-7 text-slate-400" style={{padding: '5px'}}>
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-3" style={{padding: '5px'}}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
              style={{marginTop: '10px',padding: '5px'}}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Button */}
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-blue-400 font-semibold transition-all duration-300 group-hover:gap-4"
          style={{padding: '10px'}}
        >
          View Project

          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;