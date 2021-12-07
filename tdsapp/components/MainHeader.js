import {motion}from 'framer-motion'
const MainHeader = ({title, date}) => {
  const arrayTitle = []
  arrayTitle.push(...title)

  const textparent = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
        delay: 0.9,
      },
    },
    hidden: { opacity: 0, x: -20 },
  };
  const textitem = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        when: "afterChildren",
      },
    },
    hidden: { opacity: 0, x: -50 },
  };

    return (
        <header className="flex flex-col-reverse gap-3 pb-10 px-3 pt-5 border-b dark:border-gray-700 font-secondary font-bold">
        <motion.h2 variants={textparent}
            initial="hidden"
            animate="visible" className="text-5xl">{arrayTitle.map((titleItem, index) => (
          <motion.span variants={textitem} key={index}>{titleItem}</motion.span>
        ))}</motion.h2>
        <motion.h3 initial={{opacity:0, y:-60}} animate={{opacity:1, y:0}} transition={{delay: 0.5}} className="text-3xl text-left leading">{date}</motion.h3>
      </header>
    )
}

export default MainHeader
