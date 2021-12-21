import React from 'react'
import { useUserContext } from '../context/userContext'
import IconButton from './IconButton'
const LoginBar = ({status, state}) => {
  const {user, logoutUser} = useUserContext()
  console.log(user);
    return (
<aside className=" bg-gray-300 dark:text-white dark:bg-gray-600 border-t  dark:border-gray-700 flex items-center justify-between font-secondary capitalize h-12">
        <div className="mx-3 flex">
          <div className=" w-6 h-6 rounded-full flex justify-center items-center border-2 border-current overflow-hidden mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 top-1 relative"
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
          {user? `${user.displayName}`:"Guest"}
        </div>
        <div className="flex items-center gap-2 mr-3">
          <p className="italic">{user? "log out":"log in"}</p>
          {user?
          <div
            onClick={logoutUser}
          >

          <IconButton
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
</svg>
          </IconButton>
            </div>
          :
          <IconButton
          
          >
          <svg
          
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
          </IconButton>}
        </div>

      </aside>
    )
}

export default LoginBar
