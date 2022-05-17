import { motion } from "framer-motion";
const IconButton = ({ children, ...props }) => {
  return (
    <motion.button
      onClick={props.onClick}
      variants={props.variants}
      {...props}
      className="flex items-center justify-center w-8 h-8 text-white transition-all bg-gray-900 rounded-full dark:bg-gray-200 dark:text-gray-700 hover:scale-105 "
    >
      {children}
    </motion.button>
  );
};

export default IconButton;
