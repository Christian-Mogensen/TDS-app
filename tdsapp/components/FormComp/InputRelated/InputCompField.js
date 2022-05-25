import React, { forwardRef } from "react";
import { motion } from "framer-motion";
const InputCompField = forwardRef(({ type, placeholder, isOpen }, ref) => {
    const headerV = {
        open: { x: 0,
            opacity:1,
        transition: {
          delay:0.4,
            duration:0.3
        },
        
        },
        closed: { 
            x: 0,
            opacity:1,
          transition:{
            delay:0,
            duration:0.3
          } },
      };
  return (
    <motion.input
    isOpen={isOpen}
    initial={{x:100, opacity:0}}
    animate={isOpen ? "open" : "closed"}
    transition={isOpen ? "open" : "closed"}
    variants={headerV}
      className="p-3 dark:text-white focus:border-b-4 border-current outline-none bg-transparent border-b-2 placeholder-shown:capitalize dark:placeholder-white placeholder-current"
      type={type}
      placeholder={placeholder}
      ref={ref}
    />
  );
});

export default InputCompField;
