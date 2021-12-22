import React from "react";

const InputCompField = ({ type, placeholder, ref }) => (
    <input
        className="p-3 dark:text-white focus:border-b-4 border-current outline-none bg-transparent border-b-2 placeholder-shown:capitalize dark:placeholder-white placeholder-current"
        type={type}
        placeholder={placeholder}
        ref={ref} />
);

export default InputCompField;
