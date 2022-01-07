import { useState } from "react";
import FormXtraBtn from "./FormXtraBtn";
import { useUserContext } from "../context/userContext";
import Signin from "./Signin";
import Signup from "./Signup";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  const { signInWithGoogle, signInWithGithub } = useUserContext();
  return (
    <div>
      {!index ? <Signin /> : <Signup />}
      <div className="px-3">
        <FormXtraBtn onClick={toggleIndex}>
          {!index ? "New user? click here " : "Already have an account"}
        </FormXtraBtn>
        <div className="flex flex-col gap-3">
          <h3 className="text-center my-3 relative grafikselem overflow-hidden before:bg-gray-900 after:bg-gray-900 dark:before:bg-gray-200 dark:after:bg-gray-200">
            or
          </h3>
          <button onClick={signInWithGoogle} className="bg-green-500 w-full py-3 rounded self-end text-white shadow-sm" type="submit"> Sign in with Google</button>
          <button onClick={signInWithGithub} className="bg-green-500 w-full py-3 rounded self-end text-white shadow-sm" type="submit"> Sign in with Github</button>
          <button onClick={signInWithGithub} className="bg-green-500 w-full py-3 rounded self-end text-white shadow-sm" type="submit"> Sign in with Phone</button>

         
        </div>
      </div>
    </div>
  );
};

export default Auth;
