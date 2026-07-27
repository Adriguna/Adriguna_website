import { motion } from "framer-motion";
import Container from "../../components/Container";

const CompanyStory = () => {
  return (
    <section className="bg-[#050816] py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-10">
            About
          </h2>

          <p className="text-slate-300 text-lg leading-9">
            Adriguna is a startup specializing in website and app development.
            Awareing the businesses that how having an online website and app
            will grow your business. Providing high quality apps and website to
            our clients at minimal cost.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default CompanyStory;