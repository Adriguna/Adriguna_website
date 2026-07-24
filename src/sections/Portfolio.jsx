import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-8 md:px-10 lg:px-12 xl:px-16">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-2 text-sm text-blue-300" style={{marginTop: '20px',padding: '15px'}}>
            Featured Projects
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl" style={{marginTop: '20px',padding: '5px'}}>
            Turning Ideas Into
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Digital Products
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400" style={{marginTop: '20px',padding: '15px'}}>
            Every project represents our passion for building scalable,
            beautiful and high-performance digital experiences for startups,
            businesses and organizations.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 mt-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;