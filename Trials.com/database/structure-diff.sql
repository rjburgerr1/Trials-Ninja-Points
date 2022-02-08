-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: trialsnp
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `creators`
--

DROP TABLE IF EXISTS `creators`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `creators` (
  `creator` varchar(45) NOT NULL DEFAULT 'N/A',
  `nTracks` int NOT NULL DEFAULT '0',
  `average-track-rating` float(3,2) NOT NULL DEFAULT '0.00',
  `average-track-length` float(3,2) NOT NULL DEFAULT '0.00',
  `average-track-consistency` float(3,2) NOT NULL DEFAULT '0.00',
  `average-track-ninja-level` float(3,2) NOT NULL DEFAULT '0.00',
  `average-track-ninja-points` float(9,2) NOT NULL DEFAULT '0.00',
  `average-track-faults` float(5,2) NOT NULL DEFAULT '0.00',
  `total-track-rating` float(10,2) NOT NULL DEFAULT '0.00',
  `total-track-length` float(10,2) NOT NULL DEFAULT '0.00',
  `total-track-consistency` float(10,2) NOT NULL DEFAULT '0.00',
  `total-track-ninja-level` float(10,2) NOT NULL DEFAULT '0.00',
  `total-track-ninja-points` float(10,2) NOT NULL DEFAULT '0.00',
  `total-track-faults` float(10,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`creator`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `creatorshistory`
--

DROP TABLE IF EXISTS `creatorshistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `creatorshistory` (
  `creator` varchar(45) NOT NULL DEFAULT 'N/A',
  `nTracks` int NOT NULL DEFAULT '0',
  `average-track-rating` float(3,2) NOT NULL DEFAULT '0.00',
  `average-track-length` float(3,2) NOT NULL DEFAULT '0.00',
  `average-track-consistency` float(3,2) NOT NULL DEFAULT '0.00',
  `average-track-ninja-level` float(3,2) NOT NULL DEFAULT '0.00',
  `average-track-ninja-points` float(9,2) NOT NULL DEFAULT '0.00',
  `average-track-faults` float(5,2) NOT NULL DEFAULT '0.00',
  `history-dates` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `total-track-rating` float(10,2) NOT NULL DEFAULT '0.00',
  `total-track-length` float(10,2) NOT NULL DEFAULT '0.00',
  `total-track-consistency` float(10,2) NOT NULL DEFAULT '0.00',
  `total-track-ninja-level` float(10,2) NOT NULL DEFAULT '0.00',
  `total-track-ninja-points` float(10,2) NOT NULL DEFAULT '0.00',
  `total-track-faults` float(10,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`creator`,`history-dates`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profiles` (
  `email` varchar(320) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `id` varchar(29) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `create_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `country` varchar(3) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N/A',
  `region` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N/A',
  `gamertag` varchar(25) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `aliases` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(25) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `highest-np-run` float(7,2) NOT NULL DEFAULT '0.00',
  `runs` int NOT NULL DEFAULT '0',
  `total-ninja-points` int NOT NULL DEFAULT '0',
  `highest-level-pass` float(3,2) NOT NULL DEFAULT '0.00',
  `bio` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `banner-url` varchar(1100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT 'https://trials-np-images.s3.amazonaws.com//uploads/defaultProfileBanner.png',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `profileshistory`
--

DROP TABLE IF EXISTS `profileshistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profileshistory` (
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `id` varchar(29) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `create_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `country` varchar(3) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N/A',
  `region` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N/A',
  `gamertag` varchar(25) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `aliases` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(25) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `highest-np-run` int NOT NULL DEFAULT '0',
  `runs` int NOT NULL DEFAULT '0',
  `total-ninja-points` int NOT NULL DEFAULT '0',
  `highest-level-pass` float(3,2) NOT NULL DEFAULT '0.00',
  `bio` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `history-dates` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `index` int NOT NULL AUTO_INCREMENT,
  `banner-url` varchar(1100) NOT NULL DEFAULT 'https://trials-np-images.s3.amazonaws.com//uploads/defaultProfileBanner.png',
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=881 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `runs`
--

DROP TABLE IF EXISTS `runs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `runs` (
  `rider` varchar(45) NOT NULL,
  `rank` int DEFAULT NULL,
  `faults` int NOT NULL,
  `time` varchar(9) NOT NULL,
  `track-name` varchar(45) NOT NULL,
  `ninja-points` float(7,2) NOT NULL DEFAULT '0.00',
  `ninja-level` float(3,2) NOT NULL,
  `length` enum('Short','Medium','Long') NOT NULL,
  `consistency` enum('Not At All','Not Very','Moderately','Very','Extremely') NOT NULL,
  `rating` float(3,2) DEFAULT NULL,
  `creator` varchar(45) NOT NULL,
  `id` varchar(29) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`track-name`,`id`,`creator`),
  KEY `rider_idx` (`rider`) /*!80000 INVISIBLE */,
  KEY `creator_idx` (`creator`),
  KEY `track-name_idx` (`track-name`),
  CONSTRAINT `creator` FOREIGN KEY (`creator`) REFERENCES `creators` (`creator`),
  CONSTRAINT `track-name` FOREIGN KEY (`track-name`) REFERENCES `tracks` (`track-name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `runshistory`
--

DROP TABLE IF EXISTS `runshistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `runshistory` (
  `rider` varchar(45) NOT NULL,
  `rank` int DEFAULT NULL,
  `faults` int NOT NULL,
  `time` varchar(9) NOT NULL,
  `track-name` varchar(45) NOT NULL,
  `ninja-points` float(7,2) DEFAULT NULL,
  `ninja-level` float(3,2) NOT NULL,
  `length` enum('Short','Medium','Long') NOT NULL,
  `consistency` enum('Not At All','Not Very','Moderately','Very','Extremely') NOT NULL,
  `rating` float(3,2) DEFAULT NULL,
  `creator` varchar(45) NOT NULL,
  `id` varchar(29) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `history-dates` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `index` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=4110 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test` (
  `test` int NOT NULL,
  PRIMARY KEY (`test`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `testas`
--

DROP TABLE IF EXISTS `testas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `testas` (
  `test` int NOT NULL,
  PRIMARY KEY (`test`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tracks`
--

DROP TABLE IF EXISTS `tracks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tracks` (
  `track-name` varchar(45) NOT NULL,
  `creator` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ninja-level` decimal(3,2) DEFAULT NULL,
  `length` decimal(3,2) DEFAULT NULL,
  `average-faults` decimal(5,2) DEFAULT NULL,
  `consistency` decimal(3,2) DEFAULT NULL,
  `rating` decimal(2,1) DEFAULT NULL,
  `nRuns` int NOT NULL DEFAULT '0',
  `total-rating` decimal(10,2) NOT NULL DEFAULT '0.00',
  `total-consistency` decimal(10,2) NOT NULL DEFAULT '0.00',
  `total-length` decimal(10,2) NOT NULL DEFAULT '0.00',
  `total-faults` int NOT NULL DEFAULT '0',
  `total-ninja-level` decimal(10,2) NOT NULL DEFAULT '0.00',
  `average-np` float(7,2) NOT NULL DEFAULT '0.00',
  `total-np` float(10,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`track-name`,`creator`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `trackshistory`
--

DROP TABLE IF EXISTS `trackshistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trackshistory` (
  `track-name` varchar(45) NOT NULL,
  `creator` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ninja-level` decimal(3,2) DEFAULT NULL,
  `length` decimal(3,2) DEFAULT NULL,
  `average-faults` decimal(5,2) DEFAULT NULL,
  `consistency` decimal(3,2) DEFAULT NULL,
  `rating` decimal(2,1) DEFAULT NULL,
  `nRuns` int NOT NULL DEFAULT '0',
  `total-rating` decimal(10,2) NOT NULL DEFAULT '0.00',
  `total-consistency` decimal(10,2) NOT NULL DEFAULT '0.00',
  `total-length` decimal(10,2) NOT NULL DEFAULT '0.00',
  `total-faults` int NOT NULL DEFAULT '0',
  `total-ninja-level` decimal(10,2) NOT NULL DEFAULT '0.00',
  `average-np` float(7,2) NOT NULL DEFAULT '0.00',
  `total-np` float(10,2) NOT NULL DEFAULT '0.00',
  `history-dates` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `index` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=8621 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-07 19:30:32
