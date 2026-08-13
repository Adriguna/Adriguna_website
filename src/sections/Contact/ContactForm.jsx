import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const name = formData.get("name")?.trim();
  const email = formData.get("email")?.trim();
  const website = formData.get("url")?.trim();
  const message = formData.get("message")?.trim();

  if (!name || !email || !message) {
    alert("Please fill Name, Email and Message ❌");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        website: website || null,
        message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Something went wrong ❌");
      return;
    }

    // Backend successfully processed:
    // 1. MySQL data saved
    // 2. Email sent
    // 3. WhatsApp URL generated

    alert("Request submitted successfully ✅");

    // Clear form
    form.reset();

    // Open WhatsApp
    if (data.whatsappUrl) {
      window.location.href = data.whatsappUrl;
    }

  } catch (error) {
    console.error("Backend Error:", error);

    alert(
      "Backend se connection nahi ho pa raha ❌"
    );
  }
};

  return (
    <section
      id="contact-form"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#050816]
        px-4
        py-20
        sm:px-6
        lg:px-8
      "
        style={{ padding: "10px" }}
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[150px]
          sm:h-96
          sm:w-96
        "
      />

      {/* ================= MAIN CONTAINER ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          items-center
        "
      >
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
            max-w-3xl
            flex-col
            items-center
            text-center
          "
        >
          <span
            className="
              inline-flex
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
            Start Your Project
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
            Tell Us About Your{" "}
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
              Project
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-400
              sm:text-base
              sm:leading-8
            "
          >
            Have an idea in mind? Tell us about your project and
            let's create something amazing together.
          </p>
        </motion.div>

        {/* ================= FORM ================= */}

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mx-auto
            w-full
            max-w-4xl
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-6
            backdrop-blur-sm
            sm:p-8
            lg:p-10
          "
          style={{ padding: "10px" }}
        >
          {/* ================= NAME + EMAIL ================= */}

          <div
            className="
              flex
              w-full
              flex-col
              gap-6
              lg:flex-row
            "
          >
            {/* Name */}

            <div className="form-field w-full lg:flex-1">
              <label
                htmlFor="name"
                className="
                  text-sm
                  font-medium
                  text-slate-300
                  sm:text-base
                "
              >
                Name & Company
              </label>

              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder="Enter Name & Company"
                className="
                  mt-2
                  w-full
                  border-0
                  border-b
                  border-white/20
                  bg-transparent
                  px-1
                  py-3
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-slate-500
                  transition-all
                  duration-300
                  focus:border-cyan-400
                  sm:text-base
                "
              />
            </div>

            {/* Email */}

            <div className="form-field w-full lg:flex-1">
              <label
                htmlFor="email"
                className="
                  text-sm
                  font-medium
                  text-slate-300
                  sm:text-base
                "
              >
                E-Mail
              </label>

              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="Enter Mail"
                className="
                  mt-2
                  w-full
                  border-0
                  border-b
                  border-white/20
                  bg-transparent
                  px-1
                  py-3
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-slate-500
                  transition-all
                  duration-300
                  focus:border-cyan-400
                  sm:text-base
                "
              />
            </div>
          </div>

          {/* ================= WEBSITE ================= */}

          <div className="mt-7 w-full">
            <label
              htmlFor="url"
              className="
                text-sm
                font-medium
                text-slate-300
                sm:text-base
              "
            >
              Website / Social Media Link
            </label>

            <input
              type="url"
              name="url"
              id="url"
              autoComplete="url"
              placeholder="Enter URL of your Website or Social Media"
              className="
                mt-2
                w-full
                border-0
                border-b
                border-white/20
                bg-transparent
                px-1
                py-3
                text-sm
                text-white
                outline-none
                placeholder:text-slate-500
                transition-all
                duration-300
                focus:border-cyan-400
                sm:text-base
              "
            />
          </div>

          {/* ================= PROJECT DETAILS ================= */}

          <div className="mt-7 w-full">
            <label
              htmlFor="message"
              className="
                text-sm
                font-medium
                text-slate-300
                sm:text-base
              "
            >
              Tell Us
            </label>

            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Go On, Tell Us All About Your Idea"
              required
              className="
                mt-2
                w-full
                resize-y
                border-0
                border-b
                border-white/20
                bg-transparent
                px-1
                py-3
                text-sm
                leading-7
                text-white
                outline-none
                placeholder:text-slate-500
                transition-all
                duration-300
                focus:border-cyan-400
                sm:text-base
              "
            />
          </div>

          {/* ================= SUBMIT BUTTON ================= */}

          <div className="mt-9 flex justify-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="
                flex
                items-center
                gap-3
                rounded-full
                bg-gradient-to-r
                from-blue-600
                to-purple-600
                px-8
                py-3
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-blue-500/20
                transition-all
                duration-300
                hover:shadow-blue-500/40
                sm:px-10
                sm:py-4
                sm:text-base
              "
                style={{ padding: "10px" }}
            >
              Submit Request

              <FaPaperPlane className="text-sm" />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;