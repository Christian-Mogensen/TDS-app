import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import Inputfield from "./Inputfield";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  
  const {signInUser, forgotPassword} = useUserContext()
  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
  if(email && password) signInUser(email, password)
  };



  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if(email) forgotPassword(email).then(()=>(emailRef.current.value = ""))
  };

  return (
    <div className="mx-3 rounded ">
      <h2 className="capitalize text-3xl mb-3 text-center text-current">login</h2>
      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
      <input className="p-3 dark:text-white focus:border-b-4 border-current outline-none bg-transparent border-b-2" type="email" placeholder="email" ref={emailRef} />
      <input className="p-3 dark:text-white focus:border-b-4 border-current outline-none bg-transparent border-b-2" type="password" placeholder="password" ref={psdRef} />
        <button className="bg-green-500 py-3 w-28 rounded self-end text-white shadow-sm" type="submit">Sign In</button>
        <p className="py-2 px-3 w-full text-sm border-b border-r border-t border-white dark:border-gray-700 bg-gray-200 opacity-60 hover:opacity-100 dark:bg-gray-900 font-secondary transition-all" onClick={forgotPasswordHandler}>Forgot Password</p>
      </form>
    </div>
  );
};

export default Signin;
