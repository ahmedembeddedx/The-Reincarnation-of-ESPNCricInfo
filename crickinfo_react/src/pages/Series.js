import React from 'react'

export default function Series() {
  return (
    <div>
      <h3>Series Data</h3>

        <div id="FormTable">

            <table>
                <tr>
                    <th>Series ID</th>
                    <th>Series Name</th>
                    <th>Series Start Date</th>
                    <th>Series End Date</th>
                    <th>Series Venue</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>World Cup 2024</td>
                    <td>2024-10-10</td>
                    <td>2024-11-10</td>
                    <td>Dubai</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Asia Cup 2024</td>
                    <td>2024-12-10</td>
                    <td>2025-01-10</td>
                    <td>India</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>PSL 2024</td>
                    <td>2024-2-14</td>
                    <td>2024-03-10</td>
                    <td>Pakistan</td>
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
