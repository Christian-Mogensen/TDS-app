import { motion, useViewportScroll } from "framer-motion";
import React, { useState } from "react";
import { useStateContext } from "../context/stateContext";
import CalendarIcon from "./CalendarIcon";
import UseSwitchesCustom from "./CustomSwitch";
import IconButton from "./IconButton";
import ProgressBar from "./ProgressBar";
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
  useEffect(() => {
    return scrollY.onChange(() => update());
  });
  const onScrollHide = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 1, y: -57 },
  };
  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }
  const { toggled, setToggled } = useStateContext();
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useViewportScroll();

  return (
    <motion.header
      className="border-b overflow-hidden sticky top-0 z-50 bg-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:bg-[var(--gradient-bg-right)] font-secondary font-bold shadow-md shadow-white"
      initial={{ opacity: 0, y: -60 }}
      variants={onScrollHide}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.125 }}
    >
      <div className="flex items-center justify-between">
        <h1 className="p-3 text-3xl capitalize dark:text-white dark:border-gray-50">
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
          transition={{ delay: 0.8 }}
          className="flex gap-4 pr-3"
        >
          <IconButton onClick={() => setToggled(!toggled)}>
            <CalendarIcon />
          </IconButton>
          <UseSwitchesCustom />
        </motion.div>
      </div>

      <ProgressBar />
    </motion.header>
  );
};

export default Header;
