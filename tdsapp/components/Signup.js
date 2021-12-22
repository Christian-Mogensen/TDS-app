import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import ButtonSubmit from "./ButtonSubmit";
import InputCompField from "./InputCompField";
import Inputfield from "./Inputfield";

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();

  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && name && password) registerUser(email, name, password);
  };

  return (
    <div className="mx-3 rounded ">
      
      <h2 className="capitalize text-3xl mb-3 text-center text-current">
        New user
      </h2>
      <form className="flex flex-col gap-3 py-3" onSubmit={onSubmit}>
        <InputCompField type="email" placeholder="email" ref={emailRef} />
        <InputCompField type="name" placeholder="name" ref={nameRef} />
        <InputCompField type="password" placeholder="password" ref={psdRef} />
        <ButtonSubmit>Sign up</ButtonSubmit>
      </form>
    </div>
  );
};

export default Signup;
