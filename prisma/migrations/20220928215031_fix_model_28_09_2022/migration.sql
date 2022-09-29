/*
  Warnings:

  - You are about to drop the column `daterevision` on the `Occupation` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "UnitAddress_cep_key";

-- AlterTable
ALTER TABLE "Occupation" DROP COLUMN "daterevision",
ADD COLUMN     "revisionAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
