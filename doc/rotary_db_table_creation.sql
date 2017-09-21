-- MySQL dump 10.13  Distrib 5.7.17, for Linux (x86_64)
--
-- Host: localhost    Database: rotary_volunteers
-- ------------------------------------------------------
-- Server version	5.7.19

--
-- Table structure for table `Exclusion`
--

DROP TABLE IF EXISTS `Exclusion`;
CREATE TABLE `Exclusion` (
  `exclusion_id` int(11) NOT NULL AUTO_INCREMENT,
  `member_id` int(11) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`exclusion_id`),
  KEY `member_id_idx` (`member_id`),
  KEY `exclusion_role_id_idx` (`role_id`),
  CONSTRAINT `exclusion_member_id` FOREIGN KEY (`member_id`) REFERENCES `Member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `exclusion_role_id` FOREIGN KEY (`role_id`) REFERENCES `Role` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--
-- Table structure for table `History`
--

DROP TABLE IF EXISTS `History`;
CREATE TABLE `History` (
  `history_id` int(11) NOT NULL AUTO_INCREMENT,
  `Date` varchar(45) DEFAULT NULL,
  `member_id` int(11) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`history_id`),
  KEY `member_id_idx` (`member_id`),
  KEY `role_id_idx` (`role_id`),
  CONSTRAINT `history_member_id` FOREIGN KEY (`member_id`) REFERENCES `Member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `history_role_id` FOREIGN KEY (`role_id`) REFERENCES `Role` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `Member`
--

DROP TABLE IF EXISTS `Member`;
CREATE TABLE `Member` (
  `member_id` int(11) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(45) DEFAULT NULL,
  `LastName` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Exempt` tinyint(4) DEFAULT NULL,
  `Comment` varchar(1024) DEFAULT NULL,
  `PhoneNumber` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `Role`
--

DROP TABLE IF EXISTS `Role`;
CREATE TABLE `Role` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
