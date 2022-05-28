import { useState } from "react";
import FormXtraBtn from "./FormRelated/FormXtraBtn";
import { useUserContext } from "../../context/userContext";
import Signin from "../FormComp/Signin/Signin";
import Signup from "../FormComp/Signup/Signup";
import Btn from "../PageElement/Btn";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="">
      {!index ? <Signin /> : <Signup />}
      <div className="px-3">
        <FormXtraBtn onClick={toggleIndex}>
          {!index ? "New user? click here " : "Already have an account"}
        </FormXtraBtn>
        <div className="flex flex-col gap-3">
          {/* <h3 className="relative my-3 overflow-hidden text-center">or</h3>
          <Btn onClick={signInWithGoogle} textVal="Sign in with Google" />
          <Btn onClick={signInWithGithub} textVal="Sign in with Github" /> */}
        </div>
      </div>
    </div>
  );
};

export default Auth;
