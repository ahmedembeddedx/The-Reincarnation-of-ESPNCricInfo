import React, { useState } from 'react';
import '../index.css'; // Import your default CSS file
// import '../light-mode.css'; // Import your day mode CSS file

export default function Navigation({ onNavigate, currentPage }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className={isDarkMode ? 'dark-mode' : 'day-mode'}>
      <div className='general_align'>
        <button onClick={() => onNavigate('updates')} className={`b1 ${currentPage === 'updates' ? 'b3 active' : ''}`} id="Updates">Updates</button>
        <button onClick={() => onNavigate('players')} className={`b1 ${currentPage === 'players' ? 'b3 active' : ''}`} id="Players">Players</button>
        <button onClick={() => onNavigate('teams')} className={`b1 ${currentPage === 'teams' ? 'b3 active' : ''}`} id="Teams">Teams</button>
        <button onClick={() => onNavigate('matches')} className={`b1 ${currentPage === 'matches' ? 'b3 active' : ''}`} id="Matches">Matches</button>
        <button onClick={() => onNavigate('series')} className={`b1 ${currentPage === 'series' ? 'b3 active' : ''}`} id="Series">Series</button>
        <button onClick={() => onNavigate('admin')} className={`b1 ${currentPage === 'admin' ? 'b3 active' : ''}`} id="Admin">Admin</button>
        <button onClick={toggleTheme} className="b1" id="SwitchTheme">Theme</button>
      </div>
    </nav>
  );
}
