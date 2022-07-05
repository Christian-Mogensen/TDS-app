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
    <div className="w-full">
      {!index ? <Signin /> : <Signup />}
      <div className="">
        <FormXtraBtn onClick={toggleIndex}>
          {!index ? "New user? click here " : "Already have an account"}
        </FormXtraBtn>
      </div>
    </div>
  );
};

export default Auth;
