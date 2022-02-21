ALTER TABLE `trialsnp`.`profiles` 
ADD COLUMN `top-100-runs` INT NOT NULL DEFAULT 0 AFTER `banner-url`;

ALTER TABLE `trialsnp`.`profileshistory` 
ADD COLUMN `top-100-runs` INT NOT NULL DEFAULT 0 AFTER `banner-url`;


/* TRIALS-159 */
ALTER TABLE `trialsnp`.`runs` 
ADD COLUMN `video` VARCHAR(100) NULL DEFAULT NULL AFTER `date`;

ALTER TABLE `trialsnp`.`runshistory` 
ADD COLUMN `video` VARCHAR(100) NULL DEFAULT NULL AFTER `date`;

ALTER TABLE `trialsnp`.`profiles` 
CHANGE COLUMN `banner-url` `banner-url` VARCHAR(1100) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL DEFAULT 'https://trialsnp-photos.s3.amazonaws.com/profiles/banners/defaultProfileBanner.png' ;

ALTER TABLE `trialsnp`.`profileshistory` 
CHANGE COLUMN `banner-url` `banner-url` VARCHAR(1100) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL DEFAULT 'https://trialsnp-photos.s3.amazonaws.com/profiles/banners/defaultProfileBanner.png' ;
