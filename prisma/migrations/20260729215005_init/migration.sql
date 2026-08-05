-- AlterTable
ALTER TABLE `Timetable` ADD COLUMN `classroomId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `_TimeTableTODepartment` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_TimeTableTODepartment_AB_unique`(`A`, `B`),
    INDEX `_TimeTableTODepartment_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Timetable` ADD CONSTRAINT `Timetable_classroomId_fkey` FOREIGN KEY (`classroomId`) REFERENCES `Classroom`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TimeTableTODepartment` ADD CONSTRAINT `_TimeTableTODepartment_A_fkey` FOREIGN KEY (`A`) REFERENCES `Department`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TimeTableTODepartment` ADD CONSTRAINT `_TimeTableTODepartment_B_fkey` FOREIGN KEY (`B`) REFERENCES `Timetable`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
