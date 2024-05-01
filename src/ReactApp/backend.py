from flask import Flask,jsonify
from flask_cors import CORS
import pyodbc
from werkzeug.security import check_password_hash, generate_password_hash

app = Flask(__name__)

conn_str = (
    r'DRIVER={ODBC Driver 17 for SQL Server};'
    r'SERVER=DESKTOP-50DO7J6;'
    r'DATABASE=ESPNCrickInfo;'
    r'Trusted_Connection=yes;'
)
conn = pyodbc.connect(conn_str)
cursor = conn.cursor()

CORS(app)


#login
# @app.route('/api/authenticate', methods=['POST'])
# def authenticate_user():
#     # Get the username and password from the request
#     data = request.get_json()
#     username = data.get('username')
#     password = data.get('password')

#     # Call the stored procedure to authenticate the user
#     cursor.execute('EXEC AuthenticateUser @Username = ?', (username,))
#     user_data = cursor.fetchone()

#     # Check if the user exists and the password matches
#     if user_data:
#         stored_password = user_data[1]  # The second column contains the password
#         if stored_password == password:
#             # Authentication successful
#             return jsonify({'success': True, 'user_data': user_data})
#         else:
#             # Invalid password
#             return jsonify({'success': False, 'message': 'Invalid password'}), 401
#     else:
#         # User not found
#         return jsonify({'success': False, 'message': 'User notfound'}), 404
    
#Team
@app.route('/api/teams', methods=['GET'])
def get_team_data():
    query = '''
        SELECT 
            _Name AS TeamName,
            _TeamID AS TeamID,
            _HomeGroundID AS HomeGroundID,
            _Abbreviation AS Abbreviation,
            _Nick AS Nickname,
            _UpcomingFixtureID AS UpcomingFixtureID,
            _UpcomingSeriesID AS UpcomingSeriesID,
            _Wins AS Wins,
            _Draws AS Draws,
            _Loss AS Losses,
            _RankingPoints AS RankingPoints
        FROM TeamData;
    '''

    # Execute the query
    cursor.execute(query)
    data = cursor.fetchall()

    # Convert the data to a list of dictionaries
    columns = [column[0] for column in cursor.description]
    data_list = [dict(zip(columns, row)) for row in data]

    # Return the data list as a JSON response
    return jsonify(data_list)


#Matches
@app.route('/api/matches', methods=['GET'])
def get_match_data():
    # Define the SQL query to fetch data from the MatchData table
    query = '''
        SELECT 
            m._FixtureID AS MatchID,
            t1._Name AS Team1,
            t2._Name AS Team2,
            m._Date AS MatchDate,
            v._Location AS MatchVenue
        FROM FixtureData m
        JOIN TeamData t1 ON m._Team1ID = t1._TeamID
        JOIN TeamData t2 ON m._Team2ID = t2._TeamID
        JOIN GroundData v ON m._VenueID = v._GroundID
    '''
    cursor.execute(query)
    data = cursor.fetchall()

    # Convert the data to a list of dictionaries
    columns = [column[0] for column in cursor.description]
    data_list = [dict(zip(columns, row)) for row in data]

    # Return the data list as a JSON response
    return jsonify(data_list)

#Players
@app.route('/api/players',methods=['GET'])

def get_Playerdata():
    query = '''
        SELECT _Name AS PlayerName, 
               _TeamID AS PlayerTeam, 
               _RoleID AS PlayerRole,
               _Matches AS PlayerMatches,
               _BatRuns AS PlayerRuns,
               _Wickets AS PlayerWickets,
               _PlayerID AS PlayerID
        FROM PlayerData order by PlayerRuns;
    '''
    
    cursor.execute(query)
    data = cursor.fetchall()
    # Query the data from SQL Server
    # Convert data to a list of dictionaries
    columns = [column[0] for column in cursor.description]
    data_list = [dict(zip(columns, row)) for row in data]
    return jsonify(data_list)
    

if __name__ == '__main__':
    app.run(port=5000,debug=True)