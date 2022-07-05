import React from "react";
import { motion } from "framer-motion";
import { useStateContext } from "../../context/stateContext";

const SubmitButton = (e) => {
  const { toggledForm, setToggledForm } = useStateContext();
  const handleSubmitClick = () => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      sendDetailsToServer();
    } else {
      props.showError("Passwords do not match");
    }
    setToggledForm(toggledForm);
  };
  return (
    <motion.button
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      type="submit"
      onClick={handleSubmitClick}
      className="py-3 text-white bg-gray-900 rounded shadow-sm w-28 dark:text-gray-700 dark:bg-gray-100"
    >
      Submit
    </motion.button>
  );
};

export default SubmitButton;
