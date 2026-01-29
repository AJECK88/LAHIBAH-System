/*
  Warnings:

  - A unique constraint covering the columns `[LevelName]` on the table `Level` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[studentId,courseId]` on the table `Result` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[matricule]` on the table `Student` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Level_LevelName_key` ON `Level`(`LevelName`);

-- CreateIndex
CREATE UNIQUE INDEX `Result_studentId_courseId_key` ON `Result`(`studentId`, `courseId`);

-- CreateIndex
CREATE UNIQUE INDEX `Student_matricule_key` ON `Student`(`matricule`);
