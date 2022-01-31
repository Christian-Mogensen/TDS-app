import { motion } from "framer-motion";
import { useRouter } from "next/router";
const Main = ({ children, href }) => {
  const router = useRouter()
  
  return (
    <motion.main
      initial={{ opacity:0,x: -400 }}
      animate={{ opacity:1,x: 0 }}
      exit={{x:400}}
      transition={{ type: "spring", mass: 0.1 }}
  //     drag
  //     dragDirectionLock
  // onDirectionLock={axis => console.log(axis)}
  // dragConstraints={{left:0,right:0 }}
  // onDragEnd={
  //   (e, info) => {
  //     e.preventDefault()
  //     if(info.point.x > 10){
  //       router.push(href+1)
  //     }
  //     if(info.point.x < 10){
  //       router.push(`/book/[pageSlug]`-1)
  //     }
  //   }
    
  // }
      className="overflow-hidden flex flex-col justify-center min-h-[calc(100vh-166px)]"
    >
      {children}
    </motion.main>
  );
};

export default Main;
