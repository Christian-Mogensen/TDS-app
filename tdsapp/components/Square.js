import {motion} from 'framer-motion'

const Square = ({children, month, left, right}) => {
    return ( 
        <motion.div
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 0.3 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="absolute h-[207px] w-[207px] rounded-lg bg-gray-400"
          left={right}
        >
          <div className="h-full font-primary   transition-all image-text flex flex-col text-gray-700 dark:text-gray-700">
            <h2 className=" text-[5rem] leading-none w-full text-center">
              {children}
            </h2>
            <p className=" text-[1.5rem]   w-full text-center ">{month}</p>
          </div>
        </motion.div>
     );
}
 
export default Square;