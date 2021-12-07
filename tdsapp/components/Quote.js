const Quote = ({quote, refer}) => {
  return (
    <>
      <h4 className="special-quote dark:bg-gray-900 dark:bg-[var(--gradient-bg-left)] p-5 text-lg rounded-2xl">
        {quote.map((paragraf, index) => (
          <p className="italic text-xl" key={index}>
            {paragraf.para}
          </p>
        ))}
      </h4>
      <h5 className="text-right my-3">{refer}</h5>
    </>
  );
};

export default Quote;
