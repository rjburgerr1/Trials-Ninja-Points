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
-- Table structure for table `information`
--

DROP TABLE IF EXISTS `information`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `information` (
  `email` varchar(255) NOT NULL,
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `create_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `password` varchar(255) NOT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `gamertag` varchar(45) DEFAULT NULL,
  `aliases` varchar(45) DEFAULT NULL,
  `nickname` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `information`
--

LOCK TABLES `information` WRITE;
/*!40000 ALTER TABLE `information` DISABLE KEYS */;
INSERT INTO `information` VALUES ('richardfgefwefergewfwef@piedpifffper.com',1,'2020-12-07 00:45:21','wqdqwd',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('richardfgefugbiubwefergewfwef@piedpifffper.com',2,'2020-12-07 00:45:29','wqdqwd',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('qwdqwd@wefwefwef',3,'2020-12-07 04:30:18','wefwefwef',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('qwdqwd@wefwefwef',4,'2020-12-07 04:35:02','wefwefwef',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('gwweg@wgwg',5,'2020-12-07 19:46:25','wgweg',NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `information` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `runs`
--

DROP TABLE IF EXISTS `runs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `runs` (
  `gamertag` varchar(45) NOT NULL,
  `rank` int NOT NULL,
  `faults` int NOT NULL,
  `time` time NOT NULL,
  `track-name` varchar(45) NOT NULL,
  `ninja-points` decimal(10,0) NOT NULL,
  PRIMARY KEY (`gamertag`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `runs`
--

LOCK TABLES `runs` WRITE;
/*!40000 ALTER TABLE `runs` DISABLE KEYS */;
INSERT INTO `runs` VALUES ('23r23r',1231,1212,'12:12:12','undefined',123),('ewfwef',123123123,1313,'12:12:12','undefined',123),('fwefwe',123,123,'12:12:12','undefined',123),('fwefwef',123,123,'12:12:12','undefined',123),('qweqweqwe',1,123,'00:12:12','sfsdfsf',12),('rwgergergerg',1231,123,'12:12:12','undefined',123),('wefwef',123,12,'12:12:12','undefined',123),('wefwefwef',12,123,'12:12:12','undefined',123),('werwer11',12123,123,'12:12:12','undefined',123);
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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-09  5:00:46
