-- Use these standards while coding
-- Write Variable Names in this format '_variable_name'
-- Make sure to run the query on both MySQL Server and MsSQL Server on SQLite

-- Things to do
-- Add Constraints to the tables



DROP DATABASE IF EXISTS ESPNCricInfo;
CREATE DATABASE ESPNCricInfo;

USE ESPNCricInfo;

CREATE TABLE ActorOnTheScene
(
    _UserName VARCHAR(30),
    _Password VARCHAR(30),
    _Name VARCHAR(30),
    _Country VARCHAR(30),
    _PhoneNumber VARCHAR(30),
    _Email VARCHAR(30),
    _IsAdmin BOOL,
    PRIMARY KEY (_UserName)
);

CREATE TABLE Ground
(
    _GroundID INT,
    _Location VARCHAR(40),
    _Country VARCHAR(30),
    PRIMARY KEY (_GroundID)
);

CREATE TABLE FixtureData
(
    _FixtureID INT,
    _Team1ID INT,
    _Team2ID INT,
    _Date DATETIME,
    _VenueID INT,
    PRIMARY KEY (_FixtureID),
    FOREIGN KEY (_VenueID) REFERENCES Ground(_GroundID)
);

CREATE TABLE SeriesData
(
    _SeriesID INT,
    _Team1ID INT,
    _Team2ID INT,
    _Date DATETIME,
    _VenueID INT,
    PRIMARY KEY (_SeriesID),
    FOREIGN KEY (_VenueID) REFERENCES Ground(_GroundID)
);

CREATE TABLE NewsData
(
    _Text VARCHAR(200),
    _UserID VARCHAR(30),
    _Date DATETIME,
    PRIMARY KEY (_Date),
    FOREIGN KEY (_UserID) REFERENCES ActorOnTheScene(_UserName)
);

CREATE TABLE TeamData
(    
    _Name VARCHAR(30),
    _TeamID INT,
    _HomeGroundID INT,
    _Abbreviation VARCHAR(3),
    _Nick VARCHAR(30),
    _UpcomingFixtureID INT,
    _UpcomingSeriesID INT,
    _Wins INT,
    _Draws INT,
    _Loss INT,
    _RankingPoints INT,
    PRIMARY KEY (_TeamID),
    FOREIGN KEY (_UpcomingFixtureID) REFERENCES FixtureData(_FixtureID),
    FOREIGN KEY (_UpcomingSeriesID) REFERENCES SeriesData(_SeriesID),
    FOREIGN KEY (_HomeGroundID) REFERENCES Ground(_GroundID)
);

CREATE TABLE PlayerData
(
    _PlayerID INT,
    _TeamID INT,
    _Name VARCHAR(20),
    _Age INT,
    _Country VARCHAR(30),
    _Role VARCHAR(30),
    -- Batting Stats
    _BatAvg FLOAT,
    _BattingStyle VARCHAR(30),
    _BatRuns INT,
    _HS INT,
    _Matches INT,
    _BatInnings INT,
    _BatSR FLOAT,
    _Hundreds INT,
    _Fifties INT,
    -- Bowling Stats
    _BowlAvg FLOAT,
    _BowlingStyle VARCHAR(30),
    _Wickets INT,
    _BowlRuns INT,
    _BBF VARCHAR(30),
    _BowlInnings INT,
    _BowlSR FLOAT,
    _FiveWickets INT,
    _TenWickets INT,
    
    _LastMatchID INT,

    PRIMARY KEY (_PlayerID),
    FOREIGN KEY (_LastMatchID) REFERENCES FixtureData(_FixtureID),
    FOREIGN KEY (_TeamID) REFERENCES TeamData(_TeamID)
);



