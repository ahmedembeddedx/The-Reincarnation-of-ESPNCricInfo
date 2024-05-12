import React, { useState } from 'react';
import axios from 'axios';

export default function AddSeriesForm({ onClose }) {
    // State variables for form inputs
    const [seriesName, setseriesName] = useState('');
    const [startDate, setstartDate] = useState('');
    const [endDate, setendDate] = useState('');
    const [venueID, setVenueID] = useState('');

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            _SeriesName: seriesName,
            _StartDate: startDate,
            _EndDate: endDate,
            _VenueID: venueID
        };

        try {
            // Send a POST request to the backend
            await axios.post('/api/addseries', data);
            // Notify the user or close the form
            onClose();
        } catch (error) {
            console.error('Error adding series:', error);
            // Handle the error
        }
    };

    return (
        <div>
            <h3>Add Series</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='CrudLabels'>Series Name</label>
                    <input
                        type="text"
                        value={seriesName}
                        onChange={(e) => setseriesName(e.target.value)}
                    />
                </div>
                <div>
                    <label className='CrudLabels'>StartDate</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setstartDate(e.target.value)}
                    />
                </div>
                <div>
                    <label className='CrudLabels'>Date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setendDate(e.target.value)}
                    />
                </div>
                <div>
                    <label className='CrudLabels'>Venue ID</label>
                    <input
                        type="number"
                        value={venueID}
                        onChange={(e) => setVenueID(e.target.value)}
                    />
                </div>
                <button type="submit">Add Series</button>
            </form>
        </div>
    );
}
