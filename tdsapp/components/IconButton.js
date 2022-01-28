import {motion} from 'framer-motion'
const IconButton = ({children, ...props}) => {
    return (
<motion.button variants={props.variants}{...props} className="h-8 w-8 dark:bg-gray-200 dark:text-gray-700 flex justify-center items-center rounded-full hover:scale-105 transition-all text-white bg-gray-900 ">
    {children}
</motion.button>
    )
}

export default IconButton
