import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

import SigninComponent from "../Signin/SigninComponent";
import SignupComponent from "./SignupComponent";
import FormXtraBtn from "./FormXtraBtn";
import AtnBtn from "../AtnBtn";

const Form = ({ isOpen }) => {
  const emailRef = useRef();
  const psdRef = useRef();
  const [formState, setformState] = useState(false);
  const toggleFormState = () => {
    setformState((prevState) => !prevState);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };
  const formVariant = {
    open: {
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
    closed: {
      y: "0",
      transition: {
        delay: 0,
      },
    },
  };

  return (
    <motion.form
      variants={formVariant}
      initial={{ y: "0" }}
      animate={isOpen ? "open" : "closed"}
      className="overflow-hidden relative flex flex-col gap-3 bg-gray-100 shadow-md p-3 rounded min-w-[320px]"
      onSubmit={onSubmit}
    >
      {!formState ? <SigninComponent /> : <SignupComponent />}
      <AtnBtn
        onClick={toggleFormState}
        altText={
          !formState ? "New user? click here " : "Already have an account"
        }
      />
    </motion.form>
  );
};

export default Form;
