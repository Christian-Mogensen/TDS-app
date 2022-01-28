import React, { useRef } from "react";

import { motion } from "framer-motion";
import { useUserContext } from "../../context/userContext";
import ButtonSubmit from "../ButtonSubmit";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import FormHeader from "./FormHeader";
import FormBtn from "./FormBtn";
import AtnBtn from "./AtnBtn";
import FormInputGrp from "./FormInputGrp";

const SigninComponent = ({ isOpen }) => {
  const emailRef = useRef();
  const psdRef = useRef();

  const { signInUser, forgotPassword } = useUserContext();

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email) forgotPassword(email).then(() => (emailRef.current.value = ""));
  };
  const { signInWithGoogle, signInWithGithub } = useUserContext();

  return (
    <>
      <FormHeader text={"Sign in"} />
      <FormInputGrp type="email" placeholder="email" ref={emailRef} />
      <FormInputGrp type="password" placeholder="password" ref={psdRef} />

      <ButtonSubmit textVal={"Sign in"} />
      <AtnBtn onClick={forgotPasswordHandler} altText={"Forgot Password"} />

      <p className="text-center">or</p>
      <div className="flex gap-3">
        <FormBtn onClick={signInWithGoogle} btnIcon={<GoogleIcon />} />
        <FormBtn onClick={signInWithGithub} btnIcon={<GitHubIcon />} />
      </div>
    </>
  );
};

export default SigninComponent;
