import {motion}from 'framer-motion'
import {useState}from 'react'

const InputComponent = ({type, value}) => {
  const [state , setState] = useState({
    email : "",
    password : ""
})
const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
}
    return (
        <>
        <motion.input
value={state.email}
onChange={handleChange}
          type={type}
          className="relative h-14 z-10 dark:border-gray-700 p-2 outline-none border-b transition-all box-border dark:text-current bg-transparent inputtrigger"
          autoComplete="off"
          />
        <div className="inputbar"></div>
          </>
    )
}

export default InputComponent
