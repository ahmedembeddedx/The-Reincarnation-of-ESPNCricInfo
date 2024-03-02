-- Use these standards while coding
-- Write Variable Names in this format '_variable_name'
-- Make sure to run the query on both MySQL Server and MsSQL Server on SQLite

-- Things to do
-- Add Constraints to the tables

USE Project;

CREATE TABLE ActorOnTheScene
(
    _UserName VARCHAR(30),
    _Password VARCHAR(30),
    _Name VARCHAR(30),
    _Country VARCHAR(30),
    _PhoneNumber VARCHAR(30),
    _Email VARCHAR(30),
    _IsAdmin bit,
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
    FOREIGN KEY (_VenueID) REFERENCES Ground(_GroundID) on delete set null on update cascade
);

CREATE TABLE SeriesData
(
    _SeriesID INT,
    _Team1ID INT,
    _Team2ID INT,
    _Date DATETIME,
    _VenueID INT,
    PRIMARY KEY (_SeriesID),
    FOREIGN KEY (_VenueID) REFERENCES Ground(_GroundID) on delete no action on update no action
);

CREATE TABLE NewsData
(
    _Text VARCHAR(200),
    _UserID VARCHAR(30),
    _Date DATETIME,
    PRIMARY KEY (_Date),
    FOREIGN KEY (_UserID) REFERENCES ActorOnTheScene(_UserName) on delete cascade on update cascade
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
    FOREIGN KEY (_UpcomingFixtureID) REFERENCES FixtureData(_FixtureID) on delete set null on update no action,
    FOREIGN KEY (_UpcomingSeriesID) REFERENCES SeriesData(_SeriesID) on delete set null on update no action,
    FOREIGN KEY (_HomeGroundID) REFERENCES Ground(_GroundID) on delete set null on update no action
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
    FOREIGN KEY (_LastMatchID) REFERENCES FixtureData(_FixtureID) on delete set null on update no action,
    FOREIGN KEY (_TeamID) REFERENCES TeamData(_TeamID) on delete set null on update no action
);

--ACTOR ON the SCENE
ALTER TABLE ActorOnTheScene
ALTER COLUMN _Password VARCHAR(30) NOT NULL;

ALTER TABLE ActorOnTheScene
ALTER COLUMN _Name VARCHAR(30) NOT NULL;

ALTER TABLE ActorOnTheScene
ALTER COLUMN _Country VARCHAR(30) NOT NULL;

ALTER TABLE ActorOnTheScene
ADD CONSTRAINT CHK_IsAdmin CHECK (_IsAdmin IN (0, 1));

--GroundTable--
ALTER TABLE Ground
ALTER COLUMN _Location VARCHAR(40) NOT NULL;

ALTER TABLE Ground
ALTER COLUMN _Country VARCHAR(30) NOT NULL;

--FixtureData--
ALTER TABLE FixtureData
ALTER COLUMN _Team1ID INT NOT NULL;

ALTER TABLE FixtureData
ALTER COLUMN _Team2ID INT NOT NULL;

ALTER TABLE FixtureData
ADD CONSTRAINT team1team2unique UNIQUE (_Team1ID,_Team2ID);

ALTER TABLE FixtureData
ALTER COLUMN _VenueID INT NOT NULL;

--SeriesData Table--
ALTER TABLE SeriesData
ALTER COLUMN _Team1ID INT NOT NULL;

ALTER TABLE SeriesData
ALTER COLUMN _Team2ID INT NOT NULL;

ALTER TABLE SeriesData
ADD CONSTRAINT steam1team2unique UNIQUE (_Team1ID,_Team2ID);

ALTER TABLE SeriesData
ALTER COLUMN _Date DATETIME NOT NULL;

ALTER TABLE SeriesData
ALTER COLUMN _VenueID INT NOT NULL;

--TeamData Table--
ALTER TABLE TeamData
ALTER COLUMN _Name VARCHAR(30) NOT NULL;

ALTER TABLE TeamData
ALTER COLUMN _HomeGroundID INT NOT NULL;

ALTER TABLE TeamData
ADD CONSTRAINT homegroundUnique UNIQUE (_HomeGroundID);

ALTER TABLE TeamData
ALTER COLUMN _Wins INT NOT NULL;

ALTER TABLE TeamData
ALTER COLUMN _Draws INT NOT NULL;

ALTER TABLE TeamData
ALTER COLUMN _Loss INT NOT NULL;

ALTER TABLE TeamData
ALTER COLUMN _RankingPoints INT NOT NULL;

ALTER TABLE	TeamData
ADD CONSTRAINT check_negWins CHECK (_Wins>=0 or _Wins is null)

ALTER TABLE	TeamData
ADD CONSTRAINT check_negdraws CHECK (_Draws>=0 or _Draws is null)

ALTER TABLE	TeamData
ADD CONSTRAINT check_negloss CHECK (_Loss>=0 or _Loss is null)

ALTER TABLE	TeamData
ADD CONSTRAINT check_negpoints CHECK (_RankingPoints>=0 or _RankingPoints is null)

--PlayerData table--
ALTER TABLE PlayerData
ALTER COLUMN _TeamID INT NOT NULL;

ALTER TABLE PlayerData
ALTER COLUMN _Name VARCHAR(20) NOT NULL;

ALTER TABLE PlayerData
ALTER COLUMN _Country VARCHAR(30) NOT NULL;

ALTER TABLE PlayerData
ALTER COLUMN _Role VARCHAR(30) NOT NULL;

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_age_non_negative CHECK (_Age >= 15);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_BatAvg_non_negative CHECK (_BatAvg >= 0 or _BatAvg is null);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_BatRun_non_negative CHECK (_BatRuns >= 0 or _BatRuns is null);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_Batinnings_non_negative CHECK (_BatInnings >= 0 or _BatInnings is null);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_BatSR_non_negative CHECK (_BatSR >= 0 or _BatSR is null);


ALTER TABLE PlayerData
ADD CONSTRAINT CHK_hundreds_non_negative CHECK (_Hundreds >= 0 or _Hundreds is null);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_fifties_non_negative CHECK (_Fifties >= 0 or _Fifties is null);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_bowlavg_non_negative CHECK (_BowlAvg >= 0 or _BowlAvg is null);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_wickets_non_negative CHECK (_Wickets >= 0 or _Wickets is null);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_BlowRuns_non_negative CHECK (_BowlRuns >= 0 or _BowlRuns is null);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_Bowlinnings_non_negative CHECK (_BowlInnings >= 0 or _BowlInnings is null);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_FiveW_non_negative CHECK (_FiveWickets >= 0 or _FiveWickets is null);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_TenW_non_negative CHECK (_TenWickets >= 0 or _TenWickets is null);










