import { useRef } from "react";
import { useUserContext } from "../../../context/userContext";
import ButtonSubmit from "../../Icons/ButtonSubmit";
import InputCompField from "../InputRelated/InputCompField";
import Inputfield from "../InputRelated/Inputfield";

const Signup = () => {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const psdRef = useRef(null);

  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && name && password) {
      registerUser(email, name, password);
    }
  };

  return (
    <div className="w-full rounded ">
      <h2 className="mb-3 text-3xl text-current capitalize">New user</h2>
      <form className="flex flex-col gap-3 py-3" onSubmit={onSubmit}>
        <InputCompField type="email" placeholder="email" ref={emailRef} />
        <InputCompField type="name" placeholder="name" ref={nameRef} />
        <InputCompField type="password" placeholder="password" ref={psdRef} />
        <ButtonSubmit textVal="Sign up" />
      </form>
    </div>
  );
};

export default Signup;
