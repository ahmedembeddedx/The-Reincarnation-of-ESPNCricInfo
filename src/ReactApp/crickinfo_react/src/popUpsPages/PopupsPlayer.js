import React from 'react';

const PopupsPlayer = ({ player }) => {
    // Function to replace null with "Null"
    const displayValue = (value) => {
        return value === null ? 'Null' : value;
    };

    return (
        <div className="popup-container" style={{ maxHeight: '530px', overflowY: 'auto' }}>
            <h2 style={{position: 'sticky'}}>'{displayValue(player.PlayerName)}' Info</h2>
            <h2>Personal Info</h2>
            <table>
                <tbody>
                    <tr>
                        <td><strong>Player ID</strong></td>
                        <td>{displayValue(player.PlayerID)}</td>
                    </tr>
                    <tr>
                        <td><strong>Player Age</strong></td>
                        <td>{displayValue(player.PlayerAge)}</td>
                    </tr>
                    <tr>
                        <td><strong>Player Role</strong></td>
                        <td>{displayValue(player.PlayerRole)}</td>
                    </tr>
                    <tr>
                        <td><strong>Player Team</strong></td>
                        <td>{displayValue(player.PlayerTeam)}</td>
                    </tr>
                    <tr>
                        <td><strong>Matches</strong></td>
                        <td>{displayValue(player.PlayerMatches)}</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <h2>Batting Stats</h2>
            <table>
                <tbody>
                    <tr>
                        <td><strong>Runs</strong></td>
                        <td>{displayValue(player.PlayerRuns)}</td>
                    </tr>
                    <tr>
                        <td><strong>Batting Average</strong></td>
                        <td>{displayValue(player.BatAvg)}</td>
                    </tr>
                    <tr>
                        <td><strong>Batting Style</strong></td>
                        <td>{displayValue(player.BatStyle)}</td>
                    </tr>
                    <tr>
                        <td><strong>Highest Score</strong></td>
                        <td>{displayValue(player.HighestScore)}</td>
                    </tr>
                    <tr>
                        <td><strong>Bat Innings</strong></td>
                        <td>{displayValue(player._BatInnings)}</td>
                    </tr>
                    <tr>
                        <td><strong>Batting Strike Rate</strong></td>
                        <td>{displayValue(player._BatSR)}</td>
                    </tr>
                    <tr>
                        <td><strong>Hundreds</strong></td>
                        <td>{displayValue(player._Hundreds)}</td>
                    </tr>
                    <tr>
                        <td><strong>Fifties</strong></td>
                        <td>{displayValue(player._Fifties)}</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <h2>Bowling Stats</h2>
            <table>
                <tbody>
                    <tr>
                        <td><strong>Bowling Average</strong></td>
                        <td>{displayValue(player._BowlAvg)}</td>
                    </tr>
                    <tr>
                        <td><strong>Bowling Style</strong></td>
                        <td>{displayValue(player._BowlStyle)}</td>
                    </tr>
                    <tr>
                        <td><strong>Bowl Runs</strong></td>
                        <td>{displayValue(player._BowlRuns)}</td>
                    </tr>
                    <tr>
                        <td><strong>Best Bowling Figure</strong></td>
                        <td>{displayValue(player._BBF)}</td>
                    </tr>
                    <tr>
                        <td><strong>Bowl Innings</strong></td>
                        <td>{displayValue(player._BowlInnings)}</td>
                    </tr>
                    <tr>
                        <td><strong>Bowling Strike Rate</strong></td>
                        <td>{displayValue(player._BowlSR)}</td>
                    </tr>
                    <tr>
                        <td><strong>Five Wicket Haul</strong></td>
                        <td>{displayValue(player._FiveWickets)}</td>
                    </tr>
                    <tr>
                        <td><strong>Ten Wicket Haul</strong></td>
                        <td>{displayValue(player._TenWickets)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PopupsPlayer;
