import {motion} from 'framer-motion'
const Synopsis = ({para}) => {
    return (
        <div className="leading-loose px-3 pb-5">
        {para.map((paragraf, index) => (
          <motion.p
          initial={{opacity:0,x:-200}}
          whileInView={{opacity:1,x:0}}
          viewport={{ once: true }}
          transition={{duration:0.3}}
            className="first-of-type:first-letter:text-4xl first-of-type:first-letter:font-bold first-of-type:first-letter:float-left first-of-type:first-letter:mr-2 pb-5"
            key={index}
          >
            {paragraf}
          </motion.p>
        ))}
      </div>
    )
}

export default Synopsis
