import React from 'react'
import {motion} from 'framer-motion'

const FormHeader = ({text, isOpen}) => {
    const headerV = {
        open: { x: 0,
        },
        closed: { x: -100,
    },
      }
    return (
        <motion.h2
        isOpen={isOpen}
          initial={{ x: 100 }}
          animate={isOpen ? "open" : "closed"}
          transition={isOpen ? "open" : "closed"}
          variants={headerV}
          className="text-3xl text-bold text-center"
        >
          {text}
        </motion.h2>
    )
}

export default FormHeader
