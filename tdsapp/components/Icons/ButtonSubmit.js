const ButtonSubmit = ({ textVal, onClick }) => (
  <button
    onClick={onClick}
    className="self-end w-full py-3 text-white bg-gray-900 rounded shadow-sm dark:text-gray-700 dark:bg-gray-100"
    type="submit"
  >
    {textVal}
  </button>
);

export default ButtonSubmit;
