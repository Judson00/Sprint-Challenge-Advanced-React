import React from 'react';

import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, toggleMode] = useDarkMode('dark', false);
  

  return (
    <nav className="navbar">
      <h1>Women's World Cup 2019</h1>
      <button 
        className="dark-mode__toggle" onClick={toggleMode}
        className={darkMode ? 'toggle toggled' : 'toggle'}
      >
        Dark Mode
      </button>
    </nav>
  );
};

export default Navbar;