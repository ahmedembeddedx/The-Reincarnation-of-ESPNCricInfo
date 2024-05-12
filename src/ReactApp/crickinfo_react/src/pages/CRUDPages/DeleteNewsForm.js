import React, { useState } from 'react';
import axios from 'axios';

export default function DeleteNewsForm({ onClose }) {
    const [newsDate, setNewsDate] = useState('');

    const handleDelete = async () => {
        try {
            // Send a POST request to delete the news
            await axios.post('/api/deletenews', { date: newsDate });
            // Notify the user or close the form
            onClose();
        } catch (error) {
            console.error('Error deleting news:', error);
            // Handle the error
        }
    };

    return (
        <div>
            <h3>Delete News</h3>
            <p className='CrudLabels'>Enter the News Date:</p>
            <input
                type="date"
                value={newsDate}
                onChange={(e) => setNewsDate(e.target.value)}
            />
            <button onClick={handleDelete}>Confirm Delete</button>
        </div>
    );
}
