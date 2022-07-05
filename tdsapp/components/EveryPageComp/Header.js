import { motion, useViewportScroll } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useStateContext } from "../../context/stateContext";
import { useUserContext } from "../../context/userContext";
import CalendarIcon from "../Icons/CalendarIcon";
import UseSwitchesCustom from "../Icons/CustomSwitch";
import IconButton from "../IconRel/IconButton";
import ProgressBar from "../SpecialComp/ProgressBar";
import { LockArm, LockIcon } from "../FormV2/LockIcon";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();

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
  const { toggled, setToggled, toggledForm, setToggledForm } =
    useStateContext();
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useViewportScroll();
  const { user, logoutUser } = useUserContext();

  function formRouting() {
    // setToggledForm(!toggledForm);
    // router.push("/form");

    // if (router.pathname === "/form") {
    //   router.back();
    // }
    setToggledForm(!toggledForm);
  }

  return (
    <motion.header
      className="border-b overflow-hidden sticky top-0 z-50 bg-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:bg-[var(--gradient-bg-right)] font-secondary font-bold shadow-md shadow-white"
      initial={{ opacity: 0, y: -60 }}
      variants={onScrollHide}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.125 }}
    >
      <div className="flex items-center justify-between max-w-2xl m-auto">
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
          {user ? (
            <IconButton onClick={logoutUser} aria-label="logout button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
              </svg>
            </IconButton>
          ) : (
            <IconButton
              onClick={() => setToggledForm(!toggledForm)}
              aria-label="form menu icon"
            >
              <div className="relative">
                <div className="w-4">
                  <LockIcon />
                </div>
                <motion.div
                  style={{
                    transform: toggledForm ? "scaleX(-1)" : "scaleX(1)",
                  }}
                  className={`absolute transition-all top-0 left-0 w-4 ${
                    toggledForm && "left-[-6px]"
                  }`}
                >
                  <LockArm />
                </motion.div>
              </div>
            </IconButton>
          )}
        </motion.div>
      </div>

      <ProgressBar />
    </motion.header>
  );
};

export default Header;
