import { motion } from "framer-motion";

const Quote = ({ quote, refer }) => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="py-5 px-3"
    >
      <h4 className="special-quote dark:bg-gray-900 dark:bg-[var(--gradient-bg-left)] p-5 text-lg  border-l-[5px] dark:border-gray-700">
        {quote.map((paragraf, index) => (
          <p className="italic text-xl" key={index}>
            {paragraf}
          </p>
        ))}
      </h4>
      <h5 className="text-right my-3 font-secondary">{refer}</h5>
    </motion.aside>
  );
};

export default Quote;
