import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]" style={{padding: '15px'}}>
      {/* Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-4xl font-extrabold text-yellow-400">
              adriguna
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              We build high-quality websites, mobile applications and digital
              products that help businesses grow faster.
            </p>

            <div className="mt-8 flex gap-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub].map(
                (Icon, index) => (
                  <motion.a
                    whileHover={{ y: -5 }}
                    key={index}
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <Icon />
                  </motion.a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-slate-400">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-4 text-slate-400">
              <li>Website Development</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
              <li>AI Solutions</li>
              <li>Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5 text-slate-400">
              <p>📧 hello@adriguna.com</p>
              <p>📞 +91 XXXXX XXXXX</p>
              <p>📍 India</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-center text-slate-500 md:flex-row">
          <p>
            © 2026 Adriguna. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>

          <motion.button
            whileHover={{ y: -5 }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;