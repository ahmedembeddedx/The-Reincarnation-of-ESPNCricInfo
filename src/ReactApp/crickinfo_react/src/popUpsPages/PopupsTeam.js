import React from 'react';

const PopupsTeam = ({ team }) => {
    // Function to replace null values with "Null"
    const displayValue = (value) => {
        return value === null ? 'Null' : value;
    };

    return (
        <div className="popup-team-container">
            <h2>{displayValue(team.TeamName)} Details</h2>
            <ul>
                <li><strong>Team ID:</strong> {displayValue(team.TeamID)}</li>
                <li><strong>Home Ground ID:</strong> {displayValue(team.HomeGroundID)}</li>
                <li><strong>Abbreviation:</strong> {displayValue(team.Abbreviation)}</li>
                <li><strong>Nickname:</strong> {displayValue(team.Nickname)}</li>
                <li><strong>Upcoming Fixture ID:</strong> {displayValue(team.UpcomingFixtureID)}</li>
                <li><strong>Upcoming Series ID:</strong> {displayValue(team.UpcomingSeriesID)}</li>
                <li><strong>Wins:</strong> {displayValue(team.Wins)}</li>
                <li><strong>Draws:</strong> {displayValue(team.Draws)}</li>
                <li><strong>Losses:</strong> {displayValue(team.Losses)}</li>
                <li><strong>Ranking Points:</strong> {displayValue(team.RankingPoints)}</li>
            </ul>
        </div>
    );
};

export default PopupsTeam;
