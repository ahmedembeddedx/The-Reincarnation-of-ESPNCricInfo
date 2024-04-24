from flask import Flask,jsonify
from flask_cors import CORS
import pyodbc

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

@app.route('/api/players',methods=['GET'])

def get_data():
    query = '''
        SELECT _Name AS PlayerName, 
               _TeamID AS PlayerTeam, 
               _RoleID AS PlayerRole,
               _Matches AS PlayerMatches,
               _BatRuns AS PlayerRuns,
               _Wickets AS PlayerWickets,
               _PlayerID AS PlayerID
        FROM PlayerData;
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