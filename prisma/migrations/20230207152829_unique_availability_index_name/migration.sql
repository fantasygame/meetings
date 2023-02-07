/*
  Warnings:

  - A unique constraint covering the columns `[index,name]` on the table `Availability` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Availability_index_name_key" ON "Availability"("index", "name");
