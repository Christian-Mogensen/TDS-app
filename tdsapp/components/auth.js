import { useState } from "react"
import Signin from "./Signin"
import Signup from "./Signup"


const Auth = () => {
const [index, setIndex] = useState(false)
const toggleIndex = () => {
    setIndex((prevState) =>!prevState)
}
    return (
        <div>
            {!index?<Signin />:<Signup />}
            <p className="py-2 px-3 mx-3  text-sm border-b border-r border-t border-white dark:border-gray-700 bg-gray-200 opacity-60 hover:opacity-100 dark:bg-gray-900 font-secondary transition-all" onClick={toggleIndex}> {!index ? "New user? click here ": "Already have an account"}</p>
            
        </div>
    )
}

export default Auth
