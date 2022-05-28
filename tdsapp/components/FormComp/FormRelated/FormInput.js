import FormGrp from "./FormGrp";
import FormLabel from "./FormLabel";
import InputComponent from "../InputRelated/InputComponentTwo";
import { motion } from "framer-motion";
import SubmitButton from "../SubmitButton";
import { useState } from "react";

const FormInput = ({ pw }) => {
  const [formState, setFormState] = useState("confirm");
  return (
    <>
      <motion.div
        // initial={{ opacity: 0, y: -150 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ delay: 0.2, duration: 0.3 }}
        className="flex flex-col justify-end h-48"
      >
        <h2 className="pb-3 text-4xl font-bold text-center font-secondary">
          Sign In
        </h2>
        <div className="flex justify-center w-full">
          <div className="relative flex justify-between w-24 overflow-hidden">
            <div
              className={`z-10 w-3 h-3 rounded-full dark:bg-gray-500 ${
                (formState === "email" ||
                  formState === "password" ||
                  formState === "confirm") &&
                "dark:bg-green-500"
              }`}
            ></div>
            <div
              className={`z-10 w-3 h-3 rounded-full dark:bg-gray-500 ${
                (formState === "password" || formState === "confirm") &&
                "dark:bg-green-500"
              }`}
            ></div>
            <div
              className={`z-10 w-3 h-3 rounded-full dark:bg-gray-500 ${
                formState === "confirm" && "dark:bg-green-500"
              }`}
            ></div>
            <motion.div
              // initial={{ width: "-100%" }}
              animate={{
                width:
                  formState === "email"
                    ? 0
                    : formState === "password"
                    ? "50%"
                    : formState === "confirm" && "100%",
              }}
              transition={{ duration: 0.3 }}
              className={`absolute left-0 h-1  -translate-y-1/2 dark:bg-green-500 top-1/2 `}
            ></motion.div>
          </div>
        </div>
      </motion.div>

      <form className="flex flex-col justify-between w-full px-3 my-3 overflow-hidden font-bold text-white bg-gray-600 border-t border-b shadow-md dark:bg-black backdrop-blur-md dark:border-gray-700 font-secondary shadow-white h-36 ">
        <FormGrp>
          <InputComponent type={pw} placeholder="Enter email" />
          <FormLabel>{pw}</FormLabel>
        </FormGrp>
        <div className="flex justify-between mb-3">
          <motion.button
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-current rounded "
          >
            <a href="#">Forgot {pw}</a>
          </motion.button>
          <SubmitButton />
        </div>
      </form>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="flex justify-start h-48"
      >
        <button className="w-full h-10 px-3 py-1 mx-3 transition-all bg-gray-200 border-t border-b border-r border-white dark:border-gray-700 opacity-60 hover:opacity-100 dark:bg-gray-900 font-secondary">
          <a href="#">Create new user</a>
        </button>
      </motion.div>
    </>
  );
};

export default FormInput;
