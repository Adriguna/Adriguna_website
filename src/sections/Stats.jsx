import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaAws,
  FaRobot,
} from "react-icons/fa";

import {
  SiFlutter,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

const stats = [
  {
    number: "50+",
    title: "Projects Delivered",
  },
  {
    number: "20+",
    title: "Happy Clients",
  },
  {
    number: "24/7",
    title: "Support",
  },
  {
    number: "99%",
    title: "Client Satisfaction",
  },
];

const technologies = [
  {
    icon: <FaReact />,
    name: "React",
    color: "text-cyan-400",
  },
  {
    icon: <SiFlutter />,
    name: "Flutter",
    color: "text-sky-400",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
    color: "text-green-500",
  },
  {
    icon: <SiFirebase />,
    name: "Firebase",
    color: "text-yellow-400",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    color: "text-white",
  },
  {
    icon: <FaAws />,
    name: "AWS",
    color: "text-orange-400",
  },
  {
    icon: <FaFigma />,
    name: "Figma",
    color: "text-pink-500",
  },
  {
    icon: <FaRobot />,
    name: "AI",
    color: "text-emerald-400",
  },
];

const Stats = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] pt-36 pb-24" style={{ marginTop: '50px', marginBottom: '10px' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        ><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300" style={{ marginTop: '10px', padding: '10px' }}>
            Why Businesses Choose Adriguna
          </span>
          </div>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl" style={{ marginTop: '15px' }}>
            Trusted by Startups & Businesses
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400" style={{ marginTop: '15px', marginBottom: '15px' }}>
            We build scalable websites, mobile applications and AI-powered
            digital products that help businesses grow faster.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" style={{ margin: '10px' }}>
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40"
            >
              <h3 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-5xl font-bold text-transparent">
                {item.number}
              </h3>

              <p className="mt-4 text-slate-400">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-24">
          <h3 className="mb-10 text-center text-2xl font-semibold text-white" style={{ marginTop: '10px', marginBottom: '10px' }}>
            Technologies We Use
          </h3>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
              >
                <div
                  className={`mb-3 flex justify-center text-4xl ${tech.color}`}
                >
                  {tech.icon}
                </div>

                <p className="text-center text-sm text-slate-300">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Stats;