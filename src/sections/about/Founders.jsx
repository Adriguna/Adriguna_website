import { motion } from "framer-motion";
import Container from "../../components/Container";

import ritesh from "../../assets/images/Ritesh.png";
import rajat from "../../assets/images/Rajat.jpeg";

const founders = [
  {
    name: "Ritesh Pathak",
    role: "Founder of Adriguna",
    education: "B.Tech (Computer Science Engineering)",
    college: "MIET, Greater Noida",
    image: ritesh,
  },
  {
    name: "Rajat Pathak",
    role: "Co-Founder & CEO of Adriguna",
    education: "B.Tech (Mechanical Engineering)",
    college: "GCET, Greater Noida",
    image: rajat,
  },
];

const Founders = () => {
  return (
    <section className="relative bg-[#050816] py-20 overflow-hidden">
      <Container>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          style={{padding:10}}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Founding Members
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-cyan-400"></div>
        </motion.div>

        <div className="space-y-12">

          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center md:items-start gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl"
              style={{padding: '15px'}}
            >

              {/* Photo */}
              <img
                src={founder.image}
                alt={founder.name}
                className="w-35 h-35 rounded-2xl object-cover border border-cyan-500/20"
              />

              {/* Details */}
              <div className="text-center md:text-left" style={{padding: '15px'}}>

                <h3 className="text-3xl font-bold text-white">
                  {founder.name}
                </h3>

                <p className="mt-2 text-cyan-400 text-lg">
                  {founder.role}
                </p>

                <p className="mt-6 text-slate-300 text-lg">
                  {founder.education}
                </p>

                <p className="mt-2 text-slate-400">
                  {founder.college}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default Founders;