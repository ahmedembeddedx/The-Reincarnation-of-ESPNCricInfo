import React, { useState } from 'react';
import axios from 'axios';

export default function AddNewsForm({ onClose }) {
    const [headline, setHeadline] = useState('');
    const [text, setText] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Prepare data to be sent to backend
        const newsData = {
            _Headline: headline,
            _Text: text
        };

        try {
            // Send POST request to the backend API
            const response = await axios.post('http://127.0.0.1:5000/api/addnews', newsData);
            // Handle response if necessary
            if (response.status === 201) {
                onClose();
            }
        } catch (error) {
            console.error('Error adding news:', error);
            alert('Failed to add news');
        }
    };

    return (
        <div>
            <h3>Add News</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Headline:</label>
                    <input type="text" value={headline} onChange={(e) => setHeadline(e.target.value)} required />
                </div>
                <div>
                    <label>Text:</label>
                    <textarea value={text} onChange={(e) => setText(e.target.value)} required />
                </div>
                <button type="submit">Add News</button>
            </form>
        </div>
    );
}

// Function to get the current user's ID (this function depends on your authentication setup)
