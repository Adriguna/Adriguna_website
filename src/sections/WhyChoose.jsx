import { motion } from "framer-motion";
import { whyChoose } from "../data/whyChoose";

const WhyChoose = () => {
  return (
    <section
      id="why-choose"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      {/* Glow */}
      <div className="absolute -left-20 top-24 h-80 w-80 rounded-full bg-blue-600/10 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[180px]" />

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
            Why Choose Adriguna ?
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl" style={{padding: '15px'}}>
            We Build More Than
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Software
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400" style={{padding: '15px'}}>
            At Adriguna, we focus on quality, innovation and long-term partnerships.
            Our goal is to build digital products that help your business grow.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" style={{padding: '15px'}}>
          {whyChoose.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
                style={{padding: '15px'}}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-3xl text-white transition-transform duration-300 group-hover:rotate-6">
                  <Icon />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;