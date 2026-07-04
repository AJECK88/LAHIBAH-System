/*
  Warnings:
  - You are about to drop the column `levelId` on the `Subject` table. All the data in the column will be lost.
*/
-- DropForeignKey
ALTER TABLE `Subject` DROP FOREIGN KEY `Subject_levelId_fkey`;
-- DropIndex
DROP INDEX `Subject_levelId_fkey` ON `Subject`;
-- AlterTable
ALTER TABLE `Subject` DROP COLUMN `levelId`;
