import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
>>>>>>> 21c26852dd938a0df7fbfb405536f807de7d6534


import "../dark-mode.css"

<<<<<<< HEAD
=======
import '../index.css'; // Import your default CSS file
import '../light-mode.css'; // Import your day mode CSS file
>>>>>>> Stashed changes
=======
>>>>>>> 21c26852dd938a0df7fbfb405536f807de7d6534

export default function Navigation({ onNavigate, currentPage }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const setDarkMode = () =>{
    document.querySelector("body").setAttribute("data-theme", "dark")
  };
  const setLightMode = () =>{
    document.querySelector("body").setAttribute("data-theme", "light")
  };
  const toggleMode = (e) => {
    // Toggle the state of isDarkMode
    if (e.target.checked){
      setDarkMode();
      e.target.checked = false;
    } 
    else{
      setLightMode();
      e.target.checked = true;
    } 
    setIsDarkMode(prevMode => !prevMode);
    
  };
  return (
    <div className={`general_align ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <button onClick={() => onNavigate('updates')} className='b1' id="Updates">Updates</button>
      <button onClick={() => onNavigate('players')} className='b1' id="Players">Players</button>
      <button onClick={() => onNavigate('teams')} className='b1' id="Teams">Teams</button>
      <button onClick={() => onNavigate('matches')} className='b1' id="Matches">Matches</button>
      <button onClick={() => onNavigate('series')}className='b1' id="Series">Series</button>
      <button onClick={() => onNavigate('admin')} className='b1' id="Admin">Admin</button>
      {/* Button for toggling the current mode */}
      <button onClick={toggleMode} className='b1' id="ToggleMode">
<<<<<<< HEAD
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
=======
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
>>>>>>> 21c26852dd938a0df7fbfb405536f807de7d6534
      </button>        
    </div>

  );
}
