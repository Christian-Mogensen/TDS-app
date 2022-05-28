import React from "react";

const Btn = ({ onClick, textVal, children }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-full gap-2 py-3 text-white bg-gray-900 rounded shadow-sm dark:text-gray-700 dark:bg-gray-100"
      type="submit"
    >
      {" "}
      {textVal || children}
    </button>
  );
};

export default Btn;
