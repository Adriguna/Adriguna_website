import { motion } from "framer-motion";
import Container from "../../components/Container";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] w-full h-auto flex items-center">
  {/* Background Glow */}
  <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

  <Container className="flex items-center justify-center">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-3xl text-center"
      style={{padding: '15px'}}
    >
      <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300" style={{padding: '15px'}}>
        About Us
      </span>

      <h1 className="mt-8 text-5xl font-bold text-white md:text-7xl" style={{padding: '15px'}}>
        Adriguna
      </h1>

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-slate-400" style={{padding: '15px'}}>
        Adriguna is a startup specializing in website and app development.
        Awareing the businesses that how having an online website and app will
        grow your business. Providing high quality apps and website to our
        clients at minimal cost.
      </p>
    </motion.div>
  </Container>
</section>
  );
};

export default AboutHero;