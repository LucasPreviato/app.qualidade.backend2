/*
  Warnings:

  - You are about to drop the `Office` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Office";

-- CreateTable
CREATE TABLE "Occupation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 0,
    "daterevision" DATE NOT NULL,
    "alterations" TEXT NOT NULL,

    CONSTRAINT "Occupation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Occupation_name_key" ON "Occupation"("name");
