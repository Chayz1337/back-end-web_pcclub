-- CreateTable
CREATE TABLE `admins` (
    `id_admins` INTEGER NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(255) NOT NULL,
    `telephone` CHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `visitid` INTEGER NOT NULL,

    PRIMARY KEY (`id_admins`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `computers` (
    `id_computers` INTEGER NOT NULL AUTO_INCREMENT,
    `specifications` VARCHAR(255) NOT NULL,
    `date_of_last_service` DATE NULL,
    `halls_id_halls` INTEGER NOT NULL,

    INDEX `fk_computers_halls1_idx`(`halls_id_halls`),
    PRIMARY KEY (`id_computers`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `halls` (
    `id_halls` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `id_halls_UNIQUE`(`id_halls`),
    PRIMARY KEY (`id_halls`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `services` (
    `id_service` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `price_on_hour` DECIMAL(19, 2) NOT NULL,

    UNIQUE INDEX `id_service_UNIQUE`(`id_service`),
    PRIMARY KEY (`id_service`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `visitors` (
    `id_visitors` INTEGER NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(255) NOT NULL,
    `birthday` DATE NULL,
    `constancy` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `id_visitors_UNIQUE`(`id_visitors`),
    PRIMARY KEY (`id_visitors`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `visits` (
    `id_visits` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATE NOT NULL,
    `time` TIME(0) NOT NULL,
    `computer` INTEGER NOT NULL,
    `adminsid` INTEGER NOT NULL,
    `computersid` INTEGER NOT NULL,
    `visitors_id_visitors` INTEGER NOT NULL,
    `admins_id_admins` INTEGER NOT NULL,
    `computers_id_computers` INTEGER NOT NULL,
    `services_id_service` INTEGER NOT NULL,

    INDEX `fk_visits_admins1_idx`(`admins_id_admins`),
    INDEX `fk_visits_computers1_idx`(`computers_id_computers`),
    INDEX `fk_visits_services1_idx`(`services_id_service`),
    INDEX `fk_visits_visitors1_idx`(`visitors_id_visitors`),
    PRIMARY KEY (`id_visits`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `computers` ADD CONSTRAINT `fk_computers_halls1` FOREIGN KEY (`halls_id_halls`) REFERENCES `halls`(`id_halls`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `visits` ADD CONSTRAINT `fk_visits_admins1` FOREIGN KEY (`admins_id_admins`) REFERENCES `admins`(`id_admins`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `visits` ADD CONSTRAINT `fk_visits_computers1` FOREIGN KEY (`computers_id_computers`) REFERENCES `computers`(`id_computers`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `visits` ADD CONSTRAINT `fk_visits_services1` FOREIGN KEY (`services_id_service`) REFERENCES `services`(`id_service`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `visits` ADD CONSTRAINT `fk_visits_visitors1` FOREIGN KEY (`visitors_id_visitors`) REFERENCES `visitors`(`id_visitors`) ON DELETE RESTRICT ON UPDATE CASCADE;
