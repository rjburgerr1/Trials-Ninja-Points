CREATE DATABASE  IF NOT EXISTS `trialsnp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `trialsnp`;
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
  `creator` varchar(45) NOT NULL,
  PRIMARY KEY (`creator`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `creators`
--

LOCK TABLES `creators` WRITE;
/*!40000 ALTER TABLE `creators` DISABLE KEYS */;
INSERT INTO `creators` VALUES ('12123e'),('12312e'),('12e'),('12ev12e'),('12ve'),('23b23r'),('23rb'),('23rv23'),('2v23v2v'),('34b34'),('34tn34'),('Classyfication'),('dqwdqw'),('ev12ev'),('NEw'),('o12'),('od'),('p,p,p,21,p'),('plpld21'),('qwd'),('qwdbqb'),('qwdq'),('RJ'),('rrwer'),('rv'),('Slik'),('t23n'),('v123v1'),('v12ev12ev'),('v1v1'),('v23rv23r'),('wdvqwdv'),('wef'),('wefwe'),('wefwef'),('werwer'),('wqd');
/*!40000 ALTER TABLE `creators` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profiles` (
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `id` varchar(29) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `create_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `country` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N/A',
  `state` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N/A',
  `gamertag` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `aliases` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `highest-np-run` int NOT NULL DEFAULT '0',
  `runs` int NOT NULL DEFAULT '0',
  `total-ninja-points` int NOT NULL DEFAULT '0',
  `highest-level-pass` int NOT NULL DEFAULT '0',
  `rank` int DEFAULT NULL,
  `bio` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

LOCK TABLES `profiles` WRITE;
/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
INSERT INTO `profiles` VALUES ('rjburgerr@gmail.com','RBBqsYUilDftW7DOorp3oGRmJ7G2','2021-10-01 09:49:57','N/A','N/A',NULL,NULL,'RJ Burgerr1',0,0,0,0,NULL,NULL);
/*!40000 ALTER TABLE `profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `riders`
--

DROP TABLE IF EXISTS `riders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `riders` (
  `rider` varchar(45) NOT NULL,
  PRIMARY KEY (`rider`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `riders`
--

LOCK TABLES `riders` WRITE;
/*!40000 ALTER TABLE `riders` DISABLE KEYS */;
INSERT INTO `riders` VALUES ('RJ Burgerr1');
/*!40000 ALTER TABLE `riders` ENABLE KEYS */;
UNLOCK TABLES;

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
  `ninja-points` decimal(10,0) DEFAULT NULL,
  `ninja-level` decimal(10,0) NOT NULL,
  `length` enum('Short','Medium','Long') NOT NULL,
  `fault-sponginess` enum('Not At All','Not Very','Moderately','Very','Extremely') NOT NULL,
  `rating` decimal(10,0) DEFAULT NULL,
  `creator` varchar(45) NOT NULL,
  PRIMARY KEY (`rider`,`track-name`),
  KEY `rider_idx` (`rider`) /*!80000 INVISIBLE */,
  KEY `creator_idx` (`creator`),
  KEY `track-name_idx` (`track-name`),
  CONSTRAINT `creator` FOREIGN KEY (`creator`) REFERENCES `creators` (`creator`),
  CONSTRAINT `rider` FOREIGN KEY (`rider`) REFERENCES `riders` (`rider`),
  CONSTRAINT `track-name` FOREIGN KEY (`track-name`) REFERENCES `tracks` (`track-name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `runs`
--

LOCK TABLES `runs` WRITE;
/*!40000 ALTER TABLE `runs` DISABLE KEYS */;
INSERT INTO `runs` VALUES ('RJ Burgerr1',1,0,'04:00.000','Luscious',1059,7,'Medium','Not Very',5,'Classyfication');
/*!40000 ALTER TABLE `runs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tracks`
--

DROP TABLE IF EXISTS `tracks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tracks` (
  `track-name` varchar(45) NOT NULL,
  `creator` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ninja-level` decimal(10,0) DEFAULT NULL,
  `length` decimal(10,0) DEFAULT NULL,
  `average-faults` decimal(10,0) DEFAULT NULL,
  `fault-sponginess` decimal(10,0) DEFAULT NULL,
  `rating` decimal(10,0) DEFAULT NULL,
  `nRuns` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`track-name`,`creator`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tracks`
--

LOCK TABLES `tracks` WRITE;
/*!40000 ALTER TABLE `tracks` DISABLE KEYS */;
INSERT INTO `tracks` VALUES ('Luscious','Classyfication',7,2,0,2,5,0);
/*!40000 ALTER TABLE `tracks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weightage`
--

DROP TABLE IF EXISTS `weightage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `weightage` (
  `rider` varchar(45) NOT NULL,
  `rank` int DEFAULT NULL,
  `faults` int NOT NULL,
  `time` varchar(9) NOT NULL,
  `track-name` varchar(45) NOT NULL,
  `ninja-points` decimal(10,0) DEFAULT NULL,
  `ninja-level` decimal(10,0) NOT NULL,
  `length` enum('Short','Medium','Long') NOT NULL,
  `fault-sponginess` enum('Not At All','Not Very','Moderately','Very','Extremely') NOT NULL,
  `rating` decimal(10,0) DEFAULT NULL,
  `nHighestRun` bigint unsigned NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weightage`
--

LOCK TABLES `weightage` WRITE;
/*!40000 ALTER TABLE `weightage` DISABLE KEYS */;
INSERT INTO `weightage` VALUES ('RJ Burgerr1',2,20,'12:12.123','Final Sorrow',1100,7,'Short','Moderately',3,1),('RJ Burgerr1',2,20,'12:12.123','Luscious',513,7,'Short','Moderately',3,2),('RJ Burgerr1',2,20,'12:12.123','Wraith',199,7,'Short','Moderately',3,3),('Slikscythez',2,20,'12:12.123','Annihilation',980,7,'Short','Moderately',3,1),('Slikscythez',2,20,'12:12.123','luscious',741,7,'Short','Moderately',3,2),('Slikscythez',2,20,'12:12.123','Wraith',199,7,'Short','Moderately',3,3);
/*!40000 ALTER TABLE `weightage` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-01  5:42:18
