import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaWhatsapp,
  FaRocket,
  FaCode,
  FaMobileAlt,
  FaChartLine,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiFlutter,
  SiFirebase,
} from "react-icons/si";

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-[150px]" />
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-purple-600/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden border border-white/10 border-b-0 bg-gradient-to-br from-[#0d1226] via-[#090f1d] to-[#050816] shadow-[0_0_80px_rgba(59,130,246,.12)]"
          style={{padding: '15px'}}
        >
          <div className="grid items-center gap-12 px-8 py-14 lg:grid-cols-2 lg:px-16 lg:py-20">
            {/* LEFT */}
            <div>
              <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300" style={{padding: '10px'}}>
                🚀 Let's Build Something Amazing
              </span>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl">
                Ready to Build Your
                <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Dream Project?
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
                We build modern websites, mobile apps and scalable digital
                products that help businesses grow faster.
              </p>

              <div className="mt-10 flex flex-col gap-5 sm:flex-row" style={{padding: '10px'}}>
                <button className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105" style={{padding:10}}>
                  Start Project
                  <FaArrowRight />
                </button>

                <button className="flex items-center justify-center gap-3 rounded-full border border-green-500/40 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-green-500/10" style={{padding:10}}>
                  <FaWhatsapp className="text-green-400" />
                  WhatsApp Us
                </button>
              </div>
            </div>

            {/* RIGHT */}
            {/* RIGHT */}
<div className="relative hidden h-[500px] lg:flex items-center justify-center">

  {/* Glow */}
  <div className="absolute h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[120px]" />

  {/* Orbit 1 */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      duration: 40,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute h-[340px] w-[340px] rounded-full border border-cyan-500/20"
  >
    <div className="absolute left-1/2 -top-4 -translate-x-1/2 rounded-xl border border-cyan-500/30 bg-[#0d1226] p-3">
      <FaCode className="text-2xl text-cyan-400" />
    </div>
  </motion.div>

  {/* Orbit 2 */}
  <motion.div
    animate={{ rotate: -360 }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute h-[260px] w-[260px] rounded-full border border-purple-500/20"
  >
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-xl border border-purple-500/30 bg-[#0d1226] p-3">
      <FaMobileAlt className="text-2xl text-purple-400" />
    </div>
  </motion.div>

  {/* Rocket */}
  <motion.div
    animate={{
      y: [0, -15, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
    }}
    className="relative z-20 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 shadow-[0_0_80px_rgba(59,130,246,.45)]"
  >
    <FaRocket className="text-6xl text-white" />
  </motion.div>

  {/* Floating Card */}
  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
    className="absolute left-0 top-20 rounded-2xl border border-white/10 bg-[#0d1226]/80 p-5 backdrop-blur-xl"
  >
    <div className="flex items-center gap-3" style={{padding: '5px'}}>
      <FaCode className="text-cyan-400 text-3xl" />
      <div>
        <p className="text-white font-semibold">
          Modern Development
        </p>
        <span className="text-sm text-slate-400">
          React • Flutter
        </span>
      </div>
    </div>
  </motion.div>

  <motion.div
    animate={{
      y: [0, 12, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
    className="absolute right-0 bottom-20 rounded-2xl border border-white/10 bg-[#0d1226]/80 p-5 backdrop-blur-xl"
  >
    <div className="flex items-center gap-3" style={{padding: '5px'}}>
      <FaChartLine className="text-green-400 text-3xl" />
      <div>
        <p className="text-white font-semibold">
          Business Growth
        </p>
        <span className="text-sm text-slate-400">
          Scale Faster
        </span>
      </div>
    </div>
  </motion.div>

</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;