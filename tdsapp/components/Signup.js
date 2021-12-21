import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import Inputfield from "./Inputfield";

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();

const {registerUser} = useUserContext()


  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if(email && name && password) registerUser(email, name, password)
  };



  return (
   <div className="mx-3 rounded ">
      <h2 className="capitalize text-3xl mb-3 text-center text-current">New user</h2>
      <form className="flex flex-col gap-3 py-3" onSubmit={onSubmit}>
      <input className="p-3 dark:text-white focus:border-b-4 border-current outline-none bg-transparent border-b-2" type="email" placeholder="email" ref={emailRef} />
      <input className="p-3 dark:text-white focus:border-b-4 border-current outline-none bg-transparent border-b-2" type="name" placeholder="name" ref={nameRef} />
      <input className="p-3 dark:text-white focus:border-b-4 border-current outline-none bg-transparent border-b-2" type="password" placeholder="password" ref={psdRef} />

        {/* <Inputfield type="email" placeholder="email" ref={emailRef}/> */}
        {/* <Inputfield type="name" placeholder="name" ref={nameRef}/> */}
        {/* <Inputfield type="password" placeholder="password" ref={psdRef}/> */}
        <button className="bg-green-500 py-3 w-28 rounded self-end text-white shadow-sm" type="submit">Register</button>

      </form>
    </div>
  );
};

export default Signup
