-- DropForeignKey
ALTER TABLE `Exam` DROP FOREIGN KEY `Exam_teacherId_fkey`;

-- DropIndex
DROP INDEX `Exam_teacherId_fkey` ON `Exam`;

-- AlterTable
ALTER TABLE `Exam` MODIFY `teacherId` VARCHAR(191) NULL;
