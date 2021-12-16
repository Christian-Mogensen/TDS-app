import React from "react";
import { motion } from "framer-motion";

const SubmitButton = (e) => {
    const handleSubmitClick = () =>{
  e.preventDefault();
  if (state.password === state.confirmPassword) {
    sendDetailsToServer();
  } else {
    props.showError("Passwords do not match");
  }
}
  return (
    <motion.button
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      type="submit"
      onClick={handleSubmitClick}
      className="bg-green-500 py-3 w-28 rounded text-white shadow-sm"
    >
      Submit
    </motion.button>
  );
};

export default SubmitButton;
