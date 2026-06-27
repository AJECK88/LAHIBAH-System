-- RenameIndex
ALTER TABLE `notificationRead` RENAME INDEX `notificationRead_adminId_fkey` TO `notificationRead_adminId_idx`;

-- RenameIndex
ALTER TABLE `notificationRead` RENAME INDEX `notificationRead_announcementId_fkey` TO `notificationRead_announcementId_idx`;

-- RenameIndex
ALTER TABLE `notificationRead` RENAME INDEX `notificationRead_notificationId_fkey` TO `notificationRead_notificationId_idx`;

-- RenameIndex
ALTER TABLE `notificationRead` RENAME INDEX `notificationRead_studentId_fkey` TO `notificationRead_studentId_idx`;

-- RenameIndex
ALTER TABLE `notificationRead` RENAME INDEX `notificationRead_teacherId_fkey` TO `notificationRead_teacherId_idx`;
