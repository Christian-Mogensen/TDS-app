const InputComponent = ({type, placeholder}) => {
    return (
        
        <input
          type={type}
          className="p-2 rounded outline-none border-b-2 border-b-transparent focus:border-b-green-400 dark:bg-white dark:text-gray-700 input form-control"
          autoComplete="off"
        />
    )
}

export default InputComponent
