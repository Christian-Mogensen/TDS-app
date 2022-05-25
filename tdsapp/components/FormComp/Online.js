import React from "react";
import { useUserContext } from "../../context/userContext";

const Online = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <>
      <h1 className="py-3 mx-3 text-5xl capitalize font-secondary">
        <span className=""> welcome</span> {user.displayName}
      </h1>
      <button onClick={logoutUser}>Logout</button>
    </>
  );
};

export default Online;
