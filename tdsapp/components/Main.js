import { motion } from "framer-motion";

const Main = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", mass: 0.1 }}
      className="flex flex-col justify-center max-w-4xl m-auto"
    >
      {children}
    </motion.main>
  );
};

export default Main;
