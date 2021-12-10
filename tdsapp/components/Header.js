import { motion } from "framer-motion";
import UseSwitchesCustom from "./CustomSwitch";
import CalendarIcon from "./CalendarIcon";
import IconButton from "./IconButton";

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
      className="border-b overflow-hidden sticky top-0 z-50 bg-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:bg-[var(--gradient-bg-right)] font-secondary font-bold shadow-md shadow-white"
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex justify-between items-center">
        <h1 className="p-3  capitalize text-3xl dark:text-white dark:border-gray-50">
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
        <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{delay: 0.8}}
        className="flex gap-2">
          <IconButton>
            <CalendarIcon />
          </IconButton>
          <UseSwitchesCustom />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;