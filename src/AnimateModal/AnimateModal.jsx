import React from "react";
import { motion } from "framer-motion";

const animates = {
  initial: { opacity: 0, y: "-100vh" },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "vh100" },
};

const AnimateModal = ({ children }) => {
  return (
    <motion.div
      variants={animates}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1, type: "spring" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateModal;
