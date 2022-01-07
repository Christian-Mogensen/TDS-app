import React, { useRef } from "react";

import { motion } from "framer-motion";
import { useUserContext } from "../../context/userContext";
import ButtonSubmit from "../ButtonSubmit";
import InputCompField from "../InputCompField";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import FormHeader from "./FormHeader";
import FormBtn from "./FormBtn";
import AtnBtn from "./AtnBtn";

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
      <FormHeader text={'Sign in'} />
      <InputCompField type="email" placeholder="email" ref={emailRef} />
      <InputCompField type="password" placeholder="password" ref={psdRef} />
      <ButtonSubmit textVal={'Sign in'}/>
      <AtnBtn onClick={forgotPasswordHandler} altText={'Forgot Password'} />

      <p className="text-center">or</p>
      <div className="flex gap-3">
        <FormBtn onClick={signInWithGoogle} btnIcon={<GoogleIcon />} />
        <FormBtn onClick={signInWithGithub} btnIcon={<GitHubIcon />} />
      </div>
    </>
  );
};

export default SigninComponent;
