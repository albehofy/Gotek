-- Select database automatically
USE `gotenrze_mediaglow`;

-- MySQL dump 10.13  Distrib 8.4.11, for Linux (x86_64)
--
-- Host: localhost    Database: media_glow_crm
-- ------------------------------------------------------
-- Server version	8.4.11-0ubuntu0.26.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `about_pages`
--

DROP TABLE IF EXISTS `about_pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about_pages` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `hero` json DEFAULT NULL,
  `story` json DEFAULT NULL,
  `vision` json DEFAULT NULL,
  `mission` json DEFAULT NULL,
  `values` json DEFAULT NULL,
  `team_text` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_pages`
--

LOCK TABLES `about_pages` WRITE;
/*!40000 ALTER TABLE `about_pages` DISABLE KEYS */;
/*!40000 ALTER TABLE `about_pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `about_timelines`
--

DROP TABLE IF EXISTS `about_timelines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about_timelines` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `year` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` json DEFAULT NULL,
  `description` json DEFAULT NULL,
  `order_index` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_timelines`
--

LOCK TABLES `about_timelines` WRITE;
/*!40000 ALTER TABLE `about_timelines` DISABLE KEYS */;
/*!40000 ALTER TABLE `about_timelines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activity_log`
--

DROP TABLE IF EXISTS `activity_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity_log` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `log_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `event` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subject_id` bigint unsigned DEFAULT NULL,
  `causer_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `causer_id` bigint unsigned DEFAULT NULL,
  `properties` json DEFAULT NULL,
  `batch_uuid` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `subject` (`subject_type`,`subject_id`),
  KEY `causer` (`causer_type`,`causer_id`),
  KEY `activity_log_log_name_index` (`log_name`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity_log`
--

LOCK TABLES `activity_log` WRITE;
/*!40000 ALTER TABLE `activity_log` DISABLE KEYS */;
INSERT INTO `activity_log` VALUES (15,'deal','تمت إضافة مهمة جديدة للصفقة: \"Task 1\" بسعر عميل 2,000.00 ج.م ومستحقات موظف 0.00 ج.م بواسطة Media Glow Super Admin','App\\Models\\Deal',NULL,26,'App\\Models\\User',1,'{\"icon\": \"fa-plus-circle\", \"color\": \"#10b981\", \"field\": \"task_created\", \"title\": \"إضافة مهمة جديدة للصفقة\", \"task_id\": 42, \"causer_id\": 1, \"task_title\": \"Task 1\", \"causer_name\": \"Media Glow Super Admin\", \"causer_role\": \"super_admin\", \"causer_email\": \"admin@mediaglowegypt.com\", \"client_price\": 2000, \"employee_price\": 0, \"created_at_human\": \"23 أكتوبر 2026 - 03:41 م\"}',NULL,'2026-10-23 12:41:10','2026-10-23 12:41:10'),(16,'deal','تمت إضافة مهمة جديدة للصفقة: \"Task 2\" بسعر عميل 3,000.00 ج.م ومستحقات موظف 0.00 ج.م بواسطة Media Glow Super Admin','App\\Models\\Deal',NULL,26,'App\\Models\\User',1,'{\"icon\": \"fa-plus-circle\", \"color\": \"#10b981\", \"field\": \"task_created\", \"title\": \"إضافة مهمة جديدة للصفقة\", \"task_id\": 43, \"causer_id\": 1, \"task_title\": \"Task 2\", \"causer_name\": \"Media Glow Super Admin\", \"causer_role\": \"super_admin\", \"causer_email\": \"admin@mediaglowegypt.com\", \"client_price\": 3000, \"employee_price\": 0, \"created_at_human\": \"23 أكتوبر 2026 - 03:41 م\"}',NULL,'2026-10-23 12:41:10','2026-10-23 12:41:10'),(17,'deal','تم تعديل السعر الإجمالي للصفقة من 5,000.00 ج.م إلى 7,500.00 ج.م بواسطة Media Glow Super Admin','App\\Models\\Deal',NULL,26,'App\\Models\\User',1,'{\"new\": 7500, \"old\": 5000, \"icon\": \"fa-money-bill-wave\", \"color\": \"#10b981\", \"field\": \"price_change\", \"title\": \"تعديل السعر الإجمالي للصفقة\", \"causer_id\": 1, \"causer_name\": \"Media Glow Super Admin\", \"causer_role\": \"super_admin\", \"causer_email\": \"admin@mediaglowegypt.com\", \"created_at_human\": \"23 أكتوبر 2026 - 03:41 م\"}',NULL,'2026-10-23 12:41:10','2026-10-23 12:41:10'),(18,'deal','تم تعديل عنوان الصفقة من \"Test Deal Verification\" إلى \"Updated Deal Title Verification\" بواسطة Media Glow Super Admin','App\\Models\\Deal',NULL,26,'App\\Models\\User',1,'{\"new\": \"Updated Deal Title Verification\", \"old\": \"Test Deal Verification\", \"icon\": \"fa-pen-to-square\", \"color\": \"#6366f1\", \"field\": \"title_change\", \"title\": \"تعديل عنوان الصفقة\", \"causer_id\": 1, \"causer_name\": \"Media Glow Super Admin\", \"causer_role\": \"super_admin\", \"causer_email\": \"admin@mediaglowegypt.com\", \"created_at_human\": \"23 أكتوبر 2026 - 03:41 م\"}',NULL,'2026-10-23 12:41:10','2026-10-23 12:41:10'),(19,'deal','تم تغيير حالة الصفقة من \"قيد الانتظار\" إلى \"نشطة / سارية\" بواسطة Media Glow Super Admin','App\\Models\\Deal',NULL,26,'App\\Models\\User',1,'{\"new\": \"نشطة / سارية\", \"old\": \"قيد الانتظار\", \"icon\": \"fa-arrows-rotate\", \"color\": \"#f59e0b\", \"field\": \"status_change\", \"title\": \"تغيير حالة الصفقة\", \"causer_id\": 1, \"causer_name\": \"Media Glow Super Admin\", \"causer_role\": \"super_admin\", \"causer_email\": \"admin@mediaglowegypt.com\", \"created_at_human\": \"23 أكتوبر 2026 - 03:41 م\"}',NULL,'2026-10-23 12:41:10','2026-10-23 12:41:10'),(20,'deal','تم تعديل سعر المهمة \"Task 1 Updated\" من 2,000.00 ج.م إلى 3,500.00 ج.م بواسطة Media Glow Super Admin','App\\Models\\Deal',NULL,26,'App\\Models\\User',1,'{\"new\": 3500, \"old\": 2000, \"icon\": \"fa-money-bill-wave\", \"color\": \"#10b981\", \"field\": \"task_price_change\", \"title\": \"تعديل سعر المهمة\", \"task_id\": 42, \"causer_id\": 1, \"task_title\": \"Task 1 Updated\", \"causer_name\": \"Media Glow Super Admin\", \"causer_role\": \"super_admin\", \"causer_email\": \"admin@mediaglowegypt.com\", \"created_at_human\": \"23 أكتوبر 2026 - 03:41 م\"}',NULL,'2026-10-23 12:41:11','2026-10-23 12:41:11'),(21,'deal','تم تعديل مستحقات الموظف للمهمة \"Task 1 Updated\" من 0.00 ج.م إلى 0.00 ج.م بواسطة Media Glow Super Admin','App\\Models\\Deal',NULL,26,'App\\Models\\User',1,'{\"new\": 0, \"old\": 0, \"icon\": \"fa-hand-holding-dollar\", \"color\": \"#f59e0b\", \"field\": \"task_employee_price_change\", \"title\": \"تعديل مستحق الموظف\", \"task_id\": 42, \"causer_id\": 1, \"task_title\": \"Task 1 Updated\", \"causer_name\": \"Media Glow Super Admin\", \"causer_role\": \"super_admin\", \"causer_email\": \"admin@mediaglowegypt.com\", \"created_at_human\": \"23 أكتوبر 2026 - 03:41 م\"}',NULL,'2026-10-23 12:41:11','2026-10-23 12:41:11'),(22,'deal','تم تعديل عنوان المهمة من \"Task 1\" إلى \"Task 1 Updated\" بواسطة Media Glow Super Admin','App\\Models\\Deal',NULL,26,'App\\Models\\User',1,'{\"new\": \"Task 1 Updated\", \"old\": \"Task 1\", \"icon\": \"fa-pen-to-square\", \"color\": \"#6366f1\", \"field\": \"task_title_change\", \"title\": \"تعديل عنوان مهمة\", \"task_id\": 42, \"causer_id\": 1, \"causer_name\": \"Media Glow Super Admin\", \"causer_role\": \"super_admin\", \"causer_email\": \"admin@mediaglowegypt.com\", \"created_at_human\": \"23 أكتوبر 2026 - 03:41 م\"}',NULL,'2026-10-23 12:41:11','2026-10-23 12:41:11'),(23,'deal','تم تعديل سعر بند المهمة \"Task 1 Updated\" من 2,000.00 ج.م إلى 3,500.00 ج.م بواسطة Media Glow Super Admin','App\\Models\\Deal',NULL,26,'App\\Models\\User',1,'{\"new\": 3500, \"old\": 2000, \"icon\": \"fa-file-invoice-dollar\", \"color\": \"#10b981\", \"field\": \"task_price_change\", \"title\": \"تعديل سعر بند تنفيذي\", \"causer_id\": 1, \"task_title\": \"Task 1 Updated\", \"causer_name\": \"Media Glow Super Admin\", \"causer_role\": \"super_admin\", \"causer_email\": \"admin@mediaglowegypt.com\", \"created_at_human\": \"23 أكتوبر 2026 - 03:41 م\"}',NULL,'2026-10-23 12:41:11','2026-10-23 12:41:11'),(24,'deal','تمت إضافة مهمة جديدة للصفقة: \"Task 3 Newly Added\" بسعر عميل 4,000.00 ج.م ومستحقات موظف 0.00 ج.م بواسطة Media Glow Super Admin','App\\Models\\Deal',NULL,26,'App\\Models\\User',1,'{\"icon\": \"fa-plus-circle\", \"color\": \"#10b981\", \"field\": \"task_created\", \"title\": \"إضافة مهمة جديدة للصفقة\", \"task_id\": 44, \"causer_id\": 1, \"task_title\": \"Task 3 Newly Added\", \"causer_name\": \"Media Glow Super Admin\", \"causer_role\": \"super_admin\", \"causer_email\": \"admin@mediaglowegypt.com\", \"client_price\": 4000, \"employee_price\": 0, \"created_at_human\": \"23 أكتوبر 2026 - 03:41 م\"}',NULL,'2026-10-23 12:41:11','2026-10-23 12:41:11'),(25,'deal','تمت إضافة بند/مهمة تنفيذية جديدة: \"Task 3 Newly Added\" بسعر عميل 4,000.00 ج.م بواسطة Media Glow Super Admin','App\\Models\\Deal',NULL,26,'App\\Models\\User',1,'{\"icon\": \"fa-plus-circle\", \"color\": \"#6366f1\", \"field\": \"task_added\", \"title\": \"إضافة بند تنفيذي جديد\", \"causer_id\": 1, \"task_title\": \"Task 3 Newly Added\", \"causer_name\": \"Media Glow Super Admin\", \"causer_role\": \"super_admin\", \"causer_email\": \"admin@mediaglowegypt.com\", \"client_price\": 4000, \"created_at_human\": \"23 أكتوبر 2026 - 03:41 م\"}',NULL,'2026-10-23 12:41:11','2026-10-23 12:41:11'),(26,'deal','تم حذف البند/المهمة التنفيذية \"Task 2\" من الصفقة بواسطة Media Glow Super Admin','App\\Models\\Deal',NULL,26,'App\\Models\\User',1,'{\"icon\": \"fa-trash-can\", \"color\": \"#f43f5e\", \"field\": \"task_removed\", \"title\": \"حذف بند تنفيذي\", \"causer_id\": 1, \"task_title\": \"Task 2\", \"causer_name\": \"Media Glow Super Admin\", \"causer_role\": \"super_admin\", \"causer_email\": \"admin@mediaglowegypt.com\", \"created_at_human\": \"23 أكتوبر 2026 - 03:41 م\"}',NULL,'2026-10-23 12:41:11','2026-10-23 12:41:11'),(27,'deal','تم حذف المهمة \"Task 2\" من الصفقة بواسطة Media Glow Super Admin','App\\Models\\Deal',NULL,26,'App\\Models\\User',1,'{\"icon\": \"fa-trash-can\", \"color\": \"#f43f5e\", \"field\": \"task_deleted\", \"title\": \"حذف مهمة من الصفقة\", \"task_id\": 43, \"causer_id\": 1, \"task_title\": \"Task 2\", \"causer_name\": \"Media Glow Super Admin\", \"causer_role\": \"super_admin\", \"causer_email\": \"admin@mediaglowegypt.com\", \"created_at_human\": \"23 أكتوبر 2026 - 03:41 م\"}',NULL,'2026-10-23 12:41:11','2026-10-23 12:41:11'),(28,'deal','تم تسجيل دفعة مالية بقيمة 10.00 ج.م بواسطة Media Glow Super Admin (طريقة التحصيل: نقدي (Cash))','App\\Models\\Deal',NULL,2,'App\\Models\\User',1,'{\"icon\": \"fa-money-bill-wave\", \"color\": \"#10b981\", \"field\": \"payment\", \"title\": \"تسجيل تحصيل مالي\", \"amount\": 10, \"causer_name\": \"Media Glow Super Admin\", \"causer_role\": \"super_admin\", \"receipt_ref\": \"TEST1234\", \"causer_email\": \"admin@mediaglowegypt.com\", \"payment_method\": \"cash\", \"created_at_human\": \"27 أكتوبر 2026 - 04:30 م\", \"payment_method_label\": \"نقدي (Cash)\"}',NULL,'2026-10-27 13:30:11','2026-10-27 13:30:11'),(29,'deal','تم تسجيل دفعة مالية بقيمة 10.00 ج.م بواسطة Media Glow Super Admin (طريقة التحصيل: نقدي (Cash))','App\\Models\\Deal',NULL,2,'App\\Models\\User',1,'{\"icon\": \"fa-money-bill-wave\", \"color\": \"#10b981\", \"field\": \"payment\", \"title\": \"تسجيل تحصيل مالي\", \"amount\": 10, \"causer_name\": \"Media Glow Super Admin\", \"causer_role\": \"super_admin\", \"receipt_ref\": \"TEST1234\", \"causer_email\": \"admin@mediaglowegypt.com\", \"payment_method\": \"cash\", \"created_at_human\": \"27 أكتوبر 2026 - 04:30 م\", \"payment_method_label\": \"نقدي (Cash)\"}',NULL,'2026-10-27 13:30:25','2026-10-27 13:30:25'),(30,'deal','تم تسجيل دفعة مالية بقيمة 10.00 ج.م بواسطة Media Glow Super Admin (طريقة التحصيل: نقدي (Cash))','App\\Models\\Deal',NULL,2,'App\\Models\\User',1,'{\"icon\": \"fa-money-bill-wave\", \"color\": \"#10b981\", \"field\": \"payment\", \"title\": \"تسجيل تحصيل مالي\", \"amount\": 10, \"causer_name\": \"Media Glow Super Admin\", \"causer_role\": \"super_admin\", \"receipt_ref\": \"TEST1234\", \"causer_email\": \"admin@mediaglowegypt.com\", \"payment_method\": \"cash\", \"created_at_human\": \"27 أكتوبر 2026 - 04:30 م\", \"payment_method_label\": \"نقدي (Cash)\"}',NULL,'2026-10-27 13:30:36','2026-10-27 13:30:36'),(31,'deal','تم تسجيل دفعة مالية بقيمة 5.00 ج.م بواسطة Media Glow Super Admin (طريقة التحصيل: نقدي (Cash))','App\\Models\\Deal',NULL,2,'App\\Models\\User',1,'{\"icon\": \"fa-money-bill-wave\", \"color\": \"#10b981\", \"field\": \"payment\", \"title\": \"تسجيل تحصيل مالي\", \"amount\": 5, \"causer_name\": \"Media Glow Super Admin\", \"causer_role\": \"super_admin\", \"receipt_ref\": \"TEST_VERIFY\", \"causer_email\": \"admin@mediaglowegypt.com\", \"payment_method\": \"cash\", \"created_at_human\": \"27 أكتوبر 2026 - 04:35 م\", \"payment_method_label\": \"نقدي (Cash)\"}',NULL,'2026-10-27 13:35:16','2026-10-27 13:35:16');
/*!40000 ALTER TABLE `activity_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attachments`
--

DROP TABLE IF EXISTS `attachments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attachments` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `attachable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `attachable_id` bigint unsigned NOT NULL,
  `file_path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_size` bigint unsigned NOT NULL,
  `category` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT 'document',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thumbnail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `uploaded_by` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `attachments_attachable_type_attachable_id_index` (`attachable_type`,`attachable_id`),
  KEY `attachments_uploaded_by_foreign` (`uploaded_by`),
  CONSTRAINT `attachments_uploaded_by_foreign` FOREIGN KEY (`uploaded_by`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attachments`
--

LOCK TABLES `attachments` WRITE;
/*!40000 ALTER TABLE `attachments` DISABLE KEYS */;
/*!40000 ALTER TABLE `attachments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `media_path` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `media_type` enum('image','video') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `loves_count` int unsigned NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `img_alt` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`),
  KEY `cache_expiration_index` (`expiration`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache`
--

LOCK TABLES `cache` WRITE;
/*!40000 ALTER TABLE `cache` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`),
  KEY `cache_locks_expiration_index` (`expiration`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache_locks`
--

LOCK TABLES `cache_locks` WRITE;
/*!40000 ALTER TABLE `cache_locks` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache_locks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `categories_slug_unique` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_monthly_plans`
--

DROP TABLE IF EXISTS `client_monthly_plans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client_monthly_plans` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `client_id` bigint unsigned NOT NULL,
  `month_year` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `brief_pdf_path` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `brief_pdf_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `plan_pdf_path` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `plan_pdf_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notes` text COLLATE utf8mb4_unicode_ci,
  `created_by` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `client_monthly_plans_client_id_foreign` (`client_id`),
  KEY `client_monthly_plans_created_by_foreign` (`created_by`),
  CONSTRAINT `client_monthly_plans_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `client_monthly_plans_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_monthly_plans`
--

LOCK TABLES `client_monthly_plans` WRITE;
/*!40000 ALTER TABLE `client_monthly_plans` DISABLE KEYS */;
/*!40000 ALTER TABLE `client_monthly_plans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_payments`
--

DROP TABLE IF EXISTS `client_payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client_payments` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `deal_id` bigint unsigned DEFAULT NULL,
  `client_id` bigint unsigned DEFAULT NULL,
  `amount` decimal(12,2) NOT NULL,
  `payment_date` date NOT NULL,
  `payment_method` enum('cash','cash_hand','instapay','bank_transfer') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'cash',
  `receipt_ref` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notes` text COLLATE utf8mb4_unicode_ci,
  `created_by` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `client_payments_created_by_foreign` (`created_by`),
  KEY `client_payments_deal_id_foreign` (`deal_id`),
  KEY `client_payments_client_id_foreign` (`client_id`),
  CONSTRAINT `client_payments_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `client_payments_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `client_payments_deal_id_foreign` FOREIGN KEY (`deal_id`) REFERENCES `deals` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_payments`
--

LOCK TABLES `client_payments` WRITE;
/*!40000 ALTER TABLE `client_payments` DISABLE KEYS */;
INSERT INTO `client_payments` VALUES (11,2,4,10.00,'2026-10-27','cash','TEST1234',NULL,1,'2026-10-27 13:29:59','2026-10-27 13:29:59');
/*!40000 ALTER TABLE `client_payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_plans`
--

DROP TABLE IF EXISTS `client_plans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client_plans` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `client_id` bigint unsigned NOT NULL,
  `deal_id` bigint unsigned DEFAULT NULL,
  `plan_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'monthly_brief',
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file_path` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `uploaded_by` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `client_plans_client_id_foreign` (`client_id`),
  KEY `client_plans_uploaded_by_foreign` (`uploaded_by`),
  CONSTRAINT `client_plans_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `client_plans_uploaded_by_foreign` FOREIGN KEY (`uploaded_by`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_plans`
--

LOCK TABLES `client_plans` WRITE;
/*!40000 ALTER TABLE `client_plans` DISABLE KEYS */;
/*!40000 ALTER TABLE `client_plans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_infos`
--

DROP TABLE IF EXISTS `contact_infos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact_infos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `whatsapp_phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `whatsapp_description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `whatsapp_cta_label` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `official_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `official_email_description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sales_phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sales_person` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `general_manager_phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `general_manager_description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company_address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `google_map_location` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `business_hours_json` text COLLATE utf8mb4_unicode_ci,
  `emergency_support` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_infos`
--

LOCK TABLES `contact_infos` WRITE;
/*!40000 ALTER TABLE `contact_infos` DISABLE KEYS */;
/*!40000 ALTER TABLE `contact_infos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_messages`
--

DROP TABLE IF EXISTS `contact_messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact_messages` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `service_needed` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `budget_range` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `project_details` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_messages`
--

LOCK TABLES `contact_messages` WRITE;
/*!40000 ALTER TABLE `contact_messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `contact_messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contracts`
--

DROP TABLE IF EXISTS `contracts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contracts` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `client_id` bigint unsigned DEFAULT NULL,
  `admin_id` bigint unsigned DEFAULT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `signed_at` timestamp NULL DEFAULT NULL,
  `audit_log` json DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `internal_project_id` bigint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `contracts_internal_project_id_foreign` (`internal_project_id`),
  KEY `contracts_admin_id_foreign` (`admin_id`),
  KEY `contracts_client_id_foreign` (`client_id`),
  CONSTRAINT `contracts_admin_id_foreign` FOREIGN KEY (`admin_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `contracts_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `contracts_internal_project_id_foreign` FOREIGN KEY (`internal_project_id`) REFERENCES `internal_projects` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contracts`
--

LOCK TABLES `contracts` WRITE;
/*!40000 ALTER TABLE `contracts` DISABLE KEYS */;
/*!40000 ALTER TABLE `contracts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `custody_accounts`
--

DROP TABLE IF EXISTS `custody_accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `custody_accounts` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `employee_id` bigint unsigned NOT NULL,
  `issued_amount` decimal(12,2) NOT NULL DEFAULT '0.00',
  `returned_amount` decimal(12,2) NOT NULL DEFAULT '0.00',
  `spent_amount` decimal(12,2) NOT NULL DEFAULT '0.00',
  `status` enum('open','settled','overdue') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  `notes` text COLLATE utf8mb4_unicode_ci,
  `created_by` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `custody_accounts_employee_id_foreign` (`employee_id`),
  KEY `custody_accounts_created_by_foreign` (`created_by`),
  CONSTRAINT `custody_accounts_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `custody_accounts_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `custody_accounts`
--

LOCK TABLES `custody_accounts` WRITE;
/*!40000 ALTER TABLE `custody_accounts` DISABLE KEYS */;
/*!40000 ALTER TABLE `custody_accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deals`
--

DROP TABLE IF EXISTS `deals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deals` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `attachment_path` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reference_link` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `shooting_date` date DEFAULT NULL,
  `delivery_date` date DEFAULT NULL,
  `dates_not_specified` tinyint(1) NOT NULL DEFAULT '0',
  `client_id` bigint unsigned DEFAULT NULL,
  `total_price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `discount_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'none',
  `discount_value` decimal(12,2) NOT NULL DEFAULT '0.00',
  `paid_amount` decimal(10,2) NOT NULL DEFAULT '0.00',
  `status` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `created_by` bigint unsigned NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `department_id` bigint unsigned DEFAULT NULL,
  `sales_person_id` bigint unsigned DEFAULT NULL,
  `sales_commission_type` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT 'none',
  `sales_commission_value` decimal(10,2) NOT NULL DEFAULT '0.00',
  `agreed_scope` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `deals_client_id_foreign` (`client_id`),
  KEY `deals_created_by_foreign` (`created_by`),
  KEY `deals_department_id_foreign` (`department_id`),
  KEY `deals_sales_person_id_foreign` (`sales_person_id`),
  CONSTRAINT `deals_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `deals_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `deals_department_id_foreign` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE SET NULL,
  CONSTRAINT `deals_sales_person_id_foreign` FOREIGN KEY (`sales_person_id`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deals`
--

LOCK TABLES `deals` WRITE;
/*!40000 ALTER TABLE `deals` DISABLE KEYS */;
INSERT INTO `deals` VALUES (2,'تجريبي',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,4,120.00,'none',0.00,10.00,'active',1,NULL,'2026-08-24 06:30:32','2026-10-27 13:35:23',1,NULL,'none',0.00,'تجريبي'),(26,'Updated Deal Title Verification',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,2,7500.00,'none',0.00,0.00,'active',1,NULL,'2026-10-23 12:41:10','2026-10-23 12:41:11',1,NULL,'none',0.00,NULL);
/*!40000 ALTER TABLE `deals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `manager_id` bigint unsigned DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `has_partner` tinyint(1) NOT NULL DEFAULT '0',
  `partner_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `partner_percentage` decimal(5,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'قسم 1','قسم اساسي 1',5,NULL,'2026-08-24 05:45:58','2026-10-23 15:00:44',0,NULL,50.00),(14,'قسم 2','test',28,NULL,'2026-10-23 15:01:07','2026-10-23 15:01:07',0,NULL,50.00);
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `extras`
--

DROP TABLE IF EXISTS `extras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `extras` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `extras`
--

LOCK TABLES `extras` WRITE;
/*!40000 ALTER TABLE `extras` DISABLE KEYS */;
/*!40000 ALTER TABLE `extras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faqs`
--

DROP TABLE IF EXISTS `faqs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faqs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `question_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `question_ar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `answer_en` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `answer_ar` text COLLATE utf8mb4_unicode_ci,
  `sort_order` int NOT NULL DEFAULT '0',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faqs`
--

LOCK TABLES `faqs` WRITE;
/*!40000 ALTER TABLE `faqs` DISABLE KEYS */;
/*!40000 ALTER TABLE `faqs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `finance_categories`
--

DROP TABLE IF EXISTS `finance_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `finance_categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` enum('expense','income') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'expense',
  `is_system` tinyint(1) NOT NULL DEFAULT '0',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `finance_categories`
--

LOCK TABLES `finance_categories` WRITE;
/*!40000 ALTER TABLE `finance_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `finance_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fixed_assets`
--

DROP TABLE IF EXISTS `fixed_assets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fixed_assets` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` decimal(12,2) NOT NULL,
  `purchase_date` date DEFAULT NULL,
  `department_id` bigint unsigned DEFAULT NULL,
  `is_partnered_asset` tinyint(1) NOT NULL DEFAULT '0',
  `status` enum('active','maintenance','written_off') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `notes` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fixed_assets_department_id_foreign` (`department_id`),
  CONSTRAINT `fixed_assets_department_id_foreign` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fixed_assets`
--

LOCK TABLES `fixed_assets` WRITE;
/*!40000 ALTER TABLE `fixed_assets` DISABLE KEYS */;
/*!40000 ALTER TABLE `fixed_assets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `internal_projects`
--

DROP TABLE IF EXISTS `internal_projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `internal_projects` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `department_id` bigint unsigned NOT NULL,
  `status` enum('active','on_hold','completed','archived') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `internal_projects_department_id_foreign` (`department_id`),
  CONSTRAINT `internal_projects_department_id_foreign` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `internal_projects`
--

LOCK TABLES `internal_projects` WRITE;
/*!40000 ALTER TABLE `internal_projects` DISABLE KEYS */;
/*!40000 ALTER TABLE `internal_projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_batches`
--

LOCK TABLES `job_batches` WRITE;
/*!40000 ALTER TABLE `job_batches` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ledger_entries`
--

DROP TABLE IF EXISTS `ledger_entries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ledger_entries` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `type` enum('income','expense','custody_issued','custody_returned') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'expense',
  `category_id` bigint unsigned DEFAULT NULL,
  `department_id` bigint unsigned DEFAULT NULL,
  `deal_id` bigint unsigned DEFAULT NULL,
  `client_id` bigint unsigned DEFAULT NULL,
  `employee_id` bigint unsigned DEFAULT NULL,
  `amount` decimal(12,2) NOT NULL,
  `payment_method` enum('cash','cash_hand','instapay','bank_transfer') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'cash',
  `description` text COLLATE utf8mb4_unicode_ci,
  `receipt_path` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ledger_entries_category_id_foreign` (`category_id`),
  KEY `ledger_entries_department_id_foreign` (`department_id`),
  KEY `ledger_entries_deal_id_foreign` (`deal_id`),
  KEY `ledger_entries_client_id_foreign` (`client_id`),
  KEY `ledger_entries_employee_id_foreign` (`employee_id`),
  KEY `ledger_entries_created_by_foreign` (`created_by`),
  CONSTRAINT `ledger_entries_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `finance_categories` (`id`) ON DELETE SET NULL,
  CONSTRAINT `ledger_entries_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `ledger_entries_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ledger_entries_deal_id_foreign` FOREIGN KEY (`deal_id`) REFERENCES `deals` (`id`) ON DELETE SET NULL,
  CONSTRAINT `ledger_entries_department_id_foreign` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE SET NULL,
  CONSTRAINT `ledger_entries_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ledger_entries`
--

LOCK TABLES `ledger_entries` WRITE;
/*!40000 ALTER TABLE `ledger_entries` DISABLE KEYS */;
INSERT INTO `ledger_entries` VALUES (4,'2026-10-27','income',NULL,1,2,4,NULL,10.00,'cash','دفعة جزئية للعقد/الصفقة: تجريبي',NULL,1,'2026-10-27 13:29:59','2026-10-27 13:29:59');
/*!40000 ALTER TABLE `ledger_entries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'0001_01_01_000000_create_users_table',1),(2,'0001_01_01_000001_create_cache_table',1),(3,'0001_01_01_000002_create_jobs_table',1),(4,'2026_02_23_231135_create_personal_access_tokens_table',1),(5,'2026_02_23_231621_create_projects_table',1),(6,'2026_02_23_235300_create_categories_table',1),(7,'2026_02_23_235329_add_category_id_to_projects_table',1),(8,'2026_03_16_013519_remove_category_from_projects_table',1),(9,'2026_03_16_013700_create_project_images_table',1),(10,'2026_03_16_015706_create_contact_messages_table',1),(11,'2026_03_16_031500_create_contact_infos_table',1),(12,'2026_03_16_055614_faq',1),(13,'2026_03_26_003807_change_columns_to_json_in_projects_table',1),(14,'2026_03_26_060305_create_services_table',1),(15,'2026_04_01_150711_blog',1),(16,'2026_04_09_173612_images_alt',1),(17,'2026_04_10_123843_create_testimonials_table',1),(18,'2026_04_18_145847_create_departments_table',1),(19,'2026_04_18_145850_modify_users_table',1),(20,'2026_04_18_150215_create_tasks_table',1),(21,'2026_04_18_150251_create_task_details_tables',1),(22,'2026_04_18_150428_create_contracts_table',1),(23,'2026_04_18_190219_create_internal_projects_table',1),(24,'2026_04_18_190749_contract_link_project',1),(25,'2026_04_19_001656_create_notifications_table',1),(26,'2026_04_19_013216_tasks_foreign_key',1),(27,'2026_04_19_190120_create_task_user_table',1),(28,'2026_04_21_003220_create_task_attachments_table',1),(29,'2026_04_23_010928_create_activity_log_table',1),(30,'2026_04_23_010929_add_event_column_to_activity_log_table',1),(31,'2026_04_23_010930_add_batch_uuid_column_to_activity_log_table',1),(32,'2026_05_08_191253_add_description_to_categories_table',1),(33,'2026_05_17_143610_add_view_in_home_to_projects_table',1),(34,'2026_05_17_145333_create_extras_table',1),(35,'2026_05_18_185359_make_job_title_nullable_in_testimonials_table',1),(36,'2026_05_18_185820_make_feedback_nullable_in_testimonials_table',1),(37,'2026_06_05_212943_add_detail_columns_to_projects_table',1),(38,'2026_06_06_092353_create_about_pages_table',1),(39,'2026_06_06_092422_create_about_timelines_table',1),(40,'2026_06_06_092917_create_page_contents_table',1),(41,'2026_06_06_123205_create_deals_table',1),(42,'2026_06_06_123219_add_deal_columns_to_tasks_table',1),(43,'2026_06_06_123224_create_task_notes_table',1),(44,'2026_06_06_123314_make_internal_project_id_nullable_on_tasks_table',1),(45,'2026_08_12_000001_create_roles_and_permissions_tables',1),(46,'2026_08_12_000002_create_notifications_table',1),(47,'2026_08_12_000003_create_task_attachments_table',1),(48,'2026_08_12_000004_create_finance_and_ledger_tables',1),(49,'2026_08_12_000005_extend_departments_and_sections_table',1),(50,'2026_08_12_000006_extend_deals_contracts_and_tasks_tables',1),(51,'2026_08_12_000007_extend_users_compensation_table',1),(52,'2026_08_15_000010_add_phone_to_users_table',1),(53,'2026_08_22_221000_alter_role_column_in_users_table',2),(54,'2026_08_24_115000_alter_sales_commission_type_in_deals_table',3),(55,'2026_08_24_123500_alter_status_column_in_tasks_table',4),(56,'2026_09_06_120001_add_hold_and_client_code_and_user_roles_table',5),(57,'2026_09_06_120002_add_dates_and_attachments_to_deals_and_tasks',5),(58,'2026_09_09_120003_alter_status_column_in_deals_table',5),(59,'2026_09_23_201500_fix_foreign_key_constraints_for_deletion',6),(60,'2026_09_23_210000_update_crm_features_and_fixes',7),(61,'2026_10_23_180000_add_client_id_to_tasks_table',8),(62,'2026_10_23_190000_add_category_and_description_to_attachments_table',9),(63,'2026_10_23_000001_add_client_category_and_vip_to_users_table',10);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notifiable_id` bigint unsigned DEFAULT NULL,
  `is_read` tinyint(1) NOT NULL DEFAULT '0',
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `notifications_user_id_foreign` (`user_id`),
  CONSTRAINT `notifications_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES (1,5,'assignment','مهمة جديدة مسندة إليك كمدير قسم','تم إسناد المهمة \"تجريبي صفقة\" من الصفقة \"تجريبي\" لك تلقائياً.','App\\Models\\Task',1,0,NULL,'2026-08-24 06:30:32','2026-08-24 06:30:32'),(2,5,'assignment','صفقة جديدة بقسمك','تم إسناد الصفقة الجديدة تجريبي لقسمك.','App\\Models\\Deal',2,0,NULL,'2026-08-24 06:30:32','2026-08-24 06:30:32'),(3,5,'assignment','تم إسناد المهمة','تم إسناد المهمة: تجريبي 2','App\\Models\\Task',2,0,NULL,'2026-08-24 06:56:46','2026-08-24 06:56:46'),(4,5,'assignment','تم إسناد المهمة','تم إسناد المهمة: تجريبي 2','App\\Models\\Task',2,0,NULL,'2026-08-24 06:56:51','2026-08-24 06:56:51');
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `page_contents`
--

DROP TABLE IF EXISTS `page_contents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `page_contents` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `page_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `page_contents_page_name_unique` (`page_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `page_contents`
--

LOCK TABLES `page_contents` WRITE;
/*!40000 ALTER TABLE `page_contents` DISABLE KEYS */;
/*!40000 ALTER TABLE `page_contents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payroll_records`
--

DROP TABLE IF EXISTS `payroll_records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payroll_records` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `employee_id` bigint unsigned NOT NULL,
  `month` int NOT NULL,
  `year` int NOT NULL,
  `payment_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'salary_based',
  `base_salary` decimal(12,2) NOT NULL DEFAULT '0.00',
  `task_earnings` decimal(12,2) NOT NULL DEFAULT '0.00',
  `commission_earnings` decimal(12,2) NOT NULL DEFAULT '0.00',
  `advances` decimal(12,2) NOT NULL DEFAULT '0.00',
  `deductions` decimal(12,2) NOT NULL DEFAULT '0.00',
  `bonuses` decimal(12,2) NOT NULL DEFAULT '0.00',
  `net_payable` decimal(12,2) NOT NULL DEFAULT '0.00',
  `status` enum('pending','approved','paid') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `paid_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `payroll_records_employee_id_foreign` (`employee_id`),
  CONSTRAINT `payroll_records_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payroll_records`
--

LOCK TABLES `payroll_records` WRITE;
/*!40000 ALTER TABLE `payroll_records` DISABLE KEYS */;
/*!40000 ALTER TABLE `payroll_records` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permission_role`
--

DROP TABLE IF EXISTS `permission_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permission_role` (
  `role_id` bigint unsigned NOT NULL,
  `permission_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`role_id`,`permission_id`),
  KEY `permission_role_permission_id_foreign` (`permission_id`),
  CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission_role`
--

LOCK TABLES `permission_role` WRITE;
/*!40000 ALTER TABLE `permission_role` DISABLE KEYS */;
INSERT INTO `permission_role` VALUES (1,1),(7,1),(8,1),(9,1),(1,2),(7,2),(9,2),(1,3),(7,3),(9,3),(1,4),(7,4),(1,5),(7,5),(9,5),(1,6),(7,6),(9,6),(1,7),(7,7),(8,7),(1,8),(7,8),(10,8),(1,9),(7,9),(8,9),(9,9),(1,10),(7,10),(8,10),(9,10),(10,10),(1,11),(7,11),(1,12),(7,12),(8,12),(1,13),(7,13),(9,13),(1,14),(7,14),(9,14),(1,15),(7,15),(9,15),(1,16),(7,16),(9,16),(1,17),(7,17),(1,18),(7,18),(1,19),(7,19),(9,19),(1,20),(7,20),(1,21),(7,21),(1,22),(7,22),(1,23),(7,23),(1,24),(7,24),(1,25),(7,25),(1,26),(1,27),(7,27),(1,28),(7,28),(1,29),(7,29),(1,30),(7,30),(8,30),(1,31),(7,31),(1,32),(9,32),(1,33),(9,33),(1,34),(7,34),(8,34),(1,35),(9,35),(1,36),(9,36),(1,37),(9,37),(1,38),(9,38),(1,39),(9,39),(1,40),(9,40),(1,41),(9,41),(1,42),(7,42),(1,43),(7,43),(1,44),(7,44),(1,45),(7,45),(1,46),(7,46),(1,47),(7,47),(1,48),(7,48),(1,49),(7,49),(1,50),(7,50),(1,51),(7,51),(11,51);
/*!40000 ALTER TABLE `permission_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `module` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'general',
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `permissions_slug_unique` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES (1,'عرض الصفقات والعقود','view_deals','deals','الاطلاع على قائمة الصفقات والعقود في النظام','2026-10-23 14:56:25','2026-10-23 14:56:25'),(2,'إنشاء صفقات جديدة','create_deals','deals','إمكانية إضافة صفقات جديدة وتحديد الخدمات','2026-10-23 14:56:25','2026-10-23 14:56:25'),(3,'تعديل الصفقات','edit_deals','deals','تعديل بيانات وتفاصيل الصفقات القائمة ومراحلها','2026-10-23 14:56:25','2026-10-23 14:56:25'),(4,'حذف الصفقات','delete_deals','deals','حذف الصفقات من النظام نهائياً','2026-10-23 14:56:25','2026-10-23 14:56:25'),(5,'الاطلاع على القيمة المالية للصفقات','view_deal_finances','deals','رؤية أسعار الصفقات والمبالغ والعمولات','2026-10-23 14:56:25','2026-10-23 14:56:25'),(6,'عرض كافة مهام النظام','view_all_tasks','tasks','الاطلاع على كافة المهام لجميع الأقسام','2026-10-23 14:56:25','2026-10-23 14:56:25'),(7,'عرض مهام القسم فقط','view_dept_tasks','tasks','الاطلاع على مهام القسم التابع له فقط','2026-10-23 14:56:25','2026-10-23 14:56:25'),(8,'عرض المهام المسندة للشخص','view_own_tasks','tasks','الاطلاع على المهام المسندة للموظف شخصياً فقط','2026-10-23 14:56:25','2026-10-23 14:56:25'),(9,'إنشاء وتكليف مهام','create_tasks','tasks','إضافة مهام جديدة وتعيين الموظفين','2026-10-23 14:56:25','2026-10-23 14:56:25'),(10,'تعديل وحالات المهام','edit_tasks','tasks','تعديل تفاصيل المهمة وتغيير حالتها ومرفقاتها','2026-10-23 14:56:25','2026-10-23 14:56:25'),(11,'حذف المهام','delete_tasks','tasks','حذف المهام من النظام','2026-10-23 14:56:25','2026-10-23 14:56:25'),(12,'إسناد وتغيير أعضاء المهمة','assign_task_members','tasks','إسناد أعضاء الفريق أو إزالتهم من المهام','2026-10-23 14:56:25','2026-10-23 14:56:25'),(13,'الاعتماد نيابة عن العميل','approve_client_tasks','tasks','اعتماد وموافقة على المهام بالنيابة عن العميل','2026-10-23 14:56:25','2026-10-23 14:56:25'),(14,'عرض قائمة العملاء','view_clients','clients','الاطلاع على قائمة وسجلات العملاء وأكوادهم','2026-10-23 14:56:25','2026-10-23 14:56:25'),(15,'إضافة عميل جديد','create_clients','clients','إنشاء وتسجيل حساب عميل جديد','2026-10-23 14:56:25','2026-10-23 14:56:25'),(16,'تعديل بيانات العملاء','edit_clients','clients','تعديل بيانات العملاء وكلمات المرور والاتصال','2026-10-23 14:56:25','2026-10-23 14:56:25'),(17,'حذف العملاء','delete_clients','clients','حذف سجلات العملاء من النظام','2026-10-23 14:56:25','2026-10-23 14:56:25'),(18,'تجميد حساب العميل (Hold)','hold_clients','clients','إيقاف وتعليق حساب العميل مؤقتاً','2026-10-23 14:56:25','2026-10-23 14:56:25'),(19,'عرض البروفايل الشامل للعميل (360°)','view_client_profile','clients','الاطلاع على الأقسام الثلاثة والمالية الشاملة للعميل','2026-10-23 14:56:25','2026-10-23 14:56:25'),(20,'عرض فريق العمل والموظفين','view_staff','staff','الاطلاع على قائمة موظفي الشركة','2026-10-23 14:56:25','2026-10-23 14:56:25'),(21,'إضافة موظف جديد','create_staff','staff','إنشاء حساب موظف جديد وتحديد قسمه','2026-10-23 14:56:25','2026-10-23 14:56:25'),(22,'تعديل بيانات ورواتب الموظفين','edit_staff','staff','تعديل حسابات ورواتب وكلمات مرور الموظفين','2026-10-23 14:56:25','2026-10-23 14:56:25'),(23,'حذف الموظفين','delete_staff','staff','حذف حسابات الموظفين من النظام','2026-10-23 14:56:25','2026-10-23 14:56:25'),(24,'تجميد حساب الموظف (Hold)','hold_staff','staff','تعليق وإيقاف حساب الموظف واستبعاده من المهام','2026-10-23 14:56:25','2026-10-23 14:56:25'),(25,'إسناد الأدوار والصلاحيات للمستخدمين','assign_user_roles','staff','تحديد المستويات والأدوار المتعددة للمستخدمين','2026-10-23 14:56:25','2026-10-23 14:56:25'),(26,'إدارة مصفوفة الأدوار والصلاحيات','manage_roles','roles','الوصول إلى مصفوفة الصلاحيات والتعديل عليها','2026-10-23 14:56:25','2026-10-23 14:56:25'),(27,'إنشاء أدوار وظيفية جديدة','create_roles','roles','إضافة دور جديد وتحديد صلاحياته','2026-10-23 14:56:25','2026-10-23 14:56:25'),(28,'تعديل الأدوار والصلاحيات','edit_roles','roles','تعديل مسميات الأدوار والصلاحيات المسندة لها','2026-10-23 14:56:25','2026-10-23 14:56:25'),(29,'حذف الأدوار المخصصة','delete_roles','roles','حذف الأدوار غير الأساسية من النظام','2026-10-23 14:56:25','2026-10-23 14:56:25'),(30,'إدارة الأقسام والخدمات','manage_departments','departments','إضافة وتعديل وحذف الأقسام وتعيين المدراء','2026-10-23 14:56:25','2026-10-23 14:56:25'),(31,'إدارة الخدمات الفرعية للأقسام','manage_subcategories','departments','إدارة الفئات الفرعية التابعة للأقسام','2026-10-23 14:56:25','2026-10-23 14:56:25'),(32,'عرض رأس المال والسيولة','view_capital','finance','الاطلاع على رأس المال وصافي الأرباح والسيولة العامة','2026-10-23 14:56:25','2026-10-23 14:56:25'),(33,'الإدارة المالية الكاملة','manage_finance','finance','الوصول الكامل إلى لوحة الحسابات والمالية','2026-10-23 14:56:25','2026-10-23 14:56:25'),(34,'عرض مالية وأرباح القسم','view_dept_finance','finance','الاطلاع على الإيرادات والمصروفات الخاصة بالقسم','2026-10-23 14:56:25','2026-10-23 14:56:25'),(35,'إدارة القيود اليومية والدفتر العام','manage_ledger','finance','إضافة وتعديل قيود اليومية المحاسبية','2026-10-23 14:56:25','2026-10-23 14:56:25'),(36,'إدارة العُهد المالية للموظفين','manage_custody','finance','صرف وتسوية واسترداد العُهد المالية للموظفين','2026-10-23 14:56:25','2026-10-23 14:56:25'),(37,'إدارة الأصول الثابتة','manage_fixed_assets','finance','تسجيل الأصول وحساب الإهلاك ومتابعتها','2026-10-23 14:56:25','2026-10-23 14:56:25'),(38,'إدارة الرواتب ومسيرات القبض','manage_payroll','finance','اعتماد مسيرات الرواتب والمكافآت والخصومات','2026-10-23 14:56:25','2026-10-23 14:56:25'),(39,'إدارة دفعات وسندات قبض العملاء','manage_client_payments','finance','تسجيل دفعات العملاء وسندات القبض البنكية والنقدية','2026-10-23 14:56:25','2026-10-23 14:56:25'),(40,'إدارة توزيعات ونسب الشركاء','manage_partner_splits','finance','حساب وتوزيع الأرباح على الشركاء','2026-10-23 14:56:25','2026-10-23 14:56:25'),(41,'إدارة تصنيفات وبنود المالية','manage_finance_categories','finance','إدارة شجرة بنود الإيرادات والمصروفات','2026-10-23 14:56:25','2026-10-23 14:56:25'),(42,'إدارة المشاريع الداخلية والتطوير','manage_internal_projects','internal_projects','إدارة مشاريع الوكالة الداخلية وتطوير العمل','2026-10-23 14:56:25','2026-10-23 14:56:25'),(43,'إدارة سابقة الأعمال والمشاريع','manage_portfolio','cms','إضافة وتعديل الأعمال المنشورة على موقع الوكالة','2026-10-23 14:56:25','2026-10-23 14:56:25'),(44,'إدارة الباقات والخدمات المعروضة','manage_services','cms','إدارة الخدمات والباقات على الموقع','2026-10-23 14:56:25','2026-10-23 14:56:25'),(45,'إدارة مقالات المدونة','manage_blogs','cms','نشر وتعديل المقالات والمحتوى الترويجي','2026-10-23 14:56:25','2026-10-23 14:56:25'),(46,'إدارة آراء العملاء والشهادات','manage_testimonials','cms','إدارة تقييمات وشهادات العملاء المعروضة','2026-10-23 14:56:25','2026-10-23 14:56:25'),(47,'إدارة الأسئلة الشائعة','manage_faqs','cms','إضافة وتعديل الأسئلة والأجوبة الشائعة','2026-10-23 14:56:25','2026-10-23 14:56:25'),(48,'إدارة محتوى الصفحات وبيانات التواصل','manage_cms_content','cms','تعديل نصوص صفحات الموقع وبيانات الاتصال ورسائل الزوار','2026-10-23 14:56:25','2026-10-23 14:56:25'),(49,'استعراض سجل العمليات والرقابة','view_activity_logs','system','مراقبة سجل النشاطات والعمليات الرقابية في النظام','2026-10-23 14:56:25','2026-10-23 14:56:25'),(50,'إرسال وإدارة الإشعارات العامة','manage_notifications','system','إرسال تنبيهات وإشعارات للمستخدمين والموظفين','2026-10-23 14:56:25','2026-10-23 14:56:25'),(51,'الدخول لبوابة العميل','access_client_portal','system','صلاحية تسجيل الدخول واستخدام بوابة العميل الخاصة','2026-10-23 14:56:25','2026-10-23 14:56:25');
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  KEY `personal_access_tokens_expires_at_index` (`expires_at`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (1,'App\\Models\\User',1,'admin-token','367b10f4fffcead2b7b884c8a51d3ffdf08519f4fa530aba12579e1bee48f485','[\"*\"]','2026-08-22 16:12:32',NULL,'2026-08-22 16:10:02','2026-08-22 16:12:32'),(2,'App\\Models\\User',1,'admin-token','5a7a0cbe4c2069279cf457578e97e0f01d7533fe377c516158bd240982160f60','[\"*\"]','2026-08-22 16:13:59',NULL,'2026-08-22 16:12:49','2026-08-22 16:13:59'),(3,'App\\Models\\User',1,'admin-token','48dea56885bcc9f1c564b640cd23635da0103645626eeedbd235311d00ab87b7','[\"*\"]','2026-08-22 16:16:01',NULL,'2026-08-22 16:14:40','2026-08-22 16:16:01'),(4,'App\\Models\\User',3,'admin-token','71bdcbe40fd40591f106b4961480b92e44f868a9a4fbc7d57b138cfc0879bb8f','[\"*\"]','2026-08-22 16:16:19',NULL,'2026-08-22 16:16:13','2026-08-22 16:16:19'),(5,'App\\Models\\User',1,'admin-token','6eb1f5c037994353832a1e3f5606d4b12576e5d63e156e4b0c0655a3f6733d7b','[\"*\"]','2026-08-24 06:48:11',NULL,'2026-08-24 05:43:15','2026-08-24 06:48:11'),(6,'App\\Models\\User',4,'admin-token','b2a9adaef317422e7dbc367a64cce65e2ded5e8f836d034d9ffdb4777ada26b9','[\"*\"]','2026-08-24 06:49:03',NULL,'2026-08-24 06:48:23','2026-08-24 06:49:03'),(7,'App\\Models\\User',1,'admin-token','466a20303659a28858f871ff8882ef1a962d1e3fc5d3b756f57ba4a6a987cf11','[\"*\"]','2026-08-24 06:49:37',NULL,'2026-08-24 06:49:27','2026-08-24 06:49:37'),(8,'App\\Models\\User',5,'admin-token','82329d86f6215d75894c678228197be713b68da8dcca131223ff016f3df475b2','[\"*\"]','2026-08-24 06:50:05',NULL,'2026-08-24 06:49:50','2026-08-24 06:50:05'),(9,'App\\Models\\User',1,'admin-token','5dd5cb6f8951215b425e0480837894ab3429acfa43249a62ed5048520b10efbc','[\"*\"]','2026-08-24 11:23:34',NULL,'2026-08-24 06:50:16','2026-08-24 11:23:34'),(11,'App\\Models\\User',1,'test','6668e40694a95369ccf2dc75b390c57f27e4225b084c302a6f0553221d9a0759','[\"*\"]','2026-09-23 13:38:56',NULL,'2026-09-23 13:38:56','2026-09-23 13:38:56'),(12,'App\\Models\\User',1,'test','10a21cf01977f8fe74c1822e80c674ea88c188ae47388da96f95b9f934868bdd','[\"*\"]',NULL,NULL,'2026-09-23 13:39:10','2026-09-23 13:39:10'),(13,'App\\Models\\User',1,'test','a28c14b117557662c4be2d273424032664772da3d21ccc0b5529410b387a8672','[\"*\"]',NULL,NULL,'2026-09-23 13:39:35','2026-09-23 13:39:35'),(14,'App\\Models\\User',1,'test','9730b30c178ffb9c138a9e7fc1c466b2db5174fac928392cbef920b93d98f1ae','[\"*\"]',NULL,NULL,'2026-09-23 13:39:48','2026-09-23 13:39:48'),(15,'App\\Models\\User',1,'test','323fadc430ef7b8deab7c2d3371cf35be7a89d76325408860cb7be5f23912517','[\"*\"]',NULL,NULL,'2026-09-23 13:40:09','2026-09-23 13:40:09'),(16,'App\\Models\\User',1,'test','18339cee86aaa3753977e13ec5e75fa2924626b0653c00cc84c7593d8eb4c914','[\"*\"]',NULL,NULL,'2026-09-23 13:40:23','2026-09-23 13:40:23'),(17,'App\\Models\\User',1,'test','d88cf6cc6de14af0e62d778ed26d67916ce537f0cb0a4a56e725d638a10142c5','[\"*\"]',NULL,NULL,'2026-09-23 13:40:35','2026-09-23 13:40:35'),(18,'App\\Models\\User',1,'test','d6dc478536d715e443576244fe2386b8019791a64ceff4844151cc4c369279e2','[\"*\"]',NULL,NULL,'2026-09-23 13:41:02','2026-09-23 13:41:02'),(20,'App\\Models\\User',1,'admin-token','5a0cbaa57d657dbd852b09ab656385aab84618693461f84dd41b012ac7f69428','[\"*\"]',NULL,NULL,'2026-10-23 14:54:06','2026-10-23 14:54:06'),(21,'App\\Models\\User',28,'admin-token','8c72b21d0829c0d5141a5eaa3f5d5434b0cc024c8b5aa1343e2be1fbec167437','[\"*\"]',NULL,NULL,'2026-10-23 14:54:06','2026-10-23 14:54:06'),(22,'App\\Models\\User',1,'admin-token','b307c2aa0a03443b6bad7c95eebaadb542d7a850835330c8a056a4762dfd7e84','[\"*\"]','2026-10-23 18:06:59',NULL,'2026-10-23 14:54:39','2026-10-23 18:06:59');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_images`
--

DROP TABLE IF EXISTS `project_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_images` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `project_id` bigint unsigned NOT NULL,
  `image_path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `project_images_project_id_foreign` (`project_id`),
  CONSTRAINT `project_images_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_images`
--

LOCK TABLES `project_images` WRITE;
/*!40000 ALTER TABLE `project_images` DISABLE KEYS */;
/*!40000 ALTER TABLE `project_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` json NOT NULL,
  `description` json NOT NULL,
  `ViewInHome` tinyint(1) NOT NULL DEFAULT '0',
  `main_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `category_id` bigint unsigned NOT NULL,
  `img_alt` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `emoji` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tags` json DEFAULT NULL,
  `client` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `timeline` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `challenge` json DEFAULT NULL,
  `solution` json DEFAULT NULL,
  `results` json DEFAULT NULL,
  `testimonial` json DEFAULT NULL,
  `deliverables` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `projects_category_id_foreign` (`category_id`),
  CONSTRAINT `projects_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_user`
--

DROP TABLE IF EXISTS `role_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_user` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `role_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `role_user_user_id_role_id_unique` (`user_id`,`role_id`),
  KEY `role_user_role_id_foreign` (`role_id`),
  CONSTRAINT `role_user_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `role_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_user`
--

LOCK TABLES `role_user` WRITE;
/*!40000 ALTER TABLE `role_user` DISABLE KEYS */;
INSERT INTO `role_user` VALUES (1,1,1,'2026-09-23 13:35:21','2026-09-23 13:35:21');
/*!40000 ALTER TABLE `role_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_slug_unique` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'مدير النظام العام (Super Admin)','super_admin','كامل الصلاحيات والتحكم الإداري والمالي والتقني الشامل لكافة مفاصل المنظومة','2026-08-22 16:07:37','2026-10-23 14:56:24'),(7,'مدير النظام (Admin)','admin','إدارة العمليات التشغيلية، فريق العمل، الصفقات، المشاريع، والمحتوى','2026-10-23 14:56:24','2026-10-23 14:56:24'),(8,'مدير قسم (Department Manager)','department_manager','إدارة مهام القسم، متابعة الصفقات الخاصة به، وإسناد المهام لأعضاء فريقه','2026-10-23 14:56:24','2026-10-23 14:56:24'),(9,'مدير حسابات (Account Manager)','account_manager','متابعة العملاء، إدارة الصفقات والعقود، والاعتماد بالوكالة والتنسيق المالي','2026-10-23 14:56:24','2026-10-23 14:56:24'),(10,'موظف (Employee)','employee','تنفيذ المهام المسندة، تحديث الحالات، ورفع المخرجات والمرفقات','2026-10-23 14:56:24','2026-10-23 14:56:24'),(11,'عميل (Client)','client','الدخول لبوابة العميل، مراجعة واعتماد المهام، وتقديم الملاحظات','2026-10-23 14:56:24','2026-10-23 14:56:24');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` json NOT NULL,
  `subtitle` json DEFAULT NULL,
  `description` json NOT NULL,
  `features` json DEFAULT NULL,
  `stats` json DEFAULT NULL,
  `cta_text_en` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cta_text_ar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cta_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_categories`
--

DROP TABLE IF EXISTS `sub_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `department_id` bigint unsigned NOT NULL,
  `name_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sub_categories_department_id_foreign` (`department_id`),
  CONSTRAINT `sub_categories_department_id_foreign` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_categories`
--

LOCK TABLES `sub_categories` WRITE;
/*!40000 ALTER TABLE `sub_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `sub_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_attachments`
--

DROP TABLE IF EXISTS `task_attachments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task_attachments` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `task_id` bigint unsigned NOT NULL,
  `file_path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'image',
  `file_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file_size` bigint unsigned DEFAULT NULL,
  `uploaded_by` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `task_attachments_task_id_foreign` (`task_id`),
  KEY `task_attachments_uploaded_by_foreign` (`uploaded_by`),
  CONSTRAINT `task_attachments_task_id_foreign` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE CASCADE,
  CONSTRAINT `task_attachments_uploaded_by_foreign` FOREIGN KEY (`uploaded_by`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_attachments`
--

LOCK TABLES `task_attachments` WRITE;
/*!40000 ALTER TABLE `task_attachments` DISABLE KEYS */;
/*!40000 ALTER TABLE `task_attachments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_checklists`
--

DROP TABLE IF EXISTS `task_checklists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task_checklists` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `task_id` bigint unsigned NOT NULL,
  `item_text` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_completed` tinyint(1) NOT NULL DEFAULT '0',
  `completed_by` bigint unsigned DEFAULT NULL,
  `completed_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `task_checklists_task_id_foreign` (`task_id`),
  KEY `task_checklists_completed_by_foreign` (`completed_by`),
  CONSTRAINT `task_checklists_completed_by_foreign` FOREIGN KEY (`completed_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `task_checklists_task_id_foreign` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_checklists`
--

LOCK TABLES `task_checklists` WRITE;
/*!40000 ALTER TABLE `task_checklists` DISABLE KEYS */;
/*!40000 ALTER TABLE `task_checklists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_custom_field_values`
--

DROP TABLE IF EXISTS `task_custom_field_values`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task_custom_field_values` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `task_id` bigint unsigned NOT NULL,
  `custom_field_id` bigint unsigned NOT NULL,
  `value` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `task_custom_field_values_task_id_foreign` (`task_id`),
  KEY `task_custom_field_values_custom_field_id_foreign` (`custom_field_id`),
  CONSTRAINT `task_custom_field_values_custom_field_id_foreign` FOREIGN KEY (`custom_field_id`) REFERENCES `task_custom_fields` (`id`) ON DELETE CASCADE,
  CONSTRAINT `task_custom_field_values_task_id_foreign` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_custom_field_values`
--

LOCK TABLES `task_custom_field_values` WRITE;
/*!40000 ALTER TABLE `task_custom_field_values` DISABLE KEYS */;
/*!40000 ALTER TABLE `task_custom_field_values` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_custom_fields`
--

DROP TABLE IF EXISTS `task_custom_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task_custom_fields` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `field_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'text',
  `options` json DEFAULT NULL,
  `is_required` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_custom_fields`
--

LOCK TABLES `task_custom_fields` WRITE;
/*!40000 ALTER TABLE `task_custom_fields` DISABLE KEYS */;
/*!40000 ALTER TABLE `task_custom_fields` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_notes`
--

DROP TABLE IF EXISTS `task_notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task_notes` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `task_id` bigint unsigned NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `note` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `task_notes_task_id_foreign` (`task_id`),
  KEY `task_notes_user_id_foreign` (`user_id`),
  CONSTRAINT `task_notes_task_id_foreign` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE CASCADE,
  CONSTRAINT `task_notes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_notes`
--

LOCK TABLES `task_notes` WRITE;
/*!40000 ALTER TABLE `task_notes` DISABLE KEYS */;
/*!40000 ALTER TABLE `task_notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_status_histories`
--

DROP TABLE IF EXISTS `task_status_histories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task_status_histories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `task_id` bigint unsigned NOT NULL,
  `from_status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `to_status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `changed_by` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `task_status_histories_task_id_foreign` (`task_id`),
  KEY `task_status_histories_changed_by_foreign` (`changed_by`),
  CONSTRAINT `task_status_histories_changed_by_foreign` FOREIGN KEY (`changed_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `task_status_histories_task_id_foreign` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_status_histories`
--

LOCK TABLES `task_status_histories` WRITE;
/*!40000 ALTER TABLE `task_status_histories` DISABLE KEYS */;
/*!40000 ALTER TABLE `task_status_histories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_user`
--

DROP TABLE IF EXISTS `task_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task_user` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `task_id` bigint unsigned NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `task_user_task_id_foreign` (`task_id`),
  KEY `task_user_user_id_foreign` (`user_id`),
  CONSTRAINT `task_user_task_id_foreign` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE CASCADE,
  CONSTRAINT `task_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_user`
--

LOCK TABLES `task_user` WRITE;
/*!40000 ALTER TABLE `task_user` DISABLE KEYS */;
INSERT INTO `task_user` VALUES (1,1,5,NULL,NULL);
/*!40000 ALTER TABLE `task_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasks` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `priority` enum('low','medium','high','urgent') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'medium',
  `status` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'new',
  `due_date` date DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `shooting_date` date DEFAULT NULL,
  `delivery_date` date DEFAULT NULL,
  `dates_not_specified` tinyint(1) NOT NULL DEFAULT '0',
  `is_monthly_plan` tinyint(1) NOT NULL DEFAULT '0',
  `plan_duration_months` int NOT NULL DEFAULT '1',
  `is_standalone` tinyint(1) NOT NULL DEFAULT '0',
  `estimated_hours` int NOT NULL DEFAULT '0',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `internal_project_id` bigint unsigned DEFAULT NULL,
  `department_id` bigint unsigned DEFAULT NULL,
  `deal_id` bigint unsigned DEFAULT NULL,
  `client_id` bigint unsigned DEFAULT NULL,
  `client_price` decimal(10,2) DEFAULT '0.00',
  `employee_price` decimal(10,2) DEFAULT '0.00',
  `sub_category_id` bigint unsigned DEFAULT NULL,
  `parent_id` bigint unsigned DEFAULT NULL,
  `scope` text COLLATE utf8mb4_unicode_ci,
  `company_margin` decimal(10,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id`),
  KEY `tasks_internal_project_id_foreign` (`internal_project_id`),
  KEY `tasks_deal_id_foreign` (`deal_id`),
  KEY `tasks_sub_category_id_foreign` (`sub_category_id`),
  KEY `tasks_parent_id_foreign` (`parent_id`),
  KEY `tasks_department_id_foreign` (`department_id`),
  KEY `tasks_client_id_index` (`client_id`),
  CONSTRAINT `tasks_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `tasks_deal_id_foreign` FOREIGN KEY (`deal_id`) REFERENCES `deals` (`id`) ON DELETE CASCADE,
  CONSTRAINT `tasks_department_id_foreign` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE SET NULL,
  CONSTRAINT `tasks_internal_project_id_foreign` FOREIGN KEY (`internal_project_id`) REFERENCES `internal_projects` (`id`) ON DELETE CASCADE,
  CONSTRAINT `tasks_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `tasks` (`id`) ON DELETE CASCADE,
  CONSTRAINT `tasks_sub_category_id_foreign` FOREIGN KEY (`sub_category_id`) REFERENCES `sub_categories` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (1,'تجريبي صفقة','تجريبي صفقة','medium','new',NULL,NULL,NULL,NULL,NULL,0,0,1,0,0,'2026-09-23 13:38:56','2026-08-24 06:30:32','2026-09-23 13:38:56',NULL,1,2,4,1200.00,1000.00,NULL,NULL,NULL,200.00),(2,'تجريبي 2','','medium','new',NULL,NULL,NULL,NULL,NULL,0,0,1,0,0,NULL,'2026-08-24 06:44:26','2026-08-24 07:18:24',NULL,1,2,4,120.00,100.00,NULL,NULL,'وصف  تفصيلي',20.00),(42,'Task 1 Updated','','medium','new',NULL,NULL,NULL,NULL,NULL,0,0,1,0,0,NULL,'2026-10-23 12:41:10','2026-10-23 12:41:10',NULL,1,26,2,3500.00,0.00,NULL,NULL,NULL,3500.00),(43,'Task 2','','medium','new',NULL,NULL,NULL,NULL,NULL,0,0,1,0,0,'2026-10-23 12:41:11','2026-10-23 12:41:10','2026-10-23 12:41:11',NULL,1,26,2,3000.00,0.00,NULL,NULL,NULL,3000.00),(44,'Task 3 Newly Added','Task 3 Newly Added','medium','new',NULL,NULL,NULL,NULL,NULL,0,0,1,0,0,NULL,'2026-10-23 12:41:11','2026-10-23 12:41:11',NULL,1,26,2,4000.00,0.00,NULL,NULL,NULL,4000.00),(45,'مهمة اختبار التعليقات الصوتية والتنبيهات','','medium','new',NULL,NULL,NULL,NULL,NULL,0,0,1,0,0,NULL,'2026-10-23 12:49:03','2026-10-23 12:49:03',NULL,1,NULL,NULL,0.00,0.00,NULL,NULL,NULL,0.00),(46,'مهمة اختبار التعليقات الصوتية والتنبيهات','','medium','new',NULL,NULL,NULL,NULL,NULL,0,0,1,0,0,NULL,'2026-10-23 12:49:46','2026-10-23 12:49:46',NULL,1,NULL,NULL,0.00,0.00,NULL,NULL,NULL,0.00),(47,'مهمة اختبار التعليقات الصوتية والتنبيهات','','medium','new',NULL,NULL,NULL,NULL,NULL,0,0,1,0,0,'2026-10-23 12:50:28','2026-10-23 12:50:24','2026-10-23 12:50:28',NULL,1,NULL,NULL,0.00,0.00,NULL,NULL,NULL,0.00);
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testimonials`
--

DROP TABLE IF EXISTS `testimonials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `testimonials` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `client_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `job_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `feedback` text COLLATE utf8mb4_unicode_ci,
  `rating` int NOT NULL DEFAULT '0',
  `avatar_color` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '#f26522',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testimonials`
--

LOCK TABLES `testimonials` WRITE;
/*!40000 ALTER TABLE `testimonials` DISABLE KEYS */;
/*!40000 ALTER TABLE `testimonials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `client_code` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'viewer',
  `department_id` bigint unsigned DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `role_id` bigint unsigned DEFAULT NULL,
  `is_hold` tinyint(1) NOT NULL DEFAULT '0',
  `client_category` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'normal',
  `is_vip` tinyint(1) NOT NULL DEFAULT '0',
  `payment_type` enum('task_based','salary_based','percentage_based','hybrid') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'salary_based',
  `base_salary` decimal(10,2) NOT NULL DEFAULT '0.00',
  `commission_rate` decimal(5,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  UNIQUE KEY `users_client_code_unique` (`client_code`),
  KEY `users_department_id_foreign` (`department_id`),
  KEY `users_role_id_foreign` (`role_id`),
  CONSTRAINT `users_department_id_foreign` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE SET NULL,
  CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,NULL,'Media Glow Super Admin','admin@mediaglowegypt.com',NULL,NULL,'$2y$12$ZOv8zHuiXdBXawSJ9eT.WekTpaeQKm7ZOztF/qb3FyPqCpR5SXPPy',NULL,'2026-08-22 16:09:37','2026-10-23 14:53:54','super_admin',NULL,NULL,1,0,'normal',0,'salary_based',25000.00,0.00),(2,'1001','test','m@mail.com','01000000000',NULL,'$2y$12$nf1q9RioIkW/5sdjI4TL6O4itDTfMvaNyImJvwpOhT7HGWCxPgEju',NULL,'2026-08-22 16:11:48','2026-08-22 16:11:48','client',NULL,NULL,NULL,0,'normal',0,'salary_based',0.00,0.00),(3,'1002','mohamed','mohamed@gmail.com','admin@mediaglowegypt.com',NULL,'$2y$12$vcvWJuyu2ziePPigF.x77e6VF3gfGGDTDVWDWNQBBivvvhMT1Ny4e',NULL,'2026-08-22 16:16:01','2026-08-22 16:16:01','client',NULL,NULL,NULL,0,'normal',0,'salary_based',0.00,0.00),(4,'1003','محمد رضا','mohamedreda@gmail.com','01099999999',NULL,'$2y$12$se1meurMUbZg0AkpF9sTOeNtmLEedX77xhguGHs.7iu0VI1VgIR5K',NULL,'2026-08-24 05:44:08','2026-10-23 14:55:09','client',NULL,NULL,NULL,0,'vip',1,'salary_based',0.00,0.00),(5,NULL,'موظف 1','emp1@mediaglowegypt.com',NULL,NULL,'$2y$12$Uv00iLjo6pQI31LE35kOWOIBCBKsPXBFi7ZhQZP2oW.7WwKtDIV4S',NULL,'2026-08-24 05:45:28','2026-08-24 05:45:28','department_manager',NULL,NULL,NULL,0,'normal',0,'salary_based',0.00,0.00),(23,NULL,'Admin Test','admin_test@test.com',NULL,NULL,'$2y$12$9ZBp3H31TATZv7R8YqTNCeKaDWD.oHRUAH7m7FgB2gd5liNwjC3Wy',NULL,'2026-10-23 12:07:15','2026-10-23 12:07:15','admin',NULL,NULL,NULL,0,'normal',0,'salary_based',0.00,0.00),(28,NULL,'Operations Admin','admin@mediaglow.com',NULL,NULL,'$2y$12$/jwBXgKcNmYivLqoIrsiL.pbPLq2DNtpHfpGE3qOk7k6qvRh28Paq',NULL,'2026-10-23 14:53:55','2026-10-23 14:53:55','admin',NULL,NULL,NULL,0,'normal',0,'salary_based',0.00,0.00);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-10-28 14:57:22
