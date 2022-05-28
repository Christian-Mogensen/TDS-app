import React from "react";

const AtnBtn = ({ onClick, altText }) => {
  return (
    <p
      className="w-full py-1 text-sm transition-all bg-gray-200 border-t border-b border-r border-white rounded cursor-pointer dark:border-gray-700 opacity-60 hover:opacity-100 dark:bg-gray-900 font-secondary"
      onClick={onClick}
    >
      {altText}
    </p>
  );
};

export default AtnBtn;
