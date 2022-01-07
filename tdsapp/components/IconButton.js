const IconButton = ({children, ...props}) => {
    return (
<button {...props} className="h-8 w-8 dark:bg-gray-200 dark:text-gray-700 flex justify-center items-center rounded-full hover:scale-105 transition-all text-white bg-gray-900 ">
    {children}
</button>
    )
}

export default IconButton
