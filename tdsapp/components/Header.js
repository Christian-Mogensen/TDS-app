import { motion } from "framer-motion";

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
      className=""
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="py-3 border-b border-gray-700 capitalize text-3xl dark:text-white dark:border-gray-50">
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
      <input type='checkbox' className='toggle'/>
    </motion.header>
  );
};

export default Header;
