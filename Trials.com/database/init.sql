CREATE DATABASE  IF NOT EXISTS `trialsnp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `trialsnp`;
-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: trialsnp
-- ------------------------------------------------------
-- Server version	8.0.26

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
INSERT INTO `creators` VALUES ('`wqedv'),('121'),('12123e'),('12312e'),('123qwd'),('123v12ve'),('12e'),('12ec12e'),('12ev12e'),('12v'),('12v312'),('12ve'),('23b23r'),('23rb'),('23rv23'),('2v23v2v'),('34b34'),('34tn34'),('43b'),('b23b23r'),('b23rb23b2'),('Classyfication'),('crasd'),('dqwdqw'),('e12ev12'),('ev12ev'),('lala'),('NEw'),('o12'),('od'),('p,p,p,21,p'),('pap'),('plpld21'),('qwd'),('qwdbqb'),('qwdq'),('qwdv'),('qwdvqwd'),('qwv'),('rar'),('RJ'),('rrrrrr'),('rrwer'),('rv'),('Slik'),('someone'),('t23n'),('v123v1'),('v12ev1'),('v12ev12ev'),('v12ev12ev12ev1'),('v1v1'),('v23rv23r'),('vqwd1'),('vqwdvqwdvq'),('vqwev'),('wdvqwdv'),('wef'),('wefbwe'),('wefvwe1v'),('wefwe'),('wefwef'),('werwer'),('wevqwe'),('wqd');
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
INSERT INTO `profiles` VALUES ('rjburgerr@gmail.com','RBBqsYUilDftW7DOorp3oGRmJ7G2','2021-10-01 09:49:57','N/A','N/A',NULL,NULL,'RJ Burgerr1',0,0,0,0,NULL);
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
INSERT INTO `riders` VALUES ('12312'),('12ev123'),('1v2v12'),('21ev12ev'),('21ve12evv12'),('c12ec'),('feewfbweb'),('LALALALAL'),('person'),('qdqvqw'),('qqwdvqw'),('qv 3rb32rb3r'),('qvqwdvqwd'),('qvwdv'),('qvwdvq'),('qvwdvqw'),('qvwdvqwdv'),('qvwevqwev'),('qwdqvqwd'),('qwdv'),('qwdvqv'),('qwdvqwdv'),('qwvdvqwd'),('r32b'),('RJ Burgerr1'),('RJRJRJ'),('v123ev12e'),('v12e'),('v12ev12'),('v12ev12e'),('v12v12'),('v12ve12ev'),('ve1v1vev1e'),('vqwd'),('vqwdv'),('vqwv'),('wdqv'),('webwefb'),('wefvwef'),('wqvvqvq');
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
  `ninja-points` float(7,2) DEFAULT NULL,
  `ninja-level` float(3,2) NOT NULL,
  `length` enum('Short','Medium','Long') NOT NULL,
  `fault-sponginess` enum('Not At All','Not Very','Moderately','Very','Extremely') NOT NULL,
  `rating` float(3,2) DEFAULT NULL,
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
INSERT INTO `runs` VALUES ('21ve12evv12',1234,124,'12:41.241','rar',327.00,6.00,'Medium','Not At All',2.00,'rar'),('feewfbweb',123,123,'12:31.231','dvqwdvq',195.00,4.00,'Short','Very',5.00,'wdvqwdv'),('LALALALAL',124,142,'12:41.241','12evqwvq',356.97,5.50,'Medium','Not Very',3.00,'v12ev1'),('qqwdvqw',12,123,'12:31.231','dvqwdvq',285.00,5.00,'Long','Not At All',2.00,'wdvqwdv'),('qv 3rb32rb3r',2142,234,'23:42.342','b23rb23r',230.09,6.00,'Medium','Not At All',3.00,'b23rb23b2'),('qvwdv',123,123,'31:31.231','qwdvqwdv',244.00,6.00,'Medium','Not Very',3.00,'123v12ve'),('qvwdvqw',12,123,'12:31.231','lala',319.00,5.00,'Short','Moderately',3.00,'lala'),('qvwdvqwdv',21,123,'12:31.231','qwdvqwdvqwd',304.42,5.00,'Medium','Not Very',3.00,'vqwdvqwdvq'),('qvwevqwev',3,123,'12:31.231','qwevq',2363.03,9.00,'Long','Extremely',5.00,'wevqwe'),('qwdqvqwd',123,123,'12:31.231','vqwdvqwvq',239.00,5.00,'Short','Not Very',3.00,'12v312'),('qwdv',123,123,'12:31.231','pap',27.00,2.00,'Medium','Not Very',2.00,'pap'),('qwdvqv',2314,124,'12:41.241','rar',404.00,5.00,'Medium','Moderately',4.00,'rar'),('qwvdvqwd',1231,123,'12:31.231','vqwd',289.00,6.00,'Short','Not Very',3.00,'vqwd1'),('r32b',2323,232,'23:23.232','b23rb',34.40,2.00,'Medium','Not Very',3.00,'b23b23r'),('RJRJRJ',123,123,'12:31.231','adww',371.33,4.50,'Short','Extremely',3.00,'`wqedv'),('v12ve12ev',2,123,'23:12.312','12ev12ve12e',279.27,6.00,'Short','Not Very',3.00,'v12ev12ev12ev1'),('ve1v1vev1e',121212,123,'41:24.141','v12ev12e1',160.65,4.50,'Medium','Moderately',3.00,'e12ev12'),('vqwd',123,123,'12:31.231','qwdv',406.00,5.00,'Medium','Moderately',3.00,'qwdvqwd'),('wqvvqvq',414,33,'12:31.231','dvqwdvq',185.00,4.00,'Medium','Not Very',3.00,'wdvqwdv');
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
  PRIMARY KEY (`track-name`,`creator`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tracks`
--

LOCK TABLES `tracks` WRITE;
/*!40000 ALTER TABLE `tracks` DISABLE KEYS */;
INSERT INTO `tracks` VALUES ('12ev12ve12e','v12ev12ev12ev1',6.00,1.00,123.00,2.00,3.0,1,3.00,2.00,1.00,123,6.00,0.00),('12evqwvq','v12ev1',5.50,2.00,142.00,2.00,3.0,1,3.00,2.00,2.00,142,5.50,0.00),('adww','`wqedv',4.50,1.00,123.00,5.00,3.0,1,3.00,5.00,1.00,123,4.50,0.00),('b23rb','b23b23r',2.00,2.00,232.00,2.00,3.0,1,3.00,2.00,2.00,232,2.00,0.00),('b23rb23r','b23rb23b2',6.00,2.00,234.00,1.00,3.0,1,3.00,1.00,2.00,234,6.00,0.00),('dvqwdvq','wdvqwdv',4.33,2.00,93.00,2.33,3.3,3,10.00,7.00,6.00,279,13.00,0.00),('lala','lala',5.00,1.00,123.00,3.00,3.0,1,3.00,0.00,0.00,0,0.00,0.00),('pap','pap',2.00,2.00,123.00,2.00,2.0,1,2.00,0.00,0.00,0,0.00,0.00),('qwdv','qwdvqwd',5.00,2.00,123.00,3.00,3.0,1,3.00,0.00,0.00,0,0.00,0.00),('qwdvqwdv','123v12ve',6.00,2.00,123.00,2.00,3.0,1,3.00,0.00,0.00,0,0.00,0.00),('qwdvqwdvqwd','vqwdvqwdvq',5.00,2.00,123.00,2.00,3.0,0,0.00,0.00,0.00,0,0.00,0.00),('qwevq','wevqwe',9.00,3.00,123.00,5.00,5.0,1,0.00,0.00,0.00,0,0.00,0.00),('rar','rar',5.50,2.00,124.00,2.00,3.0,2,6.00,0.00,0.00,0,0.00,0.00),('v12ev12e1','e12ev12',4.50,2.00,123.00,3.00,3.0,1,3.00,3.00,2.00,123,4.50,0.00),('vqwd','vqwd1',6.00,1.00,123.00,2.00,3.0,0,0.00,0.00,0.00,0,0.00,0.00),('vqwdvqwvq','12v312',5.00,1.00,123.00,2.00,3.0,0,0.00,0.00,0.00,0,0.00,0.00);
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

-- Dump completed on 2021-11-26 23:54:51
