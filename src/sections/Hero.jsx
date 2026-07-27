import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaArrowRight,
} from "react-icons/fa";

import {
  SiFlutter,
  SiFirebase,
} from "react-icons/si";
import Container from "../components/Container";

const Hero = () => {
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
      <section className="relative padding overflow-hidden bg-[#050816] min-h-[calc(100vh-96px)] pd-24 lg:px-8">

        {/* Background Glow */}
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-[160px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

        <Container>

        <div className="relative z-10 grid min-h-[calc(100vh-96px)] items-center gap-12 lg:gap-20 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <div>

            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .5 }}
              className="inline-flex padding_trusted items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300"
            >
              🚀 Trusted Web & App Development Company
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2 }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
            >
              Get Your High Quality App and Website Built by<span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent"> Adriguna! </span>
              <br />

            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .4 }}
              className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
            >
              This is the era of online world without a website or an app,
              a bussiness can't reach millons of people across the globe. If a bussiness has its 
              own website and app, it grows online automatically. Having its own 
              website and app make your business appear more truasworthy and credible. We at Adriguna, build high quality websites and apps for your business to grow online.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .6 }}
              className="mt-10 flex flex-wrap gap-5"
            >
              <button className="flex padding_trusted items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700" style={{marginTop: '10px'}}>
                Start Project
                <FaArrowRight />
              </button>

              <button className="rounded-full padding_trusted border border-slate-600 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black" style={{marginTop: '10px'}}>
                View Portfolio
              </button>
            </motion.div>

            {/* Stats */}

            {/*<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .8 }}
              className="mt-16 grid grid-cols-3 gap-8"
            >

              <div className="padding_trusted" style={{ marginTop: '10px' }}>
                <h2 className="text-4xl font-bold text-white" >
                  50+
                </h2>
                <p className="mt-2 text-slate-400">
                  Projects
                </p>
              </div>

              <div className="padding_trusted" style={{ marginTop: '10px' }}>
                <h2 className="text-4xl font-bold text-white">
                  20+
                </h2>
                <p className="mt-2 text-slate-400">
                  Happy Clients
                </p>
              </div>

              <div className="padding_trusted" style={{ marginTop: '10px' }}>
                <h2 className="text-4xl font-bold text-white">
                  24/7
                </h2>
                <p className="mt-2 text-slate-400">
                  Support
                </p>
              </div>

            </motion.div>*/}

          </div>

          {/* RIGHT SIDE */}

          <div className="relative hidden h-[650px] lg:flex items-center justify-center">

            {/* Main Card */}

            <motion.div
              animate={floatingAnimation}
              className="relative flex h-[420px] w-[420px] items-center justify-center rounded-[40px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 shadow-[0_0_80px_rgba(59,130,246,.25)]"
            >

              <div className="text-center">

                <h2 className="text-5xl font-bold text-white">
                  ADRIGUNA
                </h2>

                <p className="mt-4 text-slate-400">
                  Web • Mobile • AI
                </p>

              </div>

            </motion.div>

            {/* Floating Cards */}

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute left-0 top-20 rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <FaReact className="text-3xl text-cyan-400" />
                <span>React</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute right-0 top-12 rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <SiFlutter className="text-3xl text-sky-400" />
                <span>Flutter</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-20 left-10 rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <FaNodeJs className="text-3xl text-green-500" />
                <span>Node.js</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute bottom-10 right-6 rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <SiFirebase className="text-3xl text-yellow-400" />
                <span>Firebase</span>
              </div>
            </motion.div>

          </div>

        </div>
        </Container>

      </section>
  );
};

export default Hero;