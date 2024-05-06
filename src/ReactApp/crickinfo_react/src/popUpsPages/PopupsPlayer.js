import React from 'react';

const PopupsPlayer = ({ player }) => {
    return (
        <div className="popup-container">
            <h2>{player.PlayerName} Details</h2>
            <ul>
                <li><strong>Player ID:</strong> {player.PlayerID}</li>
                <li><strong>Player Age:</strong> {player.PlayerAge}</li>
                <li><strong>Player Role:</strong> {player.PlayerRole}</li>
                <li><strong>Player Team:</strong> {player.PlayerTeam}</li>
                <li><strong>Player Matches:</strong> {player.PlayerMatches}</li>
                <li><strong>Player Runs:</strong> {player.PlayerRuns}</li>
                <li><strong>Player Wickets:</strong> {player.PlayerWickets}</li>
                <li><strong>Player Batting Average:</strong> {player.BatAvg}</li>
                <li><strong>Player Batting Style:</strong> {player.BatStyle}</li>
                <li><strong>Player Highest Score:</strong> {player.HighestScore}</li>
                <li><strong>Player Matches:</strong> {player._Matches}</li>

            </ul>
        </div>
    );
};

export default PopupsPlayer;
