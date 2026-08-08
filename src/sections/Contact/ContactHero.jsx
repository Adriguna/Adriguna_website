import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const ContactHero = () => {
  return (
    <section
      className="
        relative
        flex
        min-h-[70vh]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#050816]
        px-4
        py-20
        sm:px-6
        sm:py-24
        lg:px-8
        lg:py-28
      "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-10
          h-64
          w-64
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[140px]
          sm:h-80
          sm:w-80
          lg:h-96
          lg:w-96
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-64
          w-64
          rounded-full
          bg-purple-500/10
          blur-[140px]
          sm:h-80
          sm:w-80
        "
      />

      {/* ================= CONTENT ================= */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-4xl
          flex-col
          items-center
          text-center
        "
      >
        {/* Badge */}

        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
            sm:px-5
            sm:text-sm
          "
        >
          Let's Connect
        </motion.span>

        {/* Heading */}

        <h1
          className="
            mt-6
            text-4xl
            font-bold
            leading-tight
            tracking-tight
            text-white
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
        >
          Let's Build Something

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
            Amazing Together
          </span>
        </h1>

        {/* Description */}

        <p
          className="
            mx-auto
            mt-6
            w-full
            max-w-2xl
            text-sm
            leading-7
            text-slate-400
            sm:text-base
            sm:leading-8
            lg:text-lg
          "
        >
          Have a project in mind or looking for the right technology partner?
          Let's discuss your idea and create a reliable digital solution
          together.
        </p>

        {/* Scroll / Explore Button */}

        <motion.a
          href="#contact-form"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="
            mt-8
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-gradient-to-r
            from-blue-600
            to-purple-600
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            shadow-lg
            shadow-blue-500/20
            transition-all
            duration-300
            hover:shadow-blue-500/30
            sm:px-8
            sm:py-4
            sm:text-base
          "
        >
          Start a Conversation

          <FaArrowDown className="text-sm" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ContactHero;