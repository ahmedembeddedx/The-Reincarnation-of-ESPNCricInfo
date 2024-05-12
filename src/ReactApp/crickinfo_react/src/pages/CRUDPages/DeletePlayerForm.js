import React, { useState } from 'react';
import axios from 'axios';

export default function DeletePlayerForm({ onClose }) {
    const [playerId, setPlayerId] = useState('');

    const handleDelete = async () => {
        try {
            // Send a POST request to delete the player
            await axios.post('/api/deleteplayer', { id: playerId });
            // Notify the user or close the form
            onClose();
        } catch (error) {
            console.error('Error deleting player:', error);
            // Handle the error
        }
    };

    return (
        <div>
            <h3>Delete Player</h3>
            <p className='CrudLabels'>Enter the Player ID:</p>
            <input
                type="text"
                value={playerId}
                onChange={(e) => setPlayerId(e.target.value)}
            />
            <button onClick={handleDelete}>Confirm Delete</button>
        </div>
    );
}
