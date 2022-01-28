import React from "react";
import { motion } from "framer-motion";
import Form from "./Form";
import CloseIcon from "../CloseIcon";
const SignupForm = ({ isOpen, toggleModal }) => {
  const variants = {
    open: { y: 0 },
    closed: { y: "-100%" },
  };

  return (
    <motion.div
      isOpen={isOpen}
      initial={{ y: "-100%" }}
      animate={isOpen ? "open" : "closed"}
      transition={{ ease: "circIn" }}
      variants={variants}
      className={`flex flex-col justify-center bg-gradient-to-b from-gray-400 to-transparent items-center fixed z-50  h-full w-full`}
    >
      <div className="relative">
        <button onClick={toggleModal} className="specialbuttonstyle"
        >
          <CloseIcon />
        </button>

        <Form />
      </div>
    </motion.div>
  );
};

export default SignupForm;
