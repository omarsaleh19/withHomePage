import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="bg-transparent border border-yellow-500 text-yellow-500 py-2 px-4 rounded hover:bg-yellow-500 hover:text-white"
    >
      <span role="img" aria-label="sun">
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
    </button>
  );
};

export default ThemeToggleButton;
