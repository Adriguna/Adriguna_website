import adriguna from "../assets/images/adriguna.png";
import brightcanvas from "../assets/images/brightcanvas.png";
import ecommerce from "../assets/images/ecommerce.png";
import fir from "../assets/images/fir.png";

export const projects = [
  {
    id: 1,
    title: "Adriguna",
    subtitle: "Software Agency Website",
    description:
      "Modern company website with premium UI, smooth animations and responsive design.",
    image: adriguna,
    technologies: [
      "React",
      "Tailwind",
      "Framer Motion",
      "Vite",
    ],
    github: "#",
    live: "#",
  },

  {
    id: 2,
    title: "Bright Canvas",
    subtitle: "Creative Agency Website",
    description:
      "Creative agency website with modern UI, animations and responsive layouts.",
    image: brightcanvas,
    technologies: [
      "React",
      "Styled Components",
      "Framer Motion",
    ],
    github: "#",
    live: "https://brightcanvas.in",
  },

  {
    id: 3,
    title: "E-Commerce Platform",
    subtitle: "Full Stack Shopping Website",
    description:
      "Shopping platform with authentication, cart, admin panel and payment-ready architecture.",
    image: ecommerce,
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
    ],
    github: "#",
    live: "https://empor-fashion-store.netlify.app/",
  },

  {
    id: 4,
    title: "Police FIR Management",
    subtitle: "Full Stack Web Application",
    description:
      "Digital FIR management system with secure authentication and complaint management.",
    image: fir,
    technologies: [
      "React",
      "Express",
      "MySQL",
      "JWT",
    ],
    github: "#",
    live: "#",
  },
];