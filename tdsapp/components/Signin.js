import Link from "next/link";
import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import ButtonSubmit from "./ButtonSubmit";
import Inputfield from "./Inputfield";

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
      <Link href="/">
        <a>
          <div className="flex gap-1 flex-row-reverse py-3 text-[0.66rem] font-secondary items-center">
          <div className="flex justify-center items-center w-12 h-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              />
            </svg>
          </div>
          back to frontpage
          </div>
        </a>
      </Link>

      <h2 className="capitalize text-3xl mb-3 text-center text-current">
        login
      </h2>
      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
        <input
          className="p-3 dark:text-white focus:border-b-4 border-current outline-none bg-transparent border-b-2"
          type="email"
          placeholder="email"
          ref={emailRef}
        />

        <input
          className="p-3 dark:text-white focus:border-b-4 border-current outline-none bg-transparent border-b-2"
          type="password"
          placeholder="password"
          ref={psdRef}
        />
        <ButtonSubmit>Sign in</ButtonSubmit>
        {/* <button className="bg-green-500 w-full py-3 rounded self-end text-white shadow-sm" type="submit" value='Sign in'>Sign In</button> */}
        <p
          className="py-2 px-3 w-full text-sm border-b border-r border-t border-white dark:border-gray-700 bg-gray-200 opacity-60 hover:opacity-100 dark:bg-gray-900 font-secondary transition-all"
          onClick={forgotPasswordHandler}
        >
          Forgot Password
        </p>
      </form>
    </div>
  );
};

export default Signin;
