// src/components/Checking.jsx
import React from 'react';
import ThemeToggle from './ThemeToggle';

const Checking = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-zinc-900 dark:text-white transition-all duration-500">
      <div className="bg-white dark:bg-zinc-800 text-black dark:text-white p-6 rounded-xl shadow-xl transition-all duration-500 max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold dark:text-cyan-400">Dark Mode Ready</h2>
          <ThemeToggle />
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          This content adapts to theme. Click the sun/moon icon to toggle.
        </p>
      </div>
    </div>
  );
};

export default Checking;
