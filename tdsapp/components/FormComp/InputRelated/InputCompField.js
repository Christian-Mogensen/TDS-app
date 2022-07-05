import React, { forwardRef } from "react";
import { motion } from "framer-motion";
const InputCompField = forwardRef(({ type, placeholder, isOpen }, ref) => {
  const headerV = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.3,
      },
    },
    closed: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0,
        duration: 0.3,
      },
    },
  };
  return (
    <motion.input
      isOpen={isOpen}
      initial={{ x: 100, opacity: 0 }}
      animate={isOpen ? "open" : "closed"}
      transition={isOpen ? "open" : "closed"}
      variants={headerV}
      className="p-3 placeholder-current bg-transparent border-b border-current rounded-none outline-none placeholder-shown:capitalize"
      type={type}
      placeholder={placeholder}
      ref={ref}
    />
  );
});

export default InputCompField;
