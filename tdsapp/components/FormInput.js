import FormGrp from "./FormGrp";
import FormLabel from "./FormLabel";
import InputComponent from "./InputComponent";
import {motion}from 'framer-motion'
import SubmitButton from "./SubmitButton";

const FormInput = ({ pw }) => {

  return (
    <>
    <motion.div
    initial={{opacity:0, y:-150}}
    animate={{opacity:1, y:0}}
    transition={{delay:0.2, duration:0.3}}
    className="h-48 flex flex-col justify-end"
    >

      <h2 className="pb-3 font-secondary font-bold text-4xl text-center">
        Sign In
      </h2>
      <div className="w-full flex justify-center">
        <div className="flex w-24 justify-between  relative">
          <div className="w-4 h-4 z-10 bg-green-400 border-2 border-green-400 rounded-full"></div>
          <div className="w-4 h-4 z-10 border-2 bg-green-400 border-green-400 rounded-full"></div>
          <div className="w-4 h-4 z-10 border-2 bg-gray-100 dark:bg-gray-900 border-green-400 rounded-full"></div>
          <div className="w-full h-1 bg-green-400 absolute top-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </motion.div>

      <form
        
        className="flex flex-col px-3 my-3 text-white bg-gray-600 dark:bg-black  border-t border-b overflow-hidden backdrop-blur-md  dark:border-gray-700  font-secondary font-bold shadow-md shadow-white h-36 justify-between "
      >

        <FormGrp>
          <InputComponent  type={pw} placeholder="Enter email" />
          <FormLabel>{pw}</FormLabel>
        </FormGrp>
        <div 
        className="flex justify-between mb-3">
          <motion.button
                  initial={{opacity:0, x:-40}}
        animate={{opacity:1, x:0}}
                transition={{delay:0.5}}
          className=" rounded text-current">
            <a href="#">Forgot {pw}</a>
          </motion.button>
<SubmitButton />
        </div>
      </form>
      <motion.div 
      initial={{opacity:0, y:100}}
      animate={{opacity:1, y:0}}
      transition={{delay:0.2, duration:0.3}}
      className="flex h-48 justify-start">
        <button className="py-1 px-3 w-full h-10 mx-3 border-b border-r border-t border-white dark:border-gray-700 bg-gray-200 opacity-60 hover:opacity-100 dark:bg-gray-900 font-secondary transition-all">
          <a href="#">Create new user</a>
        </button>
      </motion.div>
    </>
  );
};

export default FormInput;
