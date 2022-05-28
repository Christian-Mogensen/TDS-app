import Link from "next/link";
import { useRef } from "react";
import { useUserContext } from "../../../context/userContext";
import ButtonSubmit from "../../Icons/ButtonSubmit";
import InputCompField from "../InputRelated/InputCompField";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();

  const { signInUser, forgotPassword } = useUserContext();
  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email) forgotPassword(email).then(() => (emailRef.current.value = ""));
  };

  return (
    <div className="mx-3 rounded ">
      <h2 className="mb-3 text-3xl text-current capitalize">login</h2>
      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
        <InputCompField type="email" placeholder="email" ref={emailRef} />

        <InputCompField type="password" placeholder="password" ref={psdRef} />
        <ButtonSubmit textVal="Signin" />

        <p
          className="w-full px-3 py-2 text-sm transition-all bg-gray-200 border-t border-b border-r border-white dark:border-gray-700 opacity-60 hover:opacity-100 dark:bg-gray-900 font-secondary"
          onClick={forgotPasswordHandler}
        >
          Forgot Password
        </p>
      </form>
    </div>
  );
};

export default Signin;
