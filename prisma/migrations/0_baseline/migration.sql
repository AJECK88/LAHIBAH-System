-- CreateTable
CREATE TABLE `Admin` (
    `id` VARCHAR(191) NOT NULL,
    `userName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Admin_email_key`(`email` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Announcement` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `message` TEXT NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `departmentId` VARCHAR(191) NULL,

    INDEX `Announcement_departmentId_fkey`(`departmentId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Assignment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `dueDate` DATETIME(3) NOT NULL,
    `courseId` INTEGER NOT NULL,

    INDEX `Assignment_courseId_fkey`(`courseId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attendance` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `present` BOOLEAN NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `courseId` INTEGER NOT NULL,
    `studentId` VARCHAR(191) NOT NULL,

    INDEX `Attendance_courseId_fkey`(`courseId` ASC),
    INDEX `Attendance_studentId_fkey`(`studentId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Classroom` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `courseId` INTEGER NOT NULL,

    UNIQUE INDEX `Classroom_name_key`(`name` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Department` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `teacherId` VARCHAR(191) NULL,

    UNIQUE INDEX `Department_name_key`(`name` ASC),
    INDEX `Department_teacherId_fkey`(`teacherId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Event` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `departmentId` VARCHAR(191) NULL,

    INDEX `Event_departmentId_fkey`(`departmentId` ASC),
    UNIQUE INDEX `Event_name_key`(`name` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Exam` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `courseId` INTEGER NOT NULL,
    `ClassRoomId` VARCHAR(191) NOT NULL,
    `schoolYear` VARCHAR(191) NOT NULL,
    `levelId` INTEGER NOT NULL,
    `Invigilator` VARCHAR(191) NULL,

    INDEX `Exam_ClassRoomId_fkey`(`ClassRoomId` ASC),
    INDEX `Exam_courseId_fkey`(`courseId` ASC),
    INDEX `Exam_levelId_fkey`(`levelId` ASC),
    UNIQUE INDEX `Exam_name_key`(`name` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExamDepartment` (
    `examId` INTEGER NOT NULL,
    `departmentId` VARCHAR(191) NOT NULL,

    INDEX `ExamDepartment_departmentId_fkey`(`departmentId` ASC),
    PRIMARY KEY (`examId` ASC, `departmentId` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fee` (
    `id` VARCHAR(191) NOT NULL,
    `studentId` VARCHAR(191) NOT NULL,
    `amount` DOUBLE NOT NULL,
    `dueDate` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    INDEX `Fee_studentId_fkey`(`studentId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Grade` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Grade_name_key`(`name` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Level` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `LevelName` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Level_LevelName_key`(`LevelName` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Message` (
    `id` VARCHAR(191) NOT NULL,
    `senderId` VARCHAR(191) NOT NULL,
    `receiverId` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notification` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `adminId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `teacherId` VARCHAR(191) NULL,

    INDEX `Notification_adminId_fkey`(`adminId` ASC),
    INDEX `Notification_teacherId_fkey`(`teacherId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Parent` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `sex` ENUM('Male', 'Female') NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Parent_email_key`(`email` ASC),
    UNIQUE INDEX `Parent_phoneNumber_key`(`phoneNumber` ASC),
    UNIQUE INDEX `Parent_username_key`(`username` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Result` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `CA` INTEGER NOT NULL,
    `Exam` INTEGER NOT NULL,
    `total` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `studentId` VARCHAR(191) NOT NULL,
    `courseId` INTEGER NOT NULL,
    `examId` INTEGER NULL,
    `grand` VARCHAR(191) NOT NULL,

    INDEX `Result_courseId_fkey`(`courseId` ASC),
    INDEX `Result_examId_fkey`(`examId` ASC),
    UNIQUE INDEX `Result_studentId_courseId_key`(`studentId` ASC, `courseId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Student` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `sex` ENUM('Male', 'Female') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `parentId` VARCHAR(191) NULL,
    `departmentId` VARCHAR(191) NOT NULL,
    `gradeId` VARCHAR(191) NULL,
    `levelId` INTEGER NOT NULL,
    `matricule` VARCHAR(191) NULL,
    `DateOfBirth` DATETIME(3) NULL,

    INDEX `Student_departmentId_fkey`(`departmentId` ASC),
    UNIQUE INDEX `Student_email_key`(`email` ASC),
    INDEX `Student_levelId_fkey`(`levelId` ASC),
    UNIQUE INDEX `Student_matricule_key`(`matricule` ASC),
    INDEX `Student_parentId_fkey`(`parentId` ASC),
    UNIQUE INDEX `Student_phoneNumber_key`(`phoneNumber` ASC),
    UNIQUE INDEX `Student_username_key`(`username` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subject` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `gradeId` VARCHAR(191) NULL,

    INDEX `Subject_gradeId_fkey`(`gradeId` ASC),
    UNIQUE INDEX `Subject_name_key`(`name` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Teacher` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `bloodGroup` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `sex` ENUM('Male', 'Female') NOT NULL,
    `image` VARCHAR(191) NULL,
    `DateOfBirth` DATETIME(3) NULL,
    `teachersId` VARCHAR(191) NULL,

    UNIQUE INDEX `Teacher_email_key`(`email` ASC),
    UNIQUE INDEX `Teacher_phoneNumber_key`(`phoneNumber` ASC),
    UNIQUE INDEX `Teacher_username_key`(`username` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Timetable` (
    `id` VARCHAR(191) NOT NULL,
    `courseId` INTEGER NOT NULL,
    `startTime` DATETIME(3) NOT NULL,
    `endTime` DATETIME(3) NOT NULL,
    `day` VARCHAR(191) NOT NULL,

    INDEX `Timetable_courseId_fkey`(`courseId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ClassroomToSubject` (
    `A` VARCHAR(191) NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ClassroomToSubject_AB_unique`(`A` ASC, `B` ASC),
    INDEX `_ClassroomToSubject_B_index`(`B` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_DepartmentToSubject` (
    `A` VARCHAR(191) NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_DepartmentToSubject_AB_unique`(`A` ASC, `B` ASC),
    INDEX `_DepartmentToSubject_B_index`(`B` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_StudentToSubject` (
    `A` VARCHAR(191) NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_StudentToSubject_AB_unique`(`A` ASC, `B` ASC),
    INDEX `_StudentToSubject_B_index`(`B` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_SubjectToTeacher` (
    `A` INTEGER NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_SubjectToTeacher_AB_unique`(`A` ASC, `B` ASC),
    INDEX `_SubjectToTeacher_B_index`(`B` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notificationRead` (
    `id` VARCHAR(191) NOT NULL,
    `notificationId` VARCHAR(191) NOT NULL,
    `read` BOOLEAN NOT NULL DEFAULT false,
    `readAt` DATETIME(3) NULL,
    `studentId` VARCHAR(191) NULL,
    `teacherId` VARCHAR(191) NULL,
    `adminId` VARCHAR(191) NULL,
    `announcementId` VARCHAR(191) NULL,

    INDEX `notificationRead_adminId_idx`(`adminId` ASC),
    INDEX `notificationRead_announcementId_idx`(`announcementId` ASC),
    INDEX `notificationRead_notificationId_idx`(`notificationId` ASC),
    INDEX `notificationRead_studentId_idx`(`studentId` ASC),
    INDEX `notificationRead_teacherId_idx`(`teacherId` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Announcement` ADD CONSTRAINT `Announcement_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Assignment` ADD CONSTRAINT `Assignment_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Subject`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Subject`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Department` ADD CONSTRAINT `Department_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `Teacher`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exam` ADD CONSTRAINT `Exam_ClassRoomId_fkey` FOREIGN KEY (`ClassRoomId`) REFERENCES `Classroom`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exam` ADD CONSTRAINT `Exam_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Subject`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exam` ADD CONSTRAINT `Exam_levelId_fkey` FOREIGN KEY (`levelId`) REFERENCES `Level`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExamDepartment` ADD CONSTRAINT `ExamDepartment_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExamDepartment` ADD CONSTRAINT `ExamDepartment_examId_fkey` FOREIGN KEY (`examId`) REFERENCES `Exam`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Fee` ADD CONSTRAINT `Fee_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `Admin`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `Teacher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Result` ADD CONSTRAINT `Result_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Subject`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Result` ADD CONSTRAINT `Result_examId_fkey` FOREIGN KEY (`examId`) REFERENCES `Exam`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Result` ADD CONSTRAINT `Result_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_levelId_fkey` FOREIGN KEY (`levelId`) REFERENCES `Level`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `Parent`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subject` ADD CONSTRAINT `Subject_gradeId_fkey` FOREIGN KEY (`gradeId`) REFERENCES `Grade`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Timetable` ADD CONSTRAINT `Timetable_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Subject`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ClassroomToSubject` ADD CONSTRAINT `_ClassroomToSubject_A_fkey` FOREIGN KEY (`A`) REFERENCES `Classroom`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ClassroomToSubject` ADD CONSTRAINT `_ClassroomToSubject_B_fkey` FOREIGN KEY (`B`) REFERENCES `Subject`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DepartmentToSubject` ADD CONSTRAINT `_DepartmentToSubject_A_fkey` FOREIGN KEY (`A`) REFERENCES `Department`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DepartmentToSubject` ADD CONSTRAINT `_DepartmentToSubject_B_fkey` FOREIGN KEY (`B`) REFERENCES `Subject`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_StudentToSubject` ADD CONSTRAINT `_StudentToSubject_A_fkey` FOREIGN KEY (`A`) REFERENCES `Student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_StudentToSubject` ADD CONSTRAINT `_StudentToSubject_B_fkey` FOREIGN KEY (`B`) REFERENCES `Subject`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SubjectToTeacher` ADD CONSTRAINT `_SubjectToTeacher_A_fkey` FOREIGN KEY (`A`) REFERENCES `Subject`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SubjectToTeacher` ADD CONSTRAINT `_SubjectToTeacher_B_fkey` FOREIGN KEY (`B`) REFERENCES `Teacher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notificationRead` ADD CONSTRAINT `notificationRead_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notificationRead` ADD CONSTRAINT `notificationRead_announcementId_fkey` FOREIGN KEY (`announcementId`) REFERENCES `Announcement`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notificationRead` ADD CONSTRAINT `notificationRead_notificationId_fkey` FOREIGN KEY (`notificationId`) REFERENCES `Notification`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notificationRead` ADD CONSTRAINT `notificationRead_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notificationRead` ADD CONSTRAINT `notificationRead_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `Teacher`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

