/*
  Warnings:

  - You are about to drop the column `teacherId` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `teachersId` on the `Teacher` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Teacher_teachersId_key` ON `Teacher`;

-- AlterTable
ALTER TABLE `Exam` DROP COLUMN `teacherId`,
    ADD COLUMN `Invigitator` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Teacher` DROP COLUMN `teachersId`;
