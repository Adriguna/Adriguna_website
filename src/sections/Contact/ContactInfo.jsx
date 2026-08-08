import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const contactDetails = [
  {
    icon: FaEnvelope,
    title: "Email Us",
    value: "pathakritesh2004@gmail.com",
    description: "Send us your project details anytime.",
    href: "mailto:pathakritesh2004@gmail.com",
  },
  {
    icon: FaPhoneAlt,
    title: "Call Us",
    value: "+91 9151538542",
    description: "Let's discuss your project directly.",
    href: "tel:+919151538542",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Our Location",
    value: "India",
    description: "Working with clients across the globe.",
    href: "#",
  },
  {
    icon: FaClock,
    title: "Working Hours",
    value: "Mon - Sat",
    description: "10:00 AM - 7:00 PM",
    href: "#",
  },
];

const ContactInfo = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#050816]
        px-4
        py-16
        sm:px-6
        sm:py-20
        lg:px-8
        lg:py-24
      "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-1/3
          h-64
          w-64
          rounded-full
          bg-cyan-500/10
          blur-[140px]
          sm:h-80
          sm:w-80
        "
      />

      {/* ================= CONTAINER ================= */}

      <div className="mx-auto w-full max-w-7xl">

        {/* ================= SECTION HEADING ================= */}

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
            max-w-3xl
            flex-col
            items-center
            text-center
            sm:mb-16
          "
        >
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
              text-xs
              font-medium
              text-cyan-300
              sm:text-sm
            "
          >
            Get In Touch
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              leading-tight
              text-white
              sm:text-4xl
              md:text-5xl
            "
          >
            Let's Start a{" "}
            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-purple-500
                bg-clip-text
                text-transparent
              "
            >
              Conversation
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-400
              sm:text-base
              sm:leading-8
            "
          >
            Whether you have a new project idea or need help with an
            existing product, we're here to help.
          </p>
        </motion.div>

        {/* ================= CONTACT CARDS ================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -7 }}
                className="
                  group
                  flex
                  w-full
                  flex-col
                  items-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  text-center
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-cyan-500/30
                  hover:bg-white/[0.06]
                  sm:p-7
                "
              >
                {/* Icon */}

                <div
                  className="
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
                    group-hover:text-cyan-300
                  "
                >
                  <Icon className="text-xl" />
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
                  {item.title}
                </h3>

                {/* Value */}

                <p
                  className="
                    mt-3
                    break-words
                    text-sm
                    font-medium
                    text-cyan-400
                    sm:text-base
                  "
                >
                  {item.value}
                </p>

                {/* Description */}

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-400
                  "
                >
                  {item.description}
                </p>

                {/* Arrow */}

                <span
                  className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-medium
                    text-slate-500
                    transition-all
                    duration-300
                    group-hover:text-cyan-400
                  "
                >
                  Contact us
                  <FaArrowRight
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </span>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;