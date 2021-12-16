import {motion} from 'framer-motion'
const FormGrp = ({children}) => {
    return (
        <motion.div 
        initial={{opacity:0, y:-400}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.3, duration:0.2}}
        className="flex flex-col mt-3 py-3 relative  overflow-hidden">
            {children}
        </motion.div>
    )
}

export default FormGrp
