import React, { useState } from 'react';
import axios from 'axios';

export default function AddTeamForm({ onClose }) {
    // State variables for form input fields
    const [name, setName] = useState('');
    const [teamID, setTeamID] = useState('');
    const [homeGroundID, setHomeGroundID] = useState('');
    const [abbreviation, setAbbreviation] = useState('');
    const [nick, setNick] = useState('');
    const [upcomingFixtureID, setUpcomingFixtureID] = useState('');
    const [upcomingSeriesID, setUpcomingSeriesID] = useState('');
    const [wins, setWins] = useState('');
    const [draws, setDraws] = useState('');
    const [loss, setLoss] = useState('');
    const [rankingPoints, setRankingPoints] = useState('');

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Update the state variables based on the input name and value
        if (name === '_Name') {
            setName(value);
        } else if (name === '_TeamID') {
            setTeamID(value);
        } else if (name === '_HomeGroundID') {
            setHomeGroundID(value);
        } else if (name === '_Abbreviation') {
            setAbbreviation(value);
        } else if (name === '_Nick') {
            setNick(value);
        } else if (name === '_UpcomingFixtureID') {
            setUpcomingFixtureID(value);
        } else if (name === '_UpcomingSeriesID') {
            setUpcomingSeriesID(value);
        } else if (name === '_Wins') {
            setWins(value);
        } else if (name === '_Draws') {
            setDraws(value);
        } else if (name === '_Loss') {
            setLoss(value);
        } else if (name === '_RankingPoints') {
            setRankingPoints(value);
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create an object with the form data
        const teamData = {
            _Name: name,
            _TeamID: teamID,
            _HomeGroundID: homeGroundID,
            _Abbreviation: abbreviation,
            _Nick: nick,
            _UpcomingFixtureID: upcomingFixtureID,
            _UpcomingSeriesID: upcomingSeriesID,
            _Wins: wins,
            _Draws: draws,
            _Loss: loss,
            _RankingPoints: rankingPoints,
        };

        try {
            // Send a POST request to the backend API
            const response = await axios.post('/api/addteams', teamData);

            // Check the response status
            if (response.status === 201) {
                // Team added successfully, close the form
                onClose();
            } else {
                console.error('Failed to add team:', response.data);
            }
        } catch (error) {
            console.error('Error adding team:', error);
        }
    };

    // Render the form
    return (
        <div>
            <h3>Add Team</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='CrudLabels'>Name:</label>
                    <input
                        type="text"
                        name="_Name"
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className='CrudLabels'>Team ID:</label>
                    <input
                        type="text"
                        name="_TeamID"
                        value={teamID}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className='CrudLabels'>Home Ground ID:</label>
                    <input
                        type="text"
                        name="_HomeGroundID"
                        value={homeGroundID}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className='CrudLabels'>Abbreviation:</label>
                    <input
                        type="text"
                        name="_Abbreviation"
                        value={abbreviation}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className='CrudLabels'>Nickname:</label>
                    <input
                        type="text"
                        name="_Nick"
                        value={nick}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className='CrudLabels'>Upcoming Fixture ID:</label>
                    <input
                        type="text"
                        name="_UpcomingFixtureID"
                        value={upcomingFixtureID}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className='CrudLabels'>Upcoming Series ID:</label>
                    <input
                        type="text"
                        name="_UpcomingSeriesID"
                        value={upcomingSeriesID}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className='CrudLabels'>Wins:</label>
                    <input
                        type="text"
                        name="_Wins"
                        value={wins}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className='CrudLabels'>Draws:</label>
                    <input
                        type="text"
                        name="_Draws"
                        value={draws}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className='CrudLabels'>Loss:</label>
                    <input
                        type="text"
                        name="_Loss"
                        value={loss}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className='CrudLabels'>Ranking Points:</label>
                    <input
                        type="number"
                        name="_RankingPoints"
                        value={rankingPoints}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <button type="submit">Add Team</button>
                </div>
            </form>
        </div>
    );
}
