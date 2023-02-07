/*
  Warnings:

  - You are about to drop the column `userId` on the `Availability` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Availability" DROP CONSTRAINT "Availability_userId_fkey";

-- AlterTable
ALTER TABLE "Availability" DROP COLUMN "userId",
ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'none';

-- DropTable
DROP TABLE "User";
