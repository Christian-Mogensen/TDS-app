import Link from "next/link";
import { useRef } from "react";
import { useUserContext } from "../../../context/userContext";
import ButtonSubmit from "../../Icons/ButtonSubmit";

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
            <div className="flex items-center justify-center w-12 h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
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

      <h2 className="mb-3 text-3xl text-center text-current capitalize">
        login
      </h2>
      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
        <input
          className="p-3 bg-transparent border-b-2 border-current outline-none dark:text-white focus:border-b-4"
          type="email"
          placeholder="email"
          ref={emailRef}
        />

        <input
          className="p-3 bg-transparent border-b-2 border-current outline-none dark:text-white focus:border-b-4"
          type="password"
          placeholder="password"
          ref={psdRef}
        />
        <ButtonSubmit>Sign in</ButtonSubmit>
        {/* <button className="self-end w-full py-3 text-white bg-green-500 rounded shadow-sm" type="submit" value='Sign in'>Sign In</button> */}
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
