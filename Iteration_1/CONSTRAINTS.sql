-- CONSTRAINTS

--USER DATA--
ALTER TABLE UserData
ADD CONSTRAINT CHK_IsAdmin CHECK (_IsAdmin IN (0, 1));

--FixtureData--
ALTER TABLE FixtureData
ADD CONSTRAINT team1team2unique UNIQUE (_Team1ID,_Team2ID);

--SeriesData Table--
ALTER TABLE SeriesData
ADD CONSTRAINT steam1team2unique UNIQUE (_Team1ID,_Team2ID);

--TeamData Table--
ALTER TABLE	TeamData
ADD CONSTRAINT check_negWins CHECK (_Wins>=0);

ALTER TABLE	TeamData
ADD CONSTRAINT check_negdraws CHECK (_Draws>=0);

ALTER TABLE	TeamData
ADD CONSTRAINT check_negloss CHECK (_Loss>=0);

ALTER TABLE	TeamData
ADD CONSTRAINT check_negpoints CHECK (_RankingPoints>=0);

--PlayerData table--

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_age_non_negative CHECK (_Age >= 12);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_BatAvg_non_negative CHECK (_BatAvg >= 0 OR _BatAvg IS NULL);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_BatRun_non_negative CHECK (_BatRuns >= 0 OR _BatRuns IS NULL);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_Batinnings_non_negative CHECK (_BatInnings >= 0 OR _BatInnings IS NULL);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_BatSR_non_negative CHECK (_BatSR >= 0 AND _BatSR<=600 OR _BatSR IS NULL);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_hundreds_non_negative CHECK (_Hundreds >= 0 OR _Hundreds IS NULL);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_fifties_non_negative CHECK (_Fifties >= 0 OR _Fifties IS NULL);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_bowlavg_non_negative CHECK (_BowlAvg >= 0 OR _BowlAvg IS NULL);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_wickets_non_negative CHECK (_Wickets >= 0 OR _Wickets IS NULL);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_BlowRuns_non_negative CHECK (_BowlRuns >= 0 OR _BowlRuns IS NULL);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_Bowlinnings_non_negative CHECK (_BowlInnings >= 0 OR _BowlInnings IS NULL);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_FiveW_non_negative CHECK (_FiveWickets >= 0 OR _FiveWickets IS NULL);

ALTER TABLE PlayerData
ADD CONSTRAINT CHK_TenW_non_negative CHECK (_TenWickets >= 0 OR _TenWickets IS NULL);
