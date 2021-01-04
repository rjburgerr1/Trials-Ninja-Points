-- MOCK DATA
INSERT INTO trialsnp.runs (`rider`, `rank`, `faults`, `time`, `track-name`, `ninja-points`, `ninja-level`, `length`, `fault-sponginess`, `rating` ) 
VALUES ('Slikscythez', 2, 20, '12:12.123', 'luscious',780, 7, 'Short', 'Moderately',3);

INSERT INTO trialsnp.runs (`rider`, `rank`, `faults`, `time`, `track-name`, `ninja-points`, `ninja-level`, `length`, `fault-sponginess`, `rating` ) 
VALUES ('Slikscythez', 2, 20, '12:12.123', 'Wraith',220, 7, 'Short', 'Moderately',3);

INSERT INTO trialsnp.runs (`rider`, `rank`, `faults`, `time`, `track-name`, `ninja-points`, `ninja-level`, `length`, `fault-sponginess`, `rating` ) 
VALUES ('RJ Burgerr1', 2, 20, '12:12.123', 'Wraith',220, 7, 'Short', 'Moderately',3);

INSERT INTO trialsnp.runs (`rider`, `rank`, `faults`, `time`, `track-name`, `ninja-points`, `ninja-level`, `length`, `fault-sponginess`, `rating` ) 
VALUES ('RJ Burgerr1', 2, 20, '12:12.123', 'Luscious', 540, 7, 'Short', 'Moderately',3);

INSERT INTO trialsnp.runs (`rider`, `rank`, `faults`, `time`, `track-name`, `ninja-points`, `ninja-level`, `length`, `fault-sponginess`, `rating` ) 
VALUES ('RJ Burgerr1', 2, 20, '12:12.123', 'Final Sorrow',1100, 7, 'Short', 'Moderately',3);

INSERT INTO trialsnp.runs (`rider`, `rank`, `faults`, `time`, `track-name`, `ninja-points`, `ninja-level`, `length`, `fault-sponginess`, `rating` ) 
VALUES ('Slikscythez', 2, 20, '12:12.123', 'Annihilation',980, 7, 'Short', 'Moderately',3);
-- ------------------------------------


-- Query to insert run if it doesnt exist, and update the run if the ninja-points are greater than the existing rows np value (will be used when submit-run form is submitted)
INSERT INTO trialsnp.runs (`rider`, `rank`, `faults`, `time`, `track-name`, `ninja-points`, `ninja-level`, `length`, `fault-sponginess`, `rating` ) 
VALUES ('RJ Burgerr1', 1, 220, '12:12.113', 'Wraith',11220, 7, 'Medium', 'Moderately',3)
ON DUPLICATE KEY UPDATE
`rank` = IF((@update_record := (VALUES(`ninja-points`) > `ninja-points`)), VALUES(`rank`), `rank`),
`faults` = IF(@update_record, VALUES(`faults`), `faults`),
`time` = IF(@update_record, VALUES(`time`), `time`),
`ninja-level` = IF(@update_record, VALUES(`ninja-level`), `ninja-level`),
`length` = IF(@update_record, VALUES(`length`), `length`),
`fault-sponginess` = IF(@update_record, VALUES(`fault-sponginess`), `fault-sponginess`),
`rating` = IF(@update_record, VALUES(`rating`), `rating`),
`ninja-points` = IF(@update_record, VALUES(`ninja-points`), `ninja-points`);


-- Query to select riders by top 10 aggregated np runs for a specific rider
SELECT SUM(`ninja-points`) 
FROM (
SELECT `ninja-points`
FROM runs
WHERE rider = 'RJ Burgerr1'
ORDER BY `ninja-points` DESC
LIMIT 10) temp;


-- Query to select all riders top 100 runs summed ninja-points
WITH orderedRunsPerRider AS (
  SELECT *, ROW_NUMBER() OVER (PARTITION BY rider ORDER BY `ninja-points`) AS nHighestRun
  FROM runs
)
SELECT rider, sum(`ninja-points`) AS `ninja-points` 
FROM orderedRunsPerRider 
WHERE nHighestRun <= 100
GROUP BY rider;

-- Query to select all riders top 100 runs (list all 100 runs)
WITH orderedRunsPerRider AS (
  SELECT *, ROW_NUMBER() OVER (PARTITION BY rider ORDER BY `ninja-points`) AS nHighestRun
  FROM runs
)
SELECT *
FROM orderedRunsPerRider 
WHERE nHighestRun <= 100;
-- ----------------------

    
-- Query to calculate weightage for top 100 runs per rider 
-- (effectively scales ninja-points based on the nth place run a rider has. So the 45th best run a rider has is weighted less than the 1st or 2nd best)
DROP TABLE weightage;
CREATE TABLE weightage
AS
WITH orderedRunsPerRider AS (
  SELECT *, ROW_NUMBER() OVER (PARTITION BY rider ORDER BY `ninja-points` DESC) AS nHighestRun
  FROM runs
)
SELECT * FROM orderedRunsPerRider;
UPDATE weightage
SET `ninja-points` = (`ninja-points` * POWER(0.95, (`nHighestRun` -1)));
-- ------------------------


-- Query to retrieve the top n aggregated runs based on weightage
SELECT rider, sum(`ninja-points`) AS `ninja-points` 
FROM weightage
WHERE nHighestRun <= 100
GROUP BY rider;

-- Delete all data from runs table
DELETE FROM runs;


