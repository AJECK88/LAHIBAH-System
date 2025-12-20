/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-11.8.3-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: LAHIBA
-- ------------------------------------------------------
-- Server version	11.8.3-MariaDB-1+b1 from Debian

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Table structure for table `Admin`
--

DROP TABLE IF EXISTS `Admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Admin` (
  `id` varchar(191) NOT NULL,
  `userName` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Admin_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Admin`
--

LOCK TABLES `Admin` WRITE;
/*!40000 ALTER TABLE `Admin` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `Admin` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `Announcement`
--

DROP TABLE IF EXISTS `Announcement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Announcement` (
  `id` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `message` text NOT NULL,
  `date` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `departmentId` varchar(191) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Announcement_departmentId_fkey` (`departmentId`),
  CONSTRAINT `Announcement_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Announcement`
--

LOCK TABLES `Announcement` WRITE;
/*!40000 ALTER TABLE `Announcement` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `Announcement` VALUES
('cmja37wfb0000ftxizdh6afxe','No school ','The will be no school today because the it is a public holiday','2025-12-17 14:09:03.719',NULL),
('cmjbx0xd5000tftxijh8qi715','missing Phone','   please check the style of container, or the props width(100%) and height(100%),\n       or add a minWidth(0) or minHeight(undefined) or use aspect(undefined) to control the\n       height and width.','2025-12-18 20:51:13.001',NULL),
('cmjbx35a8000uftxivnjfocul','no mach','   please check the style of container, or the props width(100%) and height(100%),\n       or add a minWidth(0) or minHeight(undefined) or use aspect(undefined) to control the\n       height and width.','2025-12-18 20:52:56.576',NULL),
('cmjbx3jam000vftxih7k42ntx','No school ','   please check the style of container, or the props width(100%) and height(100%),\n       or add a minWidth(0) or minHeight(undefined) or use aspect(undefined) to control the\n       height and width.','2025-12-18 20:53:14.734',NULL),
('cmjczxzot0000ft4zl5nx37di','missing Phone','\"/image/Lahiba.png\" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles \'width: \"auto\"\' or \'height: \"auto\"\' to maintain the aspect ratio.','2025-12-19 15:00:41.069',NULL),
('cmjd038y10001ft4zjiz857de','Result','Login to you student account  and check ur result','2025-12-19 15:04:46.345',NULL),
('cmjd07lg60002ft4z05xomw0q','First Se-mister Exam','Each student most be present an take part of this Exam!!','2025-12-19 15:08:09.174',NULL),
('cmjdxpa2z0003ft4z9duacrf7','Second Se-mister Exam','Each student most be present an take part of this Exam!!','2025-12-20 06:45:41.579',NULL);
/*!40000 ALTER TABLE `Announcement` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `Assignment`
--

DROP TABLE IF EXISTS `Assignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Assignment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(191) NOT NULL,
  `startDate` datetime(3) NOT NULL,
  `dueDate` datetime(3) NOT NULL,
  `courseId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Assignment_courseId_fkey` (`courseId`),
  CONSTRAINT `Assignment_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Subject` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Assignment`
--

LOCK TABLES `Assignment` WRITE;
/*!40000 ALTER TABLE `Assignment` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `Assignment` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `Attendance`
--

DROP TABLE IF EXISTS `Attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Attendance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `present` tinyint(1) NOT NULL,
  `date` datetime(3) NOT NULL,
  `status` varchar(191) NOT NULL,
  `courseId` int(11) NOT NULL,
  `studentId` varchar(191) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Attendance_courseId_fkey` (`courseId`),
  KEY `Attendance_studentId_fkey` (`studentId`),
  CONSTRAINT `Attendance_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Subject` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `Attendance_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Attendance`
--

LOCK TABLES `Attendance` WRITE;
/*!40000 ALTER TABLE `Attendance` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `Attendance` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `Classroom`
--

DROP TABLE IF EXISTS `Classroom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Classroom` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `courseId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Classroom_name_key` (`name`),
  KEY `Classroom_courseId_fkey` (`courseId`),
  CONSTRAINT `Classroom_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Subject` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Classroom`
--

LOCK TABLES `Classroom` WRITE;
/*!40000 ALTER TABLE `Classroom` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `Classroom` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `Department`
--

DROP TABLE IF EXISTS `Department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Department` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `supervisorId` varchar(191) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Department_name_key` (`name`),
  KEY `Department_supervisorId_fkey` (`supervisorId`),
  CONSTRAINT `Department_supervisorId_fkey` FOREIGN KEY (`supervisorId`) REFERENCES `Teacher` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Department`
--

LOCK TABLES `Department` WRITE;
/*!40000 ALTER TABLE `Department` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `Department` VALUES
('cmj8mj08600g9ftce3tdelyh4','Banking and finance ','cmj8ocf6600h4ftcer8r3t0in'),
('cmj8olsdl00h7ftcexcqdbqtl','Accounting','cmj8oglbg00h5ftceqmou8r60'),
('cmjb6kimv0002ftxi4w7tfwda','Computer Science','cmj8ocf6600h4ftcer8r3t0in');
/*!40000 ALTER TABLE `Department` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `Event`
--

DROP TABLE IF EXISTS `Event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Event` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `startDate` datetime(3) NOT NULL,
  `endDate` datetime(3) NOT NULL,
  `description` varchar(191) NOT NULL,
  `departmentId` varchar(191) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Event_name_key` (`name`),
  KEY `Event_departmentId_fkey` (`departmentId`),
  CONSTRAINT `Event_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Event`
--

LOCK TABLES `Event` WRITE;
/*!40000 ALTER TABLE `Event` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `Event` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `Exam`
--

DROP TABLE IF EXISTS `Exam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Exam` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `startDate` datetime(3) NOT NULL,
  `endDate` datetime(3) NOT NULL,
  `courseId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Exam_name_key` (`name`),
  KEY `Exam_courseId_fkey` (`courseId`),
  CONSTRAINT `Exam_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Subject` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Exam`
--

LOCK TABLES `Exam` WRITE;
/*!40000 ALTER TABLE `Exam` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `Exam` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `Fee`
--

DROP TABLE IF EXISTS `Fee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Fee` (
  `id` varchar(191) NOT NULL,
  `studentId` varchar(191) NOT NULL,
  `amount` double NOT NULL,
  `dueDate` datetime(3) NOT NULL,
  `status` varchar(191) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Fee_studentId_fkey` (`studentId`),
  CONSTRAINT `Fee_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Fee`
--

LOCK TABLES `Fee` WRITE;
/*!40000 ALTER TABLE `Fee` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `Fee` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `Grade`
--

DROP TABLE IF EXISTS `Grade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Grade` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Grade_name_key` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Grade`
--

LOCK TABLES `Grade` WRITE;
/*!40000 ALTER TABLE `Grade` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `Grade` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `Message`
--

DROP TABLE IF EXISTS `Message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Message` (
  `id` varchar(191) NOT NULL,
  `senderId` varchar(191) NOT NULL,
  `receiverId` varchar(191) NOT NULL,
  `message` varchar(191) NOT NULL,
  `date` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Message`
--

LOCK TABLES `Message` WRITE;
/*!40000 ALTER TABLE `Message` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `Message` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `Notification`
--

DROP TABLE IF EXISTS `Notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Notification` (
  `id` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `message` varchar(191) NOT NULL,
  `date` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Notification`
--

LOCK TABLES `Notification` WRITE;
/*!40000 ALTER TABLE `Notification` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `Notification` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `Parent`
--

DROP TABLE IF EXISTS `Parent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Parent` (
  `id` varchar(191) NOT NULL,
  `username` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `sex` enum('Male','Female') NOT NULL,
  `address` varchar(191) NOT NULL,
  `phoneNumber` varchar(191) NOT NULL,
  `firstName` varchar(191) NOT NULL,
  `lastName` varchar(191) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Parent_username_key` (`username`),
  UNIQUE KEY `Parent_email_key` (`email`),
  UNIQUE KEY `Parent_phoneNumber_key` (`phoneNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Parent`
--

LOCK TABLES `Parent` WRITE;
/*!40000 ALTER TABLE `Parent` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `Parent` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `Result`
--

DROP TABLE IF EXISTS `Result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Result` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `marks` double NOT NULL,
  `grade` varchar(191) NOT NULL,
  `date` datetime(3) NOT NULL,
  `studentId` varchar(191) NOT NULL,
  `courseId` int(11) NOT NULL,
  `examId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Result_courseId_fkey` (`courseId`),
  KEY `Result_examId_fkey` (`examId`),
  KEY `Result_studentId_fkey` (`studentId`),
  CONSTRAINT `Result_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Subject` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `Result_examId_fkey` FOREIGN KEY (`examId`) REFERENCES `Exam` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `Result_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Result`
--

LOCK TABLES `Result` WRITE;
/*!40000 ALTER TABLE `Result` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `Result` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `Student`
--

DROP TABLE IF EXISTS `Student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Student` (
  `id` varchar(191) NOT NULL,
  `username` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `age` int(11) NOT NULL,
  `address` varchar(191) NOT NULL,
  `phoneNumber` varchar(191) NOT NULL,
  `firstName` varchar(191) NOT NULL,
  `lastName` varchar(191) NOT NULL,
  `image` varchar(191) DEFAULT NULL,
  `sex` enum('Male','Female') NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `parentId` varchar(191) DEFAULT NULL,
  `departmentId` varchar(191) NOT NULL,
  `gradeId` varchar(191) DEFAULT NULL,
  `matricule` varchar(191) DEFAULT NULL,
  `DateOfBirth` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Student_username_key` (`username`),
  UNIQUE KEY `Student_email_key` (`email`),
  UNIQUE KEY `Student_phoneNumber_key` (`phoneNumber`),
  KEY `Student_departmentId_fkey` (`departmentId`),
  KEY `Student_gradeId_fkey` (`gradeId`),
  KEY `Student_parentId_fkey` (`parentId`),
  CONSTRAINT `Student_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `Student_gradeId_fkey` FOREIGN KEY (`gradeId`) REFERENCES `Grade` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `Student_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `Parent` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Student`
--

LOCK TABLES `Student` WRITE;
/*!40000 ALTER TABLE `Student` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `Student` VALUES
('cmjb6s8f40004ftxioz0a3q7o','olinga','fabriceolinga225@gmail.com','oling',25,'bamennda','680198902','shyntum','olinga',NULL,'Male','2025-12-18 08:36:37.407',NULL,'cmjb6kimv0002ftxi4w7tfwda',NULL,'csn242064','2000-06-08 00:00:00.000'),
('cmjb7057t0005ftximdn69cj9','IGNAVINE ','ignavine55@gmail.com','6736395',18,'Nitob5','673639542','Teko','Abah',NULL,'Female','2025-12-18 08:42:46.503',NULL,'cmjb6kimv0002ftxi4w7tfwda',NULL,'csn242024','2025-04-21 00:00:00.000'),
('cmjb7ap740006ftxigqcnk49z','Blexyn','blessing18@gmail.com','712007',17,'Alakuma','680149962','Abiya','Blessing',NULL,'Female','2025-12-18 08:50:58.957',NULL,'cmjb6kimv0002ftxi4w7tfwda',NULL,'CSN242035','2007-01-07 00:00:00.000'),
('cmjb7fy5m0007ftxirmosuin7','student','vtizih@gmail.com','tizih20',20,'Mile 6','678089697','Tizih Vanessa','Neh',NULL,'Female','2025-12-18 08:55:03.850',NULL,'cmjb6kimv0002ftxi4w7tfwda',NULL,'CSN292024','2005-10-27 00:00:00.000'),
('cmjb7ljlv0008ftxif2j7ee2y','Yannick','fozohdavid@gmail.com','12345',21,'Sisia 2','671829298','Fozoh','yannick',NULL,'Male','2025-12-18 08:59:24.931',NULL,'cmjb6kimv0002ftxi4w7tfwda',NULL,'CSN242018','2004-08-31 00:00:00.000'),
('cmjb8a2w2000fftxiznix8q08','TEGHA ','rtegha5@gmail.com','0909M',19,'nitop 1','679749903','TEGHA','RUTH',NULL,'Female','2025-12-18 09:18:29.666',NULL,'cmj8olsdl00h7ftcexcqdbqtl',NULL,'ACC2024','2006-04-05 00:00:00.000');
/*!40000 ALTER TABLE `Student` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `Subject`
--

DROP TABLE IF EXISTS `Subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Subject` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `gradeId` varchar(191) DEFAULT NULL,
  `departmentId` varchar(191) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Subject_name_key` (`name`),
  KEY `Subject_gradeId_fkey` (`gradeId`),
  KEY `Subject_departmentId_fkey` (`departmentId`),
  CONSTRAINT `Subject_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `Subject_gradeId_fkey` FOREIGN KEY (`gradeId`) REFERENCES `Grade` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Subject`
--

LOCK TABLES `Subject` WRITE;
/*!40000 ALTER TABLE `Subject` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `Subject` VALUES
(1,'management',NULL,NULL);
/*!40000 ALTER TABLE `Subject` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `Teacher`
--

DROP TABLE IF EXISTS `Teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Teacher` (
  `id` varchar(191) NOT NULL,
  `username` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `address` varchar(191) NOT NULL,
  `bloodGroup` varchar(191) DEFAULT NULL,
  `phoneNumber` varchar(191) NOT NULL,
  `firstName` varchar(191) NOT NULL,
  `lastName` varchar(191) NOT NULL,
  `sex` enum('Male','Female') NOT NULL,
  `image` varchar(191) DEFAULT NULL,
  `teachersId` varchar(191) NOT NULL,
  `DateOfBirth` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Teacher_username_key` (`username`),
  UNIQUE KEY `Teacher_email_key` (`email`),
  UNIQUE KEY `Teacher_phoneNumber_key` (`phoneNumber`),
  UNIQUE KEY `Teacher_teachersId_key` (`teachersId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Teacher`
--

LOCK TABLES `Teacher` WRITE;
/*!40000 ALTER TABLE `Teacher` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `Teacher` VALUES
('cmj8ocf6600h4ftcer8r3t0in','John_takum','john@gmail.com','student','Nitob5','A+','682031531','AJECK','TECHE','Male',NULL,'Teache','2025-12-22 00:00:00.000'),
('cmj8oglbg00h5ftceqmou8r60','Precious_kemfor','precious@mail.com','student','upstation','B+','683724638','Precious','Kemfor','Male',NULL,'001748','1997-06-10 00:00:00.000'),
('cmj8oj96w00h6ftce9zeg6mpb','student','kumpu@gmail.com','student','mile 90','B+','6829074383','kumpu','Sammuel','Male',NULL,'0017489','2025-12-28 00:00:00.000');
/*!40000 ALTER TABLE `Teacher` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `Timetable`
--

DROP TABLE IF EXISTS `Timetable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `Timetable` (
  `id` varchar(191) NOT NULL,
  `courseId` int(11) NOT NULL,
  `startTime` datetime(3) NOT NULL,
  `endTime` datetime(3) NOT NULL,
  `day` varchar(191) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Timetable_courseId_fkey` (`courseId`),
  CONSTRAINT `Timetable_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Subject` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Timetable`
--

LOCK TABLES `Timetable` WRITE;
/*!40000 ALTER TABLE `Timetable` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `Timetable` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `_StudentToSubject`
--

DROP TABLE IF EXISTS `_StudentToSubject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `_StudentToSubject` (
  `A` varchar(191) NOT NULL,
  `B` int(11) NOT NULL,
  UNIQUE KEY `_StudentToSubject_AB_unique` (`A`,`B`),
  KEY `_StudentToSubject_B_index` (`B`),
  CONSTRAINT `_StudentToSubject_A_fkey` FOREIGN KEY (`A`) REFERENCES `Student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `_StudentToSubject_B_fkey` FOREIGN KEY (`B`) REFERENCES `Subject` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_StudentToSubject`
--

LOCK TABLES `_StudentToSubject` WRITE;
/*!40000 ALTER TABLE `_StudentToSubject` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `_StudentToSubject` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `_SubjectToTeacher`
--

DROP TABLE IF EXISTS `_SubjectToTeacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `_SubjectToTeacher` (
  `A` int(11) NOT NULL,
  `B` varchar(191) NOT NULL,
  UNIQUE KEY `_SubjectToTeacher_AB_unique` (`A`,`B`),
  KEY `_SubjectToTeacher_B_index` (`B`),
  CONSTRAINT `_SubjectToTeacher_A_fkey` FOREIGN KEY (`A`) REFERENCES `Subject` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `_SubjectToTeacher_B_fkey` FOREIGN KEY (`B`) REFERENCES `Teacher` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_SubjectToTeacher`
--

LOCK TABLES `_SubjectToTeacher` WRITE;
/*!40000 ALTER TABLE `_SubjectToTeacher` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `_SubjectToTeacher` VALUES
(1,'cmj8ocf6600h4ftcer8r3t0in'),
(1,'cmj8oglbg00h5ftceqmou8r60'),
(1,'cmj8oj96w00h6ftce9zeg6mpb');
/*!40000 ALTER TABLE `_SubjectToTeacher` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `_prisma_migrations` VALUES
('6c53e161-de52-41ff-98a5-67735371373a','15bb1a20f4c3b5c46f439b6c22c72c66242fce9bc4896284d89f0f4b207dbd98','2025-12-16 13:27:27.538','20251207142919_increase_message_length',NULL,NULL,'2025-12-16 13:27:27.527',1),
('c2533384-e524-441e-85fa-9c9c60937bb5','0b076528c3590cab34f693891c504dadf03c608d2b12fc822a9df6f3b1911539','2025-12-16 13:27:27.526','20251204195153_int',NULL,NULL,'2025-12-16 13:27:27.249',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;
commit;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2025-12-20  8:38:29
