import React from 'react';

const PopupsPlayer = ({ player }) => {
    // Function to replace null with "Null"
    const displayValue = (value) => {
        return value === null ? 'Null' : value;
    };

    return (
        <div className="popup-container">
            <h2>{displayValue(player.PlayerName)} Details</h2>
            <ul>
                <li><strong>Player ID:</strong> {displayValue(player.PlayerID)}</li>
                <li><strong>Player Age:</strong> {displayValue(player.PlayerAge)}</li>
                <li><strong>Player Role:</strong> {displayValue(player.PlayerRole)}</li>
                <li><strong>Player Team:</strong> {displayValue(player.PlayerTeam)}</li>
                <li><strong>Player Matches:</strong> {displayValue(player.PlayerMatches)}</li>
                <li><strong>Player Runs:</strong> {displayValue(player.PlayerRuns)}</li>
                <li><strong>Player Wickets:</strong> {displayValue(player.PlayerWickets)}</li>
                <li><strong>Player Batting Average:</strong> {displayValue(player.BatAvg)}</li>
                <li><strong>Player Batting Style:</strong> {displayValue(player.BatStyle)}</li>
                <li><strong>Player Highest Score:</strong> {displayValue(player.HighestScore)}</li>
                <li><strong>Player Matches:</strong> {displayValue(player._Matches)}</li>
                <li><strong>Player Bat Innings:</strong> {displayValue(player._BatInnings)}</li>
                <li><strong>Player Batting Strike Rate:</strong> {displayValue(player._BatSR)}</li>
                <li><strong>Player Hundreds:</strong> {displayValue(player._Hundreds)}</li>
                <li><strong>Player Fifties:</strong> {displayValue(player._Fifties)}</li>
                <li><strong>Player Bowling Average:</strong> {displayValue(player._BowlAvg)}</li>
                <li><strong>Player Bowling Style:</strong> {displayValue(player._BowlStyle)}</li>
                <li><strong>Player Bowl Runs:</strong> {displayValue(player._BowlRuns)}</li>
                <li><strong>Player Best Bowling Figure:</strong> {displayValue(player._BBF)}</li>
                <li><strong>Player Bowl Innings:</strong> {displayValue(player._BowlInnings)}</li>
                <li><strong>Player Bowling Strike Rate:</strong> {displayValue(player._BowlSR)}</li>
                <li><strong>Player Five Wicket Haul:</strong> {displayValue(player._FiveWickets)}</li>
                <li><strong>Player Ten Wicket Haul:</strong> {displayValue(player._TenWickets)}</li>
            </ul>
        </div>
    );
};

export default PopupsPlayer;
