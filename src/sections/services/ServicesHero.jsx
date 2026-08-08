import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaReact,
  FaMobileAlt,
  FaGlobe,
  FaCode,
} from "react-icons/fa";

import { SiFlutter } from "react-icons/si";

import Container from "../../components/Container";

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-16 sm:py-20 lg:py-24">

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px] sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[140px] sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

      <Container>

        {/* ================================================= */}
        {/*                 TOP BADGE                         */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 flex justify-center"
          style={{ padding: "10px" }}
        >
          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300" style={{ padding: "15px" }}>
            Our Services
          </span>
        </motion.div>


        {/* ================================================= */}
        {/*                 MAIN CONTENT                      */}
        {/* ================================================= */}

        <div className="mt-10 grid items-center gap-16 lg:grid-cols-2 lg:gap-10">


          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
            style={{ padding: "15px" }}
          >

            {/* Heading */}

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">

              Solutions That Help

              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Your Business Grow
              </span>

            </h1>


            {/* Description */}

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:mx-0 lg:text-xl">

              From websites and mobile applications to custom software
              solutions, we create reliable and affordable digital products
              designed around your business needs.

            </p>


            {/* Button */}

            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 sm:px-8 sm:py-4 sm:text-base"
              style={{ padding: "10px" }}
            >

              Explore Our Services

              <FaArrowRight />

            </motion.a>

          </motion.div>


          {/* ================= RIGHT ANIMATION ================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative mx-auto flex h-[420px] w-full max-w-[500px] items-center justify-center"
          >

            {/* Outer Circle */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[330px] w-[330px] rounded-full border border-cyan-500/20 sm:h-[390px] sm:w-[390px]"
            />


            {/* Inner Circle */}

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[220px] w-[220px] rounded-full border border-purple-500/20 sm:h-[270px] sm:w-[270px]"
            />


            {/* Center Circle */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 shadow-[0_0_100px_rgba(59,130,246,0.35)] sm:h-44 sm:w-44"
            >

              <div className="text-center">

                <FaCode className="mx-auto mb-2 text-3xl text-white sm:text-4xl" />

                <p className="text-sm font-semibold text-white sm:text-base">
                  Digital
                </p>

                <p className="text-xs text-white/70">
                  Solutions
                </p>

              </div>

            </motion.div>


            {/* ================= WEB DEVELOPMENT ================= */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-10 rounded-2xl border border-white/10 bg-[#0d1226]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:left-2"
            >

              <div className="flex items-center gap-3" style={{ padding: "5px" }}>

                <FaGlobe className="text-2xl text-cyan-400" />

                <div>

                  <p className="text-sm font-semibold text-white">
                    Web Development
                  </p>

                  <p className="text-xs text-slate-500">
                    Modern Websites
                  </p>

                </div>

              </div>

            </motion.div>


            {/* ================= APP DEVELOPMENT ================= */}

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-8 rounded-2xl border border-white/10 bg-[#0d1226]/90 px-4 py-3 shadow-xl backdrop-blur-xl"
            >

              <div className="flex items-center gap-3" style={{ padding: "5px" }}>

                <FaMobileAlt className="text-2xl text-purple-400" />

                <div>

                  <p className="text-sm font-semibold text-white">
                    App Development
                  </p>

                  <p className="text-xs text-slate-500">
                    Android & Flutter
                  </p>

                </div>

              </div>

            </motion.div>


            {/* ================= REACT ================= */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-12 left-5 rounded-2xl border border-white/10 bg-[#0d1226]/90 px-4 py-3 shadow-xl backdrop-blur-xl"
            >

              <div className="flex items-center gap-3" style={{ padding: "5px" }}>

                <FaReact className="text-2xl text-cyan-400" />

                <div>

                  <p className="text-sm font-semibold text-white">
                    React
                  </p>

                  <p className="text-xs text-slate-500">
                    Modern UI
                  </p>

                </div>

              </div>

            </motion.div>


            {/* ================= FLUTTER ================= */}

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-8 right-5 rounded-2xl border border-white/10 bg-[#0d1226]/90 px-4 py-3 shadow-xl backdrop-blur-xl"
            >

              <div className="flex items-center gap-3" style={{ padding: "5px" }}>

                <SiFlutter className="text-2xl text-sky-400" />

                <div>

                  <p className="text-sm font-semibold text-white">
                    Flutter
                  </p>

                  <p className="text-xs text-slate-500">
                    Cross Platform
                  </p>

                </div>

              </div>

            </motion.div>


            {/* ================= ANIMATED DOTS ================= */}

            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute right-24 top-1/2 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
            />


            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="absolute bottom-28 left-28 h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.8)]"
            />

          </motion.div>

        </div>

      </Container>

    </section>
  );
};

export default ServicesHero;