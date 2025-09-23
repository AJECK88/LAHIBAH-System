/*
  Warnings:

  - A unique constraint covering the columns `[matricule]` on the table `Student` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Student_matricule_key` ON `Student`(`matricule`);
