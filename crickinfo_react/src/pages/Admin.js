import React from 'react'

export default function Admin() {
  return (
    <div>
        <h3>Admin Option</h3>
        <div id="FormTable" style={{width: '50%'}}>
            {/* <div id="" className="displaytext" style={{ color: '#282828', fontFamily: 'monospace' }}>Loading...</div>
             */}

            <table>
              <tr>
                <th>Add</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
              <tr>
                <td><button className='b4' id="addTeam">Add Team</button></td>
                <td><button className='b4' id="updateTeam">Update Team</button></td>
                <td><button className='b4' style={{backgroundColor :'#cc0000'}}  id="deleteTeam">Delete Team</button></td>
              </tr>
              <tr>  
                <td><button className='b4' id="addPlayer">Add Player</button></td>
                <td><button className='b4' id="updatePlayer">Update Player</button></td>
                <td><button className='b4' style={{backgroundColor :'#cc0000'}}  id="deletePlayer">Delete Player</button></td>
              </tr>
              <tr>
                <td><button className='b4' id="addSeries">Add Series</button></td>
                <td><button className='b4' id="updateSeries">Update Series</button></td>
                <td><button className='b4' style={{backgroundColor :'#cc0000'}}  id="deleteSeries">Delete Series</button></td>
              </tr>
              <tr>
                <td><button className='b4' id="addMatch">Add Match</button></td>
                <td><button className='b4' id="updateMatch">Update Match</button></td>
                <td><button className='b4' style={{backgroundColor :'#cc0000'}} id="deleteMatch">Delete Match</button></td>
              </tr>
              <tr>
                <td><button className='b4' id="addNews">Add News</button></td>
                <td><button className='b4' id="updateNews">Update News</button></td>
                <td><button className='b4' style={{backgroundColor :'#cc0000'}} id="deleteNews">Delete News</button></td>
              </tr>
              <tr>
                <td><button className='b4' style={{backgroundColor :'#cc0000'}} id='addAdmin'>Add Admin</button></td>
                <td><button className='b4' style={{backgroundColor :'#cc0000'}} id='updateAdmin'>Update Admin</button></td>
                <td><button className='b4' style={{backgroundColor :'#cc0000'}} id='deleteAdmin'>Delete Admin</button></td>
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
