import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Teams() {
    // State to store the fetched team data
    const [teamsData, setTeamsData] = useState([]);

    // State for the search query
    const [searchQuery, setSearchQuery] = useState('');

    // Fetch team data from the API endpoint on component mount
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/teams')
        .then(response => {
            // Log API response for debugging
            console.log('API response:', response.data);
            
            // Check if the response data is an array and is not empty
            if (Array.isArray(response.data) && response.data.length > 0) {
                // Update the state with the fetched data
                setTeamsData(response.data);
            } else {
                console.error('API response data is empty or not an array.');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filtered teams based on the search query
    const filteredTeams = teamsData.filter(team =>
        team.TeamName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h3>Teams Data</h3>
            <input
                type="text"
                id="search"
                placeholder="Find Team..."
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <div id="FormTable">
                <table>
                    <thead>
                        <tr>
                            <th>Team Name</th>
                            <th>Team ID</th>
                            <th>Home Ground ID</th>
                            <th>Abbreviation</th>
                            <th>Nickname</th>
                            <th>Upcoming Fixture ID</th>
                            <th>Upcoming Series ID</th>
                            <th>Wins</th>
                            <th>Draws</th>
                            <th>Losses</th>
                            <th>Ranking Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTeams.map((team) => (
                            <tr key={team.TeamID}>
                                <td>{team.TeamName}</td>
                                <td>{team.TeamID}</td>
                                <td>{team.HomeGroundID}</td>
                                <td>{team.Abbreviation}</td>
                                <td>{team.Nickname}</td>
                                <td>{team.UpcomingFixtureID}</td>
                                <td>{team.UpcomingSeriesID}</td>
                                <td>{team.Wins}</td>
                                <td>{team.Draws}</td>
                                <td>{team.Losses}</td>
                                <td>{team.RankingPoints}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <br/>
            <hr/>
            <footer>
                <p>ESPNCricInfo Reincarnated</p>
                <p>Copyright 2024. All Rights Reserved.</p>
                <a href="https://github.com/ahmedembeddedx/the-reincarnation-of-espncricinfo/">
                    <img src="https://cdn-icons-png.freepik.com/512/919/919847.png" alt="GitHub" height="40"/>
                </a>
            </footer>
        </div>
    );
}
