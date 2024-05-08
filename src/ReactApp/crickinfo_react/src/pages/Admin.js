import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import AddPlayerForm from './CRUDPages/AddPlayerForm';
import AddTeamForm from './CRUDPages/AddTeamForm';
import AddSeriesForm from './CRUDPages/AddSeriesForm'; // Import the AddSeriesForm component

export default function Admin() {
    // State variable to control the Add Player form modal
    const [isAddPlayerFormOpen, setIsAddPlayerFormOpen] = useState(false);
    // State variable to control the Add Team form modal
    const [isAddTeamFormOpen, setIsAddTeamFormOpen] = useState(false);
    // State variable to control the Add Series form modal
    const [isAddSeriesFormOpen, setIsAddSeriesFormOpen] = useState(false);

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
                    </tr>
                    {/* Add more buttons as necessary */}
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
