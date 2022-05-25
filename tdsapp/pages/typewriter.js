import React from "react";
import { motion } from "framer-motion";
const typewriter = () => {
  const text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae facere tenetur consectetur, labore doloribus non quae.";
  const textArr = [...text];
  console.log(textArr);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <div className="grid w-screen h-screen bg-red-500 place-content-center">
      <motion.h2 variants={container} initial="hidden" animate="show">
        {textArr.map((l, i) => (
          <motion.span variants={item} key={i}>
            {" "}
            {l}{" "}
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
};

export default typewriter;
