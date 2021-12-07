import { motion } from "framer-motion";
import UseSwitchesCustom from "./CustomSwitch";

const Header = () => {
  const textparent = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    hidden: { opacity: 0, x: -20 },
  };
  const textitem = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        when: "afterChildren",
      },
    },
    hidden: { opacity: 0, x: -50 },
  };
  return (
    <motion.header
      className="border-b border-gray-700 sticky top-0 z-50 bg-gray-900 bg-[var(--gradient-bg-right)]"
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex justify-between items-center">
      <h1 className="py-3  capitalize text-3xl dark:text-white dark:border-gray-50">
        <motion.span
          variants={textparent}
          transition={{ delay: 1 }}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={textitem}>the</motion.span>
          <motion.span variants={textitem}> daily</motion.span>
          <motion.span variants={textitem}> stoic</motion.span>
        </motion.span>
      </h1>
      <UseSwitchesCustom />
      </div>
    </motion.header>
  );
};

export default Header;
