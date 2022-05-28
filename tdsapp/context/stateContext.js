import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

const StateContext = createContext({});

export const useStateContext = () => useContext(StateContext);

export const StateContextProvider = ({ children }) => {
  const [toggled, setToggled] = useState(false);
  const [toggledForm, setToggledForm] = useState(false);

  const contextValue = {
    toggled,
    toggledForm,
    setToggled,
    setToggledForm,
  };
  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};
