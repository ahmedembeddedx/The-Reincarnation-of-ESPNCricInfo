import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import AddPlayerForm from './CRUDPages/AddPlayerForm';
import AddTeamForm from './CRUDPages/AddTeamForm';
import AddSeriesForm from './CRUDPages/AddSeriesForm';
import AddMatchForm from './CRUDPages/AddMatchForm';
import AddNewsForm from './CRUDPages/AddNewsForm'; // Import the AddNewsForm component

export default function Admin() {
    // State variables to control the form modals
    const [isAddPlayerFormOpen, setIsAddPlayerFormOpen] = useState(false);
    const [isAddTeamFormOpen, setIsAddTeamFormOpen] = useState(false);
    const [isAddSeriesFormOpen, setIsAddSeriesFormOpen] = useState(false);
    const [isAddMatchFormOpen, setIsAddMatchFormOpen] = useState(false);
    const [isAddNewsFormOpen, setIsAddNewsFormOpen] = useState(false);

    // Functions to open and close the forms
    const openAddPlayerForm = () => setIsAddPlayerFormOpen(true);
    const closeAddPlayerForm = () => setIsAddPlayerFormOpen(false);

    const openAddTeamForm = () => setIsAddTeamFormOpen(true);
    const closeAddTeamForm = () => setIsAddTeamFormOpen(false);

    const openAddSeriesForm = () => setIsAddSeriesFormOpen(true);
    const closeAddSeriesForm = ()=> setIsAddSeriesFormOpen(false);

    const openAddMatchForm = () => setIsAddMatchFormOpen(true);
    const closeAddMatchForm = () => setIsAddMatchFormOpen(false);

    const openAddNewsForm = () => setIsAddNewsFormOpen(true);
    const closeAddNewsForm = () => setIsAddNewsFormOpen(false);

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
                        <td>
                            <button onClick={openAddNewsForm}>Add News</button>
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

            {/* Popup for adding news */}
            <Popup
                open={isAddNewsFormOpen}
                onClose={closeAddNewsForm}
                modal
                closeOnDocumentClick
            >
                <div>
                    <button onClick={closeAddNewsForm} style={{ position: 'absolute', top: '10px', left: '10px' }}>x</button>
                    <AddNewsForm onClose={closeAddNewsForm} />
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
