import { motion } from "framer-motion";
import { processSteps } from "../data/process";

const Process = () => {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-40 h-72 w-72 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-purple-600/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-2 text-sm text-blue-300" style={{padding: '10px',marginTop: '15px'}}>
            Our Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            How We Build
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Successful Products
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400" style={{padding: '15px'}}>
            Every successful project starts with a proven workflow.
            From planning to deployment, we ensure quality,
            transparency and timely delivery.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-blue-500/40 via-cyan-500/30 to-purple-500/40 lg:block" />

          <div className="space-y-16">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`flex items-center ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  } flex-col gap-10`}
                   style={{padding:5}}
                >
                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                    }}
                    className="relative w-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-blue-500/40 lg:w-[46%]"
                    style={{padding: '15px'}}
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-3xl text-white shadow-lg">
                      <Icon />
                    </div>

                    <span className="text-sm font-semibold tracking-widest text-cyan-400">
                      STEP {step.number}
                    </span>

                    <h3 className="mt-3 text-3xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-400">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Circle */}
                  <div className="relative hidden h-6 w-6 rounded-full border-4 border-cyan-400 bg-[#050816] shadow-[0_0_25px_rgba(34,211,238,.7)] lg:block" />

                  {/* Empty Side */}
                  <div className="hidden lg:block lg:w-[46%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;