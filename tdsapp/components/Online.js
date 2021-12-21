import React from 'react'
import { useUserContext } from '../context/userContext'

const Online = () => {
    const {user, logoutUser} = useUserContext()
    return (
        <>
        <h1 className="text-5xl capitalize mx-3 py-3 font-secondary">
        <span className=""> welcome</span> {user.displayName}
       </h1>
       <button onClick={logoutUser}>Logout</button>
      
      
       </>
    )
}

export default Online
