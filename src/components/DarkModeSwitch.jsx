'use client';

import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === 'system' ? systemTheme : theme;
  useEffect(() => setMounted(true), []);
  return (
    <div
      className="relative w-14 md:w-16 h-7 flex items-center dark:bg-gray-700 bg-[#D5DEFF] cursor-pointer rounded-full p-1"
      onClick={() => {
        console.log(theme);
        if (theme === "light") setTheme("dark");
        else setTheme("light");
      }}
    >
      <FaMoon className="text-white" size={16} />
      <div
        className="absolute bg-white w-6 h-5
                 rounded-full shadow-md transform transition-transform 
                 duration-300 dark:left-1 right-1"
      ></div>
      <BsSunFill className="ml-auto text-yellow-400 m-1" size={16} />
    </div>
  );
}
