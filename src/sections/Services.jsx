import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGlobe,
  FaMobileAlt,
  FaRobot,
  FaServer,
  FaPalette,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    icon: <FaGlobe />,
    title: "Web Development",
    description:
      "Modern, responsive and high-performance websites built using React, Next.js and the latest web technologies.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "Cross-platform Android & iOS applications using Flutter with beautiful UI and scalable architecture.",
    color: "from-sky-500 to-indigo-600",
  },
  {
    icon: <FaRobot />,
    title: "AI Solutions",
    description:
      "AI chatbots, automation, OpenAI integration and intelligent business solutions for modern companies.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "Robust backend systems with Node.js, Express, Firebase, APIs and cloud infrastructure.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <FaPalette />,
    title: "UI / UX Design",
    description:
      "Clean, modern and user-focused interfaces designed in Figma with pixel-perfect implementation.",
    color: "from-pink-500 to-purple-600",
  },
  {
    icon: <FaRocket />,
    title: "SEO & Performance",
    description:
      "Lightning-fast websites optimized for Google ranking, Core Web Vitals and conversion.",
    color: "from-violet-500 to-fuchsia-600",
  },
];

const Services = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-28">
      {/* Background Glow */}
      <div className="absolute -top-32 left-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-2 text-sm text-blue-300" style={{ marginTop: '10px', padding: '10px' }}>
              Our Services
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl" style={{ marginTop: '15px', marginBottom: '15px' }}>
            Digital Solutions That Drive Growth
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400" style={{ marginTop: '15px', marginBottom: '15px' }}>
            We help startups and businesses build modern websites, mobile
            applications, cloud solutions and AI-powered products that deliver
            real business value.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-3xl border padding_trusted border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40"
            >
              {/* Gradient Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
              />

              {/* Icon */}
              <div
                className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-3xl text-white shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-bold text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="leading-7 text-slate-400">
                {service.description}
              </p>

              {/* Learn More */}
              <div className="mt-8 flex items-center gap-2 font-semibold text-blue-400 transition-all group-hover:gap-4">
                Learn More
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;