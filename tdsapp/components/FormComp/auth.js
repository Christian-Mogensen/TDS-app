import { useState } from "react";
import FormXtraBtn from "./FormRelated/FormXtraBtn";
import { useUserContext } from "../../context/userContext";
import Signin from "../FormComp/Signin/Signin";
import Signup from "../FormComp/Signup/Signup";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  const { signInWithGoogle, signInWithGithub } = useUserContext();
  return (
    <div className="bg-red-400">
      {!index ? <Signin /> : <Signup />}
      <div className="px-3">
        <FormXtraBtn onClick={toggleIndex}>
          {!index ? "New user? click here " : "Already have an account"}
        </FormXtraBtn>
        <div className="flex flex-col gap-3">
          <h3 className="relative my-3 overflow-hidden text-center grafikselem before:bg-gray-900 after:bg-gray-900 dark:before:bg-gray-200 dark:after:bg-gray-200">
            or
          </h3>
          <button
            onClick={signInWithGoogle}
            className="self-end w-full py-3 text-white bg-green-500 rounded shadow-sm"
            type="submit"
          >
            {" "}
            Sign in with Google
          </button>
          <button
            onClick={signInWithGithub}
            className="self-end w-full py-3 text-white bg-green-500 rounded shadow-sm"
            type="submit"
          >
            {" "}
            Sign in with Github
          </button>
          <button
            onClick={signInWithGithub}
            className="self-end w-full py-3 text-white bg-green-500 rounded shadow-sm"
            type="submit"
          >
            {" "}
            Sign in with Phone
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
