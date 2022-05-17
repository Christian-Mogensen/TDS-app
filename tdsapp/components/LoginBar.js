import Link from "next/link";
import React from "react";
import { useUserContext } from "../context/userContext";
import IconButton from "./IconButton";
const LoginBar = ({ status, state }) => {
  const { user, logoutUser } = useUserContext();
  // console.log(user);
  return (
    <aside className="relative z-50 flex items-center justify-between h-12 capitalize bg-gray-300 border-t  dark:text-white dark:bg-gray-600 dark:border-gray-700 font-secondary">
      <div className="flex mx-3">
        <div className="flex items-center justify-center w-6 h-6 mr-2 overflow-hidden border-2 border-current rounded-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="relative w-6 h-6 top-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>{" "}
        {user ? `${user.displayName}` : "Guest"}
      </div>
      <div className="flex items-center gap-2 mr-3">
        <p className="italic">{user ? "log out" : "log in"}</p>
        {user ? (
          <IconButton onClick={logoutUser} aria-label="logout button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </IconButton>
        ) : (
          <Link href="/signuptutorial">
            <a>
              <IconButton aria-label="signin button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </IconButton>
            </a>
          </Link>
        )}
      </div>
    </aside>
  );
};

export default LoginBar;
