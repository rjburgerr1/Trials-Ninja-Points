CREATE DATABASE  IF NOT EXISTS `trialsnp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `trialsnp`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: trialsnp
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profiles` (
  `email` varchar(255) NOT NULL,
  `id` varchar(29) NOT NULL,
  `create_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `country` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `gamertag` varchar(45) DEFAULT NULL,
  `aliases` varchar(45) DEFAULT NULL,
  `username` varchar(45) NOT NULL,
  `highest-np-run` int DEFAULT NULL,
  `runs` int DEFAULT NULL,
  `total-ninja-points` int DEFAULT NULL,
  `highest-level-pass` int DEFAULT NULL,
  `rank` int DEFAULT NULL,
  `bio` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

LOCK TABLES `profiles` WRITE;
/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
INSERT INTO `profiles` VALUES ('fourthuser@gmail.com','HlLKkTLUAeghI3AEGAmRrL7zWDh1','2021-01-08 07:12:13','USA',NULL,NULL,'rj burger','fourthUser',213,12,213,8,4,'here is a bio');
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
INSERT INTO `riders` VALUES ('RJ Burgerr1'),('Slikscythez');
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
  PRIMARY KEY (`rider`,`track-name`),
  KEY `rider_idx` (`rider`),
  CONSTRAINT `rider` FOREIGN KEY (`rider`) REFERENCES `riders` (`rider`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `runs`
--

LOCK TABLES `runs` WRITE;
/*!40000 ALTER TABLE `runs` DISABLE KEYS */;
INSERT INTO `runs` VALUES ('RJ Burgerr1',2,20,'12:12.123','Final Sorrow',1100,7,'Short','Moderately',3),('RJ Burgerr1',2,20,'12:12.123','Luscious',540,7,'Short','Moderately',3),('RJ Burgerr1',2,20,'12:12.123','Wraith',220,7,'Short','Moderately',3),('Slikscythez',2,20,'12:12.123','Annihilation',980,7,'Short','Moderately',3),('Slikscythez',2,20,'12:12.123','luscious',780,7,'Short','Moderately',3),('Slikscythez',2,20,'12:12.123','Wraith',220,7,'Short','Moderately',3);
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
  `id` int NOT NULL AUTO_INCREMENT,
  `creator` varchar(45) NOT NULL,
  `ninja-level` varchar(45) DEFAULT NULL,
  `length` enum('short','medium','long') DEFAULT NULL,
  `average-faults` int DEFAULT NULL,
  `fault-sponginess` enum('not at all','not very','moderately','very','extremely') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tracks`
--

LOCK TABLES `tracks` WRITE;
/*!40000 ALTER TABLE `tracks` DISABLE KEYS */;
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

-- Dump completed on 2021-01-09 10:35:30
