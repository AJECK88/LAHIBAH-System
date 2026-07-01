/*
  Warnings:

  - Added the required column `teacherId` to the `Exam` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Exam` ADD COLUMN `teacherId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Exam` ADD CONSTRAINT `Exam_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `Teacher`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
