/*
  Warnings:

  - Added the required column `grand` to the `Result` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Result` ADD COLUMN `grand` INTEGER NOT NULL;
