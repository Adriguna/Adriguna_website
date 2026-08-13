import { useState } from "react";
import { motion } from "framer-motion";

const containerStyle = {
  height: 50,
  borderRadius: 50,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  padding: "0 10px",
  justifyContent: "space-between",
  overflow: "hidden",
  transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
};

const handleStyle = {
  width: 35,
  height: 35,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function Button({ Content, width = 170, href = "#ContactForm" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={href} className="inline-block">
      <button
        type="button"
        style={{
          ...containerStyle,
          width,
          backgroundColor: isHovered ? "#BF9F00" : "#ffffff",
          color: isHovered ? "#ffffff" : "#000000",
          flexDirection: isHovered ? "row-reverse" : "row",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            fontSize: "15px",
            fontWeight: 700,
            fontFamily: '"Gilroy", sans-serif',
            whiteSpace: "nowrap",
            padding: "0 6px",
          }}
        >
          {Content}
        </motion.span>

        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            ...handleStyle,
            backgroundColor: isHovered ? "#ffffff" : "#BF9F00",
            color: isHovered ? "#BF9F00" : "#ffffff",
          }}
        >
          <span className="material-symbols-rounded">
            {isHovered ? (
  <span className="material-symbols-rounded">
    
  </span>
) : (
  <span className="material-symbols-outlined">
    
  </span>
)}
          </span>
        </motion.div>
      </button>
    </a>
  );
}