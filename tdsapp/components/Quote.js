const Quote = ({quote, refer}) => {
  return (
    <aside className='py-5 px-3'>
      <h4 className="special-quote dark:bg-gray-900 dark:bg-[var(--gradient-bg-left)] p-5 text-lg  border-l-[5px] dark:border-gray-700">
        {quote.map((paragraf, index) => (
          <p className="italic text-xl" key={index}>
            {paragraf}
          </p>
        ))}
      </h4>
      <h5 className="text-right my-3 font-secondary">{refer}</h5>
    </aside>
  );
};

export default Quote;
