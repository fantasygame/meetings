/*
  Warnings:

  - You are about to drop the column `authorId` on the `Availability` table. All the data in the column will be lost.
  - You are about to drop the column `from` on the `Availability` table. All the data in the column will be lost.
  - You are about to drop the column `to` on the `Availability` table. All the data in the column will be lost.
  - Added the required column `index` to the `Availability` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Availability` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Availability" DROP CONSTRAINT "Availability_authorId_fkey";

-- AlterTable
ALTER TABLE "Availability" DROP COLUMN "authorId",
DROP COLUMN "from",
DROP COLUMN "to",
ADD COLUMN     "index" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Availability" ADD CONSTRAINT "Availability_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
