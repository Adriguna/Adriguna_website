import { motion } from "framer-motion";
import Container from "../../components/Container";

const WhyStarted = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] w-full h-auto">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 backdrop-blur-xl"
        >
          {/* Badge */}
          <div className="flex justify-center">
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300 sm:text-sm" style={{padding: '15px'}}>
              Why Adriguna Started ?
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl" style={{padding: '15px'}}>
            Why We Started ?
          </h2>

          {/* Content */}
          <div className="mt-8 space-y-6 text-center" style={{padding: '15px'}}>
            <p className="mt-6 text-base md:text-lg leading-8 text-slate-300">
              Adriguna was started with a simple goal of helping businesses build their
              online presence through websites and mobile applications. We believe that
              every business, whether small or large, should have access to high-quality
              digital solutions at an affordable cost. Our focus is to deliver reliable,
              modern, and user-friendly websites and applications that help our clients
              grow their business.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyStarted;