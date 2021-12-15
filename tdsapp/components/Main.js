import { motion } from "framer-motion";

const Main = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity:0,x: -400 }}
      animate={{ opacity:1,x: 0 }}
      exit={{x:400}}
      transition={{ type: "spring", mass: 0.1 }}
      className="overflow-hidden"
    >
      {children}
    </motion.main>
  );
};

export default Main;
