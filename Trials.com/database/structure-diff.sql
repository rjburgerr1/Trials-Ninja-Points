ALTER TABLE `trialsnp`.`profiles` 
ADD COLUMN `top-100-runs` INT NOT NULL DEFAULT 0 AFTER `banner-url`;

ALTER TABLE `trialsnp`.`profileshistory` 
ADD COLUMN `top-100-runs` INT NOT NULL DEFAULT 0 AFTER `banner-url`;
