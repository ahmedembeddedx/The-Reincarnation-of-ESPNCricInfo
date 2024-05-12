import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import AddPlayerForm from './CRUDPages/AddPlayerForm';
import AddTeamForm from './CRUDPages/AddTeamForm';
import AddSeriesForm from './CRUDPages/AddSeriesForm';
import AddMatchForm from './CRUDPages/AddMatchForm';
import AddNewsForm from './CRUDPages/AddNewsForm';
import UpdatePlayer from './CRUDPages/UpdatePlayerForm';
import UpdateTeamForm from './CRUDPages/UpdateTeamForm';
import UpdateSeriesForm from './CRUDPages/UpdateSeriesForm';
import UpdateMatchForm from './CRUDPages/UpdateMatchForm';
import DeletePlayerForm from './CRUDPages/DeletePlayerForm';
import DeleteTeamForm from './CRUDPages/DeleteTeamForm';
import DeleteSeriesForm from './CRUDPages/DeleteSeriesForm';
import DeleteMatchForm from './CRUDPages/DeleteMatchForm';
import DeleteNewsForm from './CRUDPages/DeleteNewsForm';

export default function Admin() {
    // State variables to control the form modals
    const [isAddPlayerFormOpen, setIsAddPlayerFormOpen] = useState(false);
    const [isAddTeamFormOpen, setIsAddTeamFormOpen] = useState(false);
    const [isAddSeriesFormOpen, setIsAddSeriesFormOpen] = useState(false);
    const [isAddMatchFormOpen, setIsAddMatchFormOpen] = useState(false);
    const [isAddNewsFormOpen, setIsAddNewsFormOpen] = useState(false);
    const [isUpdatePlayerFormOpen, setIsUpdatePlayerFormOpen] = useState(false);
    const [isUpdateTeamFormOpen, setIsUpdateTeamFormOpen] = useState(false);
    const [isUpdateSeriesFormOpen, setIsUpdateSeriesFormOpen] = useState(false);
    const [isUpdateMatchFormOpen, setIsUpdateMatchFormOpen] = useState(false);
    const [isDeletePlayerFormOpen, setIsDeletePlayerFormOpen] = useState(false);
    const [isDeleteTeamFormOpen, setIsDeleteTeamFormOpen] = useState(false);
    const [isDeleteSeriesFormOpen, setIsDeleteSeriesFormOpen] = useState(false);
    const [isDeleteMatchFormOpen, setIsDeleteMatchFormOpen] = useState(false);
    const [isDeleteNewsFormOpen, setIsDeleteNewsFormOpen] = useState(false);


    

    const openDeleteNewsForm = () => setIsDeleteNewsFormOpen(true);
    const closeDeleteNewsForm = () => setIsDeleteNewsFormOpen(false);

    const openDeleteMatchForm = () => setIsDeleteMatchFormOpen(true);
    const closeDeleteMatchForm = () => setIsDeleteMatchFormOpen(false);

    const openDeleteSeriesForm = () => setIsDeleteSeriesFormOpen(true);
    const closeDeleteSeriesForm = () => setIsDeleteSeriesFormOpen(false);
    
    const openDeleteTeamForm = () => setIsDeleteTeamFormOpen(true);
    const closeDeleteTeamForm = () => setIsDeleteTeamFormOpen(false);


    const openDeletePlayerForm = () => setIsDeletePlayerFormOpen(true);
    const closeDeletePlayerForm = () => setIsDeletePlayerFormOpen(false);

    const openUpdateMatchForm = () => setIsUpdateMatchFormOpen(true);
    const closeUpdateMatchForm = () => setIsUpdateMatchFormOpen(false);   

    const openUpdateSeriesForm = () => setIsUpdateSeriesFormOpen(true);
    const closeUpdateSeriesForm = () => setIsUpdateSeriesFormOpen(false);

    const openUpdateTeamForm = () => setIsUpdateTeamFormOpen(true);
    const closeUpdateTeamForm = () => setIsUpdateTeamFormOpen(false);
    
    const openUpdatePlayerForm = () => setIsUpdatePlayerFormOpen(true);
    const closeUpdatePlayerForm = () => setIsUpdatePlayerFormOpen(false);

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
                    <tr>
                        <td>
                            <button onClick={openUpdatePlayerForm}>Update Player</button> {/* No function call here */}
                        </td>
                        <td>
                            <button onClick={openUpdateTeamForm}>Update Team</button>
                        </td>
                        <td>
                            <button onClick={openUpdateSeriesForm}>Update Series</button>
                        </td>
                        <td>
                            <button onClick={openUpdateMatchForm}>Update Match</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={openDeletePlayerForm}>Delete Player</button>
                        </td>
                        <td>
                            <button onClick={openDeleteTeamForm}>Delete Team</button>
                        </td>
                        <td>
                            <button onClick={openDeleteSeriesForm}>Delete Series</button>
                        </td>
                        <td>
                            <button onClick={openDeleteMatchForm}>Delete Match</button>
                        </td>
                        <td>
                            <button onClick={openDeleteNewsForm}>Delete News</button>
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

            {/* Popup for updating a player */}
            <Popup
                open={isUpdatePlayerFormOpen}
                onClose={closeUpdatePlayerForm}
                modal
                closeOnDocumentClick
            >
                <div>
                    <button onClick={closeUpdatePlayerForm} style={{ position: 'absolute', top: '10px', left: '10px' }}>x</button>
                    <UpdatePlayer onClose={closeUpdatePlayerForm} />
                </div>
            </Popup>

            <Popup
                open={isUpdateTeamFormOpen}
                onClose={closeUpdateTeamForm}
                modal
                closeOnDocumentClick
            >
                <div>
                    <button onClick={closeUpdateTeamForm} style={{ position: 'absolute', top: '10px', left: '10px' }}>x</button>
                    <UpdateTeamForm onClose={closeUpdateTeamForm}/>
                </div>
            </Popup> 

            <Popup
                open={isUpdateSeriesFormOpen}
                onClose={closeUpdateSeriesForm}
                modal
                closeOnDocumentClick
            >
                <div>
                    <button onClick={closeUpdateSeriesForm} style={{ position: 'absolute', top: '10px', left: '10px' }}>x</button>
                    <UpdateSeriesForm onClose={closeUpdateSeriesForm}/>
                </div>
            </Popup>   
            <Popup
                open={isUpdateMatchFormOpen}
                onClose={closeUpdateMatchForm}
                modal
                closeOnDocumentClick
            >
                <button onClick={closeUpdateMatchForm} style={{ position: 'absolute', top: '10px', left: '10px' }}>x</button>
                <UpdateMatchForm onClose={closeUpdateMatchForm}/>
            </Popup>

            <Popup
                open={isDeletePlayerFormOpen}
                onClose={closeDeletePlayerForm}
                modal
                closeOnDocumentClick
            >
                <div>
                    <button onClick={closeDeletePlayerForm} style={{ position: 'absolute', top: '10px', left: '10px' }}>x</button>
                    <DeletePlayerForm onClose={closeDeletePlayerForm}/>
                </div> 
            </Popup>

            <Popup
                open={isDeleteTeamFormOpen}
                onClose={closeDeleteTeamForm}
                modal
                closeOnDocumentClick
            >
                <div>
                    <button onClick={closeDeleteTeamForm} style={{ position: 'absolute', top: '10px', left: '10px' }}>x</button>
                    <DeleteTeamForm onClose={closeDeleteTeamForm} />
                </div>
            </Popup>

            {/* Popup for deleting a series */}
            <Popup
                open={isDeleteSeriesFormOpen}
                onClose={closeDeleteSeriesForm}
                modal
                closeOnDocumentClick
            >
                <div>
                    <button onClick={closeDeleteSeriesForm} style={{ position: 'absolute', top: '10px', left: '10px' }}>x</button>
                    <DeleteSeriesForm onClose={closeDeleteSeriesForm} />
                </div>
            </Popup>

            {/* Popup for deleting a match */}
            <Popup
                open={isDeleteMatchFormOpen}
                onClose={closeDeleteMatchForm}
                modal
                closeOnDocumentClick
            >
                <div>
                    <button onClick={closeDeleteMatchForm} style={{ position: 'absolute', top: '10px', left: '10px' }}>x</button>
                    <DeleteMatchForm onClose={closeDeleteMatchForm} />
                </div>
            </Popup>

            {/* Popup for deleting news */}
            <Popup
                open={isDeleteNewsFormOpen}
                onClose={closeDeleteNewsForm}
                modal
                closeOnDocumentClick
            >
                <div>
                    <button onClick={closeDeleteNewsForm} style={{ position: 'absolute', top: '10px', left: '10px' }}>x</button>
                    <DeleteNewsForm onClose={closeDeleteNewsForm} />
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
