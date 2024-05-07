from flask import Flask, request, jsonify
from flask_cors import CORS
import pyodbc
from werkzeug.security import check_password_hash, generate_password_hash

app = Flask(__name__)

# WINDOWS
conn_str = (
    r'DRIVER={ODBC Driver 17 for SQL Server};'
    r'SERVER=DESKTOP-50DO7J6;'
    r'DATABASE=ESPNCrickInfo;'
    r'Trusted_Connection=yes;'
)
conn = pyodbc.connect(conn_str)

# MAC
# conn = pyodbc.connect(
#        'DRIVER=/opt/homebrew/lib/libmsodbcsql.17.dylib' + 
#        ';SERVER=' + 'localhost,1433' + ';UID=' + 'sa' + 
#        ';PWD=' + 'dockerStrongPwd123' +
#        ';database=ESPNCricInfo')


# # AZURE SQL
# server = 'ahmedhost.database.windows.net'
# database = 'ESPNCricInfo'
# username = 'ahmedsql'
# password = 'pancakes123$$'
# driver= '/opt/homebrew/lib/libmsodbcsql.17.dylib'
# conn = pyodbc.connect('DRIVER='+driver+';SERVER='+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password)


cursor = conn.cursor()

CORS(app)


#login
@app.route('/api/authenticate', methods=['POST'])
def authenticate():
    # Get data from the request body
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Execute the stored procedure
    cursor.execute('EXEC GetUserDetails @username = ?, @password = ?', (username, password))
    result = cursor.fetchone()

    print(username, password)




    if result:
        # Convert the result to a dictionary
        user_data = {
            'username': result[0],
            'name': result[1],
            'country': result[2],
            'phone_number': result[3],
            'email': result[4],
            'is_admin': result[5]
        }
        # Return success response with user data
        return jsonify({'success': True, 'user_data': user_data})
    else:
        # Return failure response
        return jsonify({'success': False, 'message': 'Invalid credentials'})
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
        SELECT PlayerData._Name AS PlayerName, 
               TeamData._Name AS PlayerTeam, 
               _RoleName AS PlayerRole,
               _Matches AS PlayerMatches,
               _BatRuns AS PlayerRuns,
               PlayerData._BatAvg as BatAvg,
               PlayerData._BattingStyle as BatStyle,
               PlayerData._HS as HighestScore,
               _Wickets AS PlayerWickets,
               _Age AS PlayerAge,
               _PlayerID as PlayerID,
               PlayerData.*
        FROM PlayerData 
        join TeamData on PlayerData._TeamID = TeamData._TeamID
        join RolesData on RolesData._RoleID = PlayerData._RoleID
        order by PlayerID;
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