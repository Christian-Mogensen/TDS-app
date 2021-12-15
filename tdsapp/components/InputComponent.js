const InputComponent = ({type, placeholder}) => {
    return (
        
        <input
          type={type}
          className="relative h-14 border-gray-400 p-2 outline-none border-b focus:border-b-4 focus:border-green-400 transition-all box-border dark:text-current bg-transparent inputtrigger"
          autoComplete="off"
        />
    )
}

export default InputComponent
