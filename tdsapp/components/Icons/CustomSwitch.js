import React from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { ThemeContext } from "../../context/ThemeToggle";

const CustomSwitch = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="grid w-8 h-8 text-white transition duration-500 ease-in-out bg-gray-800 rounded-full dark:bg-gray-200 ">
      {theme === "dark" ? (
        <HiSun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-xl text-white cursor-pointer dark:text-gray-800 place-self-center"
        />
      ) : (
        <HiMoon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-xl text-white cursor-pointer dark:text-gray-800 place-self-center"
        />
      )}
    </div>
  );
};

export default CustomSwitch;
