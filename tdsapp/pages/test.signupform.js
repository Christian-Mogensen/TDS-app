import { useState } from "react";
import { motion } from "framer-motion";
import SignupForm from "../components/form/SignupForm";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
export default function Test() {
  const [toggle, setIsToggle] = useState(false);
  const modalFunction = () => {
    setIsToggle(!toggle);
    console.log("test");
  };
  const variants = {
    open: { y: 0 },
    closed: { y: 100 },
  };
  return (
    <>
      <SignupForm
        className="relative"
        isOpen={toggle}
        toggleModal={modalFunction}
      />
      <motion.button
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className="overflow-hidden fixed z-[49] -translate-x-1/2 left-1/2 top-1/2 p-3 bg-green-500 rounded-full"
        onClick={modalFunction}
      >
        {!toggle ? (
          <motion.div
            initial={{ y: 0 }}
            animate={toggle ? { y: 0 } : { y: 100 }}
            transition={{ ease: "circIn" }}
            variants={variants}
          >
            <LoginIcon />
          </motion.div>
        ) : (
          <motion.div
            initial={{ y: 0 }}
            animate={toggle ? { y: 100 } : { y: 0 }}
            transition={{ ease: "circIn" }}
          >
            <LogoutIcon />
          </motion.div>
        )}
      </motion.button>
    </>
  );
}
