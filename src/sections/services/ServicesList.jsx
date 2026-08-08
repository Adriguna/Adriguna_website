import { motion } from "framer-motion";
import {
  FaGlobe,
  FaMobileAlt,
  FaPaintBrush,
  FaShoppingCart,
  FaCode,
  FaServer,
} from "react-icons/fa";

const services = [
  {
    icon: FaGlobe,
    title: "Website Development",
    description:
      "We create modern, responsive and user-friendly websites that help businesses build a strong online presence.",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    description:
      "We develop reliable and responsive mobile applications designed to provide a smooth experience for your users.",
  },
  {
    icon: FaPaintBrush,
    title: "UI/UX Design",
    description:
      "We design clean and engaging user interfaces that are easy to understand, visually appealing and user-friendly.",
  },
  {
    icon: FaCode,
    title: "Custom Software Development",
    description:
      "We build custom software solutions according to your business requirements and specific needs.",
  },
  {
    icon: FaShoppingCart,
    title: "E-Commerce Development",
    description:
      "We develop professional e-commerce websites with user-friendly interfaces to help businesses sell their products online.",
  },
  {
    icon: FaServer,
    title: "Backend & API Development",
    description:
      "We create secure and reliable backend systems and APIs to support modern websites and mobile applications.",
  },
];

const ServicesList = () => {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden items-center text-center bg-[#050816] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute left-0 top-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px] sm:h-80 sm:w-80 sm:blur-[150px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-purple-500/10 blur-[120px] sm:h-80 sm:w-80 sm:blur-[150px]" />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative mx-auto w-full max-w-7xl">
        
        {/* ================= SECTION HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 flex w-full max-w-4xl flex-col items-center text-center sm:mb-16"
        >
          {/* Badge */}

          <span className="inline-flex items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300 sm:px-5 sm:text-sm" style={{ padding: "10px" }}>
            What We Offer
          </span>

          {/* Heading */}

          <h2 className="mt-5 w-full text-center text-3xl font-bold leading-tight text-white sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl" style={{ padding: "10px" }}>
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-4 w-full max-w-2xl text-center text-sm leading-6 text-slate-400 sm:mt-5 sm:text-base sm:leading-7 md:text-lg md:leading-8" style={{ padding: "5px" }}>
            From websites and mobile applications to custom software
            solutions, we provide digital services designed around your
            business needs.
          </p>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="group flex h-full w-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.06] sm:p-6 lg:p-7"
                style={{ padding: "10px" }}
              >
                {/* Icon */}

                <div className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:text-cyan-300">
                  <Icon className="text-2xl" />
                </div>

                {/* Title */}

                <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl lg:text-2xl">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="mt-3 text-sm leading-6 text-slate-400 sm:mt-4 sm:text-base sm:leading-7">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;