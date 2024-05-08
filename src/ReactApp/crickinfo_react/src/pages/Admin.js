import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import AddPlayerForm from './CRUDPages/AddPlayerForm';
import AddTeamForm from './CRUDPages/AddTeamForm';
import AddSeriesForm from './CRUDPages/AddSeriesForm';
import AddMatchForm from './CRUDPages/AddMatchForm'; // Import the AddMatchForm component

export default function Admin() {
    // State variable to control the Add Player form modal
    const [isAddPlayerFormOpen, setIsAddPlayerFormOpen] = useState(false);
    // State variable to control the Add Team form modal
    const [isAddTeamFormOpen, setIsAddTeamFormOpen] = useState(false);
    // State variable to control the Add Series form modal
    const [isAddSeriesFormOpen, setIsAddSeriesFormOpen] = useState(false);
    // State variable to control the Add Match form modal
    const [isAddMatchFormOpen, setIsAddMatchFormOpen] = useState(false);

    // Function to open the Add Player form
    const openAddPlayerForm = () => {
        setIsAddPlayerFormOpen(true);
    };

    // Function to close the Add Player form
    const closeAddPlayerForm = () => {
        setIsAddPlayerFormOpen(false);
    };

    // Function to open the Add Team form
    const openAddTeamForm = () => {
        setIsAddTeamFormOpen(true);
    };

    // Function to close the Add Team form
    const closeAddTeamForm = () => {
        setIsAddTeamFormOpen(false);
    };

    // Function to open the Add Series form
    const openAddSeriesForm = () => {
        setIsAddSeriesFormOpen(true);
    };

    // Function to close the Add Series form
    const closeAddSeriesForm = () => {
        setIsAddSeriesFormOpen(false);
    };

    // Function to open the Add Match form
    const openAddMatchForm = () => {
        setIsAddMatchFormOpen(true);
    };

    // Function to close the Add Match form
    const closeAddMatchForm = () => {
        setIsAddMatchFormOpen(false);
    };

    return (
        <div>
            <h3>Admin Options</h3>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <button onClick={openAddPlayerForm}>Add Player</button>
                        </td>
                        <td>
                            <button onClick={openAddTeamForm}>Add Team</button>
                        </td>
                        <td>
                            <button onClick={openAddSeriesForm}>Add Series</button>
                        </td>
                        <td>
                            <button onClick={openAddMatchForm}>Add Match</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Popup for adding a player */}
            <Popup
                open={isAddPlayerFormOpen}
                onClose={closeAddPlayerForm}
                modal
                closeOnDocumentClick
            >
                <div>
                    <button onClick={closeAddPlayerForm} style={{ position: 'absolute', top: '10px', left: '10px' }}>x</button>
                    <AddPlayerForm onClose={closeAddPlayerForm} />
                </div>
            </Popup>

            {/* Popup for adding a team */}
            <Popup
                open={isAddTeamFormOpen}
                onClose={closeAddTeamForm}
                modal
                closeOnDocumentClick
            >
                <div>
                    <button onClick={closeAddTeamForm} style={{ position: 'absolute', top: '10px', left: '10px' }}>x</button>
                    <AddTeamForm onClose={closeAddTeamForm} />
                </div>
            </Popup>

            {/* Popup for adding a series */}
            <Popup
                open={isAddSeriesFormOpen}
                onClose={closeAddSeriesForm}
                modal
                closeOnDocumentClick
            >
                <div>
                    <button onClick={closeAddSeriesForm} style={{ position: 'absolute', top: '10px', left: '10px' }}>x</button>
                    <AddSeriesForm onClose={closeAddSeriesForm} />
                </div>
            </Popup>

            {/* Popup for adding a match */}
            <Popup
                open={isAddMatchFormOpen}
                onClose={closeAddMatchForm}
                modal
                closeOnDocumentClick
            >
                <div>
                    <button onClick={closeAddMatchForm} style={{ position: 'absolute', top: '10px', left: '10px' }}>x</button>
                    <AddMatchForm onClose={closeAddMatchForm} />
                </div>
            </Popup>

            <footer>
                <p>ESPNCricInfo Reincarnated</p>
                <p>Copyright 2024. All Rights Reserved.</p>
                <a href="https://github.com/ahmedembeddedx/the-reincarnation-of-espncricinfo/">
                    <img src="https://cdn-icons-png.freepik.com/512/919/919847.png" alt="GitHub" height="40" />
                </a>
            </footer>
        </div>
    );
}
