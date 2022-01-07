import React, {useRef} from 'react'
import {useUserContext} from '../../context/userContext'
import InputCompField from '../InputCompField';
import ButtonSubmit from '../ButtonSubmit';
import FormHeader from './FormHeader';

const SignupComponent = () => {
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
        <>
        <FormHeader text={'Sign up'}/>
          <InputCompField type="email" placeholder="email" ref={emailRef} />
          <InputCompField type="name" placeholder="name" ref={nameRef} />
          <InputCompField type="password" placeholder="password" ref={psdRef} />
          <ButtonSubmit textVal={'Sign up'}/>
      </>
    )
}

export default SignupComponent
