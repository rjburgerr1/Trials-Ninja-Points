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
INSERT INTO `creators` VALUES ('`wqedv'),('121'),('12123e'),('12312e'),('123qwd'),('123v12ve'),('12e'),('12ec12e'),('12ef12'),('12ev'),('12ev12e'),('12v'),('12v312'),('12ve'),('1v12v123'),('23b23r'),('23rb'),('23rv23'),('2ev12e'),('2v23v2v'),('34b34'),('34tn34'),('3v23r'),('43b'),('b124b124b14'),('b23b23r'),('b23rb23b2'),('bqrqwrbqwrb'),('bqwdb'),('Classyfication'),('crasd'),('dqwdqw'),('e12ev12'),('ev12ev'),('evqwe'),('lala'),('NEw'),('o12'),('od'),('p,p,p,21,p'),('pap'),('plpld21'),('qefvqe'),('qvqqvv'),('qwd'),('qwdbqb'),('qwdbqw'),('qwdbqwb'),('qwdq'),('qwdv'),('qwdvqwd'),('qwdvqwdv'),('qwev'),('qwv'),('qwvqwd'),('rar'),('RJ'),('rrrrrr'),('rrwer'),('rv'),('Slik'),('someone'),('t23n'),('twetbwe'),('v123v1'),('v123v123v'),('v123v123v123'),('v12ev1'),('v12ev12ev'),('v12ev12ev12ev1'),('v1v1'),('v23rv23r'),('ve12ev'),('vqwd1'),('vqwdvqwdqwd'),('vqwdvqwdv'),('vqwdvqwdvq'),('vqwev'),('vqwvqw'),('vr23rv'),('wdvqwdv'),('wef'),('wefbwe'),('wefvwe1v'),('wefwe'),('wefwef'),('werwer'),('wevqwe'),('wqd');
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
  `gamertag` varchar(25) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `aliases` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(25) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `highest-np-run` int NOT NULL DEFAULT '0',
  `runs` int NOT NULL DEFAULT '0',
  `total-ninja-points` int NOT NULL DEFAULT '0',
  `highest-level-pass` int NOT NULL DEFAULT '0',
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
INSERT INTO `profiles` VALUES ('rjburgerr@gmail.com','RBBqsYUilDftW7DOorp3oGRmJ7G2','2021-10-01 09:49:57','N/A','N/A',NULL,NULL,'RJ Burgerr1',0,1,2254,0,NULL);
/*!40000 ALTER TABLE `profiles` ENABLE KEYS */;
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
  `ninja-points` float(7,2) DEFAULT NULL,
  `ninja-level` float(3,2) NOT NULL,
  `length` enum('Short','Medium','Long') NOT NULL,
  `fault-sponginess` enum('Not At All','Not Very','Moderately','Very','Extremely') NOT NULL,
  `rating` float(3,2) DEFAULT NULL,
  `creator` varchar(45) NOT NULL,
  `id` varchar(29) NOT NULL,
  PRIMARY KEY (`track-name`,`id`),
  KEY `rider_idx` (`rider`) /*!80000 INVISIBLE */,
  KEY `creator_idx` (`creator`),
  KEY `track-name_idx` (`track-name`),
  CONSTRAINT `creator` FOREIGN KEY (`creator`) REFERENCES `creators` (`creator`),
  CONSTRAINT `track-name` FOREIGN KEY (`track-name`) REFERENCES `tracks` (`track-name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `runs`
--

LOCK TABLES `runs` WRITE;
/*!40000 ALTER TABLE `runs` DISABLE KEYS */;
INSERT INTO `runs` VALUES ('RJ Burgerr1',23234,234,'13:41.313','fwqv3',158.05,4.50,'Medium','Not At All',3.00,'vr23rv','RBBqsYUilDftW7DOorp3oGRmJ7G2'),('RJ Burgerr1',31231,123,'12:31.212','qwdv',184.93,4.50,'Medium','Not At All',2.00,'qwvqwd','RBBqsYUilDftW7DOorp3oGRmJ7G2'),('RJ Burgerr1',23123,321,'12:31.231','qwdv21',297.88,5.50,'Medium','Not Very',3.00,'v123v1','RBBqsYUilDftW7DOorp3oGRmJ7G2'),('RJ Burgerr1',123123,123,'31:23.123','qwev',164.22,4.50,'Medium','Not Very',3.00,'vqwev','RBBqsYUilDftW7DOorp3oGRmJ7G2'),('RJ Burgerr1',123,123,'12:31.231','qwvd',193.74,4.50,'Short','Not Very',3.00,'vqwev','RBBqsYUilDftW7DOorp3oGRmJ7G2'),('RJ Burgerr1',12312,123,'21:23.123','qwvdvqwv',207.87,4.50,'Medium','Not Very',3.00,'qwev','RBBqsYUilDftW7DOorp3oGRmJ7G2'),('RJ Burgerr1',124,124,'12:41.241','tbq',257.15,4.50,'Short','Moderately',3.00,'twetbwe','RBBqsYUilDftW7DOorp3oGRmJ7G2'),('RJ Burgerr1',123123,123,'12:31.231','v12ev',380.52,5.00,'Long','Not Very',3.00,'12ef12','RBBqsYUilDftW7DOorp3oGRmJ7G2'),('RJ Burgerr1',1233123,123,'23:12.312','v12ev1',209.45,4.50,'Short','Moderately',4.00,'2ev12e','RBBqsYUilDftW7DOorp3oGRmJ7G2'),('RJ Burgerr1',234234,234,'23:42.342','v23rv',199.73,5.00,'Long','Not At All',3.00,'3v23r','RBBqsYUilDftW7DOorp3oGRmJ7G2');
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
  `ninja-level` decimal(3,2) DEFAULT NULL,
  `length` decimal(3,2) DEFAULT NULL,
  `average-faults` decimal(5,2) DEFAULT NULL,
  `fault-sponginess` decimal(3,2) DEFAULT NULL,
  `rating` decimal(2,1) DEFAULT NULL,
  `nRuns` int NOT NULL DEFAULT '0',
  `total-rating` decimal(10,2) NOT NULL DEFAULT '0.00',
  `total-fault-sponginess` decimal(10,2) NOT NULL DEFAULT '0.00',
  `total-length` decimal(10,2) NOT NULL DEFAULT '0.00',
  `total-faults` int NOT NULL DEFAULT '0',
  `total-ninja-level` decimal(10,2) NOT NULL DEFAULT '0.00',
  `average-np` float(7,2) NOT NULL DEFAULT '0.00',
  `total-np` float(10,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`track-name`,`creator`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tracks`
--

LOCK TABLES `tracks` WRITE;
/*!40000 ALTER TABLE `tracks` DISABLE KEYS */;
INSERT INTO `tracks` VALUES (' wqwdbqwdb','qwdbqwb',NULL,NULL,NULL,NULL,NULL,1,3.00,1.00,2.00,124,5.00,0.00,227.28),('123v123','v123v123v',NULL,NULL,NULL,NULL,NULL,1,3.00,2.00,1.00,123,4.50,0.00,193.74),('12ev','12ev',NULL,NULL,NULL,NULL,NULL,1,3.00,2.00,1.00,121,5.00,0.00,239.94),('12ev12ve12e','v12ev12ev12ev1',6.00,1.00,123.00,2.00,3.0,1,3.00,2.00,1.00,123,6.00,0.00,0.00),('12evqwvq','v12ev1',5.50,2.00,142.00,2.00,3.0,1,3.00,2.00,2.00,142,5.50,0.00,0.00),('adww','`wqedv',4.50,1.00,123.00,5.00,3.0,1,3.00,5.00,1.00,123,4.50,0.00,0.00),('b214b124124','b124b124b14',NULL,NULL,NULL,NULL,NULL,0,0.00,0.00,0.00,0,0.00,0.00,0.00),('b23rb','b23b23r',2.00,2.00,232.00,2.00,3.0,1,3.00,2.00,2.00,232,2.00,0.00,0.00),('b23rb23r','b23rb23b2',6.00,2.00,234.00,1.00,3.0,1,3.00,1.00,2.00,234,6.00,0.00,0.00),('bqrbqwr','bqrqwrbqwrb',NULL,NULL,NULL,NULL,NULL,0,0.00,0.00,0.00,0,0.00,0.00,0.00),('dqwdvqwdvqwd','vqwdvqwdqwd',NULL,NULL,NULL,NULL,NULL,0,0.00,0.00,0.00,0,0.00,0.00,0.00),('dvqwdvq','bqwdb',NULL,NULL,NULL,NULL,NULL,0,0.00,0.00,0.00,0,0.00,0.00,0.00),('dvqwdvq','wdvqwdv',4.33,2.00,93.00,2.33,3.3,3,10.00,7.00,6.00,279,13.00,0.00,0.00),('fwqv3','vr23rv',NULL,NULL,NULL,NULL,NULL,1,3.00,1.00,2.00,234,4.50,0.00,158.05),('lala','lala',5.00,1.00,123.00,3.00,3.0,1,3.00,0.00,0.00,0,0.00,0.00,0.00),('pap','pap',2.00,2.00,123.00,2.00,2.0,1,2.00,0.00,0.00,0,0.00,0.00,0.00),('qefvqefv','qefvqe',3.00,2.00,124.00,3.00,3.0,1,3.00,3.00,2.00,124,3.00,145.46,145.46),('qwdv','qwdvqwd',5.00,2.00,123.00,3.00,3.0,1,3.00,0.00,0.00,0,0.00,0.00,0.00),('qwdv','qwvqwd',NULL,NULL,NULL,NULL,NULL,1,2.00,1.00,2.00,123,4.50,0.00,184.93),('qwdv21','v123v1',NULL,NULL,NULL,NULL,NULL,1,3.00,2.00,2.00,321,5.50,0.00,297.88),('qwdvqw','vqwvqw',NULL,NULL,NULL,NULL,NULL,0,0.00,0.00,0.00,0,0.00,0.00,0.00),('qwdvqwdv','123v12ve',6.00,2.00,123.00,2.00,3.0,1,3.00,0.00,0.00,0,0.00,0.00,0.00),('qwdvqwdv','qwdvqwdv',NULL,NULL,NULL,NULL,NULL,0,0.00,0.00,0.00,0,0.00,0.00,0.00),('qwdvqwdvqwd','vqwdvqwdvq',5.00,2.00,123.00,2.00,3.0,0,0.00,0.00,0.00,0,0.00,0.00,0.00),('qwev','vqwev',NULL,NULL,NULL,NULL,NULL,1,3.00,2.00,2.00,123,4.50,0.00,164.22),('qwevq','evqwe',NULL,NULL,NULL,NULL,NULL,0,0.00,0.00,0.00,0,0.00,0.00,0.00),('qwevq','wevqwe',9.00,3.00,123.00,5.00,5.0,1,0.00,0.00,0.00,0,0.00,0.00,0.00),('qwvd','vqwev',NULL,NULL,NULL,NULL,NULL,1,3.00,2.00,1.00,123,4.50,0.00,193.74),('qwvdvqwv','qwev',4.50,2.00,123.00,2.00,3.0,1,3.00,2.00,2.00,123,4.50,207.87,207.87),('rar','rar',5.50,2.00,124.00,2.00,3.0,2,6.00,0.00,0.00,0,0.00,0.00,0.00),('tbq','twetbwe',NULL,NULL,NULL,NULL,NULL,1,3.00,3.00,1.00,124,4.50,0.00,257.15),('v123v123','v123v123v123',NULL,NULL,NULL,NULL,NULL,1,3.00,2.00,2.00,231,4.50,0.00,215.82),('v12ev','12ef12',NULL,NULL,NULL,NULL,NULL,1,3.00,2.00,3.00,123,5.00,0.00,380.52),('v12ev1','2ev12e',NULL,NULL,NULL,NULL,NULL,1,4.00,3.00,1.00,123,4.50,0.00,209.45),('v12ev1','ve12ev',NULL,NULL,NULL,NULL,NULL,0,0.00,0.00,0.00,0,0.00,0.00,0.00),('v12ev12e1','e12ev12',4.50,2.00,123.00,3.00,3.0,1,3.00,3.00,2.00,123,4.50,0.00,0.00),('v212r','1v12v123',4.50,2.00,123.00,2.00,3.0,1,3.00,2.00,2.00,123,4.50,246.58,246.58),('v23rv','3v23r',NULL,NULL,NULL,NULL,NULL,1,3.00,1.00,3.00,234,5.00,0.00,199.73),('vqvqvqqvqq','qvqqvv',NULL,NULL,NULL,NULL,NULL,0,0.00,0.00,0.00,0,0.00,0.00,0.00),('vqwd','vqwd1',6.00,1.00,123.00,2.00,3.0,0,0.00,0.00,0.00,0,0.00,0.00,0.00),('vqwdb','qwdbqw',NULL,NULL,NULL,NULL,NULL,0,0.00,0.00,0.00,0,0.00,0.00,0.00),('vqwdvqwvq','12v312',5.00,1.00,123.00,2.00,3.0,0,0.00,0.00,0.00,0,0.00,0.00,0.00),('wdvqwd','vqwdvqwdv',NULL,NULL,NULL,NULL,NULL,0,0.00,0.00,0.00,0,0.00,0.00,0.00);
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

-- Dump completed on 2021-11-30  4:10:29
