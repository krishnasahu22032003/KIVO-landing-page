import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log("🎯 Current theme in component:", theme); // Debug log

  return (
    <button
      onClick={() => {
        console.log("🖱️ Theme toggle button clicked");
        toggleTheme();
      }}
      className="p-2 ml-3 rounded-full transition-all duration-300 bg-gray-800 dark:bg-white text-white dark:text-black hover:scale-110 shadow-lg"
    >
      {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;

