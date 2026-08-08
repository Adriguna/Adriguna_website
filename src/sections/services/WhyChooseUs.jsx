import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaRocket,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

const reasons = [
  {
    icon: FaRocket,
    title: "Modern Solutions",
    description:
      "We use modern technologies and development practices to create reliable digital solutions.",
  },
  {
    icon: FaUsers,
    title: "Client Focused",
    description:
      "We understand your requirements and build solutions according to your business needs.",
  },
  {
    icon: FaCheckCircle,
    title: "Quality Work",
    description:
      "We focus on clean design, smooth performance and a user-friendly experience.",
  },
  {
    icon: FaShieldAlt,
    title: "Reliable Support",
    description:
      "We provide reliable support and assistance to help keep your digital products running smoothly.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#050816]
        py-16
        sm:py-20
        lg:py-24
      "
      style={{ padding: "10px" }}
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-64
          w-64
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          blur-[140px]
          sm:h-80
          sm:w-80
        "
      />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mx-auto
            mb-12
            flex
            w-full
            max-w-4xl
            flex-col
            items-center
            text-center
            sm:mb-16
          "
        >

          {/* Badge */}

          <span
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              border
              border-cyan-500/30
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              font-medium
              text-cyan-300
            "
            style={{ padding: "10px" }}
          >
            Why Choose Adriguna
          </span>

          {/* Heading */}

          <h2
            className="
              mt-5
              w-full
              text-3xl
              font-bold
              leading-tight
              text-white
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            We Build With

            <span
              className="
                mt-2
                block
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-purple-500
                bg-clip-text
                text-transparent
              "
            >
              Your Success In Mind
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              w-full
              max-w-2xl
              text-center
              text-sm
              leading-7
              text-slate-400
              sm:text-base
              sm:leading-8
              lg:text-lg
            "
          >
            We focus on creating affordable, modern and reliable digital
            solutions that help businesses grow.
          </p>

        </motion.div>

        {/* ================= REASONS GRID ================= */}

        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="
                  group
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                  text-center
                  transition-all
                  duration-300
                  hover:border-cyan-500/30
                  hover:bg-white/[0.06]
                  sm:p-6
                  lg:p-7
                "
                style={{ padding: "10px" }}
              >

                {/* Icon */}

                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-cyan-500/10
                    text-cyan-400
                    transition-all
                    duration-300
                    group-hover:bg-cyan-500/20
                  "
                >
                  <Icon className="text-2xl" />
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-5
                    text-lg
                    font-semibold
                    text-white
                    sm:text-xl
                  "
                >
                  {reason.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-sm
                    text-sm
                    leading-7
                    text-slate-400
                  "
                >
                  {reason.description}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;