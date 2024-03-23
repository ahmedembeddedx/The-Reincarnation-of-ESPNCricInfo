import React, { useState } from 'react';
import '../light-mode.css';
import '../index.css';

export default function Navigation({ onNavigate, currentPage }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    const linkElement = document.getElementById('stylesheet');
    if (!isDarkMode) {
      linkElement.href = 'index.css';
    } else {
      linkElement.href = 'light-mode.css';
    }
  };

  return (
    <div className={`general_align ${isDarkMode ? 'dark-mode' : ''}`}>
      <button onClick={() => onNavigate('updates')} className={`b1 ${currentPage === 'updates' ? 'b3 active' : ''}`} id="Updates">Updates</button>
      <button onClick={() => onNavigate('players')} className={`b1 ${currentPage === 'players' ? 'b3 active' : ''}`} id="Players">Players</button>
      <button onClick={() => onNavigate('teams')} className={`b1 ${currentPage === 'teams' ? 'b3 active' : ''}`} id="Teams">Teams</button>
      <button onClick={() => onNavigate('matches')} className={`b1 ${currentPage === 'matches' ? 'b3 active' : ''}`} id="Matches">Matches</button>
      <button onClick={() => onNavigate('series')} className={`b1 ${currentPage === 'series' ? 'b3 active' : ''}`} id="Series">Series</button>
      <button onClick={() => onNavigate('admin')} className={`b1 ${currentPage === 'admin' ? 'b3 active' : ''}`} id="Admin">Admin</button>
      {/* Button for toggling the current mode */}
      <button onClick={toggleMode} className='b1' id="ToggleMode">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>        
    </div>
  );
}
