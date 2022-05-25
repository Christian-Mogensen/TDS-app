import {motion} from 'framer-motion'
const FormGrp = ({children}) => {
    return (
        <motion.div 
        initial={{opacity:0, x:-400}}
        animate={{opacity:1, x:0}}
        transition={{staggerDelay:0.3, duration:0.2}}
        className="flex flex-col relative py-3 overflow-hidden">
            {children}
        </motion.div>
    )
}

export default FormGrp
