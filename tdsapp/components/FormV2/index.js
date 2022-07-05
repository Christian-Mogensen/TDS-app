import { useState } from "react";
import { motion } from "framer-motion";
import { useStateContext } from "../../context/stateContext";
import { LockIcon, LockArm, GoogleLogoIcon, GithubLogoIcon } from "./LockIcon";
import Auth from "../FormComp/auth";
import Btn from "../PageElement/Btn";
const index = () => {
  const { signInWithGithub, signInWithGoogle } = useStateContext();

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed z-40 flex w-full h-screen m-auto overflow-auto bg-gray-100 dark:bg-gray-900"
    >
      <div className="w-full max-w-sm p-2 m-auto overflow-hidden ">
        <Auth />
        <div className="flex gap-2 mt-2">
          <Btn onClick={signInWithGoogle}>
            <GoogleLogoIcon />
            Google
          </Btn>
          <Btn onClick={signInWithGithub}>
            <GithubLogoIcon />
            Github
          </Btn>
        </div>
      </div>
    </motion.div>
  );
};

export default index;
