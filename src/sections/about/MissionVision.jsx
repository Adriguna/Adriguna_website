import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";
import Container from "../../components/Container";

const MissionVision = () => {
  return (
    <section className="relative bg-[#050816] py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[140px]" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            style={{padding: '15px'}}
          >
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
              <FaBullseye className="text-3xl text-cyan-400" />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-white">
              Our Mission
            </h2>

            <div className="mt-4 h-1 w-16 rounded-full bg-cyan-400"></div>

            <p className="mt-6 text-slate-300 leading-8 text-lg">
              Our mission is to make website and app development affordable.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            style={{padding: '15px'}}
          >
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center">
              <FaEye className="text-3xl text-purple-400" />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-white">
              Our Vision
            </h2>

            <div className="mt-4 h-1 w-16 rounded-full bg-purple-400"></div>

            <p className="mt-6 text-slate-300 leading-8 text-lg">
              Providing high quality websites and apps to our clients.
            </p>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default MissionVision;