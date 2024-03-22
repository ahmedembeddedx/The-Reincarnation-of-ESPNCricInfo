import React from 'react'

export default function Players() {
  return (
    <div>
        <h3>Player Data</h3>
        <div id="FormTable">
            
            <table>
                <tr>
                    <th>Player Name</th>
                    <th>Player ID</th>
                    <th>Player Role</th>
                    <th>Player Team</th>
                    <th>Player Matches</th>
                    <th>Player Runs</th>
                    <th>Player Wickets</th>
                    <th>Player Catches</th>
                    <th>Player Stumpings</th>
                </tr>
                <tr>
                    <td>Babar Azam</td>
                    <td>1</td> 
                    <td>Batsman</td>
                    <td>Pakistan</td>
                    <td>100</td>
                    <td>5000</td>
                    <td>0</td>
                    <td>50</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Virat Kohli</td>
                    <td>2</td> 
                    <td>Batsman</td>
                    <td>India</td>
                    <td>150</td>
                    <td>8000</td>
                    <td>0</td>
                    <td>100</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Steve Smith</td>
                    <td>3</td> 
                    <td>Batsman</td>
                    <td>Australia</td>
                    <td>120</td>
                    <td>6000</td>
                    <td>0</td>
                    <td>70</td>
                    <td>0</td>
                </tr>
            </table>
            
        </div>
        <br/>
        <br/>
        <hr/>
        <footer>
            <p>ESPNCricInfo Reincarnated</p>
            <p>Copyright 2024. All Rights Reserved.</p>
            <a href="https://github.com/ahmedembeddedx"><img src="https://cdn-icons-png.freepik.com/512/919/919847.png?ga=GA1.1.1925836337.1709750745&" alt="" height="40"/></a>
        </footer>
    </div>
  )
}
