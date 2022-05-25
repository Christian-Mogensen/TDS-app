import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SignupForm from "../components/FormComp/Signup/SignupForm";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
export default function Test() {
  const [toggle, setIsToggle] = useState(false);
  const modalFunction = () => {
    setIsToggle(!toggle);
    console.log("test");
  };
  const variants = {
    open: { x: 0 },
    closed: { x: 50 },
  };
  const variant2 = {
    open: { x: -70 },
    closed: { x: -22 },
  };
  return (
    <>
      <SignupForm
        className="relative"
        isOpen={toggle}
        toggleModal={modalFunction}
      />
      <AnimatePresence>
        <motion.button
          // initial={{ x: 100 }}
          // animate={{ x: 0 }}
          className={`overflow-hidden relative z-[55] h-12 transitionspeed w-12 p-3 ${
            !toggle ? "bg-green-500" : "bg-red-500"
          } rounded-full flex`}
          onClick={modalFunction}
        >
          <motion.div
            className="text-white"
            exit={{ x: 50 }}
            animate={toggle ? "closed" : "open"}
            transition={{ ease: "circIn", duration: 0.2 }}
            variants={variants}
          >
            <LoginIcon />
          </motion.div>

          <motion.div
            // initial={{x:0}}
            initial={{ x: -70 }}
            exit={{ x: -50 }}
            animate={toggle ? "closed" : "open"}
            transition={{ ease: "circIn", duration: 0.2 }}
            variants={variant2}
          >
            <LogoutIcon />
          </motion.div>
        </motion.button>
      </AnimatePresence>
    </>
  );
}
